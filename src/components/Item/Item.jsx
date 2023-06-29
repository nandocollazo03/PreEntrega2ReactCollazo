import { Link } from 'react-router-dom'

import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p> Precio: {precio} </p>
        <Link to={`/item/${id}`}> Ver detalles </Link>
    </div>
  )
}

export default Item