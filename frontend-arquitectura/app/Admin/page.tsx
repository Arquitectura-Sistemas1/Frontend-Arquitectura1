'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
  const [activeTab, setActiveTab] = useState<'estadisticas' | 'clientes' | 'transacciones' | 'reportes'>('estadisticas');

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [transacciones, setTransacciones] = useState<Transaccion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
        // Carga datos locales de prueba si la API en Java no está activa
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

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      {/* SIDEBAR DE NAVEGACIÓN */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <div className="mb-8 flex justify-center">
            <img src="/logo.png" alt="Nexus Games Logo" className="max-h-14 w-auto object-contain" />
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
            {/* 1. ESTADÍSTICAS */}
            {activeTab === 'estadisticas' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">Panel de Estadísticas Globales</h2>
                  <p className="text-slate-400 text-sm">Resumen de ingresos, actividad y métricas clave del sistema.</p>
                </div>
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

            {/* 3. TRANSACCIONES */}
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

            {/* 4. REPORTES */}
            {activeTab === 'reportes' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Panel de Reportes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <h3 className="font-bold text-white">Reporte Financiero</h3>
                    <button className="mt-4 w-full bg-purple-600 py-2 rounded text-xs font-bold">Exportar PDF</button>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <h3 className="font-bold text-white">Reporte de Clientes</h3>
                    <button className="mt-4 w-full bg-purple-600 py-2 rounded text-xs font-bold">Exportar PDF</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}