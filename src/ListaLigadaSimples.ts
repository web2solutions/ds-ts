// Lista Encadeada simples.

// https://www.30secondsofcode.org/articles/s/js-data-structures-linked-list

// https://www.30secondsofcode.org/c/js-data-structures/p/1

// https://www.dimap.ufrn.br/~umberto/paed/lista04.pdf

// http://sites.poli.usp.br/p/fabio.cozman/Didatico/Comp/Material/estruturas.pdf


// Interface Nó
interface No {
    valor: string | number;
    proximo: No | null;
}

class ListaLinkadaSimples {
    private _nos: No[] = []
    constructor() {
        //
    }

    public get tamanho(): number {
        return this._nos.length
    }

    public get cabeca(): No | null {
        return this.tamanho ? this._nos[0] : null;
    }

    public get ultimo(): No | null {
        return this.tamanho ? this._nos[this._nos.length - 1] : null
    }

    // insere o elemento em index específico
    public inserirEm (posicao: number, valor: string | number): void {
        const anterior: No = this._nos[posicao - 1] || null
        const proximo: No = this._nos[posicao] || null
        const node: No = { valor, proximo }

        if (anterior) {
            anterior.proximo = node
        }
        // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
        this._nos.splice(posicao, 0, node)
    }

    public inserirEmPrimeiro (valor: string | number): void {
        this.inserirEm(0, valor)
    }

    public inserirEmUltimo (valor: string | number): void {
        this.inserirEm(this.tamanho, valor)
    }

    // remove o elemento em index específico
    public removerEm (posicao: number): void {
        const anterior = this._nos[posicao - 1]
        const proximo = this._nos[posicao + 1] || null
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

    public *[Symbol.iterator]() {
        yield* this._nos
    }
}

const lista  = new ListaLinkadaSimples()
// lista.inserirEm(1, 'primeiro inserido')
// lista.inserirEm(1, 'segundo inserido')
lista.inserirEmPrimeiro(1)
lista.inserirEmPrimeiro(2)
lista.inserirEmPrimeiro(3)
lista.inserirEmUltimo(4)
lista.inserirEm(3, 5)
console.log('==== Tamanho da lista', lista.tamanho)
console.log('==== Cabeca da lista', lista.cabeca?.valor)
console.log('==== Ultimo da lista', lista.ultimo?.valor)
console.log(lista)