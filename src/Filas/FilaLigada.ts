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
   * controla o tamanho da fila
   */
  public tamanho: number;
  
  constructor({ valores }: { valores?: T[] }) {
    /**
     * inicia a estrutura da fila
     */
    this.primeiro = null;
    this.ultimo = null;
    this.tamanho = 0;

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
  
  public enfileirar(valor: T): void {
    let no = new No(valor);
    if(this.tamanho > 0)
    {
      let ultimoEnfileirado = this.ultimo;
      if (ultimoEnfileirado) {
        ultimoEnfileirado.proximo = no;
      }
      this.ultimo = no
    } else {
      this.ultimo = no;
      this.primeiro = this.ultimo;
    }
    
    this.tamanho++;
  }
  
  public desenfileirar(): T | undefined {
    if(this.tamanho > 0){
      const valor = this.primeiro?.valor;
      let proximoDaFila = this.primeiro ? this.primeiro.proximo : null;
      this.primeiro =  proximoDaFila;
      this.tamanho--;    
      return valor;
    } else {
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
    if (this.tamanho === 0) {
      throw new Error('Fila vazia');
    }
    /**
    * pega o item no comeco da fila
    */
    return this.primeiro?.valor
  }
  
  public limpar (): void {
    this.primeiro = null;
    this.ultimo = null;
    this.tamanho = 0;
  }
  
  public get estaVazia (): boolean {
    return this.tamanho > 0 ? false : true;
  }
}
