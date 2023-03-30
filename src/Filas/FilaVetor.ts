export class FilaVetor<T> {
  
  public fila: Array<T | undefined>;

  public indexFinalDaFila: number;
  public indexComecoDaFila: number;

  private _tamanho: number;

  constructor({ valores }: { valores?: T[] }) {
    this._tamanho = 0;
    this.fila = [];
    
    this.indexComecoDaFila = 0;
    this.indexFinalDaFila = -1;

    const itens = valores;
    if (itens && itens?.length > 0) {
      for (let x = 0; x < itens.length; x++) {
        const valor = itens[x];
        this.enfileirar(valor);
      }
    }
  }

  enfileirar(valor: T): void {
    this.indexFinalDaFila += 1;
    this.fila[this.indexFinalDaFila] = valor;
    this._tamanho += 1;
  }

  desenfileirar(): T | undefined {
    const item = this.primeiroDaFila;
    this.fila[this.indexComecoDaFila] = undefined;
    this.indexComecoDaFila += 1;
    this._tamanho -= 1;
    return item;
  }

  get primeiroDaFila(): T | undefined {
    if (this._tamanho === 0) {
      throw new Error('Fila vazia');
    }
    return this.fila[this.indexComecoDaFila];
  }

  limpar() {
    this.fila = [];
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