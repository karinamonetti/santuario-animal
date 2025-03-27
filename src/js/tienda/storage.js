export default function storage(type) {
  switch (type) {
    case "set":
      localStorage.setItem("carritoIDs", JSON.stringify(carritoIDs));
      localStorage.setItem("carrito", JSON.stringify(carrito));
      break;
    case "remove":
      localStorage.removeItem("carrito");
      localStorage.removeItem("carritoIDs");
      break;
    default:
  }
}
