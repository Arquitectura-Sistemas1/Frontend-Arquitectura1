import { useState } from 'react';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario === 'admin' && password === '1234') {
      setMensaje('¡Inicio de sesión exitoso!');
    } else {
      setMensaje('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Iniciar sesión</h1>
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