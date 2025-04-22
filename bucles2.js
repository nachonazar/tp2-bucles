do {
    const nota = Number(prompt("Ingrese una nota (de 0 a 10)"));
if (nota === 0 || nota === 1 || nota === 2) {
  alert("Muy deficiente");
}
if (nota === 3 || nota === 4) {
  alert("Insuficiente");
}
if (nota === 5 || nota === 6) {
  alert("Suficiente");
}
if (nota === 7) {
  alert("Bien");
}
if (nota === 8 || nota === 9) {
  alert("Notable");
}
if (nota === 10) {
  alert("Sobresaliente");
} else if (nota > 10) {
  alert("número erróneo");
} else if (isNaN(nota)) {
  alert("Introduce un número válido");
}

} while (confirm("¿Deseas realizar otra operacion?"));