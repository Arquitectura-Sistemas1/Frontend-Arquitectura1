"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Pais {
  id: number;
  nombre: string;
}

export default function RegistroPage() {
  const router = useRouter();

  
  const [paso, setPaso] = useState<1 | 2>(1);

 
  const [paises, setPaises] = useState<Pais[]>([]);

 
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState(""); 
  const [correo, setCorreo] = useState("");
  const [paisId, setPaisId] = useState<string>("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");

  
  const [codigo, setCodigo] = useState("");

  
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mensajeExito, setMensajeExito] = useState<string | null>(null);

  
  useEffect(() => {
    async function cargarPaises() {
      try {
        const res = await fetch("/api/paises");
        if (res.ok) {
          const data = await res.json();
          setPaises(data);
        }
      } catch (err) {
        console.error("Error al cargar la lista de países:", err);
      }
    }
    cargarPaises();
  }, []);

  
  async function manejarFormulario1(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setCargando(true);

    try {
      const payloadForm1 = {
        nombres,
        apellidos,
        fecha_nacimiento: fechaNacimiento,
        correo,
        pais_id: paisId,
        usuario,
        password,
        telefono,
      };

      const res = await fetch("/api/auth/registro-paso1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadForm1),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error al procesar la solicitud inicial.");
      }

      
      setPaso(2);
    } catch (err: any) {
      setError(err.message || "Solicitud fallida. Revisa los datos ingresados.");
    } finally {
      setCargando(false);
    }
  }

  
  async function manejarFormulario2(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setCargando(true);

    try {
      const payloadForm2 = {
        usuario, 
        codigo,
      };

      const res = await fetch("/api/auth/registro-paso2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadForm2),
      });

      const jsonResponse = await res.json();

      if (!res.ok) {
        throw new Error(jsonResponse.message || "El código ingresado es incorrecto o expiró.");
      }

      
      setMensajeExito(jsonResponse.message || "¡Cuenta creada exitosamente!");

      
      setTimeout(() => {
        router.push("/");
      }, 2000);

    } catch (err: any) {
      setError(err.message || "No se pudo verificar el código.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#100C18] text-white flex flex-col justify-center items-center px-6 py-12">
      {/* HEADER / LOGO */}
      <div className="mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-700 text-2xl">
            🎮
          </div>
          <span className="text-3xl font-black">
            NEXUS<span className="text-green-500">GAMING</span>
          </span>
        </Link>
        <p className="mt-2 text-sm text-gray-400">
          {paso === 1
            ? "Paso 1: Completa tus datos de cliente"
            : "Paso 2: Ingresa el código de verificación"}
        </p>
      </div>

      <div className="w-full max-w-lg rounded-2xl border border-purple-900/40 bg-[#181323] p-8 shadow-2xl">
        <h1 className="mb-6 text-2xl font-bold text-center">
          {paso === 1 ? "Registro de Nuevo Cliente" : "Verificación de Cuenta"}
        </h1>

        {}
        {mensajeExito && (
          <div className="mb-6 rounded-xl border border-green-500/40 bg-green-500/10 p-4 text-center text-sm font-semibold text-green-400">
            🎉 {mensajeExito}
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-center text-sm font-semibold text-red-400">
            ⚠️ {error}
          </div>
        )}

        {/* ==================== FORMULARIO 1 ==================== */}
        {paso === 1 && (
          <form onSubmit={manejarFormulario1} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-400">
                  Nombres
                </label>
                <input
                  type="text"
                  required
                  value={nombres}
                  onChange={(e) => setNombres(e.target.value)}
                  placeholder="Juan Carlos"
                  className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-2.5 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-400">
                  Apellidos
                </label>
                <input
                  type="text"
                  required
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                  placeholder="Pérez Gómez"
                  className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-2.5 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-400">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  required
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-2.5 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-400">
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="+502 1234 5678"
                  className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-2.5 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-400">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="usuario@correo.com"
                className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-2.5 text-sm text-white outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-400">
                País
              </label>
              <select
                required
                value={paisId}
                onChange={(e) => setPaisId(e.target.value)}
                className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-2.5 text-sm text-white outline-none focus:border-purple-500"
              >
                <option value="">-- Selecciona un país --</option>
                {paises.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-400">
                  Usuario
                </label>
                <input
                  type="text"
                  required
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  placeholder="gamer_nexus"
                  className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-2.5 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-400">
                  Contraseña
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-2.5 text-sm text-white outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="mt-6 w-full rounded-xl bg-purple-600 py-3.5 font-bold text-white transition hover:bg-purple-500 disabled:opacity-50"
            >
              {cargando ? "Procesando Formulario 1..." : "Siguiente paso →"}
            </button>
          </form>
        )}

        {/* ==================== FORMULARIO 2 ==================== */}
        {paso === 2 && (
          <form onSubmit={manejarFormulario2} className="space-y-4">
            <div className="rounded-xl border border-purple-900/30 bg-[#211A2D] p-4 text-xs text-gray-300">
              Verificando usuario: <span className="font-bold text-green-400">{usuario}</span>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-400">
                Código de Verificación
              </label>
              <input
                type="text"
                required
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Ingresa tu código"
                className="w-full rounded-xl border border-purple-900/40 bg-[#211A2D] px-4 py-3 text-center text-lg font-mono tracking-widest text-white outline-none focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={cargando || !!mensajeExito}
              className="mt-6 w-full rounded-xl bg-green-600 py-3.5 font-bold text-white transition hover:bg-green-500 disabled:opacity-50"
            >
              {cargando ? "Verificando Formulario 2..." : "Finalizar Registro"}
            </button>
          </form>
        )}

        <div className="mt-6 text-center text-sm text-gray-400">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="font-semibold text-purple-400 hover:underline">
            Inicia sesión aquí
          </Link>
        </div>
      </div>
    </main>
  );
}