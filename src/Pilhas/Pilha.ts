export class Pilha <T> {
    private _itens: Array<T> = [];

    constructor (valoresIniciais: Array<T>) {
        if (valoresIniciais) {
          this._itens = valoresIniciais;
        }
    }

    public empilhar (valor:T): Array<T> {
        this._itens.unshift(valor)
        return this._itens
    }

    public desempilhar (): T|undefined {
        return this._itens.shift()
    }

    public estaVazia (): boolean {
        return !!(this._itens.length === 0)
    }

    public get topo () {
        return this._itens[0]
    }

    public get tamanho() { 
        return this._itens.length
    }
}


const pilha: Pilha<string> = new Pilha('([])'.split('') as Array<string>)

console.log(pilha)


function taBalanceado(caracteres: string | string[]): boolean {
    // criar pilha vazia
  const pilha: Pilha<string> = new Pilha([]);
    
    for (const bracket of caracteres) {
      if (bracket === '[') {
        pilha.empilhar(bracket);
      } else if (bracket === '{') {
        pilha.empilhar(bracket);
      } else if (bracket === '<') {
        pilha.empilhar(bracket);
      } else if (bracket === '(') {
        pilha.empilhar(bracket);
      } else if (bracket === ']') {
        if (pilha.topo === '[') {
          pilha.desempilhar();
        } else {
          pilha.empilhar(bracket);
        }
      } else if (bracket === '}') {
        if (pilha.topo === '{') {
          pilha.desempilhar();
        } else {
          pilha.empilhar(bracket);
        }
      } else if (bracket === '>') {
        if (pilha.topo === '<') {
          pilha.desempilhar();
        } else {
          pilha.empilhar(bracket);
        }
      } else if (bracket === ')') {
        if (pilha.topo === '(') {
          pilha.desempilhar();
        } else {
          pilha.empilhar(bracket);
        }
      } else {
        continue;
      }
    }
  
    return pilha.tamanho === 0;
  }
  
  console.log('([]) ta balanceado', taBalanceado('([])'.split('')));
  console.log('([>]) ta balanceado', taBalanceado('([>])'));
  console.log('([]>) ta balanceado', taBalanceado('([]>)'));
  console.log('([][]) ta balanceado', taBalanceado('([][])'));
  console.log('([][]<>)() ta balanceado', taBalanceado('([][]<>)()'));
  console.log('([][]<>)(abc) ta balanceado', taBalanceado('([][]<>)(abc)'));