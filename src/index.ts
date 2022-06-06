let cantidad: number = Number(prompt("ingrese cantidad de butacas que hay"));
let butacas: boolean[] = new Array(cantidad);
let butacasOcupadas: number = 0;
let butacasDesocupadas: number = 0;

for (let indice = 0; indice < butacas.length; indice++) {
  butacas[indice] = Math.random() < 0.5;
  console.log(butacas[indice]);
  if (butacas[indice] === true) {
    butacasOcupadas++;
  } else {
    butacasDesocupadas++;
  }
}
console.log(`La cantidad de butacas que hay son ${butacas.length}`);
console.log(`Hay ${butacasOcupadas} butacas ocupadas`);
console.log(`Hay ${butacasDesocupadas} butacas desocupadas`);
