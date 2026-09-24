'use client';

import React, { useState } from 'react';

interface Mensaje {
  id: number;
  remitente: 'CLIENTE' | 'SOPORTE';
  autor: string;
  texto: string;
  fecha: string;
}

interface Ticket {
  id: string;
  cliente: string;
  correo: string;
  asunto: string;
  categoria: 'PROBLEMA_TECNICO' | 'PAGOS_FACTURACION' | 'DEVOLUCIONES' | 'CONSULTA_GENERAL';
  prioridad: 'ALTA' | 'MEDIA' | 'BAJA';
  estado: 'ABIERTO' | 'EN_PROCESO' | 'RESUELTO';
  agenteAsignado?: string;
  fechaCreacion: string;
  mensajes: Mensaje[];
}

export default function SoporteAdminPage() {
  // Datos de prueba para tickets de soporte
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 'TCK-801',
      cliente: 'Carlos López',
      correo: 'carlos@gmail.com',
      asunto: 'Error al canjear código de juego',
      categoria: 'PROBLEMA_TECNICO',
      prioridad: 'ALTA',
      estado: 'ABIERTO',
      agenteAsignado: 'Sin Asignar',
      fechaCreacion: '2026-08-28 14:30',
      mensajes: [
        {
          id: 1,
          remitente: 'CLIENTE',
          autor: 'Carlos López',
          texto: 'Compré la clave digital de Call of Duty pero al momento de ingresarla me dice que ya fue canjeada.',
          fecha: '2026-08-28 14:30'
        }
      ]
    },
    {
      id: 'TCK-802',
      cliente: 'Ana Martínez',
      correo: 'ana.m@gmail.com',
      asunto: 'Consulta sobre cargos duplicados en renta',
      categoria: 'PAGOS_FACTURACION',
      prioridad: 'MEDIA',
      estado: 'EN_PROCESO',
      agenteAsignado: 'Marcos Solís',
      fechaCreacion: '2026-08-27 10:15',
      mensajes: [
        {
          id: 1,
          remitente: 'CLIENTE',
          autor: 'Ana Martínez',
          texto: 'Hola, me aparece un doble cobro en mi tarjeta por la renta de Helldivers 2.',
          fecha: '2026-08-27 10:15'
        },
        {
          id: 2,
          remitente: 'SOPORTE',
          autor: 'Marcos Solís',
          texto: 'Hola Ana, estamos revisando la pasarela de pagos para efectuar la devolución del monto duplicado.',
          fecha: '2026-08-27 11:00'
        }
      ]
    },
    {
      id: 'TCK-803',
      cliente: 'Juan Pérez',
      correo: 'juanp@gmail.com',
      asunto: 'Solicitud de reembolso por compra fallida',
      categoria: 'DEVOLUCIONES',
      prioridad: 'BAJA',
      estado: 'RESUELTO',
      agenteAsignado: 'Lucía Gómez',
      fechaCreacion: '2026-08-25 09:00',
      mensajes: [
        {
          id: 1,
          remitente: 'CLIENTE',
          autor: 'Juan Pérez',
          texto: 'Buenas tardes, solicito la devolución de la tarjeta de regalo.',
          fecha: '2026-08-25 09:00'
        },
        {
          id: 2,
          remitente: 'SOPORTE',
          autor: 'Lucía Gómez',
          texto: 'Estimado Juan, la devolución ha sido procesada exitosamente a tu cuenta.',
          fecha: '2026-08-25 10:30'
        }
      ]
    }
  ]);

  const [ticketSeleccionado, setTicketSeleccionado] = useState<Ticket | null>(tickets[0]);
  const [filtroEstado, setFiltroEstado] = useState<'TODOS' | 'ABIERTO' | 'EN_PROCESO' | 'RESUELTO'>('TODOS');
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  // Filtrado de tickets
  const ticketsFiltrados = tickets.filter(t => filtroEstado === 'TODOS' || t.estado === filtroEstado);

  // Enviar respuesta
  const handleEnviarRespuesta = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoMensaje.trim() || !ticketSeleccionado) return;

    const respuesta: Mensaje = {
      id: Date.now(),
      remitente: 'SOPORTE',
      autor: 'Agente Soporte (Tú)',
      texto: nuevoMensaje,
      fecha: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    const ticketsActualizados = tickets.map(t => {
      if (t.id === ticketSeleccionado.id) {
        return {
          ...t,
          estado: t.estado === 'ABIERTO' ? ('EN_PROCESO' as const) : t.estado,
          mensajes: [...t.mensajes, respuesta]
        };
      }
      return t;
    });

    setTickets(ticketsActualizados);
    setTicketSeleccionado({
      ...ticketSeleccionado,
      estado: ticketSeleccionado.estado === 'ABIERTO' ? 'EN_PROCESO' : ticketSeleccionado.estado,
      mensajes: [...ticketSeleccionado.mensajes, respuesta]
    });
    setNuevoMensaje('');
  };

  // Cambiar estado del ticket
  const cambiarEstado = (nuevoEstado: 'ABIERTO' | 'EN_PROCESO' | 'RESUELTO') => {
    if (!ticketSeleccionado) return;
    const ticketsActualizados = tickets.map(t => 
      t.id === ticketSeleccionado.id ? { ...t, estado: nuevoEstado } : t
    );
    setTickets(ticketsActualizados);
    setTicketSeleccionado({ ...ticketSeleccionado, estado: nuevoEstado });
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* LISTA DE TICKETS (PANEL IZQUIERDO) */}
      <div className="w-1/3 border-r border-slate-800 flex flex-col bg-slate-900">
        
        {/* ENCABEZADO Y FILTROS */}
        <div className="p-4 border-b border-slate-800 space-y-3">
            <center>
            <img src="/logo.png" alt="Nexus Games Logo" className="h-24 w-auto object-contain" />
          <h1 className="text-xl font-bold text-white">📩 Lista de Solicitudes</h1>
            </center>
          <div className="flex gap-2 text-xs overflow-x-auto pb-1">
            {(['TODOS', 'ABIERTO', 'EN_PROCESO', 'RESUELTO'] as const).map(est => (
              <button
                key={est}
                onClick={() => setFiltroEstado(est)}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  filtroEstado === est 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {est.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* LISTADO */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-800/60">
          {ticketsFiltrados.map(ticket => (
            <div
              key={ticket.id}
              onClick={() => setTicketSeleccionado(ticket)}
              className={`p-4 cursor-pointer transition hover:bg-slate-800/50 ${
                ticketSeleccionado?.id === ticket.id ? 'bg-slate-800 border-l-4 border-purple-500' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-mono text-purple-400 font-semibold">{ticket.id}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  ticket.estado === 'ABIERTO' ? 'bg-red-500/10 text-red-400' :
                  ticket.estado === 'EN_PROCESO' ? 'bg-amber-500/10 text-amber-400' : 'bg-lime-500/10 text-lime-400'
                }`}>
                  {ticket.estado.replace('_', ' ')}
                </span>
              </div>
              <h3 className="font-semibold text-sm text-white truncate">{ticket.asunto}</h3>
              <p className="text-xs text-slate-400 mt-1 truncate">{ticket.cliente} • {ticket.correo}</p>
              <div className="flex justify-between items-center mt-2 text-[11px] text-slate-500">
                <span>{ticket.fechaCreacion}</span>
                <span className={`font-semibold ${
                  ticket.prioridad === 'ALTA' ? 'text-red-400' :
                  ticket.prioridad === 'MEDIA' ? 'text-amber-400' : 'text-slate-400'
                }`}>
                  Prioridad {ticket.prioridad}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETALLE DEL TICKET Y DETALLE DE CONVERSACIÓN (PANEL DERECHO) */}
      <div className="flex-1 flex flex-col bg-slate-950">
        {ticketSeleccionado ? (
          <>
            {/* ENCABEZADO DEL TICKET */}
            <div className="p-6 border-b border-slate-800 bg-slate-900/60 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold text-white">{ticketSeleccionado.asunto}</h2>
                  <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    {ticketSeleccionado.id}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Cliente: <span className="text-slate-200">{ticketSeleccionado.cliente}</span> ({ticketSeleccionado.correo}) | Asignado a: <span className="text-purple-300">{ticketSeleccionado.agenteAsignado}</span>
                </p>
              </div>

              {/* ACCIONES DE ESTADO */}
              <div className="flex gap-2">
                <button
                  onClick={() => cambiarEstado('EN_PROCESO')}
                  className="px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-lg text-xs font-semibold border border-amber-500/30 transition"
                >
                  En Proceso
                </button>
                <button
                  onClick={() => cambiarEstado('RESUELTO')}
                  className="px-3 py-1.5 bg-lime-500/10 hover:bg-lime-500/20 text-lime-300 rounded-lg text-xs font-semibold border border-lime-500/30 transition"
                >
                  Resolver Ticket
                </button>
              </div>
            </div>

            {/* CONVERSACIÓN / HISTORIAL DE MENSAJES */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {ticketSeleccionado.mensajes.map(msg => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.remitente === 'SOPORTE' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`max-w-xl rounded-2xl p-4 text-sm ${
                    msg.remitente === 'SOPORTE'
                      ? 'bg-purple-900/40 border border-purple-700/50 text-slate-100 rounded-tr-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                  }`}>
                    <div className="flex justify-between items-center gap-4 mb-1 border-b border-slate-700/40 pb-1 text-[11px]">
                      <span className="font-bold text-purple-300">{msg.autor}</span>
                      <span className="text-slate-400">{msg.fecha}</span>
                    </div>
                    <p className="mt-1 leading-relaxed">{msg.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ÁREA DE RESPUESTA */}
            <form onSubmit={handleEnviarRespuesta} className="p-4 border-t border-slate-800 bg-slate-900">
              <div className="flex gap-3">
                <textarea
                  rows={2}
                  value={nuevoMensaje}
                  onChange={(e) => setNuevoMensaje(e.target.value)}
                  placeholder="Escribe tu respuesta para el cliente..."
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-purple-500 resize-none"
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 rounded-xl text-sm transition flex items-center justify-center"
                >
                  Enviar
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-500 text-sm">
            Selecciona un ticket para ver la conversación
          </div>
        )}
      </div>

    </div>
  );
}