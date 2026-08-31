"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setCargando(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Usuario o contraseña incorrectos.");
      }

      
      router.push("/");
    } catch (err: any) {
      console.error("Error al iniciar sesión:", err);
      setError(err.message || "No se pudo conectar con el servidor.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#100C18] text-white flex items-center justify-center p-6 relative">
      <button
        type="button"
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
      >
        ← Volver a la tienda
      </button>

      <div className="w-full max-w-md rounded-2xl border border-purple-900/40 bg-[#181323] p-8 shadow-2xl">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-700 text-2xl">
            🎮
          </div>
          <h1 className="text-2xl font-bold">
            NEXUS<span className="text-green-500">GAMING</span>
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Ingresa a tu cuenta para continuar
          </p>
        </div>

        {/* NOTIFICACIÓN DE ERROR */}
        {error && (
          <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-center text-xs font-semibold text-red-400">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
              Usuario o Correo
            </label>
            <input
              type="text"
              required
              disabled={cargando}
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="gamer_nexus"
              className="mt-2 w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-3 text-sm text-white outline-none focus:border-purple-500 transition disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              required
              disabled={cargando}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-3 text-sm text-white outline-none focus:border-purple-500 transition disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full rounded-xl bg-purple-600 py-3 text-sm font-bold text-white transition hover:bg-purple-500 active:scale-95 shadow-lg shadow-purple-950 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cargando ? "Iniciando sesión..." : "Iniciar Sesión"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          ¿No tienes una cuenta?{" "}
          <Link href="/registro" className="text-green-500 font-semibold hover:underline transition">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </main>
  );
}