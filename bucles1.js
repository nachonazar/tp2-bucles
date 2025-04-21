do {
    const edad = parseInt(prompt("Ingrese su edad"));
if (edad >= 18) {
  document.writeln("ya puede conducir<br>");
} else if (isNaN(edad)) {
  document.writeln("la edad ingresada no es un número válido<br>");
} else {
  document.writeln("no puede conducir<br>");
}

} while (confirm("¿Deseas realizar otra operacion?"));