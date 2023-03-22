// Interface Nó
import { No } from "./No";

export class ListaEncadeadaSimples {
    private _nos: No[] = []

    constructor (nodes?: No) {
        if(typeof nodes !== 'undefined') this.popular(nodes)
    }
    
    popular (nodes: No) {
        this.inserirEmUltimo(nodes.valor)
        if (nodes.proximo === null) return
        this.popular(nodes.proximo)
    }

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

    public get rabo(): No | null {
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

    public contem(valor: number | string): boolean {
        for(let posicao = 0; posicao < this.tamanho; posicao++) {
            if(this._nos[posicao].valor === valor) {
                return true
            }
        }
        return false
    }

    public busca(valor: number | string): No | null {
        for(let posicao = 0; posicao < this.tamanho; posicao++) {
            if(this._nos[posicao].valor === valor) {
                return this._nos[posicao]
            }
        }
        return null
    }

    public buscaPosicao(valor: number | string): number {
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
}
