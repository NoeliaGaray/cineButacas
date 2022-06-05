let cantidad: number = Number(prompt('ingrese cantidad de butacas que hay'));
let cantidadButacas: boolean[] = new Array(cantidad);

function Aleatorio(ocupada: number=1, desocupada: number=0): boolean {
return (ocupada===1)===true ;
}

for (let indice = 0; indice < cantidadButacas.length; indice++){
  cantidadButacas[indice] = Aleatorio(1,0);
  // let desocupadas: number = 0
  // let ocupadas: number = 1
  // if (cantidadButacas[indice] === false) {
  //   desocupadas++;
  // } else {
  //   ocupadas++;
  // }
  console.log(cantidadButacas[indice]);
  // console.log(`En el cine hay ${desocupadas} butacas desocupadas`);
  // console.log(`En el cine hay ${ocupadas} butacas ocupadas`);
}   console.log(`la cantidad de butacas que hay son ${cantidadButacas.length}`);

 
// function Aleatorio(let butacaOcupada: number = 1, let butacaDesocupada: number = 0): boolean {
//   return (butacaOcupada===true, butacaDesocupada===false);
// }
// function asignarButaca(let butacaOcupada: boolean = 0,)
//   for (let indice = 0; indice < cantidadButacas.length; indice++){
// indice += cantidad 

// }console.log(`Hay ${cantidadButacas.length} butacas`)
// }
