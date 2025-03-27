import { countProduct } from "./countProduct.js";
import { buttonProduct } from "./buttonProduct.js";
import { productos } from "./productos.js";
import formatAmount from "./formatAmount.js";
import printCarrito from "./printCarrito.js";
import totalCarrito from "./totalCarrito.js";

// window.carrito es un array de todos los productos que añadimos al carrito y
// window.carritosIDs nos sirve para verificar si ya existe un producto o no

if (localStorage.getItem("carrito")) {
  window.carrito = JSON.parse(localStorage.getItem("carrito"));
  printCarrito();
  totalCarrito();
} else {
  window.carrito = [];
}

if (localStorage.getItem("carritoIDs")) {
  window.carritoIDs = JSON.parse(localStorage.getItem("carritoIDs"));
} else {
  window.carritoIDs = [];
}

const sectionProductos = document.getElementById("productos");

// Por cada producto vamos a inyectarle su logica de manera independiente.

productos.map((product) => {
  // amount es la cantidad de X producto que tenemos
  let amount = [0];

  // creamos un elemento html (article) en donde vamos a poner nuestro codigo HTML
  const article = document.createElement("article");
  article.classList.add(
    "card",
    "my-2",
    "position-relative",
    "col-12",
    "col-sm-6",
    "col-md-4",
    "col-lg-6",
    "col-xl-4"
  );
  article.style.height = "325px";

  article.innerHTML = `<span
    class="bg-success fs-5 text-white position-absolute top-0 start-50 rounded-bottom text-center shadow w-50 f"
  >
    $${formatAmount(product.price)}
  </span>
  <img
    src="${product.urlImage}"
    class="card-img-top h-50"
    alt="${product.title}"
    style="object-fit: contain;"
  />
  <div class="card-body h-50">
    <h6 class="card-title fw-lighter" title="${
      product.title
    }" style="height: 30%">${product.title}</h6>
    <div class="container-counter d-flex justify-content-center align-items-center gap-1 my-1" style="height: 30%">
  <button class="decrease btn py-1 fw-bold" style="background-color: #f7e582"  >
    -
  </button>
  <input
    type="text"
    class="input-counter w-25 text-center"
    maxlength="4"
    value="0"
  />
  
  <button class="increase btn py-1 fw-bold" style="background-color: #f7e582" >
    +
  </button>
  </div>
    <div class="text-center" style="height: 40%">
      <button class="buy btn btn-outline-warning w-75"><i class="bi bi-cart2 h1-xl"></i> Añadir </button>
    </div>
  </div>`;

  // aca realizamos la logica del contador de producto
  countProduct(article, amount);

  // le añadimos un evento al boton de "AÑADIR" y le enviamos un el producto y monto actual
  buttonProduct(article, product, amount);

  // cuando ya tengamos el articulo con toda la logica solo lo agregamos a la seccion de productos
  sectionProductos.appendChild(article);
});
