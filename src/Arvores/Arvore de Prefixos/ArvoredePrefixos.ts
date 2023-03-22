// https://www.ime.usp.br/~pf/estruturas-de-dados/aulas/tries.html
// https://people.cs.pitt.edu/~aus/cs1501/search-b-tree.pdf

// Nó
class No { 
  public chave: string | null;
  public pai: No | null;
  public filhos: Map<string, No>;
  public ultimo: boolean;

  constructor(chave: string | null) {
    this.chave = chave;
    this.pai = null;
    this.filhos = new Map();
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

export class ArvoredePrefixos {
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
      if(!no.filhos.has(caractere)) {
        //    criar um novo nó tendo o seu pai dado a raiz atual
        const novoNo = new No(caractere);
        // o pai do novo nó é a raiz atual
        novoNo.pai = no;
        // adiciona o novo nó como filho da raiz atual
        no.filhos.set(caractere, novoNo);
      }
      // ponteiro para o próximo nó, que é o caractere filho da raíz atual
      no = no.filhos.get(caractere) as unknown as No;
      // se a posicao atual for a ultima posicao da palavra
      if (posicao === palavra.length - 1) {
        // definir o nó como ultimo no ramo
        no.ultimo = true;
      }
    }
  }
  
  // checar se a árvore contem a palavra dada.
  public busca (palavra: string) {
    // ponteiro para o nó na raiz da árvore
    let no = this.raiz;
    // para cada posicao da palavra
    for (let posicao = 0; posicao < palavra.length; posicao++) {
      const caractere = palavra[posicao];
      // caso o nó atual possua um nó filho com a caractere atual
      const filho = no.filhos.get(caractere);
      if(filho) {
        //  apontar ponteiro no para o no filho
        no = filho;
      } else {
        // não contém
        return false;
      }
    }
    return no.ultimo;
  }

  // buscar chaves dado um prefixo
  public chavesComOPrefixo (prefixo: string = ''): string[] {
    if (prefixo === '') {
      return [];
    }
    let no = this.raiz;
    const nos: No[] = [];
    // para cada caractere do prefixo com comprimento X, 
    for(let posicao = 0; posicao < prefixo.length; posicao++) {
      // encontrar o último nó em sua sub-árvore
      const caractere = prefixo[posicao];
      const filho = no.filhos.get(caractere);
      if (filho) {
        no = filho;
      } else {
        return [];
      }
    }
    // palavras encontradas, inicialmente vazia pois só 
    // encontramos uma sub-ávore até o momento
    const palavras: string[] = [];
    // pegar todas as palavras dada uma sub-árvore
    this.pegaPalavas(no, palavras);
    return palavras;
  }

  // pega palavra em uma sub-árvore
  private pegaPalavas (no: No, palavras: string[]): void {
    // se o nó atual for o ultimo nó de uma chave
    if (no.ultimo) {
      palavras.push(no.pegarPalavra())
    }
    // itera sobre todas as sub-árvores
    for(let noFilho of no.filhos.values()) {
      this.pegaPalavas(noFilho, palavras);
    }
  }

  public chavesComOCoringa (prefixo: string): string[] {
    if (prefixo === '') {
      return [];
    }
    let no = this.raiz;
    const nos: No[] = [];
    // para cada caractere do prefixo com comprimento X, 
    for(let posicao = 0; posicao < prefixo.length; posicao++) {
      // encontrar o último nó em sua sub-árvore
      const caractere = prefixo[posicao];
      const filho = no.filhos.get(caractere);
      if (filho) {
        no = filho;
      } else {
        return [];
      }
    }
    // palavras encontradas, inicialmente vazia pois só 
    // encontramos uma sub-ávore até o momento
    const palavras: string[] = [];
    // pegar todas as palavras dada uma sub-árvore
    this.pegaPalavas(no, palavras);
    return palavras;
  }

  
  
  public remover () { }
}

/*
const Node = function (key) {
  this.key = key;
  this.parent = null;
  this.children = {};
  this.end = false;
  this.getWord = function() {
    let output = [];
    let node = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }

    return output.join('');
  };
}

const Trie = function() {
  this.root = new Node(null);
  
  this.add = function(word) {
    let node = this.root; 
    for(let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new Node(word[i]);
        node.children[word[i]].parent = node;
      }

      node = node.children[word[i]];

      if (i == word.length-1) {
        node.end = true;
      }
    }
  };
  
  this.has = function(word) {
    let node = this.root;
    for(let i = 0; i < word.length; i++) {
      if (node.children[word[i]]) {
        node = node.children[word[i]];
      } else {
        return false;
      }
    }
    return node.end;
  };
  
  this.search = function(prefix) {
    let node = this.root;
    let output = [];

    for(let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        return output;
      }
    }

    this.findAllWords(node, output);

    return output;
  };
  
  // recursive function to search all words in the given node.
  this.findAllWords = (node, arr) => {
    // base case, if node is at a word, push to output
    if (node.end) {
      arr.unshift(node.getWord());
    }

    // iterate through each children, call recursive findAllWords
    for (let child in node.children) {
      this.findAllWords(node.children[child], arr);
    }
  }

  // removes a word from the trie.
  this.remove = function (word) {
      let root = this.root;

      if(!word) return;

      // recursively finds and removes a word
      const removeWord = (node, word) => {

          // check if current node has the word
          if (node.end && node.getWord() === word) {

              // check and see if node has children
              let hasChildren = Object.keys(node.children).length > 0;

              // if has children we only want to un-flag the end node that marks the end of a word.
              // this way we do not remove words that contain/include supplied word
              if (hasChildren) {
                  node.end = false;
              } else {
                  // remove word by getting parent and setting children to empty dictionary
                  node.parent.children = {};
              }

              return true;
          }

          // recursively remove word from all children
          for (let key in node.children) {
              removeWord(node.children[key], word)
          }

          return false
      };

      // call remove word on root node
      removeWord(root, word);
  };
}


const trie = new Trie();

// add few values
trie.add("peter");
trie.add("piper");
trie.add("picked");
trie.add("pickled");
trie.add("pepper");

// check has method
console.log(trie.has("picked"));  
console.log(trie.has("pepper")); 
trie.remove("pepper");
// check search method
console.log(trie.search("pi"));  
console.log(trie.search("pe"));  */
