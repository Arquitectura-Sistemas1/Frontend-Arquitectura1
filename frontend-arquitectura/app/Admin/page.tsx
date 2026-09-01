'use client';

import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

interface Cliente {
  id: number;
  nombre: string;
  correo: string;
  estado: 'ACTIVO' | 'SUSPENDIDO';
  comprasRealizadas: number;
}

interface Transaccion {
  id: string;
  cliente: string;
  tipo: 'VENTA' | 'RENTA';
  juego: string;
  monto: number;
  fecha: string;
  estado: 'COMPLETADO' | 'PENDIENTE' | 'DEVUELTO';
}

// Actualizacion de datos de empleados con campos adicionales
interface Empleado {
  id: number;
  nombres: string;
  apellidos: string;
  cui: string;
  usuario: string;
  contrasena: string;
  correo: string;
  telefono: string;
  rol_id: number;
  estado: 'ACTIVO' | 'ARCHIVADO';
}

// Datos de prueba para los gráficos
const datosIngresosMensuales = [
  { mes: 'Ene', ventas: 12400, rentas: 2100 },
  { mes: 'Feb', ventas: 15300, rentas: 2800 },
  { mes: 'Mar', ventas: 18100, rentas: 3200 },
  { mes: 'Abr', ventas: 14200, rentas: 2900 },
  { mes: 'May', ventas: 21000, rentas: 3800 },
  { mes: 'Jun', ventas: 19500, rentas: 3500 },
  { mes: 'Jul', ventas: 22800, rentas: 4000 },
  { mes: 'Ago', ventas: 24850, rentas: 4120 },
];

const datosCategorias = [
  { categoria: 'Acción', ventas: 45, rentas: 28 },
  { categoria: 'RPGs', ventas: 32, rentas: 15 },
  { categoria: 'Deportes', ventas: 28, rentas: 40 },
  { categoria: 'Estrategia', ventas: 18, rentas: 10 },
  { categoria: 'Aventura', ventas: 38, rentas: 22 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'estadisticas' | 'clientes' | 'transacciones' | 'reportes' | 'empleados'>('estadisticas');

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [transacciones, setTransacciones] = useState<Transaccion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // ESTADOS ACTUALIZADOS PARA EMPLEADOS 
  const [empleados, setEmpleados] = useState<Empleado[]>([
    {
      id: 1,
      nombres: 'Marcos',
      apellidos: 'Solís',
      cui: '2540123450101',
      usuario: 'msolis',
      contrasena: '••••••••',
      correo: 'marcos@nexus.com',
      telefono: '55551234',
      rol_id: 2,
      estado: 'ACTIVO'
    },
    {
      id: 2,
      nombres: 'Lucía',
      apellidos: 'Gómez',
      cui: '1890987650101',
      usuario: 'lgomez',
      contrasena: '••••••••',
      correo: 'lucia@nexus.com',
      telefono: '44445555',
      rol_id: 1,
      estado: 'ACTIVO'
    },
    {
      id: 3,
      nombres: 'Roberto',
      apellidos: 'Cano',
      cui: '3010456780101',
      usuario: 'rcano',
      contrasena: '••••••••',
      correo: 'roberto@nexus.com',
      telefono: '33332222',
      rol_id: 3,
      estado: 'ARCHIVADO'
    }
  ]);

  const [busquedaEmpleado, setBusquedaEmpleado] = useState('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [empleadoEditando, setEmpleadoEditando] = useState<Empleado | null>(null);

  // Formulario adaptado a todos los campos requeridos
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    cui: '',
    usuario: '',
    contrasena: '',
    correo: '',
    telefono: '',
    rol_id: 1
  });

  const API_URL = 'http://localhost:8080/api';

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        const [resClientes, resTransacciones] = await Promise.all([
          fetch(`${API_URL}/clientes`),
          fetch(`${API_URL}/transacciones`)
        ]);

        if (!resClientes.ok || !resTransacciones.ok) {
          throw new Error('API no disponible');
        }

        const dataClientes = await resClientes.json();
        const dataTransacciones = await resTransacciones.json();

        setClientes(dataClientes);
        setTransacciones(dataTransacciones);
      } catch (err) {
        setClientes([
          { id: 1, nombre: 'Carlos López', correo: 'carlos@gmail.com', estado: 'ACTIVO', comprasRealizadas: 5 },
          { id: 2, nombre: 'Ana Martínez', correo: 'ana.m@gmail.com', estado: 'ACTIVO', comprasRealizadas: 12 },
          { id: 3, nombre: 'Juan Pérez', correo: 'juanp@gmail.com', estado: 'SUSPENDIDO', comprasRealizadas: 1 }
        ]);

        setTransacciones([
          { id: 'TX-1001', cliente: 'Carlos López', tipo: 'VENTA', juego: 'Call of Duty: Modern Warfare', monto: 350.00, fecha: '2026-08-25', estado: 'COMPLETADO' },
          { id: 'TX-1002', cliente: 'Ana Martínez', tipo: 'RENTA', juego: 'Helldivers 2', monto: 45.00, fecha: '2026-08-26', estado: 'COMPLETADO' },
          { id: 'TX-1003', cliente: 'Juan Pérez', tipo: 'VENTA', juego: 'Roblox Gift Card', monto: 100.00, fecha: '2026-08-27', estado: 'PENDIENTE' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  // CRUD de empleados 
  const abrirModalCrear = () => {
    setEmpleadoEditando(null);
    setFormData({
      nombres: '',
      apellidos: '',
      cui: '',
      usuario: '',
      contrasena: '',
      correo: '',
      telefono: '',
      rol_id: 1
    });
    setIsModalOpen(true);
  };

  const abrirModalEditar = (emp: Empleado) => {
    setEmpleadoEditando(emp);
    setFormData({
      nombres: emp.nombres,
      apellidos: emp.apellidos,
      cui: emp.cui,
      usuario: emp.usuario,
      contrasena: emp.contrasena,
      correo: emp.correo,
      telefono: emp.telefono,
      rol_id: emp.rol_id
    });
    setIsModalOpen(true);
  };

  const guardarEmpleado = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombres || !formData.apellidos || !formData.correo || !formData.usuario) return;

    if (empleadoEditando) {
      setEmpleados(empleados.map(emp => 
        emp.id === empleadoEditando.id 
          ? { ...emp, ...formData, rol_id: Number(formData.rol_id) }
          : emp
      ));
    } else {
      const nuevoEmpleado: Empleado = {
        id: empleados.length > 0 ? Math.max(...empleados.map(e => e.id)) + 1 : 1,
        ...formData,
        rol_id: Number(formData.rol_id),
        estado: 'ACTIVO'
      };
      setEmpleados([...empleados, nuevoEmpleado]);
    }

    setIsModalOpen(false);
  };

  const alternarEstadoEmpleado = (id: number) => {
    setEmpleados(empleados.map(emp => {
      if (emp.id === id) {
        return {
          ...emp,
          estado: emp.estado === 'ACTIVO' ? 'ARCHIVADO' : 'ACTIVO'
        };
      }
      return emp;
    }));
  };

  const obtenerNombreRol = (rol_id: number) => {
    switch (rol_id) {
      case 1: return 'Admin';
      case 2: return 'Soporte';
      case 3: return 'Inventario';
      default: return 'Sin Rol';
    }
  };

  const empleadosFiltrados = empleados.filter(e => 
    e.nombres.toLowerCase().includes(busquedaEmpleado.toLowerCase()) ||
    e.apellidos.toLowerCase().includes(busquedaEmpleado.toLowerCase()) ||
    e.usuario.toLowerCase().includes(busquedaEmpleado.toLowerCase()) ||
    e.correo.toLowerCase().includes(busquedaEmpleado.toLowerCase()) ||
    e.cui.includes(busquedaEmpleado)
  );

  const descargarReportePDF = async (tipoReporte: string) => {
    try {
      alert(`Iniciando descarga del reporte PDF: ${tipoReporte}`);
    } catch (error) {
      console.error("Error al descargar el PDF:", error);
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      {/* SIDEBAR DE NAVEGACIÓN */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <div className="mb-8 flex justify-center">
            <img src="/logo.png" alt="Nexus Games Logo" className="h-24 w-auto object-contain" />
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('estadisticas')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                activeTab === 'estadisticas' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              📊 Panel Estadísticas
            </button>

            <button
              onClick={() => setActiveTab('clientes')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                activeTab === 'clientes' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              👥 Gestión Cliente
            </button>

            <button
              onClick={() => setActiveTab('empleados')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                activeTab === 'empleados' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              👔 Gestión Empleados
            </button>

            <button
              onClick={() => setActiveTab('transacciones')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                activeTab === 'transacciones' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              💳 Historial Transacciones
            </button>

            <button
              onClick={() => setActiveTab('reportes')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                activeTab === 'reportes' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              📑 Panel de Reportes
            </button>
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-4">
          <p className="text-xs font-semibold text-slate-200">Rol: Administrador</p>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="flex-1 overflow-y-auto p-8 bg-slate-950">
        {loading ? (
          <div className="flex h-64 items-center justify-center text-slate-400 text-sm">
            <div className="w-5 h-5 border-2 border-lime-400 border-t-transparent rounded-full animate-spin mr-3" />
            Cargando interfaz...
          </div>
        ) : (
          <>
            {/*ESTADÍSTICAS CON GRÁFICOS */}
            {activeTab === 'estadisticas' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">Panel de Estadísticas Globales</h2>
                  <p className="text-slate-400 text-sm">Resumen de ingresos, actividad y métricas clave del sistema.</p>
                </div>

                {/* TARJETAS DE MÉTRICAS */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <span className="text-xs font-semibold uppercase text-slate-400">Ventas Totales</span>
                    <p className="text-2xl font-extrabold text-lime-400 mt-2">Q 24,850.00</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <span className="text-xs font-semibold uppercase text-slate-400">Ingresos por Rentas</span>
                    <p className="text-2xl font-extrabold text-purple-400 mt-2">Q 4,120.00</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <span className="text-xs font-semibold uppercase text-slate-400">Clientes Activos</span>
                    <p className="text-2xl font-extrabold text-blue-400 mt-2">{clientes.length}</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <span className="text-xs font-semibold uppercase text-slate-400">Rentabilidad</span>
                    <p className="text-2xl font-extrabold text-amber-400 mt-2">88.5%</p>
                  </div>
                </div>

                {/* SECCIÓN DE GRÁFICOS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
                    <div>
                      <h3 className="font-bold text-white text-base">Tendencia de Ingresos Mensuales</h3>
                      <p className="text-slate-400 text-xs">Comparativa entre ventas directas e ingresos por rentas (Q)</p>
                    </div>
                    <div className="h-72 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={datosIngresosMensuales} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#a3e635" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#a3e635" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorRentas" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#c084fc" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#c084fc" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                          <XAxis dataKey="mes" stroke="#94a3b8" fontSize={12} />
                          <YAxis stroke="#94a3b8" fontSize={12} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                            formatter={(value: any) => [`Q ${value}`, '']}
                          />
                          <Legend />
                          <Area type="monotone" dataKey="ventas" name="Ventas" stroke="#a3e635" fillOpacity={1} fill="url(#colorVentas)" />
                          <Area type="monotone" dataKey="rentas" name="Rentas" stroke="#c084fc" fillOpacity={1} fill="url(#colorRentas)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
                    <div>
                      <h3 className="font-bold text-white text-base">Operaciones por Categoría de Juego</h3>
                      <p className="text-slate-400 text-xs">Número de unidades vendidas vs. rentadas por género</p>
                    </div>
                    <div className="h-72 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={datosCategorias} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                          <XAxis dataKey="categoria" stroke="#94a3b8" fontSize={12} />
                          <YAxis stroke="#94a3b8" fontSize={12} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                          />
                          <Legend />
                          <Bar dataKey="ventas" name="Ventas Directas" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="rentas" name="Rentas de Juegos" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. GESTIÓN CLIENTE */}
            {activeTab === 'clientes' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Gestión de Clientes</h2>
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-sm text-slate-300">
                    <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
                      <tr>
                        <th className="p-4">ID</th>
                        <th className="p-4">Nombre</th>
                        <th className="p-4">Correo</th>
                        <th className="p-4">Estado</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {clientes.map((c) => (
                        <tr key={c.id}>
                          <td className="p-4">#{c.id}</td>
                          <td className="p-4 font-medium text-white">{c.nombre}</td>
                          <td className="p-4">{c.correo}</td>
                          <td className="p-4">
                            <span className="px-2 py-1 rounded text-xs bg-lime-400/10 text-lime-400">
                              {c.estado}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. GESTIÓN EMPLEADOS TABLA CON COLUMNAS ACTUALIZADAS */}
            {activeTab === 'empleados' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Gestión de Empleados</h2>
                    <p className="text-slate-400 text-xs">Administra las cuentas de los colaboradores de Nexus Games.</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Buscar empleado..."
                      value={busquedaEmpleado}
                      onChange={(e) => setBusquedaEmpleado(e.target.value)}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 w-48"
                    />
                    <button
                      onClick={abrirModalCrear}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition"
                    >
                      + Agregar Empleado
                    </button>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-300">
                    <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
                      <tr>
                        <th className="p-4">ID</th>
                        <th className="p-4">Nombres</th>
                        <th className="p-4">Apellidos</th>
                        <th className="p-4">Cui</th>
                        <th className="p-4">Usuario</th>
                        <th className="p-4">Contraseña</th>
                        <th className="p-4">Correo</th>
                        <th className="p-4">Telefono</th>
                        <th className="p-4">Rol</th>
                        <th className="p-4">Estado</th>
                        <th className="p-4 text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {empleadosFiltrados.map((emp) => (
                        <tr key={emp.id} className="hover:bg-slate-800/40">
                          <td className="p-4">#{emp.id}</td>
                          <td className="p-4 font-medium text-white">{emp.nombres}</td>
                          <td className="p-4 font-medium text-white">{emp.apellidos}</td>
                          <td className="p-4 text-slate-400">{emp.cui}</td>
                          <td className="p-4 text-purple-400 font-medium">@{emp.usuario}</td>
                          <td className="p-4 text-slate-500 font-mono">••••••••</td>
                          <td className="p-4 text-slate-400">{emp.correo}</td>
                          <td className="p-4 text-slate-400">{emp.telefono}</td>
                          <td className="p-4 font-semibold text-purple-300">{obtenerNombreRol(emp.rol_id)}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              emp.estado === 'ACTIVO' ? 'bg-lime-400/10 text-lime-400' : 'bg-red-400/10 text-red-400'
                            }`}>
                              {emp.estado}
                            </span>
                          </td>
                          <td className="p-4 flex justify-center gap-2">
                            <button
                              onClick={() => abrirModalEditar(emp)}
                              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => alternarEstadoEmpleado(emp.id)}
                              className={`px-3 py-1 text-xs rounded-lg transition ${
                                emp.estado === 'ACTIVO' 
                                  ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400' 
                                  : 'bg-lime-500/10 hover:bg-lime-500/20 text-lime-400'
                              }`}
                            >
                              {emp.estado === 'ACTIVO' ? 'Archivar' : 'Activar'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 4. TRANSACCIONES */}
            {activeTab === 'transacciones' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Historial Global de Transacciones</h2>
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-sm text-slate-300">
                    <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
                      <tr>
                        <th className="p-4">ID Transacción</th>
                        <th className="p-4">Cliente</th>
                        <th className="p-4">Tipo</th>
                        <th className="p-4">Monto</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {transacciones.map((tx) => (
                        <tr key={tx.id}>
                          <td className="p-4">{tx.id}</td>
                          <td className="p-4 font-medium text-white">{tx.cliente}</td>
                          <td className="p-4">{tx.tipo}</td>
                          <td className="p-4 font-bold text-lime-400">Q {tx.monto.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 5. REPORTES */}
            {activeTab === 'reportes' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Panel de Reportes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-lg">Reporte Financiero</h3>
                      <p className="text-slate-400 text-xs mt-1">Resumen general de ingresos, rentas y ventas acumuladas.</p>
                    </div>
                    <button 
                      onClick={() => descargarReportePDF('Financiero')}
                      className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-lg text-xs font-bold transition"
                    >
                      Exportar PDF
                    </button>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-lg">Reporte de Clientes</h3>
                      <p className="text-slate-400 text-xs mt-1">Listado detallado de actividad y estado de usuarios registrados.</p>
                    </div>
                    <button 
                      onClick={() => descargarReportePDF('Clientes')}
                      className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-lg text-xs font-bold transition"
                    >
                      Exportar PDF
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* MODAL EMPLEADO */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white">
              {empleadoEditando ? 'Editar Empleado' : 'Agregar Nuevo Empleado'}
            </h3>

            <form onSubmit={guardarEmpleado} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Nombres</label>
                  <input
                    type="text"
                    required
                    value={formData.nombres}
                    onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                    placeholder="ej. Juan Carlos"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Apellidos</label>
                  <input
                    type="text"
                    required
                    value={formData.apellidos}
                    onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                    placeholder="ej. Pérez Gómez"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">CUI / DPI</label>
                  <input
                    type="text"
                    required
                    value={formData.cui}
                    onChange={(e) => setFormData({ ...formData, cui: e.target.value })}
                    placeholder="ej. 2540123450101"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="ej. 55554444"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-400 mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    value={formData.correo}
                    onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                    placeholder="ej. juan@nexusgames.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Usuario</label>
                  <input
                    type="text"
                    required
                    value={formData.usuario}
                    onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
                    placeholder="ej. jperez"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Contraseña</label>
                  <input
                    type="password"
                    required
                    value={formData.contrasena}
                    onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
                    placeholder="••••••••"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-400 mb-1">Rol Asignado</label>
                  <select
                    value={formData.rol_id}
                    onChange={(e) => setFormData({ ...formData, rol_id: Number(e.target.value) })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 cursor-pointer"
                  >
                    <option value={1}>1. Admin</option>
                    <option value={2}>2. Soporte</option>
                    <option value={3}>3. Inventario</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-bold transition"
                >
                  {empleadoEditando ? 'Guardar Cambios' : 'Crear Empleado'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}