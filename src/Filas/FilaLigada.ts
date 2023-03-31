import { IFila } from "./IFila";

class No<T> {
  public valor: T;
  public proximo: No<T> | null;
  constructor(valor: T) {
    this.valor = valor;
    this.proximo = null;
  }
}

export class FilaLigada<T> implements IFila<T> {
  /**
   * ponteiro para o primeiro item da fila
   */
  private primeiro: No<T> | null;
  
  /**
   * ponteiro para o último item da fila
   */
  private ultimo: No<T> | null;
  
  /**
   * controla o _tamanho da fila
   */
  private _tamanho: number;
  
  constructor({ valores }: { valores?: T[] }) {
    /**
     * inicia a estrutura da fila
     */
    this.primeiro = null;
    this.ultimo = null;
    this._tamanho = 0;

    /**
     * adiciona valores inicias da fila
     */
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
  public enfileirar(valor: T): void {
    /**
     * criar no referente ao novo item na fila
     */
    let no = new No(valor);
    /**
     * Se houver itens na fila
     */
    if(this._tamanho > 0)
    {
      /**
       * Pega o ultimo item da fila atualmente
       */
      let ultimoEnfileirado = this.ultimo;
      if (ultimoEnfileirado) {
        /**
         * Liga o novo nó que está entrando na fila ao último atual.
         */
        ultimoEnfileirado.proximo = no;
      }
      /**
       * atualiza o ponteiro que aponta para diretamente para o último item da fila
       */
      this.ultimo = no
    } else {
      /** 
       * se não houver itens na lista, o novo nó que está entrando 
       * na lista será apontado para início e o final da fila respectivamente
       */
      this.ultimo = no;
      this.primeiro = this.ultimo;
    }
    // aumenta o _tamanho da fila
    this._tamanho++;
  }
  
  /**
   * desenfileirar item, tirar do começo da fila
   */
  public desenfileirar(): T | undefined {
    // caso haja itens enfileirados
    if(this._tamanho > 0) {
      // recupera o valor do primeiro item na fila
      const valor = this.primeiro?.valor;
      // definir o proximo da fila como o proximo do primeiro atual da fila
      let proximoDaFila = this.primeiro ? this.primeiro.proximo : null;
      // define primeiro da fila como sendo o item recuperado anteriormente
      this.primeiro =  proximoDaFila;
      // diminui o _tamanho da fila
      this._tamanho--;
      // retorn o valor do primeiro item na fila
      return valor;
    } else {
      // caso não haja itens enfileirados
      this.ultimo = this.primeiro;
      throw new Error('Fila vazia');
    }
  }
  
  /**
  * capturar o primeiro item da fila
  */
  public get primeiroDaFila(): T | undefined {
    /**
    * fila não pode estar fazia
    */
    if (this._tamanho === 0) {
      throw new Error('Fila vazia');
    }
    /**
    * pega o item no comeco da fila
    */
    return this.primeiro?.valor
  }
  
  /**
   * esvaziar a fila
   */
  public limpar (): void {
    this.primeiro = null;
    this.ultimo = null;
    this._tamanho = 0;
  }

  /**
   * retorna tamanho da fila
   */
  public get tamanho(): number {
    return this._tamanho;
  }
  
  /**
   * checa se fila está vazia
   */
  public get estaVazia (): boolean {
    return this._tamanho > 0 ? false : true;
  }
}
