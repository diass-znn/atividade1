let n1 = 200
let n2 = 100

function adicao(n1,n2) {

    return n1 + n2
}

function subtracao(n1, n2) {
    
    return n1 - n2
}

function divisao(n1, n2) {
    
    return n1 / n2
}

function multiplicacao(n1, n2) {
    
    return n1 * n2
}

console.log(`a soma dos numeros ${n1} + ${n2} é igual a ${total}`)
total = subtracao(n1, n2)
console.log(`a subtração entre ${n1} - ${n2} é igual a ${total}`)
total = divisao(n1, n2)
console.log(`a divisão entre ${n1} / ${n2} é igual a ${total}`)
total = multiplicacao(n1, n2)
console.log(`a multiplicacão entre ${n1} X ${n2} é igual a ${total}`)