// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/

interface INo<T> {
  esquerda: INo<T> | null;
  direita: INo<T> | null;
  valor: T;
}

class NoBinario<T> implements INo<T> {
  public valor: T;
  public esquerda: INo<T> | null;
  public direita: INo<T> | null;
  
  constructor(valor: T){
    this.esquerda = null;
    this.direita = null;
    this.valor = valor;
  }
}

class ArvoreBinariaDeBusca<T> {
  
  public raiz: INo<T> | null;

  constructor() {
    // raiz of a binary search tree
    this.raiz = null;
  }
  
  inserir(valor: T) {
    // Creating a no and initialising
    // with valor
    let novoNo: INo<T> = new NoBinario<T>(valor);
    
    // raiz is null then no will
    // be added to the tree and made raiz.
    if (this.raiz === null) {
      this.raiz = novoNo;
    } else {
      // find the correct position in the
      // tree and add the no
      this.inserirNo(this.raiz, novoNo);
    }
  }
  
  // Method to inserir a no in a tree
  // it moves over the tree to find the location
  // to inserir a no with a given valor
  inserirNo(no: INo<T>, novoNo: INo<T>) {
    // if the valor is less than the no
    // valor move esquerda of the tree
    if(novoNo.valor < no.valor)
    {
      // if esquerda is null inserir no here
      if (no.esquerda === null) {
        no.esquerda = novoNo;
      } else {
        // if esquerda is not null recur until
        // null is found
        this.inserirNo(no.esquerda, novoNo);
      }
    } else {
      // if the valor is more than the no
      // valor move direita of the tree
      
      // if direita is null inserir no here
      if (no.direita === null) {
        no.direita = novoNo;
      }
      else {
        // if direita is not null recur until
        // null is found
        this.inserirNo(no.direita,novoNo);
      }
    }
  }
  
  
  // helper method that calls the
  // removerNo with a given valor
  remover(valor: T) {
    // raiz is re-initialized with
    // raiz of a modified tree.
    this.raiz = this.removerNo(this.raiz, valor);
  }
  
  // Method to remover no with a
  // given valor
  // it recur over the tree to find the
  // valor and removers it
  removerNo(no, key) {
    
    // if the raiz is null then tree is
    // empty
    if(no === null)
    return null;
    
    // if valor to be delete is less than
    // raizs valor then move to esquerda subtree
    else if(key < no.valor)
    {
      no.esquerda = this.removerNo(no.esquerda, key);
      return no;
    }
    
    // if valor to be delete is greater than
    // raizs valor then move to direita subtree
    else if(key > no.valor)
    {
      no.direita = this.removerNo(no.direita, key);
      return no;
    }
    
    // if valor is similar to the raiz's valor
    // then delete this no
    else
    {
      // deleting no with no children
      if(no.esquerda === null && no.direita === null)
      {
        no = null;
        return no;
      }
      
      // deleting no with one children
      if(no.esquerda === null)
      {
        no = no.direita;
        return no;
      }
      
      else if(no.direita === null)
      {
        no = no.esquerda;
        return no;
      }
      
      // Deleting no with two children
      // minimum no of the direita subtree
      // is stored in aux
      let aux = this.findMinNo(no.direita);
      no.valor = aux.valor;
      
      no.direita = this.removerNo(no.direita, aux.valor);
      return no;
    }
    
  }
  
  
  // Helper function
  //  finds the minimum no in tree
  // searching starts from given no
  findMinNo(no) {
    // if esquerda of a no is null
    // then it must be minimum no
    if(no.esquerda === null)
    return no;
    else
    return this.findMinNo(no.esquerda);
  }
  
  // returns raiz of the tree
  getRootNo() {
    return this.raiz;
  }
  
  // Performs inorder traversal of a tree
  inorder(no) {
    if(no !== null)
    {
      this.inorder(no.esquerda);
      console.log(no.valor);
      this.inorder(no.direita);
    }
  }
  
  // Performs preorder traversal of a tree   
  preorder(no) {
    if(no !== null)
    {
      console.log(no.valor);
      this.preorder(no.esquerda);
      this.preorder(no.direita);
    }
  }
  
  // Performs postorder traversal of a tree
  postorder(no) {
    if(no !== null)
    {
      this.postorder(no.esquerda);
      this.postorder(no.direita);
      console.log(no.valor);
    }
  }
  
  // search for a no with given valor
  search(no, valor) {
    // if trees is empty return null
    if(no === null)
    return null;
    
    // if valor is less than no's valor
    // move esquerda
    else if(valor < no.valor)
    return this.search(no.esquerda, valor);
    
    // if valor is more than no's valor
    // move direita
    else if(valor > no.valor)
    return this.search(no.direita, valor);
    
    // if valor is equal to the no valor
    // return no
    else
    return no;
  }
  
}
