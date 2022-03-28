let num = [12, 9, 4, 30, 0]
num.push(2) 
num.sort(function(a,b){return a-b})
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor é ${num[0]}.`)

//CÓDIGO TRADICIONAL DO PERCURSO PRA EXIBIÇÃO NO VETOR
for(let k=0; k<num.length; k++){
    console.log(`A posição ${k} tem o valor ${num[k]}.`)
}
//FORMATO SIMPLES
for(let k in num){
    console.log(num[k])
}
let p = num.indexOf(12)
console.log(`O valor 12 está na posição ${p}.`)