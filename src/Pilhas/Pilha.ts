export class Pilha {
    _itens: Array<string|number> = [];

    constructor (valoresIniciais: Array<string|number>) {
        if (valoresIniciais) {
            this._itens = [...valoresIniciais]
        }
    }

    empilhar (valor:string|number): Array<string|number> {
        this._itens.unshift(valor)
        return this._itens
    }

    desempilhar (): string|number|undefined {
        return this._itens.shift()
    }

    estaVazia (): boolean {
        return !!(this._itens.length === 0)
    }

    topo () {
        return this._itens[0]
    }
}