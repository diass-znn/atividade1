function ListaMercado(itensLimpeza, itensAlimento, itensFrutas, itensGeladeira, itensPadaria, itensCaixa) {


    console.log(`itens limpesa: ${itensLimpeza[0]}, ${itensLimpeza[1]}, ${itensLimpeza[2]}`)
    console.log(`itens alimento: ${itensAlimento[0]}, ${itensAlimento[1]}, ${itensAlimento[2]}`)
    console.log(`itens frutas: ${itensFrutas[0]}, ${itensFrutas[1]}, ${itensFrutas[2]}`)
    console.log(`itens geladeira: ${itensGeladeira[0]}, ${itensGeladeira[1]}, ${itensGeladeira[2]}`)
    console.log(`itens padaria: ${itensPadaria[0]}, ${itensPadaria[1]}, ${itensPadaria[2]}`)
    console.log(`itens do caixa: ${itensCaixa[0]}, ${itensCaixa[1]}, ${itensCaixa[2]}`)


}

ListaMercado(['detergente', 'candida', 'vasoura'],
    ['arroz', 'feijão', 'farofa'],
    ['banana', 'maça', 'melão'],
    ['refrigerante', 'suco', 'danone'],
    ['pão', 'mussarela', 'mortadela'],
    ['dinheiro', 'sistema', 'sacola'])