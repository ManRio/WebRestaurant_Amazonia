import { useState } from 'react';
import PropTypes from 'prop-types';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes implementar la validación contra un backend o usar un mock
        if (username === 'admin' && password === '12345') {
        onLogin(true);
        } else {
        alert('Credenciales incorrectas');
        }
    };

    return (
        <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Usuario:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
        </div>
    );
}
Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login;

