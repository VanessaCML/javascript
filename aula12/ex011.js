var idade = 64
console.log(`Você têm ${idade} anos.`)
if (idade>=18 && idade<65){
    console.log('Voto obrigatório')
} else if (idade >= 16 || idade>=65){
        console.log('Voto facultativo')
    }else{
        console.log('Não vota')
    }
