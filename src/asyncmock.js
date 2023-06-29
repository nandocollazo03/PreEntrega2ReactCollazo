const misProductos = [
    { id: "1", nombre: "Jabón liquido natural", precio: 50, img: "../img/jabon_liquido.jpeg", idCat: "1" },
    { id: "2", nombre: "Limpia vidrios natural", precio: 200, img: "../img/limpia_vidrios.jpg", idCat: "1" },
    { id: "3", nombre: "Cubiertos de Bambú", precio: 120, img: "../img/cubiertos.jpeg", idCat: "2" },
    { id: "4", nombre: "Bandeja de Bambú", precio: 300, img: "../img/bandeja.jpeg", idCat: "2" },
    { id: "5", nombre: "Vestido orgánico", precio: 1200, img: "../img/vestido.jpeg", idCat: "3" },
    { id: "6", nombre: "Remeras orgánicas", precio: 900, img: "../img/remeras.jpg", idCat: "3" },
]


export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(misProductos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria)
        }, 2000)
    })
}