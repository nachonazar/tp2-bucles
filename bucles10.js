const edad1 = parseInt(prompt("Ingrese una edad")),
  nombre1 = prompt("Ingrese una nombre"),
  edad2 = parseInt(prompt("Ingrese una edad")),
  nombre2 = prompt("Ingrese una nombre"),
  edad3 = parseInt(prompt("Ingrese una edad")),
  nombre3 = prompt("Ingrese una nombre");

if (edad1 > edad2 && edad1 > edad3) {
  document.writeln("La mayor edad es: ", nombre1);
}
if (edad2 > edad1 && edad2 > edad3) {
  document.writeln("La mayor edad es: ", nombre2);
}
if (edad3 > edad1 && edad3 > edad2) {
  document.writeln("La mayor edad es: ", nombre3);
}
if (edad1 === edad2 && edad2 === edad3 && edad1 === edad3) {
  document.writeln("Las tres edades son iguales");
}
if (edad1 === edad2 && edad1 > edad3 && edad2 > edad3) {
  document.writeln("La mayor edad es: ", nombre1);
}
if (edad2 === edad3 && edad2 > edad1 && edad3 > edad1) {
  document.writeln("La mayor edad es: ", nombre2);
}
if (edad1 === edad3 && edad1 > edad2 && edad3 > edad2) {
  document.writeln("La mayor edad es: ", nombre1);
}
