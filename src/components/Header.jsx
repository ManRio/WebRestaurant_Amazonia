import {} from 'react';
import logo from '/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (

    {/*Encabezado*/}
    <header>
        <div className="contenedor">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="menu">
                <Link to="/">Inicio</Link>
                <Link to="/menu">Nuestra Carta</Link>
                <Link to="/about">Sobre Nosotros</Link>
                <a href="#footer">Eventos</a>
                <Link to="/contact">Contato</Link>
            </nav>
        </div>
    </header>

  );
}

export default Header;