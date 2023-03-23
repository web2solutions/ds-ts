export class Pilha <T> {
  /** 
   * vetor para armazenar os dados da pilha
   */
  private pilha: Array<T> = [];
  
  /**
   * em Typescript/Javascript não há arrays com dimensão fixa.
   * essa proriedade será usada para emular a capacidade máxima 
   * de armazenamento da pilha.
   */
  private _capacidade: number;
  
  /**
   * O construtor da pilha suportará um objeto como parâmetro, contendo 2 atributos opcionais:
   *    capacidade: define a capacidade máxima de armazenamento da pilha. Padrão: 10
   *    valores: elementos que serão inseridos ao criar a pilha. Padrão: nenhum
   */
  constructor(
    { capacidade, valores }: { capacidade?: number, valores?: T[] }
  )
  {
    this._capacidade = capacidade ? capacidade : 10;
    if (valores && valores?.length > 0) {
      for (let x = 0; x < valores.length; x++) {
        const valor = valores[x];
        this.empilhar(valor);
      }
    }
  }
  
  // empilhar item no topo da pilha
  public empilhar(valor: T): Array<T> {
    if (this.tamanho === this.capacidade) {
      throw new Error('Pilha transbordada - Stack overflow')
    }
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
  public get itemNoTopo () {
    return this.pilha[this.topo];
  }

  // recupera o index do topo
  public get topo () {
    return this.pilha.length - 1;
  }
  
  // retorna o tamanho da pilha
  public get tamanho() { 
    return this.pilha.length;
  }

  public get capacidade() { 
    return this._capacidade;
  }
}
