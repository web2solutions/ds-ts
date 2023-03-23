export class Pilha <T> {
  private _itens: Array<T> = [];
  
  constructor (valoresIniciais: Array<T> = []) {
    this._itens = valoresIniciais;
  }
  
  // empilhar item no topo da pilha
  public empilhar (valor:T): Array<T> {
    this._itens.push(valor);
    return this._itens;
  }
  
  // tirar o último ítem da lista
  public desempilhar (): T {
    if (!(this._itens.length > 0)) {
      throw new Error('Pilha vazia');
    }
    return this._itens.pop() as unknown as T;
  }
  
  // checa se pilha está vazia
  public get estaVazia (): boolean {
    return !!(this._itens.length === 0);
  }
  
  // recupera o ítem na base da pilha
  public get base () {
    return this._itens[0];
  }
  
  // recupera o ítem no topo da pilha
  public get topo () {
    return this._itens[this._itens.length - 1];
  }
  
  // retorna o tamanho da pilha
  public get tamanho() { 
    return this._itens.length;
  }
}
