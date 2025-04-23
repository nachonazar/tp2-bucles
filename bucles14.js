const cadenaTexto = prompt("Ingrese una cadena de texto"),
cadenas = cadenaTexto.split("").join("-");
document.writeln(`<p> ${cadenas}</p>`);
