"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

export default function BibliotecaPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const [pedidosFacturas, setPedidosFacturas] = useState<PedidoFactura[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // CONSULTA PRINCIPAL A /info/mis-pedidos
  useEffect(() => {
    if (!mounted) return;

    const cargarHistorialPedidos = async () => {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token_nexus");
      const headers: HeadersInit = {
        "Accept": "application/json",
        "ngrok-skip-browser-warning": "69420",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      try {
        const resPedidos = await fetch(`${NGROK_BASE_URL}/info/mis-pedidos`, {
          method: "GET",
          credentials: "include", // Envia cookie de sesión de autenticación
          headers,
        });

        if (resPedidos.ok) {
          const dataPedidos: PedidoFactura[] = await resPedidos.json();
          if (Array.isArray(dataPedidos)) {
            setPedidosFacturas(dataPedidos);
          }
        } else if (resPedidos.status === 401) {
          setError("No se encontró la cookie de sesión activa. Debes iniciar sesión.");
        } else {
          setError(`Error ${resPedidos.status}: No se pudo obtener tus pedidos.`);
        }
      } catch (err) {
        console.error("Error al consultar /info/mis-pedidos:", err);
        setError("Error al conectar con el servidor de la API.");
      } finally {
        setLoading(false);
      }
    };

    cargarHistorialPedidos();
  }, [mounted]);

  if (!mounted) return null;

  const pedidosFiltrados = pedidosFacturas.filter((p) => {
    const busq = busqueda.toLowerCase().trim();
    if (!busq) return true;
    return (
      p.PedidoID.toString().includes(busq) ||
      (p.NumeroFactura || "").toLowerCase().includes(busq) ||
      (p.Estado || "").toLowerCase().includes(busq)
    );
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

      {/* ENCABEZADO Y BÚSQUEDA */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-green-500">
              Historial Digital
            </span>
            <h1 className="text-4xl font-extrabold mt-1">Mis Pedidos</h1>
            <p className="text-gray-400 text-sm mt-1">
              Consulta tus comprobantes, facturas y transacciones realizadas.
            </p>
          </div>

          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Buscar pedido o factura..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-purple-500"
            />
          </div>
        </div>
      </section>

      {/* MENSAJE DE ERROR DE LA API */}
      {error && (
        <section className="mx-auto max-w-7xl px-6 my-4">
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-center text-sm font-semibold text-red-400">
            {error}
          </div>
        </section>
      )}

      {/* HISTORIAL PRINCIPAL DE MIS PEDIDOS Y FACTURAS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          📄 Mis Pedidos y Facturación
        </h2>

        {loading ? (
          <div className="py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent" />
            <p className="mt-4 text-gray-400 text-sm">Consultando historial en /info/mis-pedidos...</p>
          </div>
        ) : pedidosFiltrados.length === 0 ? (
          <div className="rounded-2xl border border-purple-900/30 bg-[#181323] p-8 text-center">
            <p className="text-gray-400 text-sm">No se encontraron facturas o pedidos en el servidor.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {pedidosFiltrados.map((pedido, idx) => (
              <div key={pedido.PedidoID || idx} className="rounded-2xl border border-purple-900/40 bg-[#181323] p-6 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-purple-900/30 pb-4 mb-4">
                    <div>
                      <span className="text-xs text-purple-400 font-bold uppercase">Pedido #{pedido.PedidoID}</span>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {pedido.FechaCreacion ? new Date(pedido.FechaCreacion).toLocaleString() : "Sin fecha"}
                      </p>
                    </div>
                    <span className="rounded-full bg-green-900/50 border border-green-500/30 px-3 py-1 text-xs font-bold text-green-300 uppercase">
                      {pedido.Estado || "Completado"}
                    </span>
                  </div>

                  {/* DESGLOSE DE MONTO Y FACTURA */}
                  <div className="space-y-2 text-sm text-gray-300 mt-2">
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
                </div>

                {/* ACCIÓN DE DESCARGA O ENLACE PDF */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-purple-900/30">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-bold block">N° Factura:</span>
                    <span className="text-xs font-mono text-gray-300">{pedido.NumeroFactura || `FAC-00${pedido.PedidoID}`}</span>
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
                      onClick={() => alert(`Generando PDF para Factura #${pedido.NumeroFactura || pedido.PedidoID}...`)}
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
    </main>
  );
}