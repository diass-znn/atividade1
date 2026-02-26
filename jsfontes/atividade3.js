let tipoOperacao = ' '
let n1 = 200
let n2 = 100
total = 0




function adicao() {

    total = n1 + n2
    return total
}

function subtracao() {
    total = n1 - n2
    return total
}

function divisao() {
    total = n1 / n2
    return total
}

function multiplicacao() {
    total = n1 * n2
    return total
}


total = adicao()
console.log(`a soma dos numeros ${n1} + ${n2} é igual a ${total}`)
total = subtracao()
console.log(`a subtração entre ${n1} - ${n2} é igual a ${total}`)
total = divisao()
console.log(`a divisão entre ${n1} / ${n2} é igual a ${total}`)
total = multiplicacao()
console.log(`a multiplicacão entre ${n1} X ${n2} é igual a ${total}`)

