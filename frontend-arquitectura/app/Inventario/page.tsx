'use client';

import React, { useState } from 'react';

type Seccion = 'juegos' | 'tarifas' | 'descuentos';

interface Juego {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  numeroJugadores: string;
  idioma: string;
  desarrolladora: string;
  edicion: string;
  fechaLanzamiento: string;
  descripcion: string;
}

interface Tarifa {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

interface Descuento {
  id: number;
  nombre: string;
  porcentaje: number;
  estado: 'ACTIVO' | 'INACTIVO';
  fechaInicio: string;
  fechaFin: string;
}

export default function Inventario() {
  const [seccion, setSeccion] = useState<Seccion>('juegos');
  
  // Modales de creación
  const [mostrarFormularioJuego, setMostrarFormularioJuego] = useState(false);
  const [mostrarFormularioTarifa, setMostrarFormularioTarifa] = useState(false);
  const [mostrarFormularioDescuento, setMostrarFormularioDescuento] = useState(false);

  // Modales de edición y eliminación
  const [juegoAEditar, setJuegoAEditar] = useState<Juego | null>(null);
  const [tarifaAEditar, setTarifaAEditar] = useState<Tarifa | null>(null);
  const [descuentoAEditar, setDescuentoAEditar] = useState<Descuento | null>(null);

  const [itemAEliminar, setItemAEliminar] = useState<{ id: number; tipo: Seccion; nombre: string } | null>(null);

  // Estados dinámicos de los datos
  const [juegos, setJuegos] = useState<Juego[]>([
    {
      id: 1,
      nombre: 'Minecraft',
      categoria: 'Aventura',
      precio: 299.99,
      numeroJugadores: '1-8 Jugadores',
      idioma: 'Español / Inglés',
      desarrolladora: 'Mojang Studios',
      edicion: 'Estándar',
      fechaLanzamiento: '2011-11-18',
      descripcion: 'Juego de construcción y exploración de mundo abierto.',
    },
    {
      id: 2,
      nombre: 'Grand Theft Auto V',
      categoria: 'Acción',
      precio: 199.99,
      numeroJugadores: '1-30 Jugadores',
      idioma: 'Español / Inglés',
      desarrolladora: 'Rockstar Games',
      edicion: 'Premium Edition',
      fechaLanzamiento: '2013-09-17',
      descripcion: 'Acción e historia en un mundo abierto masivo.',
    },
    {
      id: 3,
      nombre: 'EA Sports FC 26',
      categoria: 'Deportes',
      precio: 349.99,
      numeroJugadores: '1-4 Jugadores',
      idioma: 'Español / Inglés',
      desarrolladora: 'EA Sports',
      edicion: 'Ultimate Edition',
      fechaLanzamiento: '2025-09-26',
      descripcion: 'Simulación de fútbol realista.',
    },
  ]);

  const [tarifas, setTarifas] = useState<Tarifa[]>([
    {
      id: 1,
      nombre: 'Renta 1 día',
      descripcion: 'Renta del videojuego durante 24 horas',
      precio: 25,
    },
    {
      id: 2,
      nombre: 'Renta 3 días',
      descripcion: 'Renta del videojuego durante 3 días',
      precio: 60,
    },
    {
      id: 3,
      nombre: 'Renta 7 días',
      descripcion: 'Renta del videojuego durante una semana',
      precio: 120,
    },
  ]);

  const [descuentos, setDescuentos] = useState<Descuento[]>([
    {
      id: 1,
      nombre: 'Oferta de bienvenida',
      porcentaje: 10,
      estado: 'ACTIVO',
      fechaInicio: '2026-01-01',
      fechaFin: '2026-12-31',
    },
    {
      id: 2,
      nombre: 'Descuento fin de semana',
      porcentaje: 15,
      estado: 'ACTIVO',
      fechaInicio: '2026-08-01',
      fechaFin: '2026-08-31',
    },
    {
      id: 3,
      nombre: 'Promoción especial',
      porcentaje: 20,
      estado: 'INACTIVO',
      fechaInicio: '2026-05-01',
      fechaFin: '2026-05-15',
    },
  ]);

  // Manejadores de Eliminación
  const confirmarEliminacion = () => {
    if (!itemAEliminar) return;

    if (itemAEliminar.tipo === 'juegos') {
      setJuegos(juegos.filter((j) => j.id !== itemAEliminar.id));
    } else if (itemAEliminar.tipo === 'tarifas') {
      setTarifas(tarifas.filter((t) => t.id !== itemAEliminar.id));
    } else if (itemAEliminar.tipo === 'descuentos') {
      setDescuentos(descuentos.filter((d) => d.id !== itemAEliminar.id));
    }

    setItemAEliminar(null);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* MENÚ LATERAL */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          {/* LOGO */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="Nexus Games Logo"
              className="max-h-14 w-auto object-contain"
            />
          </div>

          {/* NAVEGACIÓN */}
          <nav className="space-y-2">
            <button
              onClick={() => setSeccion('juegos')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                seccion === 'juegos'
                  ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              🎮 Juegos
            </button>

            <button
              onClick={() => setSeccion('tarifas')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                seccion === 'tarifas'
                  ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              💰 Tarifas
            </button>

            <button
              onClick={() => setSeccion('descuentos')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                seccion === 'descuentos'
                  ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              🏷️ Descuentos
            </button>
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-4">
          <p className="text-xs font-semibold text-slate-200">
            Módulo: Inventario
          </p>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 overflow-y-auto p-8 bg-slate-950">
        {/* ENCABEZADO */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Gestión de Inventario
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Administración de juegos, tarifas y descuentos de Nexus Games.
          </p>
        </div>

        {/* ================= JUEGOS ================= */}
        {seccion === 'juegos' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Juegos registrados
                </h2>
                <p className="text-sm text-slate-400">
                  Productos disponibles dentro del catálogo.
                </p>
              </div>
              <button
                onClick={() => setMostrarFormularioJuego(true)}
                className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition"
              >
                + Agregar juego
              </button>
            </div>

            {/* FORMULARIO AGREGAR JUEGO */}
            {mostrarFormularioJuego && (
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Agregar nuevo juego
                    </h3>
                    <p className="text-sm text-slate-400">
                      Ingresa la información detallada del videojuego.
                    </p>
                  </div>
                  <button
                    onClick={() => setMostrarFormularioJuego(false)}
                    className="text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Nombre del juego
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Minecraft"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Categoría
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Aventura"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Precio
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Número de jugadores
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. 1-4 Jugadores"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Idioma
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Español / Inglés"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Desarrolladora
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Mojang Studios"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Edición
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Estándar / Deluxe"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Fecha de lanzamiento
                    </label>
                    <input
                      type="date"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm text-slate-300 mb-2">
                      Descripción
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Resumen del juego..."
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setMostrarFormularioJuego(false)}
                    className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-semibold"
                  >
                    Guardar juego
                  </button>
                </div>
              </div>
            )}

            {/* TARJETAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-xs uppercase font-semibold text-slate-400">
                  Juegos registrados
                </span>
                <p className="text-3xl font-bold text-purple-400 mt-2">
                  {juegos.length}
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-xs uppercase font-semibold text-slate-400">
                  Categorías activas
                </span>
                <p className="text-3xl font-bold text-lime-400 mt-2">
                  {new Set(juegos.map((j) => j.categoria)).size}
                </p>
              </div>
            </div>

            {/* TABLA DE JUEGOS */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Juego</th>
                    <th className="p-4">Categoría</th>
                    <th className="p-4">Precio</th>
                    <th className="p-4">Jugadores</th>
                    <th className="p-4">Edición</th>
                    <th className="p-4">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {juegos.map((juego) => (
                    <tr key={juego.id} className="hover:bg-slate-800/30">
                      <td className="p-4">#{juego.id}</td>
                      <td className="p-4 font-medium text-white">
                        {juego.nombre}
                      </td>
                      <td className="p-4">{juego.categoria}</td>
                      <td className="p-4 font-semibold text-lime-400">
                        Q {juego.precio.toFixed(2)}
                      </td>
                      <td className="p-4">{juego.numeroJugadores}</td>
                      <td className="p-4">{juego.edicion}</td>
                      <td className="p-4">
                        <button
                          onClick={() => setJuegoAEditar(juego)}
                          className="text-purple-400 hover:text-purple-300 mr-4 font-medium"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() =>
                            setItemAEliminar({
                              id: juego.id,
                              tipo: 'juegos',
                              nombre: juego.nombre,
                            })
                          }
                          className="text-red-400 hover:text-red-300 font-medium"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TARIFAS ================= */}
        {seccion === 'tarifas' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Tarifas</h2>
                <p className="text-sm text-slate-400">
                  Tarifas disponibles para la renta de videojuegos.
                </p>
              </div>
              <button
                onClick={() => setMostrarFormularioTarifa(true)}
                className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-semibold"
              >
                + Agregar tarifa
              </button>
            </div>

            {/* FORMULARIO AGREGAR TARIFA */}
            {mostrarFormularioTarifa && (
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Agregar nueva tarifa
                    </h3>
                    <p className="text-sm text-slate-400">
                      Ingresa la información de la tarifa de renta.
                    </p>
                  </div>
                  <button
                    onClick={() => setMostrarFormularioTarifa(false)}
                    className="text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Nombre de la tarifa
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Renta 3 días"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Precio
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm text-slate-300 mb-2">
                      Descripción
                    </label>
                    <textarea
                      placeholder="Ej. Renta del videojuego durante 3 días"
                      rows={3}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setMostrarFormularioTarifa(false)}
                    className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-semibold"
                  >
                    Guardar tarifa
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tarifas.map((tarifa) => (
                <div
                  key={tarifa.id}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {tarifa.nombre}
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">
                      {tarifa.descripcion}
                    </p>
                    <p className="text-2xl font-bold text-lime-400 mt-5">
                      Q {tarifa.precio.toFixed(2)}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex justify-between items-center">
                    <button
                      onClick={() => setTarifaAEditar(tarifa)}
                      className="text-sm text-purple-400 hover:text-purple-300 font-medium"
                    >
                      Editar tarifa
                    </button>
                    <button
                      onClick={() =>
                        setItemAEliminar({
                          id: tarifa.id,
                          tipo: 'tarifas',
                          nombre: tarifa.nombre,
                        })
                      }
                      className="text-sm text-red-400 hover:text-red-300 font-medium"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= DESCUENTOS ================= */}
        {seccion === 'descuentos' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Descuentos</h2>
                <p className="text-sm text-slate-400">
                  Promociones y descuentos disponibles.
                </p>
              </div>

              <button
                onClick={() => setMostrarFormularioDescuento(true)}
                className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-semibold"
              >
                + Agregar descuento
              </button>
            </div>

            {/* FORMULARIO AGREGAR DESCUENTO */}
            {mostrarFormularioDescuento && (
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Agregar nuevo descuento
                    </h3>
                    <p className="text-sm text-slate-400">
                      Ingresa la información de la promoción o descuento.
                    </p>
                  </div>
                  <button
                    onClick={() => setMostrarFormularioDescuento(false)}
                    className="text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Nombre del descuento
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Oferta de fin de semana"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Porcentaje de descuento
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      placeholder="Ej. 15"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Fecha de inicio
                    </label>
                    <input
                      type="date"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Fecha de fin
                    </label>
                    <input
                      type="date"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Estado
                    </label>
                    <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500">
                      <option value="ACTIVO">ACTIVO</option>
                      <option value="INACTIVO">INACTIVO</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setMostrarFormularioDescuento(false)}
                    className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-semibold"
                  >
                    Guardar descuento
                  </button>
                </div>
              </div>
            )}

            {/* TABLA DE DESCUENTOS */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Descuento</th>
                    <th className="p-4">Porcentaje</th>
                    <th className="p-4">Fecha Inicio</th>
                    <th className="p-4">Fecha Fin</th>
                    <th className="p-4">Estado</th>
                    <th className="p-4">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {descuentos.map((descuento) => (
                    <tr key={descuento.id} className="hover:bg-slate-800/30">
                      <td className="p-4">#{descuento.id}</td>
                      <td className="p-4 font-medium text-white">
                        {descuento.nombre}
                      </td>
                      <td className="p-4 font-bold text-purple-400">
                        {descuento.porcentaje}%
                      </td>
                      <td className="p-4 text-slate-300">
                        {descuento.fechaInicio}
                      </td>
                      <td className="p-4 text-slate-300">
                        {descuento.fechaFin}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            descuento.estado === 'ACTIVO'
                              ? 'bg-lime-400/10 text-lime-400'
                              : 'bg-red-400/10 text-red-400'
                          }`}
                        >
                          {descuento.estado}
                        </span>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => setDescuentoAEditar(descuento)}
                          className="text-purple-400 hover:text-purple-300 mr-4 font-medium"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() =>
                            setItemAEliminar({
                              id: descuento.id,
                              tipo: 'descuentos',
                              nombre: descuento.nombre,
                            })
                          }
                          className="text-red-400 hover:text-red-300 font-medium"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* ================= MODALES DE EDICIÓN ================= */}

      {/* EDITAR JUEGO */}
      {juegoAEditar && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">
                Editar Juego #{juegoAEditar.id}
              </h3>
              <button
                onClick={() => setJuegoAEditar(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Nombre</label>
                <input
                  type="text"
                  defaultValue={juegoAEditar.nombre}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Categoría</label>
                <input
                  type="text"
                  defaultValue={juegoAEditar.categoria}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Precio</label>
                <input
                  type="number"
                  defaultValue={juegoAEditar.precio}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Número de jugadores</label>
                <input
                  type="text"
                  defaultValue={juegoAEditar.numeroJugadores}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Idioma</label>
                <input
                  type="text"
                  defaultValue={juegoAEditar.idioma}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Desarrolladora</label>
                <input
                  type="text"
                  defaultValue={juegoAEditar.desarrolladora}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Edición</label>
                <input
                  type="text"
                  defaultValue={juegoAEditar.edicion}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Fecha de lanzamiento</label>
                <input
                  type="date"
                  defaultValue={juegoAEditar.fechaLanzamiento}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-slate-300 mb-2">Descripción</label>
                <textarea
                  rows={3}
                  defaultValue={juegoAEditar.descripcion}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500 resize-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setJuegoAEditar(null)}
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
              >
                Cancelar
              </button>
              <button
                onClick={() => setJuegoAEditar(null)}
                className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-semibold"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDITAR TARIFA */}
      {tarifaAEditar && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">
                Editar Tarifa #{tarifaAEditar.id}
              </h3>
              <button
                onClick={() => setTarifaAEditar(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Nombre de la tarifa</label>
                <input
                  type="text"
                  defaultValue={tarifaAEditar.nombre}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Precio</label>
                <input
                  type="number"
                  defaultValue={tarifaAEditar.precio}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Descripción</label>
                <textarea
                  rows={3}
                  defaultValue={tarifaAEditar.descripcion}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500 resize-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setTarifaAEditar(null)}
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
              >
                Cancelar
              </button>
              <button
                onClick={() => setTarifaAEditar(null)}
                className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-semibold"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDITAR DESCUENTO */}
      {descuentoAEditar && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">
                Editar Descuento #{descuentoAEditar.id}
              </h3>
              <button
                onClick={() => setDescuentoAEditar(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Nombre del descuento</label>
                <input
                  type="text"
                  defaultValue={descuentoAEditar.nombre}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Porcentaje (%)</label>
                <input
                  type="number"
                  defaultValue={descuentoAEditar.porcentaje}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Fecha Inicio</label>
                  <input
                    type="date"
                    defaultValue={descuentoAEditar.fechaInicio}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Fecha Fin</label>
                  <input
                    type="date"
                    defaultValue={descuentoAEditar.fechaFin}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Estado</label>
                <select
                  defaultValue={descuentoAEditar.estado}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
                >
                  <option value="ACTIVO">ACTIVO</option>
                  <option value="INACTIVO">INACTIVO</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setDescuentoAEditar(null)}
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
              >
                Cancelar
              </button>
              <button
                onClick={() => setDescuentoAEditar(null)}
                className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-semibold"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL DE ELIMINACIÓN ================= */}
      {itemAEliminar && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-2">
              ¿Eliminar registro?
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              ¿Estás seguro de que deseas eliminar &quot;<span className="text-white font-semibold">{itemAEliminar.nombre}</span>&quot;? Esta acción no se puede deshacer.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setItemAEliminar(null)}
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarEliminacion}
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-semibold text-white"
              >
                Confirmar eliminación
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}