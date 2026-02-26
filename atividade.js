let acordar = 7
let levantarCama = false
let organizar = false
let peca1 = ''
let peca2 = ''
let peca3 = ''
let peca4 = ''
let dentesEscovados = false
let comerManha = ''
let proteina = ''
let beberNoCafe = ''
let irParaPonto = false
let locomocao = ''
let horarioEscola = 6
let horarioSaida = 12
let chegarTrabalho = 13
let alimento = ' '
let voltarParaCasa = 17
let chegarEmCasa = 19
let horarioCurso = 20
let professor = 'vitor'
let comida = ' '
let horaDormir = 22


function horaDeAcordar() {
    acordar = 7
    levantarCama = true

    console.log('')
    console.log('------------------------------------------------------------------------')
    console.log('')

    if (acordar === 7) {
        console.log(`hoje eu acordei as ${acordar} horas`)
    }
    else {
        console.log(`não acordei as ${acordar} pois perdi o horario`)
    }

    console.log('')
    console.log('-------------------------------------------------------------------------')
    console.log('')

    if (levantarCama) {
        console.log(`ja levantei da cama, para começar o dia`)
        console.log('quando levanto da cama fico alguns minutos olhando pro nada')
    }
    else {
        console.log(`não levantei pois ainda estava com sono`)
        console.log('quando não levanto continuo dormindo')
    }

}



function arrumarRoupa() {
    organizar = true
    peca1 = 'camiseta'
    peca2 = 'calça'
    peca3 = 'teniz'
    peca4 = 'acessorios'

console.log('')
console.log('-------------------------------------------------------------------------------')
console.log('')

    if (organizar) {
        console.log(`ja arrumei minhas roupas, as peças foram, ${peca1}, ${peca2}, ${peca3} e alguns ${peca4}`)
        console.log('costumo variar os estilos de roupas para cada ocasião diferentes')
    }
    else {
        console.log(`ainda não arrumei pois ainda não acordei`)
        console.log('quando estou com muita preça não tenho tempo de pegar uma roupa e coloco qualquer uma')
    }
}



function escovarDentes() {
    dentesEscovados = true

    console.log('')
    console.log('---------------------------------------------------------------------------')
    console.log('')

    if (escovarDentes) {
        console.log(`depois de me trocar, fui escovar os dentes`)
        console.log('para escovar os dentes, pego a pasta, coloco na escova, e molho ela')
        console.log('e as vezes molho primeiro para depois colocar a pasta')
    }
    else {
        console.log(`ainda não escovei pois ainda nao acordei`)
        console.log('se eu acordar tarde, escovo os dentes só depois de tomar o café da manha')
    }
}



function cafeManha() {

    let comi = false
    comerManha = 'pão'
    proteina = 'ovo'
    let comerNoCafe = comerManha + ' ' + 'com' + ' ' + proteina
    beberNoCafe = 'toddy'

    console.log('')
    console.log('----------------------------------------------------------------------------')
    console.log('')

    if (comi) {
        console.log(`ja comi meu ${comerNoCafe} no meu cafe da manha`)
        console.log('como algo bem reforçado')
    }
    else {
        console.log('não comi nada no cafe da manha')
    }
        console.log('')
        console.log('-----------------------------------------------------------------------')
        console.log('')
    
    if (beberNoCafe === 'toddy') {
        console.log(`para acompanhar o ${comerNoCafe} também bebi um ${beberNoCafe}`)
        console.log('tomo algo bem reforçado para aguentar até o almoço')

    }
    else {
        console.log(`eu não tomei nada no cafe da manha`)
    }
}



function meioDeTransporte() {

    locomocao = 'onibus'
    irParaPonto = true

    console.log('')
    console.log('----------------------------------------------------------------------------')
    console.log('')

    if (locomocao === 'onibus') {
        console.log(`após chegar no ponto subi no ${locomocao} a caminho da escola`)
        console.log(`costumo ir de ${locomocao} pois assim consigo chegar na escola mais rapido`)
    }
    else {
        console.log(`não fui de ${locomocao}`)
    }

    console.log('')
    console.log('---------------------------------------------------------------------------')
    console.log('')

    if (irParaPonto) {
        console.log(`após sair de casa, ja desci no ponto`)
        console.log('a maioria das vezes vou de onibus')
    }
    else {
        console.log(`não fui para o ponto, pois não fui de onibus `)
    }

}



function chegarNaEscola() {

    horarioEscola = 7

    console.log('')
    console.log('---------------------------------------------------------------------------')
    console.log('')

    if (horarioEscola === 7) {
        console.log(`cheguei na escola as ${horarioEscola} horas`)
        console.log('dependendo da hora que acordo, chego na escola as esse horario')
    }
    else {
        console.log(`não cheguei na escola as ${horarioEscola} horas`)
        console.log(`não cheguei as ${horarioEscola} horas pois cheguei atrasdo`)
        console.log('ou não fui')

    }
}



function SairDaEscola() {

    horarioSaida = 11

    console.log('')
    console.log('--------------------------------------------------------------------------')
    console.log('')

    if (horarioSaida === 11) {
        console.log(`sai da escola por volta das ${horarioSaida} horas`)
        console.log('quando o professor libera mais cedo, saio mais cedo')
    }
    else {
        console.log(`não sai da escola as ${horarioSaida} horas`)
    }
}



function trabalho() {

    chegarTrabalho = 12

    console.log('')
    console.log('-------------------------------------------------------------------------')
    console.log('')

    if (chegarTrabalho === 12) {
        console.log(`cheguei no trabalho ${chegarTrabalho} horas`)
        console.log('quando a escola libera mais cedo, costumo chegar mais cedo no trabalho tambem')
    }
    else {
        console.log(`não cheguei no trabalho as ${chegarTrabalho} horas`)
    }
}


function almocar() {

    alimento = 'marmita'

    console.log('')
    console.log('-------------------------------------------------------------------------')
    console.log('')

    if (alimento === 'marmita') {
        console.log(`comi minha ${alimento}, pois tem vezes que como lanche`)
        
    }
    else {
        console.log(`não almocei!`)
    }
}



function DepoisDoTrabalho() {

    voltarParaCasa = 18
    chegarEmCasa = 18

    console.log('')
    console.log('--------------------------------------------------------------------------')
    console.log('')

    if (voltarParaCasa === 18) {
        console.log(`fui em bora do trabalho as ${voltarParaCasa} horas`)
    }
    else {
        console.log(`não voltei para a casa as ${voltarParaCasa} horas`)
    }

    console.log('')
    console.log('---------------------------------------------------------------------------')
    console.log('')

    if (chegarEmCasa === 18) {
        console.log(`cheguei em casa por volta das ${chegarEmCasa}:30`)
    }
    else {
        console.log(`não cheguei em casa as ${chegarEmCasa}:30`)
    }
}



function irParaCurso() {

    horarioCurso = 19

    console.log('')
    console.log('----------------------------------------------------------------------------')
    console.log('')

    if (horarioCurso === 19) {
        console.log(`fui para o curso as ${horarioCurso} horas`)
        console.log('o curso costuma começar esse horario')
    }

    else {
        console.log(`não fui para o curso as ${horarioCurso}`)
    }

    console.log('')
    console.log('----------------------------------------------------------------------------')
    console.log('')

    if (professor === 'vitor') {
        console.log(`quem da as aulas é o professor ${professor}`)
    }
    else {
        console.log(`as vezes o professor ${professor} passa atividade para casa`)
        console.log('e então nao tem aula')
    }

}



function jantar() {

    comida = 'miojo'

    console.log('')
    console.log('----------------------------------------------------------------------------')
    console.log('')

    if (comida === 'miojo') {
        console.log(`costumo comer ${comida} para dormir`)
        console.log('quando minha mãe não faz comida')
    }
    else {
        console.log(`não jantei ${comida} pois quis jantar pizza`)
    }
}



function dormir() {


    horaDormir = 23

    console.log('')
    console.log('---------------------------------------------------------------------------')
    console.log('')

    if (horaDormir === 23) {
        console.log(`costumo dormir por volta das ${horaDormir} horas`)
        console.log('apesar de ser tarde')
    }
    else {
        console.log(`não fui dormir as ${horaDormir} pois fui dormir mais tarde`)
    }

    console.log('')
    console.log('---------------------------------------------------------------------------')
    console.log('')

}

horaDeAcordar()
arrumarRoupa()
escovarDentes()
cafeManha()
meioDeTransporte()
chegarNaEscola()
SairDaEscola()
trabalho()
almocar()
DepoisDoTrabalho()
irParaCurso()
jantar()
dormir()
