'use client';

import React, { useState } from 'react';

type Seccion = 'juegos' | 'tarifas' | 'descuentos';

interface Juego {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  estado: 'DISPONIBLE' | 'AGOTADO';
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
}

export default function Inventario() {
  const [seccion, setSeccion] = useState<Seccion>('juegos');

  // Datos temporales únicamente para mostrar el Frontend.
  // Backend reemplazará estos datos al conectar la API.
  const juegos: Juego[] = [
    {
      id: 1,
      nombre: 'Minecraft',
      categoria: 'Aventura',
      precio: 299.99,
      stock: 15,
      estado: 'DISPONIBLE',
    },
    {
      id: 2,
      nombre: 'Grand Theft Auto V',
      categoria: 'Acción',
      precio: 199.99,
      stock: 8,
      estado: 'DISPONIBLE',
    },
    {
      id: 3,
      nombre: 'EA Sports FC 26',
      categoria: 'Deportes',
      precio: 349.99,
      stock: 5,
      estado: 'DISPONIBLE',
    },
  ];

  const tarifas: Tarifa[] = [
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
  ];

  const descuentos: Descuento[] = [
    {
      id: 1,
      nombre: 'Oferta de bienvenida',
      porcentaje: 10,
      estado: 'ACTIVO',
    },
    {
      id: 2,
      nombre: 'Descuento fin de semana',
      porcentaje: 15,
      estado: 'ACTIVO',
    },
    {
      id: 3,
      nombre: 'Promoción especial',
      porcentaje: 20,
      estado: 'INACTIVO',
    },
  ];

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

              <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition">
                + Agregar juego
              </button>

            </div>

            {/* TARJETAS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

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
                  Unidades disponibles
                </span>

                <p className="text-3xl font-bold text-lime-400 mt-2">
                  {juegos.reduce((total, juego) => total + juego.stock, 0)}
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-xs uppercase font-semibold text-slate-400">
                  Productos agotados
                </span>

                <p className="text-3xl font-bold text-red-400 mt-2">
                  {juegos.filter((juego) => juego.stock === 0).length}
                </p>
              </div>

            </div>

            {/* TABLA */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

              <table className="w-full text-left text-sm text-slate-300">

                <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Juego</th>
                    <th className="p-4">Categoría</th>
                    <th className="p-4">Precio</th>
                    <th className="p-4">Stock</th>
                    <th className="p-4">Estado</th>
                    <th className="p-4">Acciones</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-800">

                  {juegos.map((juego) => (

                    <tr key={juego.id} className="hover:bg-slate-800/30">

                      <td className="p-4">
                        #{juego.id}
                      </td>

                      <td className="p-4 font-medium text-white">
                        {juego.nombre}
                      </td>

                      <td className="p-4">
                        {juego.categoria}
                      </td>

                      <td className="p-4 font-semibold text-lime-400">
                        Q {juego.precio.toFixed(2)}
                      </td>

                      <td className="p-4">
                        {juego.stock}
                      </td>

                      <td className="p-4">
                        <span className="px-2 py-1 rounded text-xs bg-lime-400/10 text-lime-400">
                          {juego.estado}
                        </span>
                      </td>

                      <td className="p-4">
                        <button className="text-purple-400 hover:text-purple-300 mr-4">
                          Editar
                        </button>

                        <button className="text-red-400 hover:text-red-300">
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
                <h2 className="text-xl font-bold text-white">
                  Tarifas
                </h2>

                <p className="text-sm text-slate-400">
                  Tarifas disponibles para la renta de videojuegos.
                </p>
              </div>

              <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-semibold">
                + Agregar tarifa
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {tarifas.map((tarifa) => (

                <div
                  key={tarifa.id}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6"
                >

                  <h3 className="text-lg font-bold text-white">
                    {tarifa.nombre}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    {tarifa.descripcion}
                  </p>

                  <p className="text-2xl font-bold text-lime-400 mt-5">
                    Q {tarifa.precio.toFixed(2)}
                  </p>

                  <button className="mt-5 text-sm text-purple-400 hover:text-purple-300">
                    Editar tarifa
                  </button>

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
                <h2 className="text-xl font-bold text-white">
                  Descuentos
                </h2>

                <p className="text-sm text-slate-400">
                  Promociones y descuentos disponibles.
                </p>
              </div>

              <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-semibold">
                + Agregar descuento
              </button>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

              <table className="w-full text-left text-sm text-slate-300">

                <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">

                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Descuento</th>
                    <th className="p-4">Porcentaje</th>
                    <th className="p-4">Estado</th>
                    <th className="p-4">Acciones</th>
                  </tr>

                </thead>

                <tbody className="divide-y divide-slate-800">

                  {descuentos.map((descuento) => (

                    <tr key={descuento.id}>

                      <td className="p-4">
                        #{descuento.id}
                      </td>

                      <td className="p-4 font-medium text-white">
                        {descuento.nombre}
                      </td>

                      <td className="p-4 font-bold text-purple-400">
                        {descuento.porcentaje}%
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

                        <button className="text-purple-400 hover:text-purple-300 mr-4">
                          Editar
                        </button>

                        <button className="text-red-400 hover:text-red-300">
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

    </div>
  );
}