let cadenas = "";
do {
  const cadenaTexto = prompt("Ingrese cadenas de texto");

  if (cadenaTexto !== null && cadenaTexto.trim() !== "") {
    if (cadenas === "") {
      cadenas = cadenaTexto;
    } else {
      cadenas += "-" + cadenaTexto;
    }
  }
} while (confirm("¿Deseas realizar otra operacion?"));
document.writeln(`<p> ${cadenas}</p>`);
