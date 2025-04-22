let numeros = 0;

while (true) {
  const datos = prompt("Ingrese un numero");
  if (datos === null) {
    alert("la suma total es: " + numeros);
    break;
  }
  const numero = parseInt(datos);
  if (isNaN(numero)) {
    alert("No es un numero");
  } else {
    numeros += numero;
  }
}
