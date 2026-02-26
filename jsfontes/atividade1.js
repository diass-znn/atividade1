const horaAcordar = 5
let acordado = false
let levantarCama = true
let escovarOsDentes = false
let tomarCafe = false
let escolherRoupa = false
let colocarRoupa = false
let sairResedencia = 'casa'
let descerNoPonto = false
const meioTranporte = 'onibus'
const destino = 'escola'
let estudar = false
const sairDestino = 12
let subirNoPonto = false
const pegarOnibus = 'onibus'
const chegarnaCasa = '12 e pouco'
let almoçar = false
let pedirUber = false
const chegarNoTrabalho = 13
const horarioTermino = 18
let sairDoTrabalho = false
let irAndando = false
let chegarEmCasa = false
let jantar = false
let tomarBanho = false
const irPara = 'curso'
let aprender = false
let sairDoCurso = false
let irParaCasa = false
const chegarCasa = '21 á 22'
let escovarDentes = false
let arrumarCama = false
let dormir = false

function minhaRotina() {
    console.log(`acordei ${horaAcordar}horas`)
    acordado = true
    console.log(`acordei!`)
    levantarCama = true
    console.log(`levantei da cama!`)
    escovarOsDentes = true
    console.log(`escovei os dentes!`)
    tomarCafe = true
    console.log(`tomei o café da manha`)
    ecolherRoupa = true
    console.log (`escolhi minha roupa`)
    colocarRoupa = true
    console.log(`coloquei a roupa que eu queria`)
    sairResidencia = true
    console.log(`sai de ${sairResidencia}`)
    descerNoPonto = true
    console.log(`ja desci aqui no ponto para esperar o onibus`)
    console.log(`entrei no ${meioTranporte} indo a caminho da ${destino}`)
    estudar = true
    console.log(`estudei tudo direitinho`)
    console.log(`sai da escola por volta das ${sairDestino}`)
    subirNoPonto = true
    console.log(`cheguei no ponto, pronto para ir para casa!`)
    console.log(`peguei novamente o ${meioTransporte}, mais dessa vez para ir para ${sairResidencia}`)
    console.log(`chegar em ${sairResidencia}, por volta das ${chegarEmCasa}`)
    almoçar = true
    console.log(`almocei antes de ir trabalhar`)
    pedirUber = true
    console.log(`pedi uber para ir até o trabalho`)
    console.log(`cheguei no trabalho ${chegarNoTrabalho}, e trabalhei muito!`)
    console.log(`horario do termino ${horarioTermino}`)
    sairDoTrabalho = true
    console.log(`após trabalhar muito, sai do trabalho, para ir para ${sairResidencia}`)
    irAndando = true
    console.log(`fui anadando até em ${sairResidencia}, como sempre faço`)
    chegarEmCasa = true
    console.log(`cheguei em casa após um longo dia`)
    jantar = true
    console.log(`assim que cheguei em casa tambem jantei`)
    tomarBnaho = true
    console.log(`e tambem tomei banho`)
    console.log(`assim que fiz todas as tarefas, fui para o ${irPara}`)
    aprender = true
    console.log(`aprendi muita coisa, sobre logica de programação`)
    sairDoCurso = true
    console.log(`assim que aprendi muita coisa sai de lá, para ir de volta para ${sairResidencia}`)
    irParaCasa = true
    console.log(`fui para ${sairResidencia} depois de cumprir todas as tarefas`)
    console.log(`cheguei por volta das ${chegarCasa}`)
    escovarDentes = true
    console.log(`escovei os dentes para dormir`)
    arrumarCama = true
    console.log(`arrumei a cama para dormir`)
    dormir = true
    console.log(`depois de um dia muito produtivo, fui dormir porque amanha tem mais!`)

}
minhaRotina()
