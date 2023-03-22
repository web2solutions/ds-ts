// https://www.ime.usp.br/~pf/estruturas-de-dados/aulas/tries.html
// https://people.cs.pitt.edu/~aus/cs1501/search-b-tree.pdf

// Nó
class No { 
  public chave: string | null;
  public pai: No | null;
  public filhos: Record<string, No>;
  public ultimo: boolean;

  constructor(chave: string | null) {
    this.chave = chave;
    this.pai = null;
    this.filhos = {};
    this.ultimo = false;
  }
  
  public pegarPalavra() {
    let palavra = [];
    let no: No | null = this;

    while (no !== null) {
      palavra.unshift(no.chave);
      no = no.pai ? no.pai : null;
    }

    return palavra.join('');
  };
};

class ArvoredePrefixo {
  public raiz: No;

  constructor () {
    this.raiz = new No(null)
  }

  // adicionar nova palavra na árvore
  public adicionar(palavra: string): void {
    // aponta ponteiro para o nó na raiz da árvore
    let no = this.raiz;
    // para cada posicao da palavra
    for (let posicao = 0; posicao < palavra.length; posicao++) {
      const caractere = palavra[posicao];
      // caso o nó atual não possua um nó filho com a caractere atual
      if(!no.filhos[caractere]) {
        //    criar um novo nó tendo o seu pai dado a raiz atual
        const novoNo = new No(caractere);
        // o pai do novo nó é a raiz atual
        novoNo.pai = no;
        // adiciona o novo nó como filho da raiz atual
        no.filhos[caractere] = novoNo;
      }
      // ponteiro para o próximo nó, que é o caractere filho da raíz atual
      no = no.filhos[caractere];
      // se a posicao atual for a ultima posicao da palavra
      if (posicao === palavra.length) {
        // definir o nó como ultimo no ramo
        no.ultimo = true;
      }
    }
  }
  
  // checar se a árvore contem a palavra dada.
  public contem (palavra: string) {
    // ponteiro para o nó na raiz da árvore
    let no = this.raiz;
    // para cada posicao da palavra
    for (let posicao = 0; posicao < palavra.length; posicao++) {
      const caractere = palavra[posicao];
      // caso o nó atual possua um nó filho com a caractere atual
      if(no.filhos[caractere]) {
        //  apontar ponteiro no para o no filho
        no = no.filhos[caractere];
      } else {
        // não contém
        return false;
      }
    }
    return no.ultimo;
  }

  public buscar() { }
  
  public remover () { }
}
