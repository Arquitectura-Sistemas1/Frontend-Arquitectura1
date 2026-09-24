'use client';

import React, { useState, useEffect } from 'react';

type Seccion = 'juegos' | 'productos' | 'tarifas' | 'descuentos';

interface Juego {
  videojuego_id: number;
  plataforma_id: number;
  clasificacion_id: number;
  region_id: number;
  tarifa_id: number;
  titulo: string;
  edicion: string;
  fecha_lanzamiento: string;
  num_jugadores: number;
  descripcion?: string;
}

interface Tarifa {
  ID: number;
  PrecioVenta: number;
  PrecioRenta: number;
  DuracionRentaHoras: number;
}

interface Descuento {
  ID: number;
  Tipo: string;
  Valor: number;
  FechaInicio: string;
  FechaFin: string;
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
  const [precioVenta, setPrecioVenta] = useState('');
  const [precioRenta, setPrecioRenta] = useState('');
  const [duracionRentaHoras, setDuracionRentaHoras] = useState('');
  const [descuentos, setDescuentos] = useState<Descuento[]>([]);

// Estados para el formulario de Creación
const [tipoDescuento, setTipoDescuento] = useState('PORCENTAJE');
const [valorDescuento, setValorDescuento] = useState('');
const [fechaInicio, setFechaInicio] = useState('');
const [fechaFin, setFechaFin] = useState('');
  

//Peticion a la API para obtener los videojuegos
const [juegos, setJuegos] = useState<Juego[]>([]);
// Estados para el formulario de videojuego
const [titulo, setTitulo] = useState('');
const [edicion, setEdicion] = useState('');
const [fechaLanzamiento, setFechaLanzamiento] = useState('');
const [numeroJugadores, setNumeroJugadores] = useState('');
const [plataformaId, setPlataformaId] = useState('1');
const [clasificacionId, setClasificacionId] = useState('1');
const [regionId, setRegionId] = useState('1');
const [tarifaId, setTarifaId] = useState('1');
const [descuentoID, setDescuentoID] = useState('');
const guardarVideojuego = async () => {
  try {
    const res = await fetch('https://sedation-scribe-state.ngrok-free.dev/inv/crear-videojuegos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      credentials: 'include',
      body: JSON.stringify({
        Titulo: titulo,
        Edicion: edicion,
        Fecha_Lanzamiento: fechaLanzamiento,
        numero_jugadores: Number(numeroJugadores),
        Plataforma_id: Number(plataformaId),
        Clasificacion_id: Number(clasificacionId),
        Region_id: Number(regionId),
        Tarifa_id: Number(tarifaId),
      }),
    });

    if (res.ok) {
      setMostrarFormularioJuego(false);
      cargarJuegos();
    } else {
      const errorData = await res.json();
      console.error('Error desde Django:', errorData);
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};
// Función para obtener la lista desde la API
const cargarJuegos = async () => {
  try {
    setCargando(true);
    const res = await fetch('https://sedation-scribe-state.ngrok-free.dev/inv/videojuegos', {
      method: 'GET',
      credentials: 'include',
      headers: {
    'ngrok-skip-browser-warning': 'true',
    'Content-Type': 'application/json',
  },
    });
    if (res.ok) {
      const data = await res.json();
      setJuegos(data);
    }
  } catch (error) {
    console.error("Error al cargar juegos:", error);
  } finally {
    setCargando(false);
  }
};

useEffect(() => {
  cargarJuegos();
}, []);

 const guardarTarifa = async () => {
  try {
    const res = await fetch('https://sedation-scribe-state.ngrok-free.dev/financiero/crear-tarifa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      credentials: 'include',
      body: JSON.stringify({
        PrecioVenta: Number(precioVenta),
        PrecioRenta: Number(precioRenta),
        DuracionRentaHoras: Number(duracionRentaHoras),
      }),
    });

    if (res.ok) {
      // Limpia campos o cierra el modal si tienes un estado para ello
      setPrecioVenta('');
      setPrecioRenta('');
      setDuracionRentaHoras('');
      
      // Vuelve a cargar las tarifas desde la API
      cargarTarifas(); 
    } else {
      console.error('Error al guardar tarifa:', res.status, res.statusText);
      const errorText = await res.text();
      console.error('Detalle del error:', errorText);
    }
  } catch (error) {
    console.error('Error de red al guardar tarifa:', error);
  }
};

const [tarifas, setTarifas] = useState<Tarifa[]>([]);
const [cargando, setCargando] = useState<boolean>(false);

const cargarTarifas = async () => {
  try {
    setCargando(true);
    const res = await fetch('https://sedation-scribe-state.ngrok-free.dev/info/tarifas', {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (res.ok) {
      const data: Tarifa[] = await res.json();
      setTarifas(data);
    } else {
      console.error('Error al cargar tarifas:', res.status, res.statusText);
    }
  } catch (error) {
    console.error('Error de red al obtener tarifas:', error);
  } finally {
    setCargando(false);
  }
};

useEffect(() => {
  cargarTarifas();
}, []);

//DESCUENTOS
// 1. GET: Obtenemos los descuentos
const cargarDescuentos = async () => {
  try {
    const res = await fetch('https://sedation-scribe-state.ngrok-free.dev/info/descuentos', {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (res.ok) {
      const data: Descuento[] = await res.json();
      setDescuentos(data);
    } else {
      console.error('Error al cargar descuentos:', res.status);
    }
  } catch (error) {
    console.error('Error de red al obtener descuentos:', error);
  }
};
const crearDescuento = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch('https://sedation-scribe-state.ngrok-free.dev/financiero/crear-descuento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      credentials: 'include',
      body: JSON.stringify({
        Tipo: tipoDescuento,
        Valor: Number(valorDescuento),
        FechaInicio: new Date(fechaInicio).toISOString(),
        FechaFin: new Date(fechaFin).toISOString(),
      }),
    });

    if (res.ok) {
      setValorDescuento('');
      setFechaInicio('');
      setFechaFin('');
      cargarDescuentos();
    } else {
      console.error('Error al crear descuento:', res.status);
    }
  } catch (error) {
    console.error('Error de red al crear descuento:', error);
  }
};

// 3. POST: Asignar Descuento a un Videojuego
const asignarDescuento = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch('https://sedation-scribe-state.ngrok-free.dev/financiero/asignar-descuento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      credentials: 'include',
      body: JSON.stringify({
        VideojuegoID: Number(juegos[0]?.videojuego_id), // Aquí deberías reemplazar con el ID del videojuego seleccionado
        DescuentoID: Number(descuentoID),
      }),
    });

    if (res.ok) {
      setJuegos([]); // Limpiar la lista de juegos para forzar la recarga
      setDescuentoID('');
      alert('Descuento asignado correctamente al videojuego');
    } else {
      console.error('Error al asignar descuento:', res.status);
    }
  } catch (error) {
    console.error('Error de red al asignar descuento:', error);
  }
};

useEffect(() => {
  cargarDescuentos();
}, []);
//CUPONES
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

      {/* REGION */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Region
        </label>

        <input
          type="text"
          placeholder="Ej. Guatemala"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      {/* PLATAFORMA */}
      <div>
        <label className="block text-sm text-slate-300 mb-2">
          Plataforma
        </label>

        <input
          type="text"
          placeholder="Ej. PlayStation 5"
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
    onClick={guardarVideojuego}
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
      {new Set(juegos.map((juego) => juego.clasificacion_id)).size}
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
    <span className="text-xs uppercase font-semibold text-slate-400">
      Regiones registradas
    </span>

    <p className="text-3xl font-bold text-blue-400 mt-2">
      {new Set(juegos.map((juego) => juego.region_id)).size}
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
        <th className="p-4">Plataforma</th>
        <th className="p-4">Acciones</th>
        <th className="p-4">Region</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-slate-800">

      {juegos.map((juego, index) => (
        <tr key={juego.videojuego_id || index} className="hover:bg-slate-800/30">

          <td className="p-4">
            #{juego.videojuego_id}
          </td> 

          <td className="p-4 font-medium text-white">
            {juego.titulo}
          </td>

          <td className="p-4">
            {juego.clasificacion_id}
          </td>

          <td className="p-4">
            {juego.fecha_lanzamiento}
          </td>

          <td className="p-4">
            {juego.num_jugadores}
          </td>

          <td className="p-4">
            {juego.edicion}
          </td>

          <td className="p-4">
            {juego.plataforma_id}
          </td>
          <td className="p-4">
            {juego.region_id}
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
        onClick={guardarTarifa}
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
      key={tarifa.ID}
      className="bg-slate-900 border border-slate-800 rounded-xl p-6"
    >

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">
          Tarifa #{tarifa.ID}
        </h3>

        <span className="text-xs text-slate-500">
          {tarifa.DuracionRentaHoras} horas
        </span>
      </div>

      <div className="mt-5">

        <p className="text-xs uppercase text-slate-400">
          Precio de venta
        </p>

        <p className="text-2xl font-bold text-lime-400">
          Q {tarifa.PrecioVenta.toFixed(2)}
        </p>

      </div>

      <div className="mt-4">

        <p className="text-xs uppercase text-slate-400">
          Precio de renta
        </p>

        <p className="text-xl font-bold text-purple-400">
          Q {tarifa.PrecioRenta.toFixed(2)}
        </p>

      </div>

      <div className="mt-4">

        <p className="text-xs uppercase text-slate-400">
          Duración de renta
        </p>

        <p className="text-white">
          {tarifa.DuracionRentaHoras} horas
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
        type="button"
        onClick={() => setMostrarFormularioDescuento(true)}
        className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
      >
        + Agregar descuento
      </button>
    </div>

    {mostrarFormularioDescuento && (
      /* El <form> sólo envuelve la tarjeta del formulario */
      <form onSubmit={crearDescuento} className="bg-slate-900 border border-slate-800 rounded-xl p-6">

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
            type="button"
            onClick={() => setMostrarFormularioDescuento(false)}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* TIPO */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Tipo de descuento
            </label>
            <select
              value={tipoDescuento}
              onChange={(e) => setTipoDescuento(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
            >
              <option value="PORCENTAJE">PORCENTAJE</option>
              <option value="MONTO">MONTO_FIJO</option>
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
              value={valorDescuento}
              onChange={(e) => setValorDescuento(e.target.value)}
              placeholder="Ej. 15"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
              required
            />
          </div>

          {/* FECHA INICIO */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Fecha de inicio
            </label>
            <input
              type="datetime-local"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
              required
            />
          </div>

          {/* FECHA FIN */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Fecha de finalización
            </label>
            <input
              type="datetime-local"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
              required
            />
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={() => setMostrarFormularioDescuento(false)}
            className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm text-white"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-sm transition-colors"
          >
            Guardar Descuento
          </button>
        </div>

      </form> /* Cierre correcto del form */
    )}

    {/* TABLA DE DESCUENTOS */}
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
      <table className="w-full text-left text-sm text-slate-300">
        <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
          <tr>
            <th className="p-4">ID</th>
            <th className="p-4">Tipo</th>
            <th className="p-4">Valor</th>
            <th className="p-4">Fecha inicio</th>
            <th className="p-4">Fecha fin</th>
            <th className="p-4">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-800">
          {descuentos.map((descuento, index) => (
            <tr key={descuento.ID || index} className="hover:bg-slate-800/30">
              <td className="p-4">#{descuento.ID}</td>
              <td className="p-4">{descuento.Tipo}</td>
              <td className="p-4 font-semibold text-lime-400">
                {descuento.Tipo === 'PORCENTAJE'
                  ? `${descuento.Valor}%`
                  : `Q ${Number(descuento.Valor || 0).toFixed(2)}`}
              </td>
              <td className="p-4">
                {descuento.FechaInicio ? new Date(descuento.FechaInicio).toLocaleDateString() : 'N/A'}
              </td>
              <td className="p-4">
                {descuento.FechaFin ? new Date(descuento.FechaFin).toLocaleDateString() : 'N/A'}
              </td>
              <td className="p-4 whitespace-nowrap">
                <button type="button" className="text-purple-400 hover:text-purple-300 mr-4">
                  Editar
                </button>
                <button type="button" className="text-red-400 hover:text-red-300">
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