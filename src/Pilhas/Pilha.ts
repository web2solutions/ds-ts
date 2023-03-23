export class Pilha <T> {
  private pilha: Array<T> = [];
  
  constructor (valoresIniciais: Array<T> = []) {
    this.pilha = valoresIniciais;
  }
  
  // empilhar item no topo da pilha
  public empilhar (valor:T): Array<T> {
    this.pilha.push(valor);
    return this.pilha;
  }
  
  // tirar o último ítem da lista
  public desempilhar (): T {
    if (!(this.pilha.length > 0)) {
      throw new Error('Pilha vazia');
    }
    return this.pilha.pop() as unknown as T;
  }
  
  // checa se pilha está vazia
  public get estaVazia (): boolean {
    return !!(this.pilha.length === 0);
  }
  
  // recupera o ítem na base da pilha
  public get base () {
    return this.pilha[0];
  }
  
  // recupera o ítem no topo da pilha
  public get topo () {
    return this.pilha[this.pilha.length - 1];
  }
  
  // retorna o tamanho da pilha
  public get tamanho() { 
    return this.pilha.length;
  }
}
