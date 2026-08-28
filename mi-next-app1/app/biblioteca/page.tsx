"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Datos de ejemplo para los juegos en la biblioteca
const misJuegosIniciales = [
  {
    id: 1,
    nombre: "EA SPORTS FC 26",
    plataforma: "PC - Steam",
    clave: "FC26-XXXX-9981-GAME",
    horasJugadas: 14.5,
    instalado: true,
    favorito: true,
    imagen: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    nombre: "Minecraft",
    plataforma: "PC - Microsoft",
    clave: "MCFT-XXXX-4421-MINE",
    horasJugadas: 128.0,
    instalado: true,
    favorito: false,
    imagen: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    nombre: "Cyberpunk 2077",
    plataforma: "PC - GOG",
    clave: "CYBP-XXXX-7700-PLAY",
    horasJugadas: 45.2,
    instalado: false,
    favorito: true,
    imagen: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
  },
];

export default function BibliotecaPage() {
  const router = useRouter();
  const [juegos, setJuegos] = useState(misJuegosIniciales);
  const [filtro, setFiltro] = useState<"todos" | "instalados" | "favoritos">("todos");
  const [claveCopiada, setClaveCopiada] = useState<string | null>(null);

  const toggleFavorito = (id: number) => {
    setJuegos((prev) =>
      prev.map((juego) =>
        juego.id === id ? { ...juego, favorito: !juego.favorito } : juego
      )
    );
  };

  const copiarClave = (clave: string) => {
    navigator.clipboard.writeText(clave);
    setClaveCopiada(clave);
    setTimeout(() => setClaveCopiada(null), 2000);
  };

  const juegosFiltrados = juegos.filter((juego) => {
    if (filtro === "instalados") return juego.instalado;
    if (filtro === "favoritos") return juego.favorito;
    return true;
  });

  return (
    <main className="min-h-screen bg-[#100C18] text-white">
      {/* NAVBAR / HEADER */}
      <header className="border-b border-purple-900/30 bg-[#100C18]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-700">
              🎮
            </div>
            <span className="text-2xl font-bold">
              NEXUS<span className="text-green-500">GAMING</span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-lg border border-purple-700 px-4 py-2 text-sm font-semibold hover:bg-purple-700 transition"
          >
            ← Ir a la Tienda
          </button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-black">Mi Biblioteca</h1>
            <p className="mt-1 text-sm text-gray-400">
              Gestiona tus licencias, claves de producto y descargas.
            </p>
          </div>

          {/* FILTROS */}
          <div className="flex items-center gap-2 rounded-xl border border-purple-900/40 bg-[#181323] p-1">
            <button
              onClick={() => setFiltro("todos")}
              className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                filtro === "todos"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Todos ({juegos.length})
            </button>
            <button
              onClick={() => setFiltro("instalados")}
              className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                filtro === "instalados"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Instalados
            </button>
            <button
              onClick={() => setFiltro("favoritos")}
              className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                filtro === "favoritos"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              ⭐ Favoritos
            </button>
          </div>
        </div>

        {/* LISTA DE JUEGOS */}
        {juegosFiltrados.length === 0 ? (
          <div className="mt-16 text-center py-12 border border-dashed border-purple-900/40 rounded-2xl">
            <p className="text-gray-400">No se encontraron juegos en esta categoría.</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {juegosFiltrados.map((juego) => (
              <article
                key={juego.id}
                className="overflow-hidden rounded-xl border border-purple-900/30 bg-[#181323] transition hover:border-purple-600"
              >
                <div className="relative h-48 overflow-hidden bg-[#211A2D]">
                  <img
                    src={juego.imagen}
                    alt={juego.nombre}
                    className="h-full w-full object-cover"
                  />
                  <button
                    onClick={() => toggleFavorito(juego.id)}
                    className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-lg backdrop-blur hover:scale-110 transition"
                  >
                    {juego.favorito ? "⭐" : "☆"}
                  </button>
                  {juego.instalado && (
                    <span className="absolute left-3 top-3 rounded-md bg-green-600/90 px-2 py-1 text-xs font-bold backdrop-blur">
                      Instalado
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold">{juego.nombre}</h3>
                  <p className="text-xs text-purple-400 mt-0.5">{juego.plataforma}</p>

                  <div className="mt-4 rounded-lg bg-[#211A2D] p-3 text-xs">
                    <span className="text-gray-400 block mb-1">Clave de producto:</span>
                    <div className="flex items-center justify-between font-mono font-bold text-green-400">
                      <span>{juego.clave}</span>
                      <button
                        onClick={() => copiarClave(juego.clave)}
                        className="text-xs text-gray-300 hover:text-white underline ml-2"
                      >
                        {claveCopiada === juego.clave ? "¡Copiada!" : "Copiar"}
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400 border-t border-purple-900/30 pt-3">
                    <span>Tiempo jugado:</span>
                    <span className="font-bold text-white">{juego.horasJugadas} hrs</span>
                  </div>

                  <button
                    type="button"
                    className={`mt-4 w-full rounded-lg py-2.5 text-xs font-bold transition ${
                      juego.instalado
                        ? "bg-green-600 hover:bg-green-500 text-white"
                        : "bg-purple-600 hover:bg-purple-500 text-white"
                    }`}
                  >
                    {juego.instalado ? "▶ Jugar" : "⬇ Descargar"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}