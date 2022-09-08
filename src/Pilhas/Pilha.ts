export class Pilha {
    private _itens: Array<string|number> = [];

    constructor (valoresIniciais: Array<string|number>) {
        if (valoresIniciais) {
            this._itens = [...valoresIniciais]
        }
    }

    public empilhar (valor:string|number): Array<string|number> {
        this._itens.unshift(valor)
        return this._itens
    }

    public desempilhar (): string|number|undefined {
        return this._itens.shift()
    }

    public estaVazia (): boolean {
        return !!(this._itens.length === 0)
    }

    public topo () {
        return this._itens[0]
    }
}