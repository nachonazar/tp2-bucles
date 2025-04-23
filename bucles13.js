const texto = prompt("Ingrese un texto");
if (isNaN(texto)) {
  document.writeln(texto.toUpperCase());
} else {
  document.writeln("texto invalido");
}
