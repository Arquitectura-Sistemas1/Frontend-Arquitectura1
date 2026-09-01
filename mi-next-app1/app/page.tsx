"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const productos = [
  {
    id: 1,
    nombre: "EA SPORTS FC 26",
    descripcion: "PC - Steam",
    precio: 349.99,
    descuento: 18,
    imagen: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    nombre: "Grand Theft Auto V",
    descripcion: "PC - Rockstar Games",
    precio: 199.99,
    descuento: 25,
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    nombre: "Minecraft",
    descripcion: "PC - Microsoft",
    precio: 299.99,
    descuento: 15,
    imagen: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    nombre: "Cyberpunk 2077",
    descripcion: "PC - GOG",
    precio: 249.99,
    descuento: 30,
    imagen: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    nombre: "Red Dead Redemption 2",
    descripcion: "PC - Rockstar Games",
    precio: 299.99,
    descuento: 20,
    imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    nombre: "Forza Horizon 5",
    descripcion: "PC - Xbox",
    precio: 399.99,
    descuento: 12,
    imagen: "https://images.unsplash.com/photo-1552824722-15140b35416e?w=600&auto=format&fit=crop&q=80",
  },
];

type Producto = (typeof productos)[number];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [juegoDetalle, setJuegoDetalle] = useState<Producto | null>(null);

  // Garantiza que el portal solo se ejecute en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <main className="min-h-screen bg-[#100C18] text-white">
      {/* ================= NAVBAR ================= */}
<header className="sticky top-0 z-40 border-b border-purple-900/30 bg-[#100C18]/95 backdrop-blur">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
    <div className="flex items-center gap-3">
      <div className="relative flex h-30 w-30 items-center justify-center overflow-hidden rounded-xl">
        <Image
      src="/logo.png"
      alt="Nexus Gaming Logo"
      fill
      className="object-contain p-1"
    />
      </div>

      <span className="text-2xl font-bold tracking-tight">
        NEXUS<span className="text-green-500">GAMES</span>
      </span>
    </div>
          

          <div className="hidden w-[400px] md:block">
            <div className="flex items-center rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-3">
              <span className="mr-3">🔎</span>
              <input
                type="text"
                placeholder="Buscar juegos..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
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

            <button type="button" className="rounded-lg border border-purple-700 px-4 py-2 text-sm font-semibold hover:bg-purple-700">
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
        {/* Columna Derecha: Imagen Mascota */}
      <div className="flex justify-center md:justify-end">
        <div className="relative -mt-110 -mr-40 h-[1000px] w-full max-w-[1000px] sm:h-[450px] lg:-mt-110">
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
          <h2 className="mt-1 text-3xl font-bold">Ofertas destacadas</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto) => (
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
                <div className="absolute left-3 top-3 rounded-md bg-green-600 px-2 py-1 text-xs font-black">
                  -{producto.descuento}%
                </div>
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
                <span className="absolute left-3 top-3 rounded-md bg-green-600 px-2 py-1 text-xs font-black">
                  -{juegoDetalle.descuento}% OFF
                </span>
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
                  onClick={() => alert("Próximamente: proceso de compra")}
                  className="mt-5 w-full rounded-lg bg-green-600 py-3 font-bold transition hover:bg-green-500"
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