// FUNÇÃO RECURSIVA - CHAMA ELA MESMA
/*
5! = 5 x 4! logo,
n! = n x (n-1)! MAS
1! = 1
*/
function fatorial(n){
    if (n==0){
        return 1
    } else{
        return n*fatorial(n-1)
    }
}
console.log(fatorial(5))


