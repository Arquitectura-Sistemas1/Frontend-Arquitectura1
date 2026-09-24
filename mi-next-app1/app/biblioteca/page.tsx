"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface PedidoItem {
  VideojuegoID?: number;
  id?: number;
  titulo?: string;
  nombre?: string;
  precio?: number;
  portada_url?: string;
  imagen?: string;
  plataforma_nombre?: string;
  genero_nombre?: string;
}

interface PedidoRespuesta {
  PedidoID?: number;
  Subtotal?: number;
  DescuentoTotal?: number;
  Total?: number;
  Items?: PedidoItem[];
}

const NGROK_BASE_URL = "https://sedation-scribe-state.ngrok-free.dev";

export default function BibliotecaPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [pedidoInfo, setPedidoInfo] = useState<PedidoRespuesta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usuarioActual, setUsuarioActual] = useState<any>(null);

  useEffect(() => {
    setMounted(true);

    // Validar usuario en localStorage
    const usuarioGuardado = localStorage.getItem("usuario_nexus");
    if (usuarioGuardado) {
      try {
        setUsuarioActual(JSON.parse(usuarioGuardado));
      } catch (e) {
        console.error("Error al leer usuario:", e);
      }
    } else {
      setError("Debes iniciar sesión para ver tu biblioteca.");
      setLoading(false);
      return;
    }

    // Cargar información del pedido/items desde la API
    async function cargarPedidoItems() {
      try {
        setLoading(true);
        const token = localStorage.getItem("token_nexus");

        const res = await fetch(`${NGROK_BASE_URL}/info/pedido-items`, {
          method: "GET",
          credentials: "include", // Vital para enviar la cookie de sesión
          headers: {
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "69420",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

        if (!res.ok) {
          throw new Error("No se pudo obtener el detalle de los ítems del pedido.");
        }

        const data: PedidoRespuesta = await res.json();
        const itemsCrudos = data.Items || [];

        // Filtramos duplicados usando un Map basado en el título/nombre del juego en minúsculas
        const mapaUnicos = new Map<string, PedidoItem>();
        itemsCrudos.forEach((item) => {
          const tituloVal = String(item.titulo || item.nombre || "Videojuego Digital").trim().toLowerCase();
          if (!mapaUnicos.has(tituloVal)) {
            mapaUnicos.set(tituloVal, item);
          }
        });

        setPedidoInfo({
          ...data,
          Items: Array.from(mapaUnicos.values()),
        });

      } catch (err: any) {
        console.error("Error al obtener los ítems del pedido:", err);
        setError(err.message || "Error de conexión con el servidor.");
      } finally {
        setLoading(false);
      }
    }

    cargarPedidoItems();
  }, []);

  const listaItems = pedidoInfo?.Items || [];

  return (
    <main className="min-h-screen bg-[#100C18] text-white flex flex-col justify-between">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-40 border-b border-purple-900/30 bg-[#100C18]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl">
              <Image
                src="/logo.png"
                alt="Nexus Gaming Logo"
                width={100}
                height={100}
                className="object-contain p-1"
              />
            </div>

            <span className="text-2xl font-bold tracking-tight">
              NEXUS<span className="text-green-500">LIBRARY</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="rounded-lg border border-purple-700/50 bg-[#211A2D] px-4 py-2 text-sm font-semibold hover:bg-purple-700 transition"
            >
              ← Volver a la tienda
            </Link>
          </div>
        </div>
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <section className="mx-auto max-w-7xl w-full px-6 py-12 flex-grow">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black">Mi Biblioteca y Pedidos</h1>
            <p className="text-sm text-gray-400 mt-1">
              Registro de productos adquiridos y estado de tu cuenta.
            </p>
          </div>

          {pedidoInfo && pedidoInfo.PedidoID !== undefined && pedidoInfo.PedidoID > 0 && (
            <div className="rounded-xl border border-purple-900/50 bg-[#181323] px-5 py-3 text-xs space-y-1">
              <p className="text-purple-400 font-semibold">Pedido ID: #{pedidoInfo.PedidoID}</p>
              <p className="text-gray-300">
                Total Pagado: <strong className="text-green-400 text-sm">Q{Number(pedidoInfo.Total || 0).toFixed(2)}</strong>
              </p>
            </div>
          )}
        </div>

        {loading && (
          <div className="py-24 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent align-[-0.125em]" />
            <p className="mt-4 text-gray-400">Cargando tus ítems desde la API...</p>
          </div>
        )}

        {error && !loading && (
          <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-6 text-center text-red-400 max-w-md mx-auto">
            <p>⚠️ {error}</p>
            <Link
              href="/login"
              className="mt-4 inline-block rounded-lg bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-500 transition"
            >
              Ir a Iniciar Sesión
            </Link>
          </div>
        )}

        {!loading && !error && listaItems.length === 0 && (
          <div className="py-20 text-center rounded-2xl border border-purple-900/30 bg-[#181323]">
            <span className="text-5xl">🎮</span>
            <h2 className="text-xl font-bold mt-4">Tu biblioteca está vacía</h2>
            <p className="text-sm text-gray-400 mt-1">No se encontraron ítems asociados a tu sesión actual.</p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white hover:bg-green-500 transition shadow-lg"
            >
              Explorar Ofertas
            </Link>
          </div>
        )}

        {!loading && !error && listaItems.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listaItems.map((item, index) => {
              const tituloJuego = item.titulo || item.nombre || "Videojuego Digital";
              const imagenJuego = item.portada_url || item.imagen || "https://placehold.co/400x300?text=Nexus+Game";

              return (
                <article
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-purple-900/40 bg-[#181323] transition duration-300 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-950 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden bg-[#211A2D]">
                      <img
                        src={imagenJuego}
                        alt={tituloJuego}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/400x300?text=Nexus+Game";
                        }}
                      />
                      <div className="absolute left-3 top-3 flex gap-2">
                        {item.plataforma_nombre && (
                          <span className="rounded-md border border-green-500/30 bg-green-900/80 px-2.5 py-1 text-xs font-bold text-green-200 backdrop-blur-md">
                            {item.plataforma_nombre}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold group-hover:text-purple-400 transition">
                        {tituloJuego}
                      </h3>

                      {item.genero_nombre && (
                        <p className="text-xs text-purple-400 mt-1 font-semibold">
                          Género: {item.genero_nombre}
                        </p>
                      )}

                      {item.precio !== undefined && (
                        <p className="mt-3 text-sm font-black text-green-400">
                          Precio: Q{Number(item.precio).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      type="button"
                      onClick={() => alert(`Accediendo al contenido de: ${tituloJuego}`)}
                      className="w-full rounded-xl bg-purple-600 py-2.5 text-sm font-bold text-white transition hover:bg-purple-500 active:scale-95 shadow"
                    >
                      Jugar / Descargar 🚀
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-purple-900/30 bg-[#0B0810]">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-gray-600">
          <p>© 2026 NEXUSGAMING - Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}