"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface MetodoPago {
  ID: number;
  Nombre: string;
  Instrucciones: string;
}

const NGROK_BASE_URL = "https://sedation-scribe-state.ngrok-free.dev";

export default function CheckoutPage() {
  const router = useRouter();

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState(false);

  // Lista dinámica de métodos de pago
  const [metodosPago, setMetodosPago] = useState<MetodoPago[]>([]);
  const [cargandoMetodos, setCargandoMetodos] = useState(true);

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

      // -------------------------------------------------------------
      // PASO 1: PROCESAR EL PAGO DIRECTAMENTE
      // -------------------------------------------------------------
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

      let errorData: any = {};
      try {
        errorData = await resPago.json();
      } catch {
        errorData = {};
      }

      if (!resPago.ok) {
        let detalle = "Error al procesar el pago.";

        if (Array.isArray(errorData.detail)) {
          detalle = errorData.detail
            .map((d: any) => `${d.loc ? d.loc.join("->") : "campo"}: ${d.msg}`)
            .join(" | ");
        } else if (typeof errorData.detail === "string") {
          detalle = errorData.detail;
        } else if (errorData.message) {
          detalle = errorData.message;
        }

        // Si el backend sigue exigiendo el pedido previo, mostramos una guía clara
        if (detalle.includes("PENDIENTE_PAGO")) {
          detalle = "No tienes un pedido pendiente activo. Asegúrate de agregar productos al carrito antes de pagar.";
        }

        throw new Error(detalle);
      }

      // Éxito: Limpiar almacenamiento local y redirigir
      localStorage.removeItem("carrito_nexus");
      setExito(true);

      setTimeout(() => {
        router.push("/biblioteca");
      }, 2500);

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
          <div className="mb-6 rounded-xl border border-green-500/40 bg-green-500/10 p-4 text-center text-sm font-semibold text-green-400">
            🎉 ¡Pago procesado con éxito! Redirigiendo a tu biblioteca...
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-center text-sm font-semibold text-red-400">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={manejarPago} className="space-y-4">
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