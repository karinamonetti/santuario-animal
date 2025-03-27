export default function formatAmount(monto) {
  let resultadoInvertido = ""; // variable aux
  let resultado = ""; // se alamacena el resultado final
  let montoSlice = ""; // aca almacenamos el Monto sin  los decimales
  let decimalSlice = ""; // aca almacenamos los decimales, si no los tiene, se queda así.

  if (monto.includes(".") || monto.includes(",")) {
    const point = monto.indexOf("."); // indice separador
    montoSlice = monto.slice(0, point); // separamos el Monto de los decimales
    decimalSlice = monto.slice(point).replace(".", ","); // reemplazamos el "." por ","
  } else {
    montoSlice = monto;
  }

  // Aca recorremos el monto del lado inverso
  if (montoSlice.length > 3) {
    for (let i = 1; i <= montoSlice.length; i++) {
      resultadoInvertido += montoSlice[montoSlice.length - i]; // montoSlice.lenght - i = index
      if (i < montoSlice.length && i % 3 === 0) {
        resultadoInvertido += ".";
        // cada 3 unidades, se le agrega un punto. pero nunca al ultimo numero, sin importar si el factorial devuelve 0
        // .100.000 ERROR
        // 100.000 PERFECT
      }
    }
    for (let x = 1; x <= resultadoInvertido.length; x++) {
      resultado += resultadoInvertido[resultadoInvertido.length - x];
    }
    resultado += decimalSlice; // si decimalSlice esta vacio, no perjudica en nada
  } else {
    resultado = monto.replace(".", ","); // si no tenemos que formatear, solo modificamos el Monto que viene por parametro
  }

  return resultado;
}
