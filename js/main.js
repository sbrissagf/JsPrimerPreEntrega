let stockProductos = [
    { id: 1, nombre: "hoodie 1", tipo: "hoodie", desc: "Hype-full hoodie", precio: 1200, talle: "L", img: '/img/hoodie.jpg' },
    { id: 2, nombre: "hoodie 2", tipo: "hoodie", desc: "Hype-full hoodie", precio: 1100, talle: "L", img: '/img/hoodie.jpg' },
    { id: 3, nombre: "hoodie 3", tipo: "hoodie", desc: "Hype-full hoodie", precio: 1200, talle: "M", img: '/img/hoodie.jpg' },
    { id: 4, nombre: "hoodie 4", tipo: "hoodie", desc: "Hype-full hoodie", precio: 1400, talle: "M", img: '/img/hoodie.jpg' },
    { id: 5, nombre: "hoodie 5", tipo: "hoodie", desc: "Hype-full hoodie", precio: 1200, talle: "S", img: '/img/hoodie.jpg' },
    { id: 6, nombre: "hoodie 6", tipo: "hoodie", desc: "Hype-full hoodie", precio: 1500, talle: "S", img: '/img/hoodie.jpg' },
    { id: 7, nombre: "shirt 1", tipo: "shirt", desc: "Hype-full shirt", precio: 500, talle: "L", img: '/img/shirt.jpg' },
    { id: 8, nombre: "shirt 2", tipo: "shirt", desc: "Hype-full shirt", precio: 500, talle: "L", img: '/img/shirt.jpg' },
    { id: 9, nombre: "shirt 3", tipo: "shirt", desc: "Hype-full shirt", precio: 500, talle: "M", img: '/img/shirt.jpg' },
    { id: 10, nombre: "shirt 4", tipo: "shirt", desc: "Hype-full shirt", precio: 700, talle: "M", img: '/img/shirt.jpg' },
]

let carritoDeCompras = []

agregarAlCarrito()

function agregarAlCarrito() {

    let elijoProducto = parseInt(prompt('ingrese su ID de su producto'))

    let productoAgregar = stockProductos.filter((el) => el.id == elijoProducto)[0]
    carritoDeCompras.push(productoAgregar)
    console.log(carritoDeCompras)
    actualizarCarrito()

}

function actualizarCarrito() {
    console.log('cantidad de productos agregados ' + carritoDeCompras.length)
    let suma = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

    console.log('la suma total de su Carrito es $' + suma)
}