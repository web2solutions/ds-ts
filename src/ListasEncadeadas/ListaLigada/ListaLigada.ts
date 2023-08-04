// Interface Nó
import { No } from "./No";

export class ListaLigada<T> {
    public tamanho: number;
    public cabeca: No<T> | null;
    public cauda: No<T> | null;

    constructor (nodes?: No<T>) {
        this.tamanho = 0;
        this.cabeca = null;
        this.cauda = null;
    }
    
    public inserir (valor: T): void {
        const novo: No<T> = { valor, proximo: null };
        const anterior = this.cabeca;

        if(anterior == null) {
            this.cauda = novo
        } else {
            novo.proximo = anterior;
        }
        this.cabeca = novo;
        this.tamanho += 1;
    }

    public inserirEm (celula: No<T>, valor: T): void {
        const novo: No<T> = { valor, proximo: null };
        const proximo = celula.proximo;
        novo.proximo = proximo;
        if (celula.proximo == null) {
            this.cauda = novo;
        }
        celula.proximo = novo
        this.tamanho += 1;
    }

    public inserirEmPrimeiro (valor: T): void {
        this.inserir(valor)
    }

    public inserirEmUltimo (valor: T): void {
        const ultimo = this.cauda;
        if(ultimo != null) {
            this.inserirEm(ultimo, valor);
        } else {
            this.inserir(valor);
        }
    }

    public busca (valor: T): No<T> | null {
        let no: No<T> | null = this.cabeca;
        while (no != null && no?.valor !== valor) 
        {
            no = no.proximo;
        } 
        return no;
    }
    
    public remover(valor: T): boolean {
        if (this.cabeca == null) {
            return false;
        }
        let no: No<T> | null = this.cabeca;
        let anterior: No<T> | null = null; 
        let proximo: No<T> | null = this.cabeca.proximo;
        for (let p:No<T> | null = no; p != null; p = p.proximo) {
            if(p.valor === valor) {
                proximo = p.proximo;
                if(anterior == null) {
                    this.cabeca = proximo
                    if(this.cabeca == null) this.cauda = null;
                } else {
                    anterior.proximo = proximo
                }
                this.tamanho -= 1;
                if(this.tamanho === 1) {
                    this.cauda = this.cabeca
                }
                return true;
            }
            anterior = p;
        }
        return false;
    }
    

    public buscaPosicao (valor: T, celula?: No<T>): number {
        let no: No<T> | null = celula || this.cabeca;
        let posicao = -1;
        while (no != null && no?.valor !== valor) 
        {
            posicao += 1;
            no = no.proximo;
        }
        if(no?.valor === valor) {
            posicao += 2;
        }
        return posicao;
    }

    public get valores (): Array<T> {
        const valores: T[] = [];
        if (!this.cabeca) return valores;
        let no: No<T> | null = this.cabeca;
        while (no != null) 
        {
            valores.push(no.valor);
            no = no.proximo;
        } 
        return valores;
    }

    public emordem (cb: Function): void {
        if (!this.cabeca) return;
        let no: No<T> | null = this.cabeca;
        while (no) {
            if (cb) cb(no);
            no = no.proximo;
        }
    };
}

