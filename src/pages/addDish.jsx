import { useState } from 'react';
import PropTypes from 'prop-types';

function AddDish({ onAddDish }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('Entrantes');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple
    if (!nombre || !precio) {
      alert('Por favor, rellena todos los campos.');
      return;
    }
    // Enviar los datos al componente padre o API
    onAddDish({ nombre, precio, categoria });

    // Limpiar el formulario
    setNombre('');
    setPrecio('');
  };

  return (
    <div>
      <h1>Añadir nuevo plato</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del plato:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="text"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div>
          <label>Categoría:</label>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="Entrantes">Entrantes</option>
            <option value="Platos principales">Platos principales</option>
            <option value="Postres">Postres</option>
          </select>
        </div>
        <button type="submit">Añadir plato</button>
      </form>
    </div>
  );
}
AddDish.propTypes = {
  onAddDish: PropTypes.func.isRequired,
};

export default AddDish;
