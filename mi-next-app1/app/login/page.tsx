"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", { email, password });
    // Tras autenticar con éxito, redirige a la página principal
    router.push("/");
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

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="mt-2 w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-3 text-sm text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-purple-900/50 bg-[#211A2D] px-4 py-3 text-sm text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 py-3 text-sm font-bold text-white transition hover:bg-purple-500 active:scale-95 shadow-lg shadow-purple-950"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-green-400 hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </main>
  );
}