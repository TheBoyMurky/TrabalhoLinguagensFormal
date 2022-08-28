// definir gramatica = N, T, P, S
var N = [];
var T = [];
var S = null;

function setaDadosNaoTerminais() {
    let valor = document.getElementById('nao-terminais').value
    let verificacao = false

    N.forEach((item) => {
        if(item == valor) {
            verificacao = true

            alert('Você já inseriu esse valor!')
            
            return
        }
    })
    
    if(!verificacao && this.verificaSeVazio(valor)) {
        N.push(valor);

        this.listarNaoTerminais();
    }

    document.getElementById('nao-terminais').value = null

}

function setaDadosTerminais() {
    let valor = document.getElementById('terminais').value
    let verificacao = false
    
    T.forEach((item) => {
        if(item == valor) {
            verificacao = true
            
            alert('Você já inseriu esse valor!')
            
            return
        }
    })
    
    if(!verificacao && this.verificaSeVazio(valor)) {
        T.push(valor);
        
        this.listarTerminais();
    }
    
    document.getElementById('terminais').value = null
}

function setaStart() {
    let valor = document.getElementById('start').value
    let verificacao = false

    N.forEach((item) => {
        if(item == valor) {
            verificacao = true
            
            S = valor;
        }
    })
    
    if(!verificacao && this.verificaSeVazio(item)) {
        
        alert('O start deve ser um Não terminal definido anteriormente!')
        
    }

    document.getElementById('start').value = null
}

function listarNaoTerminais() {
    let listaNaoTerminais = document.getElementById('lista-nao-terminais')
    
    // limpar ul
    listaNaoTerminais.innerHTML = ""

    N.forEach((item) => {
        let itemLista = document.createElement('li')
        let itemInput = document.createElement('input')
        let itemButton = document.createElement('button')

        itemLista.textContent = `${item} - `
        itemLista.setAttribute("id", item)

        itemInput.id = `producao-${item}`
        itemInput.setAttribute("id", `regra-nao-terminal-${item}`)
        
        itemButton.textContent = 'Salvar'
        itemButton.addEventListener("click", () => {
            verificaProducao(itemInput)
        }) // Com função lambda ele não roda ao ser chamado inicialmente

        itemLista.appendChild(itemInput)
        itemLista.appendChild(itemButton)

        listaNaoTerminais.appendChild(itemLista)
    })
}

function listarTerminais() {
    let listaTerminais = document.getElementById('lista-terminais')

    // limpar ul
    listaTerminais.innerHTML = ""

    T.forEach((item) => {
        let itemLista = document.createElement('li')

        itemLista.textContent = item

        listaTerminais.appendChild(itemLista)
    })
}

function verificaSeVazio(item) {
    return item != "" && item != null
}

// Iremos criar as regras utilizando espaço entre cada uso
// Exemplo: a1 b2 #
// # será usado para vazio

function verificaProducao(input) {
    let regra = input.value
    let possui = false
    
    // Aqui ele está parando quando encontra o primeiro simbolo que estiver em T, ajustar depois
    T.forEach((item) => {
        for(let i = 0; i < regra.length; i++) {
            if(regra[i] == item) {
                possui = true

                return
            }
        }
    })

    // Aqui ele está parando quando encontra o primeiro simbolo que estiver em T, ajustar depois
    N.forEach((item) => {
        for(let i = 0; i < regra.length; i++) {
            if(regra[i] == item) {
                possui = true

                return
            }
        }
    })

    if(!possui) {
        alert('Um dos valores informados na produção não faz parte dos N ou T')
        return
    }

}

// verificar se espaço em branco
// verificar se nao terminais é um numero
// verificar se caracter especial