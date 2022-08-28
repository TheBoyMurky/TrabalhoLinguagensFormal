function gerarSentenca() {
    //console.log(`Teste: N: ${N} - T: ${T} - S: ${S}`)

    // Fazer uma verificação das listas variáveis para que contenha alguma coisa // Esqueci que coisa

    // Cria um objeto para armazenar um Não terminal com a sua regra
    NComRegra = {}
    N.forEach((item) => {
        for(let i = 0; i < N.length; i++) {
            if(N[i] == item) {
                NComRegra[item] = document.getElementById(`regra-nao-terminal-${item}`).value.split(" ") // Jesus isso aqui é bizarro
            }
        }
    })

    // console.log(NComRegra) // Testado e funfando com sucesso

    // Selecione um elemento aleatório do S para iniciar a sentença
    elementosDeS = NComRegra[S]
    sentencaInicial = elementosDeS[Math.floor(Math.random() * elementosDeS.length)].split('').reverse()
    
}