"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Interfaz que mapea las propiedades desde tu Base de Datos
export interface JuegoBiblioteca {
  id: number;              // VideojuegoID / ProductoID
  nombre: string;          // Videojuego.Titulo
  plataforma: string;      // Plataforma.Nombre / SKU
  clave: string;           // Producto.Codigo_Licencia
  horasJugadas: number;    // Campo de seguimiento o valor por defecto
  instalado: boolean;      // Estado cliente / instalador
  favorito: boolean;       // Preferencia persistida del usuario
  imagen: string;          // ImagenesVideojuego.url
}

export default function BibliotecaPage() {
  const router = useRouter();
  const [juegos, setJuegos] = useState<JuegoBiblioteca[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [filtro, setFiltro] = useState<"todos" | "instalados" | "favoritos">("todos");
  const [claveCopiada, setClaveCopiada] = useState<string | null>(null);

  // 1. Obtener los juegos comprados por el usuario desde la API REST
  useEffect(() => {
    const fetchBiblioteca = async () => {
      try {
        setLoading(true);
        // Endpoint que consulta las compras/licencias asignadas al usuario actual
        const res = await fetch("/api/biblioteca");

        if (!res.ok) {
          throw new Error("Error al obtener la biblioteca de juegos");
        }

        const data = await res.json();

        // Mapeo opcional para normalizar los nombres de columnas de SQL a TypeScript
        const juegosFormateados: JuegoBiblioteca[] = data.map((item: any) => ({
          id: item.VideojuegoID || item.id,
          nombre: item.Titulo || item.nombre,
          plataforma: item.Plataforma || item.plataforma || "PC",
          clave: item.Codigo_Licencia || item.clave || "XXXX-XXXX-XXXX-XXXX",
          horasJugadas: item.horas_jugadas ?? 0,
          instalado: Boolean(item.instalado),
          favorito: Boolean(item.favorito),
          imagen: item.url_imagen || item.imagen || "https://via.placeholder.com/600",
        }));

        setJuegos(juegosFormateados);
      } catch (err: any) {
        console.error("Error en la biblioteca:", err);
        setError(err.message || "No se pudo cargar tu biblioteca");
      } finally {
        setLoading(false);
      }
    };

    fetchBiblioteca();
  }, []);

  // 2. Marcar / desmarcar favorito con soporte para actualización en servidor
  const toggleFavorito = async (id: number) => {
    // Actualización optimista en el cliente
    setJuegos((prev) =>
      prev.map((juego) =>
        juego.id === id ? { ...juego, favorito: !juego.favorito } : juego
      )
    );

    try {
      // Opcional: Persistir la preferencia en tu backend
      await fetch(`/api/biblioteca/${id}/favorito`, {
        method: "PATCH",
      });
    } catch (e) {
      console.error("Error al guardar el estado de favorito:", e);
    }
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
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
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
              type="button"
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
              type="button"
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
              type="button"
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

        {/* ESTADO DE CARGA */}
        {loading && (
          <div className="py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent align-[-0.125em]" />
            <p className="mt-4 text-gray-400">Cargando tus licencias...</p>
          </div>
        )}

        {/* MENSAJE DE ERROR */}
        {error && !loading && (
          <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center text-red-400">
            <p>Error: {error}</p>
          </div>
        )}

        {/* LISTA DE JUEGOS */}
        {!loading && !error && juegosFiltrados.length === 0 ? (
          <div className="mt-16 text-center py-12 border border-dashed border-purple-900/40 rounded-2xl">
            <p className="text-gray-400">No se encontraron juegos en esta categoría.</p>
          </div>
        ) : (
          !loading && !error && (
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
                      type="button"
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
                          type="button"
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
          )
        )}
      </section>
    </main>
  );
}