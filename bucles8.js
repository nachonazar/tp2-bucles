const numero = parseInt(prompt("Ingrese un numero del 1 al 50"));
if (numero > 50) document.writeln("numero invalido");
else if (isNaN(numero)) {
  document.writeln("numero invalido");
} else {
  for (let piramide = 1; piramide <= numero; piramide++) {
    document.writeln(`<p> ${String(piramide).repeat(piramide)}</p>`);
  }
}
