'use client';

import React, { useState, useEffect } from 'react';

// Tipos de datos para conectar más adelante con tu Backend en Java
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

export default function AdminDashboard() {
  // Estado para la navegación entre las 4 vistas requeridas
  const [activeTab, setActiveTab] = useState<'estadisticas' | 'clientes' | 'transacciones' | 'reportes'>('estadisticas');

  // Estados para simulación de datos (se conectarán con tu API de Java)
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [transacciones, setTransacciones] = useState<Transaccion[]>([]);

  useEffect(() => {
    // Ejemplo de datos dummy de pruebas mientras conectas con Java
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
  }, []);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      {/* 1. SIDEBAR DE NAVEGACIÓN DE ADMINISTRADOR */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          {/* Logo Nexus Games */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-lg shadow-lime-400/20">
              N
            </div>
            <div>
              <h1 className="text-lg font-black tracking-wider text-lime-400 leading-tight">NEXUS</h1>
              <p className="text-xs font-bold text-purple-400 tracking-widest">GAMES</p>
            </div>
          </div>

          {/* Menú de Navegación de Vistas */}
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('estadisticas')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                activeTab === 'estadisticas'
                  ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              📊 Panel Estadísticas
            </button>

            <button
              onClick={() => setActiveTab('clientes')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                activeTab === 'clientes'
                  ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              👥 Gestión Cliente
            </button>

            <button
              onClick={() => setActiveTab('transacciones')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                activeTab === 'transacciones'
                  ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              💳 Historial Transacciones
            </button>

            <button
              onClick={() => setActiveTab('reportes')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition text-left text-sm ${
                activeTab === 'reportes'
                  ? 'bg-purple-900/40 text-purple-300 border border-purple-700/50 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              📑 Panel de Reportes
            </button>
          </nav>
        </div>

        {/* Info Rol */}
        <div className="border-t border-slate-800 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-600/30 text-purple-300 flex items-center justify-center font-bold text-xs border border-purple-500">
              AD
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">Rol: Administrador</p>
              <p className="text-[10px] text-slate-500">Sesión activa</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. ÁREA PRINCIPAL DE CONTENIDO DINÁMICO */}
      <main className="flex-1 overflow-y-auto p-8 bg-slate-950">
        
        {/* VISTA 1: PANEL DE ESTADÍSTICAS */}
        {activeTab === 'estadisticas' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Panel de Estadísticas Globales</h2>
              <p className="text-slate-400 text-sm">Resumen de ingresos, actividad y métricas clave del sistema.</p>
            </div>

            {/* Tarjetas de Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ventas Totales</span>
                <p className="text-2xl font-extrabold text-lime-400 mt-2">Q 24,850.00</p>
                <span className="text-[11px] text-lime-400/80">↑ +12% este mes</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ingresos por Rentas</span>
                <p className="text-2xl font-extrabold text-purple-400 mt-2">Q 4,120.00</p>
                <span className="text-[11px] text-purple-400/80">↑ +5% este mes</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Clientes Activos</span>
                <p className="text-2xl font-extrabold text-blue-400 mt-2">1,240</p>
                <span className="text-[11px] text-slate-500">Registrados</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Rentabilidad Promedio</span>
                <p className="text-2xl font-extrabold text-amber-400 mt-2">88.5%</p>
                <span className="text-[11px] text-amber-400/80">Margen operativo</span>
              </div>
            </div>

            {/* Gráficos o Paneles Secundarios de Resumen */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-bold text-white mb-4">Métricas de Rentas vs Ventas</h3>
                <div className="h-48 bg-slate-950/50 rounded-lg border border-slate-800/80 flex items-center justify-center text-slate-500 text-sm">
                  [ Espacio reservado para Gráfica de Líneas / Bar Chart ]
                </div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-base font-bold text-white mb-4">Top Juegos Más Populares</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm p-2 rounded bg-slate-950/40">
                    <span className="text-slate-200">Call of Duty: Modern Warfare III</span>
                    <span className="text-lime-400 font-bold">142 compras</span>
                  </div>
                  <div className="flex justify-between items-center text-sm p-2 rounded bg-slate-950/40">
                    <span className="text-slate-200">Helldivers 2</span>
                    <span className="text-purple-400 font-bold">98 rentas</span>
                  </div>
                  <div className="flex justify-between items-center text-sm p-2 rounded bg-slate-950/40">
                    <span className="text-slate-200">Roblox Gift Card (1000 Robux)</span>
                    <span className="text-lime-400 font-bold">85 compras</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VISTA 2: GESTIÓN DE CLIENTES */}
        {activeTab === 'clientes' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Gestión de Clientes</h2>
                <p className="text-slate-400 text-sm">Administra y supervisa las cuentas de usuarios registradas.</p>
              </div>
              <input
                type="text"
                placeholder="Buscar cliente por nombre o correo..."
                className="bg-slate-900 border border-slate-800 text-sm rounded-xl px-4 py-2 w-72 text-slate-200 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Nombre Completo</th>
                    <th className="p-4">Correo Electrónico</th>
                    <th className="p-4">Transacciones</th>
                    <th className="p-4">Estado</th>
                    <th className="p-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {clientes.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 text-slate-500 font-mono">#{c.id}</td>
                      <td className="p-4 font-medium text-white">{c.nombre}</td>
                      <td className="p-4">{c.correo}</td>
                      <td className="p-4">{c.comprasRealizadas} realizadas</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          c.estado === 'ACTIVO' ? 'bg-lime-400/10 text-lime-400 border border-lime-400/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'
                        }`}>
                          {c.estado}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-3">
                        <button className="text-purple-400 hover:text-purple-300 text-xs font-semibold">Ver Historial</button>
                        <button className="text-red-400 hover:text-red-300 text-xs font-semibold">
                          {c.estado === 'ACTIVO' ? 'Bloquear' : 'Activar'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VISTA 3: HISTORIAL GLOBAL DE TRANSACCIONES */}
        {activeTab === 'transacciones' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Historial Global de Transacciones</h2>
                <p className="text-slate-400 text-sm">Auditoría unificada de todas las ventas y rentas en la tienda.</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-2 rounded-lg hover:bg-slate-800">
                  Filtrar por Ventas
                </button>
                <button className="bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-2 rounded-lg hover:bg-slate-800">
                  Filtrar por Rentas
                </button>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-slate-400 uppercase text-xs">
                  <tr>
                    <th className="p-4">ID Transacción</th>
                    <th className="p-4">Cliente</th>
                    <th className="p-4">Tipo</th>
                    <th className="p-4">Juego / Producto</th>
                    <th className="p-4">Monto</th>
                    <th className="p-4">Fecha</th>
                    <th className="p-4">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {transacciones.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 text-slate-400 font-mono font-medium">{tx.id}</td>
                      <td className="p-4 font-medium text-white">{tx.cliente}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          tx.tipo === 'VENTA' ? 'bg-lime-400/20 text-lime-400' : 'bg-purple-500/20 text-purple-300'
                        }`}>
                          {tx.tipo}
                        </span>
                      </td>
                      <td className="p-4 text-slate-200">{tx.juego}</td>
                      <td className="p-4 font-bold text-white">Q {tx.monto.toFixed(2)}</td>
                      <td className="p-4 text-slate-400 text-xs">{tx.fecha}</td>
                      <td className="p-4">
                        <span className="text-xs text-slate-300 flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${
                            tx.estado === 'COMPLETADO' ? 'bg-lime-400' : 'bg-amber-400'
                          }`} />
                          {tx.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VISTA 4: PANEL DE REPORTES */}
        {activeTab === 'reportes' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Panel de Reportes</h2>
              <p className="text-slate-400 text-sm">Generación y exportación de reportes ejecutivos del negocio.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Reporte 1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="text-lg font-bold text-white">Reporte de Ingresos Financieros</h3>
                  <p className="text-xs text-slate-400 mt-2">
                    Resumen detallado de ingresos por rentas vs ventas, métodos de pago utilizados y desgloses periódicos.
                  </p>
                </div>
                <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 rounded-lg text-xs transition">
                  Exportar PDF / Excel
                </button>
              </div>

              {/* Reporte 2 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="text-lg font-bold text-white">Reporte de Comportamiento de Clientes</h3>
                  <p className="text-xs text-slate-400 mt-2">
                    Analiza la retención de usuarios, clientes con más compras y volumen de registros del mes.
                  </p>
                </div>
                <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 rounded-lg text-xs transition">
                  Exportar PDF / Excel
                </button>
              </div>

              {/* Reporte 3 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-3">🎮</div>
                  <h3 className="text-lg font-bold text-white">Reporte de Juegos Más Concurridos</h3>
                  <p className="text-xs text-slate-400 mt-2">
                    Clasificación de títulos más vendidos y con mayor número de rentas para la toma de decisiones de inventario.
                  </p>
                </div>
                <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 rounded-lg text-xs transition">
                  Exportar PDF / Excel
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}