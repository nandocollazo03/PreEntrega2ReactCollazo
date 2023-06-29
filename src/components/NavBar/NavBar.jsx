import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
      <h1>Naturalia</h1>
      </Link>

      <nav>
        <ul>
          <li><NavLink to={`/categoria/1`}>Limpieza natural</NavLink></li>
          <li><NavLink to={`/categoria/2`}>Cocina eco</NavLink></li>
          <li><NavLink to={`/categoria/3`}>Ropa orgánica</NavLink></li>
          <li>Sobre nosotros</li>
          <li>Contacto</li>
          <li>Preguntas frecuentes</li>
          <li>Registro</li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar