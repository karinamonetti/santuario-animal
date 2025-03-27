import printCarrito from "./printCarrito.js";
import storage from "./storage.js";
import totalCarrito from "./totalCarrito.js";

export function buttonProduct(node, product, amount) {
  node.querySelector(".buy").addEventListener("click", () => {
    // Si la cantidad es 0, no hacer nada y salir de la funcion

    if (amount[0] == 0) {
      return;
    }

    // Verificamos si existe o no un producto

    if (carritoIDs.includes(product.id)) {
      carrito.map((element, index) => {
        if (element.id == product.id) {
          carrito[index] = {
            ...product,
            amount: carrito[index].amount + amount[0],
          };
          storage("set");
          totalCarrito();
        }
      });
    } else {
      carrito.push({ ...product, amount: amount[0] });
      carritoIDs.push(product.id);
      storage("set");
      totalCarrito();
    }

    const alert = document.querySelector(".alert");
    alert.innerHTML = `<strong>Muy bien!</strong> Agregaste <strong> ${amount[0]} u.</strong> de este producto`;
    alert.classList.replace("hide", "show");
    setTimeout(() => {
      alert.classList.replace("show", "hide");
    }, 1000);

    const inputCounter = node.querySelector(".input-counter");
    inputCounter.value = 0;
    amount[0] = 0;

    // imprimimos  el producto que añadimos + los demas que estan en el carrito
    printCarrito();
  });
}
