"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

// Definición de la interfaz basada en tu Modelo Entidad-Relación y API
export interface Producto {
  id: number;
  nombre: string;
  descripcion: string; // Plataforma / Formato
  precio: number;      // Obtenido de tbl_Tarifas (Precio_Venta)
  descuento: number;   // Calculado o extraído de la tabla Descuentos
  imagen: string;     // Obtenido de ImagenesVideojuego
}

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [juegoDetalle, setJuegoDetalle] = useState<Producto | null>(null);
  const [busqueda, setBusqueda] = useState("");

  // 1. Cargar productos desde la API REST al montar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        // Reemplaza esta URL con el endpoint real de tu backend/API
        const response = await fetch("/api/productos");
        
        if (!response.ok) {
          throw new Error("Error al obtener el catálogo de productos");
        }
        
        const data = await response.json();

        // Mapeo opcional si los nombres de la base de datos difieren de los de la UI:
        const productosFormateados: Producto[] = data.map((item: any) => ({
          id: item.ProductoID || item.id,
          nombre: item.Titulo || item.nombre,
          descripcion: item.Plataforma || item.descripcion || "Digital",
          precio: Number(item.Precio_Venta || item.precio || 0),
          descuento: Number(item.porcentaje_descuento || item.descuento || 0),
          imagen: item.url_imagen || item.imagen || "https://via.placeholder.com/600",
        }));

        setProductos(productosFormateados);
      } catch (err: any) {
        console.error("Error cargando productos:", err);
        setError(err.message || "Ocurrió un error inesperado");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  // 2. Cargar datos iniciales del carrito desde localStorage
  useEffect(() => {
    setMounted(true);
    const dataGuardada = localStorage.getItem("carrito_nexus");
    if (dataGuardada) {
      try {
        setCarrito(JSON.parse(dataGuardada));
      } catch (e) {
        console.error("Error al parsear el carrito guardado", e);
      }
    }
  }, []);

  // 3. Sincronizar el carrito con localStorage al modificarse
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("carrito_nexus", JSON.stringify(carrito));
    }
  }, [carrito, mounted]);

  function agregarAlCarrito(producto: Producto) {
    setCarrito((prev) => [...prev, producto]);
  }

  function eliminarDelCarrito(index: number) {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  }

  function calcularPrecioFinal(producto: Producto) {
    return producto.precio * (1 - producto.descuento / 100);
  }

  const total = carrito.reduce(
    (suma, producto) => suma + calcularPrecioFinal(producto),
    0
  );

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#100C18] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-40 border-b border-purple-900/30 bg-[#100C18]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-700">
              🎮
            </div>
            <span className="text-2xl font-bold">
              NEXUS<span className="text-green-500">GAMING</span>
            </span>
          </div>

          <div className="hidden w-[400px] md:block">
            <div className="flex items-center rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-3 focus-within:border-purple-500">
              <span className="mr-3">🔎</span>
              <input
                type="text"
                placeholder="Buscar juegos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
              {busqueda && (
                <button
                  type="button"
                  onClick={() => setBusqueda("")}
                  className="text-xs text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <nav className="flex items-center gap-5">
            <a href="#productos" className="hidden text-sm text-gray-300 hover:text-white md:block">
              Ofertas
            </a>
            <a href="#categorias" className="hidden text-sm text-gray-300 hover:text-white md:block">
              Categorías
            </a>
            <button
              type="button"
              onClick={() => router.push("/biblioteca")}
              className="hidden text-sm text-gray-300 hover:text-white md:block"
            >
              Mi Biblioteca
            </button>

            <button
              onClick={() => setMostrarCarrito(!mostrarCarrito)}
              className="relative text-2xl"
              type="button"
            >
              🛒
              {carrito.length > 0 && (
                <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold">
                  {carrito.length}
                </span>
              )}
            </button>

            <button 
              type="button" 
              onClick={() => router.push("/login")}
              className="rounded-lg border border-purple-700 px-4 py-2 text-sm font-semibold hover:bg-purple-700 transition"
            >
              Iniciar sesión
            </button>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-[#100C18] to-green-950 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
              🔥 OFERTAS ESPECIALES
            </div>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Los mejores juegos.
              <br />
              <span className="text-purple-500">Mejores precios.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Encuentra juegos, tarjetas de regalo y contenido digital al mejor precio.
            </p>
            <a
              href="#productos"
              className="mt-8 inline-block rounded-xl bg-green-600 px-7 py-4 font-bold transition hover:bg-green-500"
            >
              Ver ofertas
            </a>
          </div>
        </div>
      </section>

      {/* ================= CATEGORÍAS ================= */}
      <section id="categorias" className="mx-auto max-w-7xl px-6 pt-12">
        <p className="text-sm font-bold uppercase tracking-widest text-green-500">
          Explora
        </p>
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
          <p className="text-sm font-bold uppercase tracking-widest text-purple-500">
            Selección
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            {busqueda ? `Resultados para "${busqueda}"` : "Ofertas destacadas"}
          </h2>
        </div>

        {/* Muestra estado de carga */}
        {loading && (
          <div className="py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent align-[-0.125em]" />
            <p className="mt-4 text-gray-400">Cargando catálogo...</p>
          </div>
        )}

        {/* Muestra mensaje si hubo error */}
        {error && !loading && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center text-red-400">
            <p> Error: {error}</p>
          </div>
        )}

        {/* Lista de productos */}
        {!loading && !error && productosFiltrados.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-400">
              No se encontraron juegos que coincidan con tu búsqueda.
            </p>
          </div>
        ) : (
          !loading && !error && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productosFiltrados.map((producto) => (
                <article
                  key={producto.id}
                  className="group overflow-hidden rounded-xl border border-purple-900/30 bg-[#181323] transition duration-300 hover:-translate-y-1 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-950"
                >
                  <div className="relative h-52 overflow-hidden bg-[#211A2D]">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {producto.descuento > 0 && (
                      <div className="absolute left-3 top-3 rounded-md bg-green-600 px-2 py-1 text-xs font-black">
                        -{producto.descuento}%
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold group-hover:text-purple-400">
                      {producto.nombre}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {producto.descripcion}
                    </p>

                    <div className="mt-5 flex items-end justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Desde</p>
                        <span className="text-2xl font-black">
                          Q{producto.precio.toFixed(2)}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setJuegoDetalle(producto)}
                        className="rounded-lg bg-green-600 px-4 py-2 text-sm font-bold transition hover:bg-green-500 active:scale-95"
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )
        )}
      </section>

      {/* ================= MODAL MEDIANTE PORTAL ================= */}
      {mounted &&
        juegoDetalle &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setJuegoDetalle(null)}
          >
            <div
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-purple-700 bg-[#181323] p-6 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setJuegoDetalle(null)}
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-gray-400 hover:bg-black hover:text-white"
              >
                ✕
              </button>

              <div className="relative h-56 w-full overflow-hidden rounded-xl bg-[#211A2D]">
                <img
                  src={juegoDetalle.imagen}
                  alt={juegoDetalle.nombre}
                  className="h-full w-full object-cover"
                />
                {juegoDetalle.descuento > 0 && (
                  <span className="absolute left-3 top-3 rounded-md bg-green-600 px-2 py-1 text-xs font-black">
                    -{juegoDetalle.descuento}% OFF
                  </span>
                )}
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-bold">{juegoDetalle.nombre}</h2>
                <p className="mt-1 text-sm font-medium text-purple-400">
                  Plataforma: {juegoDetalle.descripcion}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  Licencia digital original. Entrega inmediata tras confirmar la compra. Incluye garantía de activación global y soporte técnico 24/7.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-purple-900/40 pt-4">
                <div>
                  <span className="text-xs text-gray-400">Precio final con descuento:</span>
                  <p className="text-2xl font-black text-green-400">
                    Q{calcularPrecioFinal(juegoDetalle).toFixed(2)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    agregarAlCarrito(juegoDetalle);
                    setJuegoDetalle(null);
                  }}
                  className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold transition hover:bg-purple-500 active:scale-95"
                >
                  Añadir al carrito 🛒
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* ================= CARRITO ================= */}
      {mostrarCarrito && (
        <div className="fixed right-6 top-24 z-50 w-[calc(100%-3rem)] max-w-96 rounded-2xl border border-purple-700/50 bg-[#181323] p-6 shadow-2xl">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold">🛒 Tu carrito</h2>
            <button
              type="button"
              onClick={() => setMostrarCarrito(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {carrito.length === 0 ? (
            <div className="py-8 text-center">
              <div className="mb-3 text-4xl">🛒</div>
              <p className="text-gray-500">Tu carrito está vacío.</p>
            </div>
          ) : (
            <div>
              <div className="max-h-80 space-y-3 overflow-y-auto">
                {carrito.map((producto, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-[#211A2D] p-3"
                  >
                    <div>
                      <p className="font-semibold">{producto.nombre}</p>
                      <p className="text-sm text-green-400">
                        Q{calcularPrecioFinal(producto).toFixed(2)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => eliminarDelCarrito(index)}
                      className="rounded-lg px-2 py-1 text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-purple-900/50 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total</span>
                  <span className="text-2xl font-black text-green-400">
                    Q{total.toFixed(2)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => router.push("/checkout")}
                  className="mt-5 w-full rounded-lg bg-green-600 py-3 font-bold transition hover:bg-green-500 active:scale-95"
                >
                  Continuar compra
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-purple-900/30 bg-[#0B0810]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="text-xl font-bold">
            NEXUS<span className="text-green-500">GAMING</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Tu marketplace de productos digitales.
          </p>
          <p className="mt-6 text-sm text-gray-600">© 2026 NEXUSGAMING</p>
        </div>
      </footer>
    </main>
  );
}