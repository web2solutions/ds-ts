class No {
  public valor: string;
  public proximo: No | null;
  constructor(valor: string) {
    this.valor = valor;
    this.proximo = null;
  }
}

class FilaLigada {
  public primeiro: No | null;
  public ultimo: No | null;
  public tamanho: number;

  constructor(){
    this.primeiro = null;
    this.ultimo = null;
    this.tamanho = 0;
  }
  
  checarProximo() {
    return this.primeiro;
  }
  
  enfileirar(valor){
    let newNode = new No(valor);
    if(this.tamanho > 0)
    {
      let lastQueued = this.ultimo;
      lastQueued.proximo = newNode;
      this.ultimo = newNode
    }
    else{
      
      this.ultimo = newNode;
      this.primeiro = this.ultimo;
    }
    
    this.tamanho++;
    return this;
  }
  
  desenfileirar(){
    if(this.tamanho > 0){
      let nextQueued = this.primeiro.proximo;
      this.primeiro =  nextQueued;
      this.tamanho--;    
      return this;
    }
    else{
      this.ultimo = this.primeiro;
      return this;
    }
  }
  
  estaVazia(){
    return this.tamanho > 0 ? false : true;
    
  }
}

const fila = new Fila();
fila.enfileirar('google');
fila.enfileirar('amazon');
var queue = fila.enfileirar('microsoft');
console.log(queue);
var nextToProcess = fila.checarProximo();
//console.log(fila.estaVazia());
console.log('Processing :', nextToProcess.valor);
console.log('Processing Complete :');
fila.desenfileirar();
console.log(queue);





