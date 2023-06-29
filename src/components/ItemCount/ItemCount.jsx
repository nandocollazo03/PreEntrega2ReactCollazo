import { useState } from "react"

import './ItemCount.css'

const ItemCount = () => {
    const [contador, setContador] = useState(1);

    let maximo = 9;
   
    const incrementar = () => {
        setContador(contador < maximo ? contador + 1 : contador);
    }

    const decrementar = () => {
        setContador(contador > 1 ? contador - 1 : contador);
    }

  return (
    <div>
        <button onClick={decrementar}> - </button>
        <span> {contador} </span>
        <button onClick={incrementar}> + </button>
    </div>
  )
}

export default ItemCount