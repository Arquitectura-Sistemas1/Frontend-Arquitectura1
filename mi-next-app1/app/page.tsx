"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Image from "next/image";

export interface Tarifa {
  ID: number;
  PrecioVenta: number;
  PrecioRenta: number;
  DuracionRentaHoras: number;
}

export interface Producto {
  id: number;
  nombre: string;
  titulo: string;
  descripcion: string;
  precioVenta: number;
  precioRenta: number;
  duracionRentaHoras: number;
  descuento: number;
  tipoDescuento?: "porcentaje" | "monto";
  imagen: string;
  portada_url: string;
  genero_nombre: string;
  desarrolladora_nombre: string;
  edicion: string;
  clasificacion_nombre: string;
  numero_jugadores: number;
  fecha_lanzamiento: string;
  plataforma_nombre: string;
  idioma?: string;
}

interface ItemCarrito {
  id: number;
  titulo: string;
  precio: number;
  tipoTransaccion: "venta" | "renta";
  duracionRentaHoras?: number;
  portada_url?: string;
}

const NGROK_BASE_URL = "https://sedation-scribe-state.ngrok-free.dev";

// Función auxiliar para calcular el precio final aplicando el descuento de manera segura
export function calcularPrecioConDescuento(precioOriginal: number, descuento: number, tipoDescuento?: "porcentaje" | "monto") {
  if (!descuento || descuento <= 0) return precioOriginal;

  if (tipoDescuento === "monto") {
    return Math.max(0, precioOriginal - descuento);
  } else {
    // Porcentaje por defecto
    const rebaja = precioOriginal * (descuento / 100);
    return Math.max(0, precioOriginal - rebaja);
  }
}

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [juegoDetalle, setJuegoDetalle] = useState<Producto | null>(null);
  const [tipoTransaccionSeleccionada, setTipoTransaccionSeleccionada] = useState<"venta" | "renta">("venta");
  
  const [busqueda, setBusqueda] = useState("");
  const [procesandoCompra, setProcesandoCompra] = useState(false);
  const [usuarioActual, setUsuarioActual] = useState<any>(null);

  // 1. Cargar juegos y tarifas desde la API con filtro estricto anti-duplicados por ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [resJuegos, resTarifas] = await Promise.all([
          fetch(`${NGROK_BASE_URL}/inv/videojuegos`, {
            method: "GET",
            headers: { "Accept": "application/json", "ngrok-skip-browser-warning": "69420" },
          }),
          fetch(`${NGROK_BASE_URL}/info/tarifas`, {
            method: "GET",
            headers: { "Accept": "application/json", "ngrok-skip-browser-warning": "69420" },
          }),
        ]);

        if (!resJuegos.ok) throw new Error("No se pudo cargar el catálogo de videojuegos.");

        const textJuegos = await resJuegos.text();
        const dataJuegos = textJuegos ? JSON.parse(textJuegos) : [];
        const itemsJuegos = Array.isArray(dataJuegos) ? dataJuegos : dataJuegos.data || [];

        let tarifasMap = new Map<number, Tarifa>();
        if (resTarifas.ok) {
          const textTarifas = await resTarifas.text();
          const dataTarifas = textTarifas ? JSON.parse(textTarifas) : [];
          if (Array.isArray(dataTarifas)) {
            dataTarifas.forEach((t: Tarifa) => tarifasMap.set(t.ID, t));
          }
        }

        const idsVistos = new Set<number>();
        const productosUnicos: Producto[] = [];

        itemsJuegos.forEach((item: any, idx: number) => {
          const idJuego = Number(item.id ?? idx + 1);

          if (idsVistos.has(idJuego)) return;
          idsVistos.add(idJuego);

          const tituloVal = String(item.titulo || item.nombre || "Sin título").trim();
          
          const imagenRaw = item.portada_url || item.imagen || "";
          const imagenVal =
            imagenRaw && !imagenRaw.includes("cdn.ejemplo.com") && imagenRaw !== "string"
              ? imagenRaw
              : "https://placehold.co/400x300?text=Sin+Portada";

          const tarifaAsociada = tarifasMap.get(idJuego) || tarifasMap.get(1) || {
            PrecioVenta: parseFloat(item.precio_venta ?? item.precio ?? 299),
            PrecioRenta: 59,
            DuracionRentaHoras: 72,
          };

          const descuentoValor = parseFloat(item.descuento_valor ?? item.descuento ?? 0);
          const tipoDesc: "porcentaje" | "monto" = item.tipo_descuento === "monto" || item.es_monto_fijo ? "monto" : "porcentaje";

          productosUnicos.push({
            id: idJuego,
            nombre: tituloVal,
            titulo: tituloVal,
            descripcion: String(item.descripcion || ""),
            precioVenta: tarifaAsociada.PrecioVenta,
            precioRenta: tarifaAsociada.PrecioRenta,
            duracionRentaHoras: tarifaAsociada.DuracionRentaHoras,
            descuento: !isNaN(descuentoValor) ? descuentoValor : 0,
            tipoDescuento: tipoDesc,
            imagen: imagenVal,
            portada_url: imagenVal,
            genero_nombre: String(item.genero_nombre || "General"),
            desarrolladora_nombre: String(item.desarrolladora_nombre || "Independiente"),
            edicion: String(item.edicion || "Estándar"),
            clasificacion_nombre: String(item.clasificacion_nombre || "General"),
            numero_jugadores: Number(item.num_jugadores ?? item.numero_jugadores ?? 1),
            fecha_lanzamiento: String(item.fecha_lanzamiento || "N/A"),
            plataforma_nombre: String(item.plataforma_nombre || "PC"),
            idioma: String(item.idioma || "N/A"),
          });
        });

        setProductos(productosUnicos);
      } catch (err: any) {
        console.error("Error al conectar con la API:", err);
        setError("Error de conexión con la API. Verifica que la URL de ngrok esté activa.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setMounted(true);
    const dataGuardada = localStorage.getItem("carrito_nexus");
    if (dataGuardada) {
      try { setCarrito(JSON.parse(dataGuardada)); } catch (e) { console.error(e); }
    }
    const usuarioGuardado = localStorage.getItem("usuario_nexus");
    if (usuarioGuardado) {
      try { setUsuarioActual(JSON.parse(usuarioGuardado)); } catch (e) { console.error(e); }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("carrito_nexus", JSON.stringify(carrito));
    }
  }, [carrito, mounted]);

  const cerrarSesion = async () => {
    try {
      const token = localStorage.getItem("token_nexus");
      await fetch(`${NGROK_BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Accept": "application/json",
          "ngrok-skip-browser-warning": "69420",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("usuario_nexus");
      localStorage.removeItem("token_nexus");
      setUsuarioActual(null);
      router.push("/login");
    }
  };

  function agregarAlCarrito(producto: Producto, tipo: "venta" | "renta") {
    const precioBase = tipo === "venta" ? producto.precioVenta : producto.precioRenta;
    const precioFinal = tipo === "venta" 
      ? calcularPrecioConDescuento(producto.precioVenta, producto.descuento, producto.tipoDescuento)
      : precioBase;

    setCarrito((prev) => [
      ...prev,
      {
        id: producto.id,
        titulo: producto.titulo,
        precio: precioFinal,
        tipoTransaccion: tipo,
        duracionRentaHoras: tipo === "renta" ? producto.duracionRentaHoras : undefined,
        portada_url: producto.portada_url,
      },
    ]);
  }

  function eliminarDelCarrito(index: number) {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  }

  const total = carrito.reduce((suma, item) => suma + item.precio, 0);

  const productosFiltrados = productos.filter((producto) => {
    const query = busqueda.toLowerCase().trim();
    if (!query) return true;
    return (
      (producto.titulo || "").toLowerCase().includes(query) ||
      (producto.descripcion || "").toLowerCase().includes(query) ||
      (producto.genero_nombre || "").toLowerCase().includes(query) ||
      (producto.plataforma_nombre || "").toLowerCase().includes(query) ||
      (producto.desarrolladora_nombre || "").toLowerCase().includes(query)
    );
  });

  const manejarContinuarCompra = async () => {
    if (carrito.length === 0) return;

    setProcesandoCompra(true);
    try {
      const token = localStorage.getItem("token_nexus");
      const headersComunes = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "ngrok-skip-browser-warning": "69420",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      // 1. Guardar el resumen de la orden con sus precios con descuento en localStorage
      // Esto asegura que la página de checkout lea exactamente lo que el usuario vio y aceptó pagar.
      const ordenResumen = {
        items: carrito,
        total: total,
        fecha: new Date().toISOString()
      };
      localStorage.setItem("orden_checkout_nexus", JSON.stringify(ordenResumen));

      // 2. Intentar registrar el pedido principal en el backend
      const resPedido = await fetch(`${NGROK_BASE_URL}/comercial/crear-pedido`, {
        method: "POST",
        credentials: "include",
        headers: headersComunes,
        body: JSON.stringify({}),
      });

      if (!resPedido.ok) {
        console.warn("Aviso: El backend no inicializó el pedido de forma remota, pero continuaremos con el checkout local.");
      } else {
        // 3. Enviar los ítems al servidor mandando también el precio con descuento explícito
        for (const item of carrito) {
          try {
            await fetch(`${NGROK_BASE_URL}/comercial/agregar-item-pedido`, {
              method: "POST",
              credentials: "include",
              headers: headersComunes,
              body: JSON.stringify({
                VideojuegoID: Number(item.id),
                TipoItem: item.tipoTransaccion,
                PrecioUnitario: item.precio, // Precio con descuento aplicado
                DuracionRentaHoras: item.duracionRentaHoras || 0
              }),
            });
          } catch (itemErr) {
            console.error("Error al registrar item individual en backend:", itemErr);
          }
        }
      }

      setMostrarCarrito(false);
      router.push("/checkout");

    } catch (err: any) {
      console.error("Error al procesar la orden:", err);
      // Aun si falla la red, permitimos transicionar al checkout local para no bloquear al usuario
      router.push("/checkout");
    } finally {
      setProcesandoCompra(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#100C18] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-40 border-b border-purple-900/30 bg-[#100C18]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl">
              <Image src="/logo.png" alt="Logo" width={100} height={100} className="object-contain p-1" />
            </div>
            <span className="text-2xl font-bold tracking-tight">NEXUS<span className="text-green-500">GAMES</span></span>
          </div>

          <div className="hidden w-[400px] md:block">
            <div className="flex items-center rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-3">
              <span className="mr-3">🔎</span>
              <input
                type="text"
                placeholder="Buscar juegos, plataforma, género..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <a href="#productos" className="hidden text-sm text-gray-300 hover:text-white md:block">Ofertas</a>
            <a href="#categorias" className="hidden text-sm text-gray-300 hover:text-white md:block">Categorías</a>
            <button
              type="button"
              onClick={() => router.push("/biblioteca")}
              className="hidden text-sm text-gray-300 hover:text-white md:block"
            >
              Mi Biblioteca
            </button>
            <button onClick={() => setMostrarCarrito(!mostrarCarrito)} className="relative text-2xl" type="button">
              🛒
              {mounted && carrito.length > 0 && (
                <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold">
                  {carrito.length}
                </span>
              )}
            </button>
            {mounted && usuarioActual ? (
              <button type="button" onClick={cerrarSesion} className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-400">
                Salir
              </button>
            ) : (
              <button type="button" onClick={() => router.push("/login")} className="rounded-lg border border-purple-700 px-4 py-2 text-sm font-semibold">
                Iniciar sesión
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-[#100C18] to-green-950 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
              🔥 OFERTAS ESPECIALES Y RENTAS
            </div>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Los mejores juegos.
              <br />
              <span className="text-purple-500">Compra o renta al instante.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Disfruta de tus títulos favoritos con tarifas flexibles de compra y renta digital.
            </p>
            <a
              href="#productos"
              className="mt-8 inline-block rounded-xl bg-green-600 px-7 py-4 font-bold transition hover:bg-green-500"
            >
              Ver catálogo
            </a>
          </div>

          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative h-[300px] w-full max-w-[400px] sm:h-[400px]">
              <img
                src="/chispudo.png"
                alt="Mascota Nexus Games"
                className="h-full w-full object-contain drop-shadow-[0_10px_25px_rgba(168,85,247,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORÍAS ================= */}
      <section id="categorias" className="mx-auto max-w-7xl px-6 pt-12">
        <p className="text-sm font-bold uppercase tracking-widest text-green-500">Explora</p>
        <h2 className="mt-1 text-3xl font-bold">Categorías</h2>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="cursor-pointer rounded-xl border border-purple-900/40 bg-[#181323] p-6 transition hover:border-purple-600 hover:bg-[#211A2D]">
            <div className="mb-3 text-3xl">🎮</div>
            <h3 className="font-bold">Videojuegos</h3>
            <p className="text-sm text-gray-500">PC y Consolas</p>
          </div>
          <div className="cursor-pointer rounded-xl border border-purple-900/40 bg-[#181323] p-6 transition hover:border-purple-600 hover:bg-[#211A2D]">
            <div className="mb-3 text-3xl">💳</div>
            <h3 className="font-bold">Gift Cards</h3>
            <p className="text-sm text-gray-500">Xbox, PSN y más</p>
          </div>
          <div className="cursor-pointer rounded-xl border border-purple-900/40 bg-[#181323] p-6 transition hover:border-purple-600 hover:bg-[#211A2D]">
            <div className="mb-3 text-3xl">💻</div>
            <h3 className="font-bold">Software</h3>
            <p className="text-sm text-gray-500">Licencias digitales</p>
          </div>
          <div className="cursor-pointer rounded-xl border border-purple-900/40 bg-[#181323] p-6 transition hover:border-purple-600 hover:bg-[#211A2D]">
            <div className="mb-3 text-3xl">🔥</div>
            <h3 className="font-bold">Ofertas</h3>
            <p className="text-sm text-gray-500">Grandes descuentos</p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTOS ================= */}
      <section id="productos" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-purple-500">Selección</p>
          <h2 className="mt-1 text-3xl font-bold">
            {busqueda ? `Resultados para "${busqueda}"` : "Catálogo y Tarifas"}
          </h2>
        </div>

        {loading && <div className="py-20 text-center"><p className="text-gray-400">Cargando catálogo y precios...</p></div>}
        {error && <div className="rounded-xl bg-red-500/10 p-6 text-center text-red-400">{error}</div>}

        {!loading && !error && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productosFiltrados.map((producto) => {
              const precioVentaFinal = calcularPrecioConDescuento(producto.precioVenta, producto.descuento, producto.tipoDescuento);
              const tieneDescuento = producto.descuento > 0;

              return (
                <article key={producto.id} className="group overflow-hidden rounded-xl border border-purple-900/30 bg-[#181323] flex flex-col justify-between relative">
                  {/* Badge de Descuento si aplica */}
                  {tieneDescuento && (
                    <span className="absolute right-3 top-3 z-10 rounded-md bg-red-600 px-2.5 py-1 text-xs font-black text-white shadow-md">
                      {producto.tipoDescuento === "monto" ? `-Q${producto.descuento.toFixed(2)}` : `-${producto.descuento}%`}
                    </span>
                  )}

                  <div>
                    <div className="relative h-52 overflow-hidden bg-[#211A2D]">
                      <img src={producto.portada_url} alt={producto.titulo} className="h-full w-full object-cover" />
                      <span className="absolute left-3 top-3 rounded-md bg-green-900/80 px-2.5 py-1 text-xs font-bold text-green-200">
                        {producto.plataforma_nombre}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold">{producto.titulo}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-gray-400">{producto.descripcion}</p>
                      
                      <div className="mt-4 flex flex-col gap-1 text-xs font-semibold">
                        <div className="flex items-center gap-2">
                          <span className="text-purple-400">Venta:</span>
                          {tieneDescuento ? (
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500 line-through">Q{producto.precioVenta.toFixed(2)}</span>
                              <span className="text-green-400 font-bold text-sm">Q{precioVentaFinal.toFixed(2)}</span>
                            </div>
                          ) : (
                            <span className="text-green-400 font-bold">Q{producto.precioVenta.toFixed(2)}</span>
                          )}
                        </div>
                        <span className="text-gray-400">Renta: Q{producto.precioRenta.toFixed(2)} ({producto.duracionRentaHoras}h)</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <button type="button" onClick={() => setJuegoDetalle(producto)} className="w-full rounded-lg bg-green-600 py-2.5 text-sm font-bold hover:bg-green-500 transition">
                      Ver Opciones / Comprar
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* ================= MODAL DETALLES Y SELECCIÓN ================= */}
      {mounted && juegoDetalle && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setJuegoDetalle(null)}>
          <div className="relative w-full max-w-lg rounded-2xl border border-purple-700 bg-[#181323] p-6 text-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold">{juegoDetalle.titulo}</h2>
            <p className="mt-2 text-sm text-gray-300">{juegoDetalle.descripcion}</p>

            <div className="mt-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
                Selecciona Tipo de Adquisición
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(() => {
                  const precioVentaFinal = calcularPrecioConDescuento(juegoDetalle.precioVenta, juegoDetalle.descuento, juegoDetalle.tipoDescuento);
                  const tieneDescuento = juegoDetalle.descuento > 0;

                  return (
                    <>
                      <button
                        type="button"
                        onClick={() => setTipoTransaccionSeleccionada("venta")}
                        className={`p-3 rounded-xl text-left border transition ${
                          tipoTransaccionSeleccionada === "venta"
                            ? "bg-purple-600/30 border-purple-500 text-white"
                            : "bg-[#211A2D] border-purple-900/50 text-gray-400 hover:text-white"
                        }`}
                      >
                        <p className="font-bold text-sm">🛒 Comprar (Venta)</p>
                        {tieneDescuento ? (
                          <div className="mt-1">
                            <span className="text-xs text-gray-500 line-through block">Q{juegoDetalle.precioVenta.toFixed(2)}</span>
                            <span className="text-green-400 font-black text-lg">Q{precioVentaFinal.toFixed(2)}</span>
                          </div>
                        ) : (
                          <p className="text-green-400 font-black text-lg mt-1">Q{juegoDetalle.precioVenta.toFixed(2)}</p>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setTipoTransaccionSeleccionada("renta")}
                        className={`p-3 rounded-xl text-left border transition ${
                          tipoTransaccionSeleccionada === "renta"
                            ? "bg-green-600/30 border-green-500 text-white"
                            : "bg-[#211A2D] border-purple-900/50 text-gray-400 hover:text-white"
                        }`}
                      >
                        <p className="font-bold text-sm">⏱️ Rentar ({juegoDetalle.duracionRentaHoras}h)</p>
                        <p className="text-green-400 font-black text-lg mt-1">Q{juegoDetalle.precioRenta.toFixed(2)}</p>
                      </button>
                    </>
                  );
                })()}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                agregarAlCarrito(juegoDetalle, tipoTransaccionSeleccionada);
                setJuegoDetalle(null);
              }}
              className="mt-6 w-full rounded-xl bg-purple-600 py-3 font-bold transition hover:bg-purple-500"
            >
              Añadir al carrito ({tipoTransaccionSeleccionada.toUpperCase()}) 🚀
            </button>
          </div>
        </div>,
        document.body
      )}

      {/* ================= CARRITO ================= */}
      {mostrarCarrito && (
        <div className="fixed right-6 top-24 z-50 w-[calc(100%-3rem)] max-w-96 rounded-2xl border border-purple-700/50 bg-[#181323] p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">🛒 Tu carrito</h2>
            <button onClick={() => setMostrarCarrito(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>

          {carrito.length === 0 ? (
            <p className="text-gray-500 py-6 text-center">Tu carrito está vacío.</p>
          ) : (
            <div>
              <div className="max-h-72 space-y-2 overflow-y-auto mb-4">
                {carrito.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-[#211A2D] p-3 rounded-lg text-sm">
                    <div>
                      <p className="font-semibold">{item.titulo}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${item.tipoTransaccion === "renta" ? "bg-green-900/80 text-green-300" : "bg-purple-900/80 text-purple-300"}`}>
                          {item.tipoTransaccion}
                        </span>
                        <span className="text-green-400 font-bold">Q{item.precio.toFixed(2)}</span>
                      </div>
                    </div>
                    <button type="button" onClick={() => eliminarDelCarrito(idx)} className="text-red-400">🗑️</button>
                  </div>
                ))}
              </div>

              <div className="border-t border-purple-900/50 pt-4">
                <div className="flex justify-between text-lg font-bold mb-4">
                  <span>Total:</span>
                  <span className="text-green-400">Q{total.toFixed(2)}</span>
                </div>
                <button
                  type="button"
                  disabled={procesandoCompra}
                  onClick={manejarContinuarCompra}
                  className="w-full rounded-lg bg-green-600 py-3 font-bold transition hover:bg-green-500 disabled:opacity-50"
                >
                  {procesandoCompra ? "Preparando pago..." : "Continuar compra"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-purple-900/30 bg-[#0B0810]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="text-xl font-bold">NEXUS<span className="text-green-500">GAMING</span></h2>
          <p className="mt-2 text-sm text-gray-500">Tu marketplace de videojuegos digitales.</p>
          <p className="mt-6 text-sm text-gray-600">© 2026 NEXUSGAMING</p>
        </div>
      </footer>
    </main>
  );
}