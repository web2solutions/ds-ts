export class Pilha <T> {
  private _itens: Array<T> = [];
  
  constructor (valoresIniciais: Array<T> = []) {
    this._itens = valoresIniciais;
  }
  
  public empilhar (valor:T): Array<T> {
    this._itens.push(valor);
    return this._itens;
  }
  
  public desempilhar (): T {
    if (!(this._itens.length > 0)) {
      throw new Error('Pilha vazia');
    }
    return this._itens.pop() as unknown as T;
  }
  
  public get estaVazia (): boolean {
    return !!(this._itens.length === 0);
  }
  
  public get base () {
    return this._itens[0];
  }
  
  public get topo () {
    return this._itens[this._itens.length - 1];
  }
  
  public get tamanho() { 
    return this._itens.length;
  }
}
