const productos = [
	//camperas
	{
		id: 1,
		titulo: "Campera acolchada",
		precio: 5000,
		imagen: "./assets/img/a1.jpg",
		seccion: {
			nombre: "Camperas",
		},
	},
	{
		id: 2,
		titulo: "Chaqueta",
		precio: 3000,
		imagen: "./assets/img/a2.jpg",
		seccion: {
			nombre: "Camperas",
			id: "camperas",
		},
	},
	{
		id: 3,
		titulo: "Chaqueta abrigada",
		precio: 4000,
		imagen: "./assets/img/a3.jpg",
		seccion: {
			nombre: "Camperas",
			id: "camperas",
		},
	},
	{
		id: 4,
		titulo: "Campera de abrigo",
		precio: 6000,
		imagen: "./assets/img/a4.jpg",
		seccion: {
			nombre: "Camperas",
			id: "camperas",
		},
	},
	{
		id: 5,
		titulo: "Campera deportiva",
		precio: 2500,
		imagen: "./assets/img/a5.jpg",
		seccion: {
			nombre: "Camperas",
			id: "camperas",
		},
	},
	//pantalones
	{
		id: 21,
		titulo: "Pantalón NIKE",
		precio: 2700,
		imagen: "./assets/img/p1.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 22,
		titulo: "Pantalón beige",
		precio: 2500,
		imagen: "./assets/img/p2.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 23,
		titulo: "Pantalón blanco",
		precio: 2500,
		imagen: "./assets/img/p3.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 24,
		titulo: "Jean negro",
		precio: 3200,
		imagen: "./assets/img/p4.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 25,
		titulo: "Pantalón cargo",
		precio: 3500,
		imagen: "./assets/img/p5.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 26,
		titulo: "Jean beige",
		precio: 3600,
		imagen: "./assets/img/p6.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 27,
		titulo: "Pantalón FILA",
		precio: 3900,
		imagen: "./assets/img/p7.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 28,
		titulo: "Pantalón CAT",
		precio: 4000,
		imagen: "./assets/img/p8.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 29,
		titulo: "Pantalón NIKE",
		precio: 3800,
		imagen: "./assets/img/p9.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	//remeras
	{
		id: 41,
		titulo: "Remera tropical",
		precio: 2000,
		imagen: "./assets/img/r1.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 42,
		titulo: "Remera SVNTH",
		precio: 2700,
		imagen: "./assets/img/r2.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 43,
		titulo: "Remera VERSACE",
		precio: 3700,
		imagen: "./assets/img/r3.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 44,
		titulo: "Remera NIKE x NARUTO",
		precio: 2900,
		imagen: "./assets/img/r4.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 45,
		titulo: "Remera esqueleto",
		precio: 2000,
		imagen: "./assets/img/r5.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 46,
		titulo: "Remera WHAT?",
		precio: 2300,
		imagen: "./assets/img/r6.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 47,
		titulo: "Remera NARUTO",
		precio: 2500,
		imagen: "./assets/img/r7.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 48,
		titulo: "Remera JAPON",
		precio: 2500,
		imagen: "./assets/img/r8.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 49,
		titulo: "Remera tricolor",
		precio: 2500,
		imagen: "./assets/img/r9.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 50,
		titulo: "Remera poker",
		precio: 2500,
		imagen: "./assets/img/r10.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 51,
		titulo: "Remera NIKE lisa",
		precio: 2600,
		imagen: "./assets/img/r11.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 52,
		titulo: "Remera CALIFORNIA",
		precio: 2600,
		imagen: "./assets/img/r12.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 53,
		titulo: "Remera SUNSHINE",
		precio: 2400,
		imagen: "./assets/img/r13.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 54,
		titulo: "Remera X",
		precio: 2100,
		imagen: "./assets/img/r14.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	//shorts
	{
		id: 61,
		titulo: "Short hojas",
		precio: 2400,
		imagen: "./assets/img/s1.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 62,
		titulo: "Short flores",
		precio: 2500,
		imagen: "./assets/img/s2.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 63,
		titulo: "Short palmeras",
		precio: 2800,
		imagen: "./assets/img/s3.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 64,
		titulo: "Short plantas",
		precio: 2500,
		imagen: "./assets/img/s4.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 65,
		titulo: "Short florecer azul",
		precio: 2200,
		imagen: "./assets/img/s5.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 66,
		titulo: "Short florecer rojo",
		precio: 2200,
		imagen: "./assets/img/s6.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 67,
		titulo: "Short tucán",
		precio: 2900,
		imagen: "./assets/img/s7.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const contador = document.querySelector("#contador");

function cargarProductos(productosElegidos) {
	contenedorProductos.innerHTML = "";

	productosElegidos.forEach((producto) => {
		const div = document.createElement("div");
		div.classList.add("producto");
		div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

		contenedorProductos.append(div);
	});
	actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach((boton) => {
	boton.addEventListener("click", (e) => {
		botonesCategorias.forEach((boton) => boton.classList.remove("active"));
		e.currentTarget.classList.add("active");

		if (e.currentTarget.id != "todos") {
			const productoCategoria = productos.find((producto) => producto.seccion.id === e.currentTarget.id);
			tituloPrincipal.innerText = productoCategoria.seccion.nombre.toUpperCase();
			const productosBoton = productos.filter((producto) => producto.seccion.id === e.currentTarget.id);
			cargarProductos(productosBoton);
		} else {
			tituloPrincipal.innerText = "TODOS LOS PRODUCTOS";
			cargarProductos(productos);
		}
	});
});

function actualizarBotonesAgregar() {
	botonesAgregar = document.querySelectorAll(".producto-agregar");

	botonesAgregar.forEach((boton) => {
		boton.addEventListener("click", agregarAlCarrito);
	});
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
	productosEnCarrito = JSON.parse(productosEnCarritoLS);
	contar();
} else {
	productosEnCarrito = [];
}

function agregarAlCarrito(e) {
	const idBoton = parseFloat(e.currentTarget.id);
	const productoAgregado = productos.find((producto) => producto.id === idBoton);

	if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
		const index = productosEnCarrito.findIndex((producto) => producto.id === idBoton);
		productosEnCarrito[index].cantidad++;
	} else {
		productoAgregado.cantidad = 1;
		productosEnCarrito.push(productoAgregado);
	}
	contar();

	localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function contar() {
	let numero = productosEnCarrito.reduce((acc, prod) => acc + prod.cantidad, 0);
	contador.innerText = numero;
}
