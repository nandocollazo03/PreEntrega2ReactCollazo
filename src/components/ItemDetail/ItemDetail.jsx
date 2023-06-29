
const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>Id: {id}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Itaque quibusdam eos beatae enim maxime dolorum nesciunt assumenda 
                vero totam dolores praesentium molestiae quidem nostrum aliquid eum 
                error explicabo, iure provident odit eligendi aperiam quas? Autem perferendis, 
                velit provident dolorem quam repellat eveniet modi atque aliquid explicabo quidem 
                veniam voluptatem est necessitatibus, magnam debitis alias. Modi similique laudantium 
                amet nulla rerum inventore aliquam. Sapiente fugiat labore sit quis in sequi suscipit 
                consequuntur quisquam tempore voluptates aperiam, impedit eum debitis dolorem autem 
                non. Optio laboriosam repellat amet itaque temporibus, consectetur expedita corporis 
                voluptates vitae, architecto minima voluptas quidem accusantium laborum molestiae esse!</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail