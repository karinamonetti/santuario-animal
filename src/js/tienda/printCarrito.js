import formatAmount from "./formatAmount.js";
import storage from "./storage.js";
import totalCarrito from "./totalCarrito.js";

export default function printCarrito() {
  const productCarrito = document.getElementById("productos-carrito");
  const fragment = document.createDocumentFragment();

  carrito.map((product, index) => {
    const tr_template = document.createElement("tr");
    tr_template.classList.add("fw-lighter");

    tr_template.innerHTML += `
      <td >
        <i class="borrar-producto bi bi-x-square-fill" style="color: #ff5f5f">
      </td>
      <td>${product.title}</td>
      <td>
        <button class="previus btn btn-outline-warning p-1 fw-bold"  >
          <i class="bi bi-arrow-left-short"></i>
        </button>
        <span class="mx-0 amount d-inline-block" style="width: 30px">${
          product.amount
        }</span>
        <button class="next btn btn-outline-warning p-1 fw-bold"  >
          <i class="bi bi-arrow-right-short"></i>
        </button>
      </td>
      <td class="total-price">$${formatAmount(
        (product.amount * Number(product.price)).toString()
      )}</td>`;

    const borrarProducto = tr_template.querySelector(".borrar-producto");
    const totalPrice = tr_template.querySelector(".total-price");
    const prev = tr_template.querySelector(".previus");
    const amount = tr_template.querySelector(".amount");

    borrarProducto.addEventListener("click", () => {
      carrito.splice(index, 1);
      carritoIDs.splice(index, 1);
      if (carrito.length > 0) {
        storage("set");
      } else {
        storage("remove");
      }
      printCarrito();
      totalCarrito();
    });

    prev.addEventListener("click", () => {
      // Con este condicional, no vamos a bajar de 1 unidad

      if (carrito[index].amount > 1) {
        const result = carrito[index].amount - 1;
        carrito[index].amount = result;
        amount.innerHTML = result;
        totalPrice.innerHTML = `$${formatAmount(
          (product.price * result).toString()
        )}`;
        storage("set");
        totalCarrito();
      }
    });

    const next = tr_template.querySelector(".next");
    next.addEventListener("click", () => {
      const result = carrito[index].amount + 1;
      carrito[index].amount = result;
      amount.innerHTML = result;
      totalPrice.innerHTML = `$${formatAmount(
        (product.price * result).toString()
      )}`;
      storage("set");
      totalCarrito();
    });

    fragment.appendChild(tr_template);
  });
  productCarrito.innerHTML = "";
  productCarrito.appendChild(fragment);
}
