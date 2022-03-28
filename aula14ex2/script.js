function tabuada(){
    let num = document.getElementById('txtn')
    let n = Number(num.value)
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
        alert('Por favor, digite um número.')
    }    
    
    tab.innerHTML = ''
    for(let c=1;c<=10;c++){
        let opc = document.createElement('option')
        opc.text = `${n} x ${c} = ${n*c}`
        opc.value = `tab${c}`
        tab.appendChild(opc)
    }

}