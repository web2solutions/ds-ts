// Lista Encadeada simples.

// https://www.dimap.ufrn.br/~umberto/paed/lista04.pdf

// http://sites.poli.usp.br/p/fabio.cozman/Didatico/Comp/Material/estruturas.pdf

/**
 * 
    A vantagem é a flexibilidade na inserção e remoção de elementos. 
    A desvantagem é que não temos acesso direto aos elementos.
    Não existe algo equivalente ao índice para se acessar diretamente o elemento.

    Uma Lista Encadeada ´e uma estrutura de dados do tipo container, ou seja, serve para
    armazenar elementos em uma certa ordem. A lista encadeada oferece opera¸c˜oes de acesso
    geral, tais como inser¸c˜ao, remo¸c˜ao e busca arbitr´aria. Uma das caracter´ısticas mais importantes 
    de uma lista encadeada ´e seu car´ater dinˆamico, que permite armazenar um n´umero
    de elementos limitado apenas pela mem´oria dispon´ıvel.
    
    Uma lista encadeada consiste de uma sequˆencia linear de ¨ n´os dinamicamente alocados,
    que s˜ao encadeados (ou conectados) atrav´es de ponteiros (ou apontadores). Vers˜oes mais
    elaboradas de listas encadeadas utilizam n´os com ponteiros para os n´os sucessor e antecessor 
    (listas duplamente encadeadas) e outras fazem com que o ´ultimo n´o aponte para o
    primeiro (listas circulares).
 */


// Interface Nó
interface No {
    valor: string | number;
    proximo: No | null;
}

class ListaEncadeadaSimples {
    private _nos: No[] = []

    public get tamanho(): number {
        return this._nos.length
    }

    public get nos (): No[] {
        return this._nos;
    }

    public get valores (): Array<string|number> {
        return [...this.nos.map((e: No) => e?.valor)]
    }

    public get cabeca(): No | null {
        return this.tamanho ? this._nos[0] : null;
    }

    public get ultimo(): No | null {
        return this.tamanho ? this._nos[this._nos.length - 1] : null
    }

    // insere o elemento em index específico
    public inserirEm (posicao: number, valor: string | number): No {
        const anterior: No = this._nos[posicao - 1] || null
        const proximo: No = this._nos[posicao] || null
        const node: No = { valor, proximo }

        if (anterior) {
            anterior.proximo = node
        }
        // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
        this._nos.splice(posicao, 0, node)
        return this._nos[posicao]
    }

    public inserirEmPrimeiro (valor: string | number): No {
        return this.inserirEm(0, valor)
    }

    public inserirEmUltimo (valor: string | number): No {
        return this.inserirEm(this.tamanho, valor)
    }

    // remove o elemento em index específico
    public removerEm (posicao: number): No | null {
        const anterior = this._nos[posicao - 1]
        const proximo = this._nos[posicao + 1] || null

        if (anterior) {
            anterior.proximo = proximo;
        }
        const no: No = this._nos.splice(posicao, 1)[0] || null
        return no
    }

    // lê o elemento em index específico
    public pegarEm (posicao: number): No {
        return this._nos[posicao]
    }

    // limpar lista linkada
    public limpar (): void {
        // 
    }

    // reverter ordem dos elementos na lista
    public reverse (): void {
        // 
    }

    *[Symbol.iterator](): Generator<No, void, undefined> {
        yield* this._nos
    }
}

const lista  = new ListaEncadeadaSimples()
// lista.inserirEm(1, 'primeiro inserido')
// lista.inserirEm(1, 'segundo inserido')
console.log('--- inserir 1 em primeiro: ', lista.inserirEmPrimeiro(1))
console.log('--- inserir 2 em primeiro: ', lista.inserirEmPrimeiro(2))
console.log('--- inserir 3 em primeiro: ', lista.inserirEmPrimeiro(3))
console.log('--- inserir 4 em ultimo: ', lista.inserirEmUltimo(4))
console.log('--- inserir 5 na posicao 3: ', lista.inserirEm(3, 5))
console.log('==== Tamanho da lista', lista.tamanho) // 5
console.log('==== Cabeca da lista', lista.cabeca?.valor) // 2
console.log('==== Ultimo da lista', lista.ultimo?.valor) // 4
console.log(lista.valores) // [3, 2, 1, 5, 4]



console.log( lista.removerEm(1)?.valor )               // 2
console.log(lista.pegarEm(1).valor)          // 1
console.log(lista.cabeca?.proximo?.valor)           // 1
// [...list.map(e => e.value)];    // [3, 1, 5, 4]
