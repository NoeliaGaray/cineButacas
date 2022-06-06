let cantidad: number = Number(prompt("ingrese cantidad de butacas que hay"));
let cantidadButacas: boolean[] = new Array(cantidad);
let butacasOcupadas: number = 0;
let butacasDesocupadas: number = 0;

for (let indice = 0; indice < cantidadButacas.length; indice++) {
  cantidadButacas[indice] = Math.random() < 0.5;
  console.log(cantidadButacas[indice]);
  if (cantidadButacas[indice] === true) {
    butacasOcupadas++;
  } else {
    butacasDesocupadas++;
  }
}
console.log(`la cantidad de butacas que hay son ${cantidadButacas.length}`);
console.log(`Hay ${butacasOcupadas} butacas ocupadas`);
console.log(`Hay ${butacasDesocupadas} butacas desocupadas`);
