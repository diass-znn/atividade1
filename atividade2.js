let horaAcordar = 5
let levantarCama = false
let arrumarRoupa = false
let peca1 = ''
let peca2 = ''
let peca3 = ''
let peca4 = ''
let escovarDente = false
let comerNoCafe = ''
let beberNoCafe = ''
let irParaPonto = false
let meioTransporte = ''
let chegarNaEscola = 6
let sairEscola = 12
let chegarNoTrabalho = 13
let almoçar = ' '
let voltarParaCasa = ' '
let chegarEmCasa = ' '
let irParaCurso = ' '
let jantar = ' '
let dormir = ' '
let aulaDeHoje = ' '


function meuDiaDia() {

    horaAcordar = 6
    levantarCama = true
    arrumarRoupa = true
    peca1 = 'calça'
    peca2 = 'camiseta'
    peca3 = 'tenis'
    peca4 = 'acessorios'
    escovarDente = true
    comerNoCafe = 'pão'
    beberNoCafe = 'café'
    irParaPonto = true
    meioTransporte = 'onibus'
    chegarNaEscola = 7
    aulaDeHoje = 'portugues'
    sairEscola = 11
    chegarNoTrabalho = 12
    almoçar = 'comida'
    voltarParaCasa = 18
    chegarEmCasa = 18
    irParaCurso = 19
    jantar = 'miojo'
    dormir = 23



    if (horaAcordar === 6) {
        console.log(`hoje eu acordei as ${horaAcordar} horas`)

        if (levantarCama === 'levantei') {
            console.log(`ja ${levantarCama} da cama, para começar o dia`)

            if (arrumarRoupa === 'arrumei') {
                console.log(`ja ${arrumarRoupa} minhas roupas, as peças foram, ${peca1}, ${peca2}, ${peca3} e alguns ${peca4}`)

                if (escovarDentes === 'escovei') {
                    console.log(`depois de me trocar, fui ${escovarDentes} os dentes`)

                    if (comerNoCafe === 'pão') {
                        console.log(`ja comi meu ${comerNoCafe} no meu cafe da manha`)

                        if (beberNoCafe === 'café') {
                            console.log(`para acompanhar o ${comerNoCafe} também bebi um ${beberNoCafe}`)

                            if (irParaPonto === 'desci') {
                                console.log(`após sair de casa, ja ${irParaPonto} no ponto`)

                                if (meioDeTransporte === 'onibus') {
                                    console.log(`após chegar no ponto subi no ${meioDeTransporte} a caminho da escola`)

                                    if (chegarNaEscola === 7) {
                                        console.log(`cheguei na escola as ${chegarNaEscola} horas`)

                                        if (aulaDeHoje === 'portugues') {
                                            console.log(`hoje na escola, minha materia principal foi ${aulaDeHoje}`)

                                            if (sairEscola === 11) {
                                                console.log(`sai da escola por volta das ${sairEscola} horas`)

                                                if (chegarNoTrabalho === 12) {
                                                    console.log(`cheguei no trabalho ${chegarNoTrabalho} horas`)

                                                    if (almoçar === 'comida') {
                                                        console.log(`comi minha ${almoçar}, pois tem vezes que como lanche`)

                                                        if (voltarParaCasa === 18) {
                                                            console.log(`fui em bora do trabalho as ${voltarParaCasa} horas`)

                                                            if (chegarEmCsa === 18) {
                                                                console.log(`cheguei em casa por volta das ${chegarEmCasa}:30`)

                                                                if (irParaCurso === 19) {
                                                                    console.log(`fui para o curso as ${irParaCurso} horas`)

                                                                    if (jantar === 'miojo') {
                                                                        console.log(`costumo comer ${jantar} para dormir`)

                                                                        if (dormir === 23) {
                                                                            console.log(`costumo dormir por volta das ${dormir} horas`)
                                                                        }
                                                                        else {
                                                                            console.log(`não fui dormir as ${dormir} pois fui dormir mais tarde`)
                                                                        }
                                                                    }
                                                                    else {
                                                                        console.log(`não jantei ${jantar} pois quis jantar pizza`)
                                                                    }
                                                                }
                                                                else {
                                                                    console.log(`não fui para o curso as ${irParaCurso}`)
                                                                }
                                                            }
                                                            else {
                                                                console.log(`não cheguei em casa as ${chegarEmCasa}:30`)
                                                            }
                                                        }
                                                        else {
                                                            console.log(`não voltei para a casa as ${voltarParaCasa} horas`)
                                                        }
                                                    }
                                                    else {
                                                        console.log(`não almocei, pois não fui pro trabalho`)
                                                    }
                                                }
                                                else {
                                                    console.log(`não cheguei no trabalho as ${chegarNoTrabalho} horas`)
                                                }
                                            }
                                            else {
                                                console.log(`não sai da escola as ${sairEscola} horas`)
                                            }
                                        }
                                        else {
                                            console.log(`hoje não teve aula de ${aulaDeHoje}`)
                                        }
                                    }
                                    else {
                                        console.log(`não cheguei na escola as ${chegarNaEscola} horas`)
                                    }
                                }
                                else {
                                    console.log(`não fui de ${meioDeTransporte}`)
                                }
                            }
                            else {
                                console.log(`não ${irParaPonto} no ponto`)
                            }
                        }
                        else {
                            console.log(`eu não tomei nada no cafe da manha`)
                        }
                    }
                    else {
                        console.log(`não comi nada no cafe da mnha`)
                    }
                }
                else {
                    console.log(`ainda não ${escovarDentes} pois ainda nao acordei`)
                }
            }
            else {
                console.log(`ainda não ${arrumarRoupa} pois ainda não acordei`)
            }
        }
        else {
            console.log(`não ${levantarCama} pois ainda estava com sono`)
        }
    }
    else {
        console.log(`não acordei as ${horaAcordar} pois perdi o horario`)
    }

}
meuDiaDia()