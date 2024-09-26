import {} from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <section className="banner">
        <div>
            <div className="contenedor llamada-accion">
                <p>Amazonia Lounge Bar</p>
                <h2>BIENVENIDOS</h2>
                <Link to="./Menu">VER MAS</Link>
            </div>
        </div>
      </section>
      <section className="bienvenida">
        <div className="contenedor">
            <h2 className="titulo">BIENVENIDOS A NUESTRA WEB</h2>
            <div className="columnasbienvenida">
                <img src="/images/hamburguesasola.png" alt="hamburguesa" />
                <p>Disfruta de nuestra carta, las mejores bebidas de la zona y nuestra especialidad en Hamburguesas y Cocina Innovadora. Igualmente, disfruta de una buena tarde de relax con nuestros postres, helados, copas o Shishas, en un ambiente distendido e ideal para el disfrute y relax.</p>
            </div>
        </div>
    </section>
    </div>
  )
}
