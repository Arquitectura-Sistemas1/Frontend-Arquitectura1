import { useState } from 'react';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

const manejarLogin = async (e) => {
    e.preventDefault();

    const NGROK_URL = "https://luxury-roster-uncouth.ngrok-free.dev";
    
    // Concatenamos los valores como parámetros de consulta (Query Params) en la URL
    const url = `${NGROK_URL}/auth/login?usuario=${encodeURIComponent(usuario)}&password=${encodeURIComponent(password)}`;

    try {
      const response = await fetch(url, {
        method: 'POST', // Sigue siendo POST porque así lo definiste en FastAPI
        headers: {
          'Accept': 'application/json',
          'ngrok-skip-browser-warning': 'true', // Mantiene fuera la advertencia de ngrok
        }
        // ¡Ya no lleva la propiedad 'body'!
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje(`¡Éxito! ${data.message} (${data.tipo_cuenta})`);
        console.log("Datos del usuario:", data.data);
      } else {
        // Manejo seguro del error para evitar [object Object]
        const errorMsg = typeof data.detail === 'string' ? data.detail : JSON.stringify(data.detail);
        setMensaje(`Error: ${errorMsg}`);
      }

    } catch (error) {
      console.error("Error de red:", error);
      setMensaje("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/images/LogoNexusBC.png" alt="logo" className='login-logo'/>
        <p>Bienvenido</p>

        <form onSubmit={manejarLogin}>
          <div className="input-group">
            <label>Usuario</label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Iniciar sesión
          </button>
        </form>

        {mensaje && (
          <p className="mensaje">
            {mensaje}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;