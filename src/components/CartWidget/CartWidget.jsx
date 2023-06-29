import ItemCount from '../ItemCount/ItemCount';
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../public/shopping-cart.png";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
        <ItemCount />
    </div>
  )
}

export default CartWidget