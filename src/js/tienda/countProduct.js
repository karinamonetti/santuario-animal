export function countProduct(node, amount) {
  const handlerDecrease = () => {
    if (amount[0] > 0) {
      amount[0] -= 1;
      input.value = amount;
    }
  };
  const handlerIncrease = () => {
    amount[0] += 1;
    input.value = amount;
  };

  const handlerChange = (e) => {
    /* console.log(typeof 2); */
    if (RegExp(/^\d*$/).exec(e.target.value)) {
      if (e.target.value.length > 1 && e.target.value[0] == "0") {
        e.target.value = e.target.value.slice(1);
        console.log(e.target.value);
        amount[0] = Number(e.target.value);
      } else {
        amount[0] = Number(e.target.value);
      }
    } else {
      e.target.value = e.target.value.slice(0, -1);
      console.log(e.target.value);
      amount[0] = Number(e.target.value);
    }
    if (e.target.value.length == 0) {
      e.target.value = "0";
      amount[0] = 0;
    }
  };

  node.querySelector(".decrease").addEventListener("click", handlerDecrease);
  const input = node.querySelector(".input-counter");
  input.addEventListener("input", handlerChange);
  node.querySelector(".increase").addEventListener("click", handlerIncrease);
}
