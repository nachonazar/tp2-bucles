const cadenaTexto = prompt("Ingrese una cadena de texto");
cadenas = cadenaTexto.split("").reverse().join("");
document.writeln(`<p> ${cadenas}</p>`);
