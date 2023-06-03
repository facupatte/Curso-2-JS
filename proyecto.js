//Simulador , tienda de guitarras

let total = 0;
let electrica = 500;
let electroAcustica = 300;
let acustica = 100;
const descuentoDelDiez = 0.1;

function descuento(valorTotal) {
  if (total >= 600) {
    alert("¡Felicitaciones!\nCompra mayor a USD 600, tienes un descuento del 10% sobre el total");
    return true;
  } else {
    return false;
  }
}

function comprarGuitarra() {
  let tipoDeGuitarra = prompt("*****Bienvenid@s a GUITARR PALACE*****\n¿QUÉ ESTÁS BUSCANDO?\nPresiona según tus intereses:\n1- Guitarra Eléctrica USD 500 \n2- Guitarra Electroacústica USD 300 \n3- Guitarra Acústica USD 100 \nf- Para Salir");

  switch (tipoDeGuitarra) {
    case "1":
      total += electrica;
      alert("Se agregó Guitarra Eléctrica por valor USD " + electrica + ", el total es: USD " + total);
      break;
    case "2":
      total += electroAcustica;
      alert("Se agregó Guitarra Electroacústica por valor USD " + electroAcustica + ", el total es: USD " + total);
      break;
    case "3":
      total += acustica;
      alert("Se agregó Guitarra Acústica por valor USD " + acustica + ", el total es: USD " + total);
      break;
    case "f":
      break;
    default:
      alert("Opción no válida");
      break;
  }

  if (tipoDeGuitarra !== "f") {
    comprarGuitarra();
  }
}

comprarGuitarra();

if (descuento() === true) {
  total -= total * descuentoDelDiez;
}

alert("Monto a Pagar: USD " + total);

