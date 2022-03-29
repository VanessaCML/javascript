const nums = []
const res = document.getElementById('res')

function adicionar(){  
    let numor = document.querySelector('input#txtn')  
    let num = Number(document.getElementById('txtn').value)  
    let box = document.getElementById('box') 
    res.innerHTML = ''
    if (num.length == 0 || num < 1 || num > 100){
        alert('ERRO! Por favor, digite um número entre 1 e 100.')      
    } else if(nums.length > 0 && nums.indexOf(num) != -1){        
        alert('Número repetido! Por favor, digite um número diferente entre 1 e 100.')            
    } else { 
        nums.push(num) 
        nums.sort(function(a, b){return a-b}) 
        box.innerHTML=''       
        for (let c=0; c<nums.length; c++){                     
            let opc = document.createElement('option')
            opc.text = `Valor ${nums[c]} adicionado.`
            box.appendChild(opc)                                   
        }                   
    } 
    numor.value = ''  
    numor.focus()   
} 

function finalizar(){     
    res.innerHTML = `
        <p>No total, temos ${nums.length} números cadastrados.</p> 
        <p>O maior valor informado foi ${nums[nums.length-1]}.</p>
        <p>O menor valor informado foi ${nums[0]}.</p>`
    let soma = 0
    for(k in nums){
        soma += nums[k]        
    }
    let media = soma / nums.length
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores é ${media}.</p>`
}   