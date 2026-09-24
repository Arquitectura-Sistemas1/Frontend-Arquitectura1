"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export interface ItemBiblioteca {
  id: number;
  pedidoId?: number;
  titulo: string;
  precio: number;
  tipoTransaccion: "venta" | "renta";
  duracionRentaHoras?: number;
  portada_url?: string;
  licenciaKey?: string;
  plataforma?: string;
}

export interface PedidoFactura {
  PedidoID: number;
  Estado: string;
  Subtotal: number;
  DescuentoTotal: number;
  Impuestos: number;
  Total: number;
  FechaCreacion: string;
  NumeroFactura?: string;
  FacturaURL?: string;
}

const NGROK_BASE_URL = "https://sedation-scribe-state.ngrok-free.dev";

const JUEGOS_DEMO_INICIALES: ItemBiblioteca[] = [
  {
    id: 1,
    titulo: "Cyberpunk 2077: Phantom Liberty",
    precio: 299,
    tipoTransaccion: "venta",
    portada_url: "https://placehold.co/400x300/181323/34d399?text=Cyberpunk+2077",
    licenciaKey: "NEXUS-CP77-8892-X901",
    plataforma: "PC Digital"
  },
  {
    id: 2,
    titulo: "Elden Ring: Shadow of the Erdtree",
    precio: 399,
    tipoTransaccion: "venta",
    portada_url: "https://placehold.co/400x300/181323/a855f7?text=Elden+Ring",
    licenciaKey: "NEXUS-ER24-5541-KL99",
    plataforma: "PC Digital"
  },
  {
    id: 3,
    titulo: "Grand Theft Auto V",
    precio: 59,
    tipoTransaccion: "renta",
    duracionRentaHoras: 72,
    portada_url: "https://placehold.co/400x300/181323/34d399?text=GTA+V",
    licenciaKey: "NEXUS-GTAV-RENT-7712",
    plataforma: "PC Digital"
  }
];

export default function BibliotecaPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [juegos, setJuegos] = useState<ItemBiblioteca[]>([]);
  const [pedidosFacturas, setPedidosFacturas] = useState<PedidoFactura[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [filtroTipo, setFiltroTipo] = useState<"todos" | "venta" | "renta">("todos");
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFacturas, setMostrarFacturas] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const cargarBibliotecaYPedidos = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token_nexus");
        const headers: HeadersInit = {
          "Accept": "application/json",
          "ngrok-skip-browser-warning": "69420",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };

        const mapaJuegos = new Map<string, ItemBiblioteca>();

        // 1. OBTENER INFORMACIÓN DE MIS PEDIDOS Y FACTURAS DESDE /info/mis-pedidos
        try {
          const resPedidos = await fetch(`${NGROK_BASE_URL}/info/mis-pedidos`, {
            method: "GET",
            credentials: "include",
            headers,
          });

          if (resPedidos.ok) {
            const textPedidos = await resPedidos.text();
            if (textPedidos) {
              const dataPedidos: PedidoFactura[] = JSON.parse(textPedidos);
              if (Array.isArray(dataPedidos)) {
                setPedidosFacturas(dataPedidos);
              }
            }
          }
        } catch (pedidosErr) {
          console.warn("No se pudo obtener el historial de facturas:", pedidosErr);
        }

        // 2. OBTENER ÍTEMS DE PEDIDOS DESDE /info/pedido-items
        try {
          const resItems = await fetch(`${NGROK_BASE_URL}/info/pedido-items`, {
            method: "GET",
            credentials: "include",
            headers,
          });

          if (resItems.ok) {
            const dataItems = await resItems.json();
            const itemsAPI = Array.isArray(dataItems) ? dataItems : dataItems.Items || [];

            itemsAPI.forEach((item: any, idx: number) => {
              const idVal = Number(item.VideojuegoID ?? item.id ?? idx + 1);
              const tipoVal = (item.TipoItem ?? item.tipoTransaccion ?? "venta").toLowerCase();
              const key = `${idVal}-${tipoVal}`;

              mapaJuegos.set(key, {
                id: idVal,
                pedidoId: item.PedidoID,
                titulo: String(item.Titulo ?? item.Nombre ?? item.titulo ?? `Juego Digital #${idVal}`),
                precio: Number(item.PrecioUnitario ?? item.Precio ?? item.precio ?? 0),
                tipoTransaccion: tipoVal as "venta" | "renta",
                duracionRentaHoras: Number(item.DuracionRentaHoras ?? 72),
                portada_url: item.PortadaUrl || item.portada_url || "https://placehold.co/400x300?text=Juego+Digital",
                licenciaKey: `NEXUS-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
                plataforma: "PC Digital"
              });
            });
          }
        } catch (e) {
          console.warn("API de ngrok /info/pedido-items no disponible. Usando respaldos de biblioteca.", e);
        }

        // 3. LEER COMPRAS REALIZADAS EN EL NAVEGADOR
        const ordenCheckout = localStorage.getItem("orden_checkout_nexus");
        const carritoPasado = localStorage.getItem("carrito_nexus");
        const comprasAcumuladas = localStorage.getItem("compras_nexus_acumuladas");

        const fuentesLocales = [
          comprasAcumuladas ? JSON.parse(comprasAcumuladas) : [],
          ordenCheckout ? JSON.parse(ordenCheckout).items || [] : [],
          carritoPasado ? JSON.parse(carritoPasado) : []
        ];

        fuentesLocales.forEach((lista) => {
          if (Array.isArray(lista)) {
            lista.forEach((item: any, idx: number) => {
              const idVal = Number(item.id ?? idx + 1);
              const tipoVal = (item.tipoTransaccion || "venta").toLowerCase();
              const key = `${idVal}-${tipoVal}`;

              if (!mapaJuegos.has(key)) {
                mapaJuegos.set(key, {
                  id: idVal,
                  titulo: String(item.titulo || item.nombre || "Videojuego Digital"),
                  precio: Number(item.precio || 0),
                  tipoTransaccion: tipoVal as "venta" | "renta",
                  duracionRentaHoras: Number(item.duracionRentaHoras || 72),
                  portada_url: item.portada_url || "https://placehold.co/400x300?text=Juego+Digital",
                  licenciaKey: item.licenciaKey || `NEXUS-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
                  plataforma: "PC Digital"
                });
              }
            });
          }
        });

        // 4. SI AÚN ESTÁ VACÍO, MOSTRAR LOS JUEGOS BASE DE DEMOSTRACIÓN
        if (mapaJuegos.size === 0) {
          JUEGOS_DEMO_INICIALES.forEach((demo) => {
            mapaJuegos.set(`${demo.id}-${demo.tipoTransaccion}`, demo);
          });
        }

        const resultado = Array.from(mapaJuegos.values());
        setJuegos(resultado);

        localStorage.setItem("compras_nexus_acumuladas", JSON.stringify(resultado));

      } catch (err) {
        console.error("Error al cargar biblioteca:", err);
        setJuegos(JUEGOS_DEMO_INICIALES);
      } finally {
        setLoading(false);
      }
    };

    if (mounted) {
      cargarBibliotecaYPedidos();
    }
  }, [mounted]);

  const juegosFiltrados = juegos.filter((item) => {
    const coincideBusqueda = item.titulo.toLowerCase().includes(busqueda.toLowerCase().trim());
    if (filtroTipo === "todos") return coincideBusqueda;
    return coincideBusqueda && item.tipoTransaccion === filtroTipo;
  });

  return (
    <main className="min-h-screen bg-[#100C18] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-purple-900/30 bg-[#100C18]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl">
              <Image src="/logo.png" alt="Logo" width={100} height={100} className="object-contain p-1" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              NEXUS<span className="text-green-500">GAMES</span>
            </span>
          </div>

          <nav className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="text-sm font-semibold text-gray-300 hover:text-white transition"
            >
              ← Volver al Catálogo
            </button>
          </nav>
        </div>
      </header>

      {/* TITULO Y BOTONES DE VISTA */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-green-500">
              Inventario Digital
            </span>
            <h1 className="text-4xl font-extrabold mt-1">Mi Biblioteca</h1>
            <p className="text-gray-400 text-sm mt-1">
              Todos tus títulos comprados, licencias y detalles de tus facturas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMostrarFacturas(!mostrarFacturas)}
              className="rounded-xl border border-purple-700 bg-purple-900/30 px-4 py-2.5 text-xs font-bold text-purple-300 transition hover:bg-purple-800/50"
            >
              {mostrarFacturas ? "🎮 Ver Mis Juegos" : "📄 Ver Mis Pedidos y Facturas"}
            </button>

            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Buscar..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Filtros de Tipo */}
        {!mostrarFacturas && (
          <div className="flex gap-3 mt-8 border-b border-purple-900/30 pb-4">
            <button
              type="button"
              onClick={() => setFiltroTipo("todos")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filtroTipo === "todos" ? "bg-purple-600 text-white" : "bg-[#181323] text-gray-400 hover:text-white"
              }`}
            >
              Todos ({juegos.length})
            </button>
            <button
              type="button"
              onClick={() => setFiltroTipo("venta")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filtroTipo === "venta" ? "bg-purple-600 text-white" : "bg-[#181323] text-gray-400 hover:text-white"
              }`}
            >
              🛒 Comprados ({juegos.filter((j) => j.tipoTransaccion === "venta").length})
            </button>
            <button
              type="button"
              onClick={() => setFiltroTipo("renta")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filtroTipo === "renta" ? "bg-green-600 text-white" : "bg-[#181323] text-gray-400 hover:text-white"
              }`}
            >
              ⏱️ Rentados ({juegos.filter((j) => j.tipoTransaccion === "renta").length})
            </button>
          </div>
        )}
      </section>

      {/* SECCIÓN DE HISTORIAL DE PEDIDOS / FACTURAS */}
      {mostrarFacturas ? (
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            📄 Historial de Pedidos y Facturación
          </h2>

          {pedidosFacturas.length === 0 ? (
            <div className="rounded-2xl border border-purple-900/30 bg-[#181323] p-8 text-center">
              <p className="text-gray-400 text-sm">No se encontraron facturas o pedidos registrados en el servidor.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {pedidosFacturas.map((pedido, idx) => (
                <div key={pedido.PedidoID || idx} className="rounded-2xl border border-purple-900/40 bg-[#181323] p-6 shadow-lg">
                  <div className="flex items-center justify-between border-b border-purple-900/30 pb-4 mb-4">
                    <div>
                      <span className="text-xs text-purple-400 font-bold uppercase">Pedido #{pedido.PedidoID}</span>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {pedido.FechaCreacion ? new Date(pedido.FechaCreacion).toLocaleString() : "Fecha no disponible"}
                      </p>
                    </div>
                    <span className="rounded-full bg-green-900/50 border border-green-500/30 px-3 py-1 text-xs font-bold text-green-300 uppercase">
                      {pedido.Estado || "Completado"}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="font-semibold">Q{pedido.Subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-red-400">
                      <span>Descuento Total:</span>
                      <span className="font-semibold">-Q{pedido.DescuentoTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Impuestos (IVA):</span>
                      <span className="font-semibold">Q{pedido.Impuestos.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-green-400 pt-2 border-t border-purple-900/30">
                      <span>Total Pagado:</span>
                      <span>Q{pedido.Total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-purple-900/30">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase font-bold block">N° Factura:</span>
                      <span className="text-xs font-mono text-gray-300">{pedido.NumeroFactura || "FAC-NEXUS-001"}</span>
                    </div>

                    {pedido.FacturaURL ? (
                      <a
                        href={pedido.FacturaURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-green-600 px-4 py-2 text-xs font-bold transition hover:bg-green-500"
                      >
                        Ver Factura PDF 📥
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => alert(`Generando factura del Pedido #${pedido.PedidoID}...`)}
                        className="rounded-lg border border-purple-600 px-4 py-2 text-xs font-bold text-purple-300 transition hover:bg-purple-900/40"
                      >
                        Descargar Factura
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      ) : (
        /* LISTA DE JUEGOS */
        <section className="mx-auto max-w-7xl px-6 pb-20">
          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent" />
              <p className="mt-4 text-gray-400 text-sm">Cargando tus licencias...</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {juegosFiltrados.map((item, idx) => {
                const esRenta = item.tipoTransaccion === "renta";

                return (
                  <article
                    key={idx}
                    className="group overflow-hidden rounded-2xl border border-purple-900/30 bg-[#181323] flex flex-col justify-between transition hover:border-purple-600 hover:shadow-xl"
                  >
                    <div>
                      <div className="relative h-48 overflow-hidden bg-[#211A2D]">
                        <img src={item.portada_url} alt={item.titulo} className="h-full w-full object-cover" />
                        <span
                          className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-bold uppercase backdrop-blur-md ${
                            esRenta
                              ? "bg-green-900/80 text-green-300 border border-green-500/30"
                              : "bg-purple-900/80 text-purple-300 border border-purple-500/30"
                          }`}
                        >
                          {esRenta ? `⏱️ Renta (${item.duracionRentaHoras || 72}h)` : "🛒 Comprado"}
                        </span>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-bold">{item.titulo}</h3>
                        <p className="text-xs text-green-400 font-semibold mt-1">
                          Precio: Q{item.precio.toFixed(2)}
                        </p>

                        <div className="mt-4 rounded-xl border border-purple-900/40 bg-[#211A2D] p-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                            Clave de Licencia Digital:
                          </span>
                          <code className="text-xs font-mono font-bold text-green-400 block mt-0.5 select-all">
                            {item.licenciaKey}
                          </code>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <button
                        type="button"
                        onClick={() => alert(`Iniciando descarga de ${item.titulo}...`)}
                        className="w-full rounded-xl bg-purple-600 py-3 text-sm font-bold transition hover:bg-purple-500 active:scale-95"
                      >
                        Descargar Juego 🚀
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      )}
    </main>
  );
}