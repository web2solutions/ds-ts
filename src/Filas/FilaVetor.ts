export class FilaVetor<T> {
  /**
   * Vetor para armazenamento dos dados
   */
  private fila: Array<T | undefined>;

  /**
   * controla o final da fila
   */
  private indexFinalDaFila: number;
  
  /**
   * controla o começo da fila
   */
  private indexComecoDaFila: number;

  /**
   * controla o tamanho da fila
   */
  private _tamanho: number;

  constructor({ valores }: { valores?: T[] }) {
    /**
     * inicia a estrutura da Fila
     */
    this._tamanho = 0;
    this.fila = [];
    
    this.indexComecoDaFila = 0;
    this.indexFinalDaFila = -1;

    // adiciona valores inicias da fila
    if (valores && valores?.length > 0) {
      for (let x = 0; x < valores.length; x++) {
        const valor = valores[x];
        this.enfileirar(valor);
      }
    }
  }

  /**
   * enfileirar item, colocar no final da fila
   */
  enfileirar(valor: T): void {
    // controla o final da fila que agora possui mais um elemento
    this.indexFinalDaFila += 1;
    // adiciona o elemento no final da fila
    this.fila[this.indexFinalDaFila] = valor;
    // incrementa o tamanho da fila
    this._tamanho += 1;
  }

  /**
   * desenfileirar item, tirar do começo da fila
   */
  desenfileirar(): T | undefined {
    /**
     * tenta capturar o primeiro item na fila, Erro se fila está vazia
     */
    const item = this.primeiroDaFila;
    /**
     * Ao inves de deletar a entrada na fila, setar seu valor como indefinido
     */
    this.fila[this.indexComecoDaFila] = undefined;
    /**
     * incrementa o comeco da fila
     */
    this.indexComecoDaFila += 1;
    /**
     * Diminui o tamanho da fila
     */
    this._tamanho -= 1;
    /**
     * Retorn item desenfileirado
     */
    return item;
  }

  /**
   * capturar o primeiro item da fila
   */
  get primeiroDaFila(): T | undefined {
    /**
     * fila não pode estar fazia
     */
    if (this._tamanho === 0) {
      throw new Error('Fila vazia');
    }
    /**
     * pega o item no comeco da fila
     */
    return this.fila[this.indexComecoDaFila];
  }

  /**
   * esvaziar a fila
   */
  limpar() {
    this.fila = [];
    this.indexFinalDaFila = 0;
    this.indexComecoDaFila = -1
    this._tamanho = 0;
  }

  /**
   * retorna tamanho da fila
   */
  get tamanho(): number {
    return this._tamanho;
  }

  /**
   * checa se fila está vazia
   */
  get estaVazia(): boolean {
    return this._tamanho === 0;
  }
}