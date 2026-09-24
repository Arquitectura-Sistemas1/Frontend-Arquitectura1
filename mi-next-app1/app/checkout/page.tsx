"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface MetodoPago {
  ID: number;
  Nombre: string;
  Instrucciones: string;
}

interface FacturaRespuesta {
  TransaccionID?: number;
  FacturaID?: number;
  NumeroFactura?: string;
  PDFUrl?: string;
  MontoTotal?: string | number;
}

interface CuponRespuesta {
  status?: string;
  mensaje?: string;
  PedidoID?: number;
  Subtotal?: number;
  DescuentoTotal?: number;
  Total?: number;
}

const NGROK_BASE_URL = "https://sedation-scribe-state.ngrok-free.dev";

export default function CheckoutPage() {
  const router = useRouter();

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState(false);
  const [datosFactura, setDatosFactura] = useState<FacturaRespuesta | null>(null);

  // Lista dinámica de métodos de pago
  const [metodosPago, setMetodosPago] = useState<MetodoPago[]>([]);
  const [cargandoMetodos, setCargandoMetodos] = useState(true);

  // Estados para Cupones
  const [codigoCupon, setCodigoCupon] = useState("");
  const [cargandoCupon, setCargandoCupon] = useState(false);
  const [cuponInfo, setCuponInfo] = useState<CuponRespuesta | null>(null);
  const [cuponMensaje, setCuponMensaje] = useState<string | null>(null);

  // Datos del formulario de pago
  const [nombreCliente, setNombreCliente] = useState("");
  const [metodoPagoId, setMetodoPagoId] = useState<number>(1);
  const [numTarjeta, setNumTarjeta] = useState("");
  const [expiracion, setExpiracion] = useState("");
  const [cvv, setCvv] = useState("");
  const [direccion, setDireccion] = useState("");

  // Cargar lista de métodos de pago desde la API
  useEffect(() => {
    async function cargarMetodosPago() {
      setCargandoMetodos(true);
      try {
        const res = await fetch(`${NGROK_BASE_URL}/info/metodospago`, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });

        if (res.ok) {
          const data: MetodoPago[] = await res.json();
          setMetodosPago(data);
          if (data.length > 0) setMetodoPagoId(data[0].ID);
        }
      } catch (err) {
        console.error("Error al cargar los métodos de pago:", err);
      } finally {
        setCargandoMetodos(false);
      }
    }

    cargarMetodosPago();
  }, []);

  // Cargar datos del usuario guardados en localStorage
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario_nexus");
    if (usuarioGuardado) {
      try {
        const parsed = JSON.parse(usuarioGuardado);
        setNombreCliente(parsed.nombre || parsed.username || "");
      } catch (err) {
        console.error("Error leyendo usuario de localStorage:", err);
      }
    } else {
      setError("Debes iniciar sesión para realizar una compra.");
    }
  }, []);

  const metodoSeleccionado = metodosPago.find((m) => m.ID === metodoPagoId);

  // Función para aplicar cupón
  const aplicarCupon = async () => {
    if (!codigoCupon.trim()) return;
    setCargandoCupon(true);
    setCuponMensaje(null);

    try {
      const token = localStorage.getItem("token_nexus");
      const headersComunes = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "ngrok-skip-browser-warning": "69420",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      const res = await fetch(`${NGROK_BASE_URL}/comercial/aplicar-cupon`, {
        method: "POST",
        credentials: "include",
        headers: headersComunes,
        body: JSON.stringify({ Codigo: codigoCupon.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Cupón no válido o expirado.");
      }

      setCuponInfo(data);
      setCuponMensaje(data.mensaje || "¡Cupón aplicado con éxito!");
    } catch (err: any) {
      console.error("Error al aplicar cupón:", err);
      setCuponMensaje(err.message || "Error al aplicar el cupón.");
      setCuponInfo(null);
    } finally {
      setCargandoCupon(false);
    }
  };

  const manejarPago = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setCargando(true);

    try {
      const token = localStorage.getItem("token_nexus");

      const headersComunes = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "ngrok-skip-browser-warning": "69420",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      const payloadPago = {
        MetodoPagoID: Number(metodoPagoId),
        NombreCliente: nombreCliente,
        tarjeta: numTarjeta,
        expiracion: expiracion,
        cvv: cvv,
        direccion: direccion,
      };

      const resPago = await fetch(`${NGROK_BASE_URL}/comercial/procesar-pago`, {
        method: "POST",
        credentials: "include",
        headers: headersComunes,
        body: JSON.stringify(payloadPago),
      });

      let responseData: any = {};
      try {
        responseData = await resPago.json();
      } catch {
        responseData = {};
      }

      if (!resPago.ok) {
        let detalle = "Error al procesar el pago.";

        if (Array.isArray(responseData.detail)) {
          detalle = responseData.detail
            .map((d: any) => `${d.loc ? d.loc.join("->") : "campo"}: ${d.msg}`)
            .join(" | ");
        } else if (typeof responseData.detail === "string") {
          detalle = responseData.detail;
        } else if (responseData.message) {
          detalle = responseData.message;
        }

        if (detalle.includes("PENDIENTE_PAGO")) {
          detalle = "No tienes un pedido pendiente activo. Asegúrate de agregar productos al carrito antes de pagar.";
        }

        throw new Error(detalle);
      }

      setDatosFactura(responseData);
      localStorage.removeItem("carrito_nexus");
      setExito(true);

      setTimeout(() => {
        router.push("/biblioteca");
      }, 6000);

    } catch (err: any) {
      console.error("Error al procesar la compra:", err);
      setError(err.message || "Ocurrió un problema durante el procesamiento de la compra.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#100C18] text-white flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-lg rounded-2xl border border-purple-900/40 bg-[#181323] p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
            ← Volver a la tienda
          </Link>
          <span className="text-xl font-bold tracking-wider">
            NEXUS<span className="text-green-500">PAY</span>
          </span>
        </div>

        <h1 className="text-2xl font-bold mb-2">Finalizar Compra</h1>
        <p className="text-sm text-gray-400 mb-6">Ingresa los detalles de tu método de pago</p>

        {exito && (
          <div className="mb-6 rounded-xl border border-green-500/40 bg-green-500/10 p-5 text-center text-sm text-green-400 space-y-3">
            <p className="font-bold text-base">🎉 ¡Pago procesado con éxito!</p>

            {datosFactura && (
              <div className="rounded-lg bg-[#211A2D] p-4 text-left space-y-2 text-xs text-gray-300 border border-purple-900/40">
                <p className="flex justify-between">
                  <span className="text-purple-400 font-semibold">No. Factura:</span> 
                  <span className="text-white font-mono">{datosFactura.NumeroFactura || "N/A"}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-purple-400 font-semibold">Transacción ID:</span> 
                  <span className="text-white font-mono">{datosFactura.TransaccionID || "N/A"}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-purple-400 font-semibold">Monto Total:</span> 
                  <span className="text-green-400 font-bold">Q{Number(datosFactura.MontoTotal || 0).toFixed(2)}</span>
                </p>

                {datosFactura.PDFUrl && datosFactura.PDFUrl !== "string" && (
                  <div className="pt-2">
                    <a
                      href={datosFactura.PDFUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full rounded bg-purple-600 py-2 text-center font-bold text-white hover:bg-purple-500 transition shadow"
                    >
                      📄 Ver / Descargar Factura PDF
                    </a>
                  </div>
                )}
              </div>
            )}

            <p className="text-xs text-purple-300 pt-1">Redirigiendo a tu biblioteca...</p>
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-center text-sm font-semibold text-red-400">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={manejarPago} className="space-y-4">
          {/* SECCIÓN DE CUPÓN */}
          <div className="rounded-xl border border-purple-900/40 bg-[#211A2D]/60 p-4 space-y-2">
            <label className="block text-xs font-semibold uppercase text-gray-300">
              ¿Tienes un código de descuento?
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={codigoCupon}
                onChange={(e) => setCodigoCupon(e.target.value)}
                placeholder="Ej. NEXUS2026"
                className="w-full rounded-lg border border-purple-900/50 bg-[#181323] px-3 py-2 text-sm text-white outline-none focus:border-purple-500 transition uppercase"
              />
              <button
                type="button"
                onClick={aplicarCupon}
                disabled={cargandoCupon || !codigoCupon.trim()}
                className="rounded-lg bg-purple-700 px-4 py-2 text-xs font-bold text-white hover:bg-purple-600 transition disabled:opacity-50 whitespace-nowrap"
              >
                {cargandoCupon ? "Aplicando..." : "Aplicar Cupón"}
              </button>
            </div>

            {cuponMensaje && (
              <p className={`text-xs ${cuponInfo?.status === "error" || !cuponInfo ? "text-red-400" : "text-green-400"}`}>
                {cuponMensaje}
              </p>
            )}

            {cuponInfo && cuponInfo.Total !== undefined && (
              <div className="pt-2 border-t border-purple-900/30 text-xs flex justify-between text-gray-300">
                <span>Descuento aplicado: <strong className="text-green-400">Q{Number(cuponInfo.DescuentoTotal || 0).toFixed(2)}</strong></span>
                <span>Nuevo Total: <strong className="text-green-400 font-bold">Q{Number(cuponInfo.Total || 0).toFixed(2)}</strong></span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">
              Nombre del Titular / Cliente
            </label>
            <input
              type="text"
              required
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
              placeholder="Ej. Juan Pérez"
              className="w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-3 text-sm text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">
              Método de Pago
            </label>
            <select
              disabled={cargandoMetodos}
              value={metodoPagoId}
              onChange={(e) => setMetodoPagoId(Number(e.target.value))}
              className="w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-3 text-sm text-white outline-none focus:border-purple-500 transition disabled:opacity-50"
            >
              {cargandoMetodos ? (
                <option value="">Cargando métodos de pago...</option>
              ) : (
                metodosPago.map((m) => (
                  <option key={m.ID} value={m.ID}>
                    {m.Nombre}
                  </option>
                ))
              )}
            </select>
            {metodoSeleccionado?.Instrucciones && (
              <p className="mt-1 text-xs text-purple-400">
                ℹ️ {metodoSeleccionado.Instrucciones}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">
              Dirección de Facturación
            </label>
            <input
              type="text"
              required
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Calle Principal 123, Ciudad"
              className="w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-3 text-sm text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">
              Número de Tarjeta / Referencia
            </label>
            <input
              type="text"
              required
              maxLength={19}
              value={numTarjeta}
              onChange={(e) => setNumTarjeta(e.target.value)}
              placeholder="4532 •••• •••• 8892"
              className="w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-3 text-sm text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">
                Expiración
              </label>
              <input
                type="text"
                required
                placeholder="MM/AA"
                maxLength={5}
                value={expiracion}
                onChange={(e) => setExpiracion(e.target.value)}
                className="w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-3 text-sm text-white outline-none focus:border-purple-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-300 mb-1">
                CVV
              </label>
              <input
                type="password"
                required
                maxLength={4}
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-3 text-sm text-white outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={cargando || cargandoMetodos || exito}
            className="mt-6 w-full rounded-xl bg-purple-600 py-3.5 font-bold text-white transition hover:bg-purple-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-950"
          >
            {cargando ? "Procesando pago..." : "Confirmar y Pagar"}
          </button>
        </form>
      </div>
    </main>
  );
}