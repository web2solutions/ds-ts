export class FilaMap<T> {
  
  private fila: Map<number, T | undefined>;

  private indexFinalDaFila: number;
  private indexComecoDaFila: number;

  private _tamanho: number;

  constructor({ valores }: { valores?: T[] }) {
    this._tamanho = 0;
    this.fila = new Map<number, T | undefined>();
    
    this.indexComecoDaFila = 0;
    this.indexFinalDaFila = -1;

    if (valores && valores?.length > 0) {
      for (let x = 0; x < valores.length; x++) {
        const valor = valores[x];
        this.enfileirar(valor);
      }
    }
  }

  enfileirar(valor: T): void {
    this.indexFinalDaFila += 1;
    this.fila.set(this.indexFinalDaFila, valor);
    this._tamanho += 1;
  }

  desenfileirar(): T | undefined {
    const item = this.primeiroDaFila;
    this.fila.set(this.indexComecoDaFila, undefined);
    this.indexComecoDaFila += 1;
    this._tamanho -= 1;
    return item;
  }

  get primeiroDaFila(): T | undefined {
    if (this._tamanho === 0) {
      throw new Error('Fila vazia');
    }
    return this.fila.get(this.indexComecoDaFila);
  }

  limpar() {
    this.fila = new Map<number, T | undefined>();
    this.indexFinalDaFila = 0;
    this.indexComecoDaFila = -1
    this._tamanho = 0;
  }

  get tamanho(): number {
    return this._tamanho;
  }

  get estaVazia(): boolean {
    return this._tamanho === 0;
  }
}