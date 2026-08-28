"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Producto } from "../page";

export default function CheckoutPage() {
  const router = useRouter();
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);

  // Estados del formulario y envío
  const [email, setEmail] = useState("");
  const [nombreTarjeta, setNombreTarjeta] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [vencimiento, setVencimiento] = useState("");
  const [cvv, setCvv] = useState("");

  const [procesando, setProcesando] = useState(false);
  const [errorPago, setErrorPago] = useState<string | null>(null);

  useEffect(() => {
    const dataGuardada = localStorage.getItem("carrito_nexus");
    if (dataGuardada) {
      try {
        setCarrito(JSON.parse(dataGuardada));
      } catch (e) {
        console.error("Error al cargar la información del carrito", e);
      }
    }
    setCargando(false);
  }, []);

  function eliminarItem(index: number) {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito_nexus", JSON.stringify(nuevoCarrito));
  }

  function calcularPrecioFinal(producto: Producto) {
    return producto.precio * (1 - producto.descuento / 100);
  }

  const subtotal = carrito.reduce((sum, item) => sum + item.precio, 0);
  const totalConDescuento = carrito.reduce(
    (sum, item) => sum + calcularPrecioFinal(item),
    0
  );
  const totalAhorrado = subtotal - totalConDescuento;

  // Integración de Pago mediante POST a API REST
  async function manejarPago(e: React.FormEvent) {
    e.preventDefault();
    setProcesando(true);
    setErrorPago(null);

    try {
      // Estructura del payload con la orden
      const payloadOrden = {
        clienteEmail: email,
        pagoInfo: {
          nombreTarjeta,
          // Se envían datos procesables/enmascarados según la pasarela
          ultimosDigitos: numeroTarjeta.slice(-4), 
        },
        items: carrito.map((p) => ({
          productoId: p.id,
          precioOriginal: p.precio,
          precioFinal: calcularPrecioFinal(p),
          descuento: p.descuento,
        })),
        total: totalConDescuento,
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadOrden),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "No se pudo procesar la transacción.");
      }

      alert("¡Pago procesado con éxito! Tus claves digitales se han enviado a tu correo.");
      localStorage.removeItem("carrito_nexus");
      router.push("/");
    } catch (err: any) {
      console.error("Error en la transacción:", err);
      setErrorPago(err.message || "Ocurrió un error al procesar el pago.");
    } finally {
      setProcesando(false);
    }
  }

  if (cargando) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#100C18] text-white">
        <p className="text-lg font-semibold text-purple-400">Cargando tu orden...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#100C18] text-white">
      {/* HEADER */}
      <header className="border-b border-purple-900/30 bg-[#100C18]/95 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-700">
              🎮
            </div>
            <span className="text-2xl font-bold">
              NEXUS<span className="text-green-500">GAMING</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-gray-400 transition hover:text-white"
          >
            ← Volver a la tienda
          </Link>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-8 text-3xl font-black">Finalizar Compra</h1>

        {carrito.length === 0 ? (
          <div className="rounded-2xl border border-purple-900/40 bg-[#181323] p-12 text-center">
            <div className="mb-4 text-5xl">🛒</div>
            <h2 className="text-2xl font-bold">Tu carrito está vacío</h2>
            <p className="mt-2 text-gray-400">
              No has añadido ningún juego a tu lista de compra.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-xl bg-purple-600 px-6 py-3 font-bold transition hover:bg-purple-500"
            >
              Explorar juegos
            </Link>
          </div>
        ) : (
          <form onSubmit={manejarPago} className="grid gap-10 lg:grid-cols-12">
            {/* FORMULARIO DE PAGO */}
            <div className="lg:col-span-7 space-y-6">
              {errorPago && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                  {errorPago}
                </div>
              )}

              <div className="rounded-2xl border border-purple-900/40 bg-[#181323] p-6">
                <h2 className="mb-4 text-xl font-bold">1. Datos de Contacto</h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-400">
                      Correo Electrónico (para recibir los códigos)
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@correo.com"
                      className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-3 text-white outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-purple-900/40 bg-[#181323] p-6">
                <h2 className="mb-4 text-xl font-bold">2. Método de Pago</h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-400">
                      Nombre en la tarjeta
                    </label>
                    <input
                      type="text"
                      required
                      value={nombreTarjeta}
                      onChange={(e) => setNombreTarjeta(e.target.value)}
                      placeholder="Juan Pérez"
                      className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-3 text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-400">
                      Número de tarjeta
                    </label>
                    <input
                      type="text"
                      required
                      value={numeroTarjeta}
                      onChange={(e) => setNumeroTarjeta(e.target.value)}
                      placeholder="4000 0000 0000 0000"
                      className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-3 text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-400">
                        Vencimiento
                      </label>
                      <input
                        type="text"
                        required
                        value={vencimiento}
                        onChange={(e) => setVencimiento(e.target.value)}
                        placeholder="MM/AA"
                        className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-3 text-white outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-400">
                        CVV
                      </label>
                      <input
                        type="text"
                        required
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                        className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-3 text-white outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={procesando}
                    className="mt-6 w-full rounded-xl bg-green-600 py-4 font-bold text-lg transition hover:bg-green-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {procesando ? "Procesando orden..." : `Pagar Q${totalConDescuento.toFixed(2)}`}
                  </button>
                </div>
              </div>
            </div>

            {/* RESUMEN DEL PEDIDO */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-2xl border border-purple-900/40 bg-[#181323] p-6">
                <h2 className="mb-4 text-xl font-bold">Resumen del pedido ({carrito.length})</h2>

                <div className="max-h-80 space-y-4 overflow-y-auto pr-1">
                  {carrito.map((producto, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-xl bg-[#211A2D] p-3"
                    >
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-sm">{producto.nombre}</p>
                        <p className="text-xs text-gray-400">{producto.descripcion}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-sm font-black text-green-400">
                            Q{calcularPrecioFinal(producto).toFixed(2)}
                          </span>
                          {producto.descuento > 0 && (
                            <span className="text-xs text-gray-500 line-through">
                              Q{producto.precio.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => eliminarItem(index)}
                        className="text-gray-400 hover:text-red-400"
                        title="Eliminar producto"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2 border-t border-purple-900/40 pt-4 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>Q{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>Descuentos aplicados</span>
                    <span>-Q{totalAhorrado.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-purple-900/40 pt-3 text-lg font-black text-white">
                    <span>Total a pagar</span>
                    <span className="text-green-400">Q{totalConDescuento.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}