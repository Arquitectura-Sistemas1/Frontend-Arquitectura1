"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export interface ItemBiblioteca {
  id: number;
  titulo: string;
  precio: number;
  tipoTransaccion: "venta" | "renta";
  duracionRentaHoras?: number;
  portada_url?: string;
  licenciaKey?: string;
}

const NGROK_BASE_URL = "https://sedation-scribe-state.ngrok-free.dev";

export default function BibliotecaPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [juegos, setJuegos] = useState<ItemBiblioteca[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [usuarioActual, setUsuarioActual] = useState<any>(null);
  const [filtroTipo, setFiltroTipo] = useState<"todos" | "venta" | "renta">("todos");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    setMounted(true);
    const usuarioGuardado = localStorage.getItem("usuario_nexus");
    if (usuarioGuardado) {
      try {
        setUsuarioActual(JSON.parse(usuarioGuardado));
      } catch (e) {
        console.error("Error al obtener usuario:", e);
      }
    }
  }, []);

  useEffect(() => {
    const cargarBiblioteca = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token_nexus");
        const headers: HeadersInit = {
          "Accept": "application/json",
          "ngrok-skip-browser-warning": "69420",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };

        let juegosObtenidos: ItemBiblioteca[] = [];

        // 1. INTENTAR OBTENER DESDE LA API DEL BACKEND
        try {
          const response = await fetch(`${NGROK_BASE_URL}/info/pedido-items`, {
            method: "GET",
            credentials: "include",
            headers,
          });

          if (response.ok) {
            const textData = await response.text();
            if (textData) {
              const data = JSON.parse(textData);
              const itemsRaw = Array.isArray(data) ? data : data.Items || data.items || [];

              if (itemsRaw.length > 0) {
                juegosObtenidos = itemsRaw.map((item: any, idx: number) => ({
                  id: Number(item.VideojuegoID ?? item.id ?? idx + 1),
                  titulo: String(item.Titulo ?? item.Nombre ?? item.titulo ?? `Juego #${item.VideojuegoID ?? idx + 1}`),
                  precio: Number(item.PrecioUnitario ?? item.Precio ?? item.precio ?? 0),
                  tipoTransaccion: (item.TipoItem ?? item.tipoTransaccion ?? "venta").toLowerCase() as "venta" | "renta",
                  duracionRentaHoras: Number(item.DuracionRentaHoras ?? 72),
                  portada_url: item.PortadaUrl || item.portada_url || "https://placehold.co/400x300?text=Juego+Digital",
                  licenciaKey: `NEXUS-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
                }));
              }
            }
          }
        } catch (apiErr) {
          console.warn("No se pudo conectar a la API de la biblioteca, buscando en almacenamiento local...", apiErr);
        }

        // 2. RESPALDO LOCAL: SI LA API NO DEVUELVE NADA O FALLA LA SESIÓN, LEER DESDE LOCALSTORAGE
        if (juegosObtenidos.length === 0) {
          const ordenGuardada = localStorage.getItem("orden_checkout_nexus");
          const historialCompras = localStorage.getItem("compras_nexus");

          let itemsLocales: any[] = [];

          if (historialCompras) {
            try { itemsLocales = JSON.parse(historialCompras); } catch (e) {}
          } else if (ordenGuardada) {
            try {
              const parsed = JSON.parse(ordenGuardada);
              itemsLocales = parsed.items || [];
            } catch (e) {}
          }

          if (itemsLocales.length > 0) {
            juegosObtenidos = itemsLocales.map((item: any, idx: number) => ({
              id: Number(item.id ?? idx + 1),
              titulo: String(item.titulo || "Videojuego Digital"),
              precio: Number(item.precio || 0),
              tipoTransaccion: (item.tipoTransaccion || "venta").toLowerCase() as "venta" | "renta",
              duracionRentaHoras: Number(item.duracionRentaHoras || 72),
              portada_url: item.portada_url || "https://placehold.co/400x300?text=Juego+Digital",
              licenciaKey: `NEXUS-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
            }));
          }
        }

        setJuegos(juegosObtenidos);
      } catch (err: any) {
        console.error("Error al cargar la biblioteca:", err);
        setError("Ocurrió un error al cargar tus juegos.");
      } finally {
        setLoading(false);
      }
    };

    if (mounted) {
      cargarBiblioteca();
    }
  }, [mounted]);

  // Filtrado por búsqueda y categoría
  const juegosFiltrados = juegos.filter((item) => {
    const coincideBusqueda = item.titulo.toLowerCase().includes(busqueda.toLowerCase().trim());
    if (filtroTipo === "todos") return coincideBusqueda;
    return coincideBusqueda && item.tipoTransaccion === filtroTipo;
  });

  return (
    <main className="min-h-screen bg-[#100C18] text-white">
      {/* ================= NAVBAR ================= */}
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

      {/* ================= HEADER BIBLIOTECA ================= */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-green-500">
              Inventario Digital
            </span>
            <h1 className="text-4xl font-extrabold mt-1">Mi Biblioteca</h1>
            <p className="text-gray-400 text-sm mt-1">
              Todos tus títulos comprados y rentas digitales disponibles.
            </p>
          </div>

          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="Buscar en mis juegos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Filtros */}
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
      </section>

      {/* ================= CONTENIDO BIBLIOTECA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        {loading && (
          <div className="py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent" />
            <p className="mt-4 text-gray-400 text-sm">Cargando tus licencias...</p>
          </div>
        )}

        {error && !loading && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-8 text-center max-w-md mx-auto my-12">
            <p className="text-red-400 font-semibold mb-4">{error}</p>
          </div>
        )}

        {!loading && !error && juegosFiltrados.length === 0 && (
          <div className="py-16 text-center rounded-2xl border border-purple-900/30 bg-[#181323] my-8 p-8">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-xl font-bold">No hay juegos registrados en tu biblioteca</h3>
            <p className="text-gray-400 text-sm mt-2 max-w-sm mx-auto">
              Realiza una compra o renta en la tienda para ver tus juegos aquí.
            </p>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="mt-6 rounded-xl bg-green-600 px-6 py-3 text-sm font-bold transition hover:bg-green-500"
            >
              Ir a la Tienda
            </button>
          </div>
        )}

        {!loading && !error && juegosFiltrados.length > 0 && (
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
    </main>
  );
}