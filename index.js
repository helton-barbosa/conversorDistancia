import dados from 'readline-sync'

console.log("==========================================")
console.log("=  CONVERSOR DE MILHAS PARA QUILÔMETROS  =")
console.log("==========================================\n")

let milhas = dados.question("Informe a distância em Milhas: ")

let km = (milhas / 0.62137)

console.log(`==> ${milhas}mi equivale a ${km.toFixed(2)}km`)