'use client';

import React, { useState } from 'react';

type Seccion = 'juegos' | 'productos' | 'tarifas' | 'descuentos';

interface Juego {
  id: number;
  titulo: string;
  clasificacion: string;
  fechaLanzamiento: string;
  numeroJugadores: number;
  edicion: string;
  idioma: string;
}

interface Tarifa {
  id: number;
  precioVenta: number;
  precioRenta: number;
  duracionRentaHoras: number;
}

interface Descuento {
  id: number;
  producto: string;
  tipo: string;
  valor: number;
  fechaInicio: string;
  fechaFin: string;
}

interface Producto {
  id: number;
  videojuego: string;
  plataforma: string;
  region: string;
  tarifa: string;
  sku: string;
}

export default function Inventario() {
  const [seccion, setSeccion] = useState<Seccion>('juegos');
  const [mostrarFormularioJuego, setMostrarFormularioJuego] = useState(false);
  const [mostrarFormularioProducto, setMostrarFormularioProducto] = useState(false);
  const [mostrarFormularioTarifa, setMostrarFormularioTarifa] = useState(false);
  const [mostrarFormularioDescuento, setMostrarFormularioDescuento] = useState(false);
  

  // Datos temporales únicamente para mostrar el Frontend.
  // Backend reemplazará estos datos al conectar la API.
 const juegos: Juego[] = [
  {
    id: 1,
    titulo: 'Minecraft',
    clasificacion: 'E10+',
    fechaLanzamiento: '2011-11-18',
    numeroJugadores: 8,
    edicion: 'Standard',
    idioma: 'Español',
  },
  {
    id: 2,
    titulo: 'Grand Theft Auto V',
    clasificacion: 'M',
    fechaLanzamiento: '2013-09-17',
    numeroJugadores: 30,
    edicion: 'Premium',
    idioma: 'Español',
  },
  {
    id: 3,
    titulo: 'EA Sports FC 26',
    clasificacion: 'E',
    fechaLanzamiento: '2025-09-26',
    numeroJugadores: 22,
    edicion: 'Standard',
    idioma: 'Español',
  },
];

 const tarifas: Tarifa[] = [
  {
    id: 1,
    precioVenta: 450,
    precioRenta: 45,
    duracionRentaHoras: 24,
  },
  {
    id: 2,
    precioVenta: 550,
    precioRenta: 70,
    duracionRentaHoras: 48,
  },
  {
    id: 3,
    precioVenta: 650,
    precioRenta: 100,
    duracionRentaHoras: 72,
  },
  ];

 const descuentos: Descuento[] = [
  {
    id: 1,
    producto: 'MINE-PC-GT-001',
    tipo: 'PORCENTAJE',
    valor: 15,
    fechaInicio: '2026-09-01',
    fechaFin: '2026-09-15',
  },
  {
    id: 2,
    producto: 'GTAV-PC-GT-001',
    tipo: 'PORCENTAJE',
    valor: 20,
    fechaInicio: '2026-09-05',
    fechaFin: '2026-09-20',
  },
  {
    id: 3,
    producto: 'FC26-PC-GT-001',
    tipo: 'MONTO',
    valor: 50,
    fechaInicio: '2026-09-10',
    fechaFin: '2026-09-30',
  },
];

const productos: Producto[] = [
  {
    id: 1,
    videojuego: 'Minecraft',
    plataforma: 'PC',
    region: 'Guatemala',
    tarifa: 'Estándar',
    sku: 'MINE-PC-GT-001',
  },
  {
    id: 2,
    videojuego: 'Grand Theft Auto V',
    plataforma: 'PC',
    region: 'Guatemala',
    tarifa: 'Estándar',
    sku: 'GTAV-PC-GT-001',
  },
  {
    id: 3,
    videojuego: 'EA Sports FC 26',
    plataforma: 'PC',
    region: 'Guatemala',
    tarifa: 'Premium',
    sku: 'FC26-PC-GT-001',
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
              onClick={() => setSeccion('productos')}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                  seccion === 'productos'
                  ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold'
                 : 'text-slate-400 hover:bg-slate-800'
                    }`}
              >
                     📦 Productos
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

           {mostrarFormularioJuego && (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-xl font-bold text-white">
          Agregar nuevo videojuego
        </h3>

        <p className="text-sm text-slate-400">
          Ingresa la información general del videojuego.
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

      {/* TÍTULO */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Título
        </label>

        <input
          type="text"
          placeholder="Ej. Minecraft"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {/* CLASIFICACIÓN */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Clasificación
        </label>

        <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500">
          <option>E</option>
          <option>E10+</option>
          <option>T</option>
          <option>M</option>
        </select>
      </div>

      {/* FECHA */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Fecha de lanzamiento
        </label>

        <input
          type="date"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {/* NÚMERO DE JUGADORES */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Número de jugadores
        </label>

        <input
          type="number"
          min="1"
          placeholder="Ej. 4"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {/* EDICIÓN */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Edición
        </label>

        <input
          type="text"
          placeholder="Ej. Standard"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {/* IDIOMA */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Idioma
        </label>

        <input
          type="text"
          placeholder="Ej. Español"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {/* DESCRIPCIÓN */}
      <div className="md:col-span-2">
        <label className="block text-sm text-slate-300 mb-2">
          Descripción
        </label>

        <textarea
          rows={4}
          placeholder="Descripción del videojuego..."
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
        Guardar videojuego
      </button>

    </div>

  </div>
)}    

    {/* RESUMEN DE VIDEOJUEGOS */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
    <span className="text-xs uppercase font-semibold text-slate-400">
      Videojuegos registrados
    </span>

    <p className="text-3xl font-bold text-purple-400 mt-2">
      {juegos.length}
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
    <span className="text-xs uppercase font-semibold text-slate-400">
      Clasificaciones
    </span>

    <p className="text-3xl font-bold text-lime-400 mt-2">
      {new Set(juegos.map((juego) => juego.clasificacion)).size}
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
    <span className="text-xs uppercase font-semibold text-slate-400">
      Idiomas registrados
    </span>

    <p className="text-3xl font-bold text-blue-400 mt-2">
      {new Set(juegos.map((juego) => juego.idioma)).size}
    </p>
  </div>

</div>
           {/* TABLA DE VIDEOJUEGOS */}
<div className="bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">

  <table className="w-full text-left text-sm text-slate-300">

    <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
      <tr>
        <th className="p-4">ID</th>
        <th className="p-4">Título</th>
        <th className="p-4">Clasificación</th>
        <th className="p-4">Lanzamiento</th>
        <th className="p-4">Jugadores</th>
        <th className="p-4">Edición</th>
        <th className="p-4">Idioma</th>
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
            {juego.titulo}
          </td>

          <td className="p-4">
            {juego.clasificacion}
          </td>

          <td className="p-4">
            {juego.fechaLanzamiento}
          </td>

          <td className="p-4">
            {juego.numeroJugadores}
          </td>

          <td className="p-4">
            {juego.edicion}
          </td>

          <td className="p-4">
            {juego.idioma}
          </td>

          <td className="p-4 whitespace-nowrap">
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

{/* ================= PRODUCTOS ================= */}

{seccion === 'productos' && (
  <div className="space-y-6">

    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold text-white">
          Productos registrados
        </h2>

        <p className="text-sm text-slate-400">
          Productos asociados a videojuegos, plataformas, regiones y tarifas.
        </p>
      </div>

      <button
        onClick={() => setMostrarFormularioProducto(true)}
        className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition"
      >
        + Agregar producto
      </button>
    </div>
{mostrarFormularioProducto && (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-xl font-bold text-white">
          Agregar nuevo producto
        </h3>

        <p className="text-sm text-slate-400">
          Asocia un videojuego con su plataforma, región y tarifa.
        </p>
      </div>

      <button
        onClick={() => setMostrarFormularioProducto(false)}
        className="text-slate-400 hover:text-white"
      >
        ✕
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Videojuego
        </label>

        <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500">
          <option>Minecraft</option>
          <option>Grand Theft Auto V</option>
          <option>EA Sports FC 26</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Plataforma
        </label>

        <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500">
          <option>PC</option>
          <option>PlayStation 5</option>
          <option>Xbox Series X|S</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Región
        </label>

        <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500">
          <option>Guatemala</option>
          <option>Latinoamérica</option>
          <option>Global</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Tarifa
        </label>

        <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500">
          <option>Estándar</option>
          <option>Premium</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm text-slate-300 mb-2">
          SKU
        </label>

        <input
          type="text"
          placeholder="Ej. MINE-PC-GT-001"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

    </div>

    <div className="flex justify-end gap-3 mt-6">
      <button
        onClick={() => setMostrarFormularioProducto(false)}
        className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
      >
        Cancelar
      </button>

      <button
        type="button"
        className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-semibold"
      >
        Guardar producto
      </button>
    </div>

  </div>
)}
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

      <table className="w-full text-left text-sm text-slate-300">

        <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
          <tr>
            <th className="p-4">ID</th>
            <th className="p-4">SKU</th>
            <th className="p-4">Videojuego</th>
            <th className="p-4">Plataforma</th>
            <th className="p-4">Región</th>
            <th className="p-4">Tarifa</th>
            <th className="p-4">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-800">

          {productos.map((producto) => (
            <tr
              key={producto.id}
              className="hover:bg-slate-800/30"
            >
              <td className="p-4">
                #{producto.id}
              </td>

              <td className="p-4 font-mono text-purple-400">
                {producto.sku}
              </td>

              <td className="p-4 font-medium text-white">
                {producto.videojuego}
              </td>

              <td className="p-4">
                {producto.plataforma}
              </td>

              <td className="p-4">
                {producto.region}
              </td>

              <td className="p-4">
                {producto.tarifa}
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

              <button
                 onClick={() => setMostrarFormularioTarifa(true)}
                 className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-semibold"
              >
              + Agregar tarifa
              </button>

            </div>
{mostrarFormularioTarifa && (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-xl font-bold text-white">
          Agregar nueva tarifa
        </h3>

        <p className="text-sm text-slate-400">
          Ingresa los precios y la duración de la tarifa.
        </p>
      </div>

      <button
        onClick={() => setMostrarFormularioTarifa(false)}
        className="text-slate-400 hover:text-white"
      >
        ✕
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* PRECIO DE VENTA */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Precio de venta
        </label>

        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {/* PRECIO DE RENTA */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Precio de renta
        </label>

        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {/* DURACIÓN */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Duración de renta (horas)
        </label>

        <input
          type="number"
          min="1"
          placeholder="Ej. 24"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
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
            {/* TARJETAS DE TARIFAS */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

  {tarifas.map((tarifa) => (

    <div
      key={tarifa.id}
      className="bg-slate-900 border border-slate-800 rounded-xl p-6"
    >

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">
          Tarifa #{tarifa.id}
        </h3>

        <span className="text-xs text-slate-500">
          {tarifa.duracionRentaHoras} horas
        </span>
      </div>

      <div className="mt-5">

        <p className="text-xs uppercase text-slate-400">
          Precio de venta
        </p>

        <p className="text-2xl font-bold text-lime-400">
          Q {tarifa.precioVenta.toFixed(2)}
        </p>

      </div>

      <div className="mt-4">

        <p className="text-xs uppercase text-slate-400">
          Precio de renta
        </p>

        <p className="text-xl font-bold text-purple-400">
          Q {tarifa.precioRenta.toFixed(2)}
        </p>

      </div>

      <div className="mt-4">

        <p className="text-xs uppercase text-slate-400">
          Duración de renta
        </p>

        <p className="text-white">
          {tarifa.duracionRentaHoras} horas
        </p>

      </div>

      <div className="flex gap-4 mt-5">

        <button className="text-sm text-purple-400 hover:text-purple-300">
          Editar
        </button>

        <button className="text-sm text-red-400 hover:text-red-300">
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
                <h2 className="text-xl font-bold text-white">
                  Descuentos
                </h2>

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
            
{mostrarFormularioDescuento && (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-xl font-bold text-white">
          Agregar nuevo descuento
        </h3>

        <p className="text-sm text-slate-400">
          Asigna un descuento a un producto.
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

      {/* PRODUCTO */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Producto
        </label>

        <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500">
          <option>MINE-PC-GT-001</option>
          <option>GTAV-PC-GT-001</option>
          <option>FC26-PC-GT-001</option>
        </select>
      </div>

      {/* TIPO */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Tipo de descuento
        </label>

        <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500">
          <option>PORCENTAJE</option>
          <option>MONTO</option>
        </select>
      </div>

      {/* VALOR */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Valor
        </label>

        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Ej. 15"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {/* FECHA INICIO */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Fecha de inicio
        </label>

        <input
          type="datetime-local"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {/* FECHA FIN */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Fecha de finalización
        </label>

        <input
          type="datetime-local"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
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
        <th className="p-4">Producto</th>
        <th className="p-4">Tipo</th>
        <th className="p-4">Valor</th>
        <th className="p-4">Fecha inicio</th>
        <th className="p-4">Fecha fin</th>
        <th className="p-4">Acciones</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-slate-800">

      {descuentos.map((descuento) => (

        <tr
          key={descuento.id}
          className="hover:bg-slate-800/30"
        >

          <td className="p-4">
            #{descuento.id}
          </td>

          <td className="p-4 font-mono text-purple-400">
            {descuento.producto}
          </td>

          <td className="p-4">
            {descuento.tipo}
          </td>

          <td className="p-4 font-semibold text-lime-400">
            {descuento.tipo === 'PORCENTAJE'
              ? `${descuento.valor}%`
              : `Q ${descuento.valor.toFixed(2)}`}
          </td>

          <td className="p-4">
            {descuento.fechaInicio}
          </td>

          <td className="p-4">
            {descuento.fechaFin}
          </td>

          <td className="p-4 whitespace-nowrap">

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