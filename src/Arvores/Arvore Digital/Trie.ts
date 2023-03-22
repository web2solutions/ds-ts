// https://www.ime.usp.br/~pf/estruturas-de-dados/aulas/tries.html
// https://people.cs.pitt.edu/~aus/cs1501/search-b-tree.pdf

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

  public adicionar() { }
  
  public contem () { }

  public buscar() { }
  
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
