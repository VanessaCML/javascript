function contar(){
    let inicio = document.getElementById('txtinicio')
    let passo = document.getElementById('txtpasso')
    let fim = document.getElementById('txtfim')
    let res = document.getElementById('res')

    if (inicio.length == 0 || passo.length == 0 || fim.length == 0){
        alert('Campo vazio! Por favor, digite um número.')
    } else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(inicio.value)
        let p = Number(passo.value)
        let f = Number(fim.value)    
        if (p<=0){
            window.alert('Passo inválido! Considerando Passo = 1')
            p = 1
        }
        if (i<f){
            for(let c=i;c<=f;c+=p){
                res.innerHTML += `${c}👉`
            }            
        } else {
            for(let c=i;c>=f;c-=p){
                res.innerHTML += `${c}👉`
            }    
        }  
        res.innerHTML += `🏁`          
    }
}