/*

EXEMPLOS PARA SER USADO:
1)
S = aS aB
B = bB bC
C = cC #

2)
S = 1S 0S #

3)
S = 0A
A = 0B
B = 1B #
*/


let NComRegra = {}

function gerarSentenca() {
    let listaSentencas = document.getElementById('lista-sentencas')
    // Fazer uma verificação das listas variáveis para que contenha alguma coisa // Esqueci que coisa

    // Cria um objeto para armazenar um Não terminal com a sua regra
    N.forEach((item) => {
        for(let i = 0; i < N.length; i++) {
            if(N[i] == item) {
                regraNaoTerminal = document.getElementById(`regra-nao-terminal-${item}`).value
                NComRegra[item] = regraNaoTerminal.split(" ")
            }
        }
    })
    let elementoDeS = selecionarAleatorio(S)

    let itemLista = document.createElement('li')
    sentenca = iterarPilha(elementoDeS)
    itemLista.textContent = `${sentenca}`
    listaSentencas.appendChild(itemLista)
}

function selecionarAleatorio(naoTerminal) {
    let elementosDeNaoTerminal = NComRegra[naoTerminal]

    return elementosDeNaoTerminal[Math.floor(Math.random() * elementosDeNaoTerminal.length)]
}

function iterarPilha(sentenca) {
    for(let i = 0; i < sentenca.length; i++) {
        
        if(N.includes(sentenca[i])) {
            sentenca = sentenca.replace(sentenca[i], selecionarAleatorio(sentenca[i]))
        }
    }
    sentenca = sentenca.replaceAll("#", "")
    return sentenca
}