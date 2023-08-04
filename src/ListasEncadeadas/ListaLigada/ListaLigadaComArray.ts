// Interface Nó
import { No } from "./No";

export class ListaLigadaComArray<T> {
    private _nos: No<T>[] = []

    constructor (nodes?: No<T>) {
        if(typeof nodes !== 'undefined') this.popular(nodes)
    }
    
    popular (nodes: No<T>) {
        this.inserirEmUltimo(nodes.valor)
        if (nodes.proximo === null) return
        this.popular(nodes.proximo)
    }

    public get tamanho(): number {
        return this._nos.length
    }

    public get nos (): No<T>[] {
        return this._nos;
    }

    public get valores (): Array<T> {
        return [...this.nos.map((e: No<T>) => e?.valor)]
    }

    public get cabeca(): No<T> | null {
        return this.tamanho ? this._nos[0] : null;
    }

    public get cauda(): No<T> | null {
        return this.tamanho ? this._nos[this._nos.length - 1] : null
    }

    // insere o elemento em index específico
    public inserirEm (posicao: number, valor: T): No<T> {
        const anterior: No<T> = this._nos[posicao - 1] || null
        const proximo: No<T> = this._nos[posicao] || null
        const node: No<T> = { valor, proximo }

        if (anterior) {
            anterior.proximo = node
        }
        
        this._nos.splice(posicao, 0, node)
        return this._nos[posicao]
    }

    public inserirEmPrimeiro (valor: T): No<T> {
        return this.inserirEm(0, valor)
    }

    public inserirEmUltimo (valor: T): No<T> {
        return this.inserirEm(this.tamanho, valor)
    }

    // remove o elemento em index específico
    public removerEm (posicao: number): No<T> | null {
        const anterior = this._nos[posicao - 1]
        const proximo = this._nos[posicao + 1] || null

        if (anterior) {
            anterior.proximo = proximo;
        }
        const no: No<T> = this._nos.splice(posicao, 1)[0] || null
        return no
    }

    // lê o elemento em index específico
    public pegarEm (posicao: number): No<T> {
        return this._nos[posicao]
    }

    public contem(valor: T): boolean {
        for(let posicao = 0; posicao < this.tamanho; posicao++) {
            if(this._nos[posicao].valor === valor) {
                return true
            }
        }
        return false
    }

    public busca(valor:T): No<T> | null {
        for(let posicao = 0; posicao < this.tamanho; posicao++) {
            if(this._nos[posicao].valor === valor) {
                return this._nos[posicao]
            }
        }
        return null
    }

    public buscaPosicao(valor: T): number {
        for(let posicao = 0; posicao < this.tamanho; posicao++) {
            if(this._nos[posicao].valor === valor) {
                return posicao
            }
        }
        return -1
    }

    // limpar lista linkada
    public limpar (): void {
        this._nos = [];
    }

    // reverter ordem dos elementos na lista
    public reverse (): void {
        const copy = [...this._nos]
        const tamanho = this.tamanho
        this.limpar()
        for(let posicao = tamanho - 1; posicao >= 0; posicao--) {
            this.inserirEmUltimo(copy[posicao].valor)
        }
    }

    /**
     * Percorrer a ordem da lista encadeada.
     *
     * @public
     * @method
     * @param {Function} cb Callback which should be executed on each node.
     */
    public emordem (cb: Function) {
        var temp = this.cabeca;
        while (temp) {
            if (cb) cb(temp);
            temp = temp.proximo;
        }
    };
}
