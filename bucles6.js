let piramide = 1;
do {
  document.writeln(`<p> ${String(piramide).repeat(piramide)}</p>`);
  piramide++;
} while (piramide <= 30);
