# Listas ligadas

Listas ligada é uma estrutura de dados linear que representa uma sequência de objetos, todos do mesmo tipo, na memória RAM de um computador. Cada objeto da sequência é armazenado em uma célula (ou nó) da lista. Uma Lista Ligada oferece ao menos as seguintes operações: `inserir`, `buscar`, `remover`, `emOrdem` (iterador sobre as células da lista em ordem iniciando pela cabeça)

Cada célula (ou nó) é composta por um objeto (todos do mesmo tipo) e o endereço da célula (ou nó) seguinte.

Pode ser útil tratar as células como um novo tipo de dado e atribuir um nome a esse novo tipo.

### Representação de uma `Célula - Nó`

       obj    end
    |-------|------|
    |   3   | prox |
    |-------|------|

`Célula - Nó como um novo tipo de dado:`

```typescript
    interface No {
        valor: number;
        proximo: No | null;
    }
```

O endereço de uma lista ligada é sempre o primeiro nó ou célula da lista (a cabeça da lista).

Se `n` é um Nó então `n.valor` é o conteúdo, ou carga útil, da célula e `n.proximo` é o endereço da próxima célula.

Se `e` é o endereço de uma célula, então `e.valor` é o conteúdo da célula e `e.proximo` é o endereço da próxima célula.

Se `e` é o endereço da última célula da lista então  `e.proximo` vale null.

### Representçao gráfica de uma Lista Ligada

     cabeça                                                           cauda
    |-------|       |-------|       |-------|       |-------|
    |   3   |  -->  |   2   |  -->  |   1   |  -->  |   4   |  --> null
    |-------|       |-------|       |-------|       |-------|

### Complexidade de tempo e espaço - Big O

Independentemente do tamanho N da fila, numa Lista Ligada simples, uma `inserção` na esquerda occore em O(1) e na direita ocorre em O(n) caso a cauda seja desconhecida ou O(1) caso a cauda seja conhecida e O(n) no meio da lista. A mesma regra se aplica para operações de `busca` e `remoção`.

#### Lista.inserir (on inserirEmPrimeiro)

Adiciona novo objeto na cabeça da lista

`Complexidade de tempo`: O(1)

`Complexidade de espaço`: O(1)

#### Lista.inserirEmUltimo

Adiciona novo objeto na cauda da lista

`Complexidade de tempo`: O(1) caso a cauda seja conhecida ou O(n)

`Complexidade de espaço`: O(1)

#### Lista.inserirEm

Adiciona novo objeto no meio da lista

`Complexidade de tempo`: O(n)

`Complexidade de espaço`: O(1)

#### Lista.buscar

`Complexidade de tempo`:

- Cabeça: O(1).
- Cauda: O(n) (ou O(1) quando se tem uma referência pro fim da lista).
- Meio: O(n).

`Complexidade de espaço`: O(1)

#### Pilha.remover

`Complexidade de tempo`:

- Cabeça: O(1).
- Cauda: O(n) (ou O(1) quando se tem uma referência pro fim da lista).
- Meio: O(n).

`Complexidade de espaço`: O(1)


## Implementação de uma lista ligada usando Typescript

```typescript

interface No<T> {
    valor: number;
    proximo: No<T> | null;
}

export class ListaLigada<T> {
    public tamanho: number;
    public cabeca: No<T> | null;
    public cauda: No<T> | null;

    constructor (nodes?: No<T>) {
        this.tamanho = 0;
        this.cabeca = null;
        this.cauda = null;
    }
    
    public inserir (valor: T): void {
        const novo: No<T> = { valor, proximo: null };
        const anterior = this.cabeca;

        if(anterior == null) {
            this.cauda = novo
        } else {
            novo.proximo = anterior;
        }
        this.cabeca = novo;
        this.tamanho += 1;
    }

    public inserirEm (celula: No<T>, valor: T): void {
        const novo: No<T> = { valor, proximo: null };
        const proximo = celula.proximo;
        novo.proximo = proximo;
        if (celula.proximo == null) {
            this.cauda = novo;
        }
        celula.proximo = novo
        this.tamanho += 1;
    }

    public inserirEmPrimeiro (valor: T): void {
        this.inserir(valor)
    }

    public inserirEmUltimo (valor: T): void {
        const ultimo = this.cauda;
        if(ultimo != null) {
            this.inserirEm(ultimo, valor);
        } else {
            this.inserir(valor);
        }
    }

    public busca (valor: T): No<T> | null {
        let no: No<T> | null = this.cabeca;
        while (no != null && no?.valor !== valor) 
        {
            no = no.proximo;
        } 
        return no;
    }
    
    public remover(valor: T): boolean {
        if (this.cabeca == null) {
            return false;
        }
        let no: No<T> | null = this.cabeca;
        let anterior: No<T> | null = null; 
        let proximo: No<T> | null = this.cabeca.proximo;
        for (let p:No<T> | null = no; p != null; p = p.proximo) {
            if(p.valor === valor) {
                proximo = p.proximo;
                if(anterior == null) {
                    this.cabeca = proximo
                    if(this.cabeca == null) this.cauda = null;
                } else {
                    anterior.proximo = proximo
                }
                this.tamanho -= 1;
                if(this.tamanho === 1) {
                    this.cauda = this.cabeca
                }
                return true;
            }
            anterior = p;
        }
        return false;
    }
    

    public buscaPosicao (valor: T, celula?: No<T>): number {
        let no: No<T> | null = celula || this.cabeca;
        let posicao = -1;
        while (no != null && no?.valor !== valor) 
        {
            posicao += 1;
            no = no.proximo;
        }
        if(no?.valor === valor) {
            posicao += 2;
        }
        return posicao;
    }

    public get valores (): Array<T> {
        const valores: T[] = [];
        if (!this.cabeca) return valores;
        let no: No<T> | null = this.cabeca;
        while (no != null) 
        {
            valores.push(no.valor);
            no = no.proximo;
        } 
        return valores;
    }

    public emordem (cb: Function): void {
        if (!this.cabeca) return;
        let no: No<T> | null = this.cabeca;
        while (no) {
            if (cb) cb(no);
            no = no.proximo;
        }
    };
}

```

## Implementação alternativa utilizando um vetor para armazenamento das células

```typescript
interface No<T> {
    valor: number;
    proximo: No<T> | null;
}

class ListaLigadaComArray<T> {
    private _nos: No<T>[] = []

    constructor (nodes?: No<T>) {
        if(typeof nodes !== 'undefined') this.popular(nodes)
    }
    
    popular (nodes: No<T>) {
        this.inserirEmUltimo(nodes.valor)
        if (nodes.proximo === null) return
        this.popular(nodes.proximo)
    }

    public get tamanho(): number {
        return this._nos.length
    }

    public get nos (): No<T>[] {
        return this._nos;
    }

    public get valores (): Array<T> {
        return [...this.nos.map((e: No<T>) => e?.valor)]
    }

    public get cabeca(): No<T> | null {
        return this.tamanho ? this._nos[0] : null;
    }

    public get cauda(): No<T> | null {
        return this.tamanho ? this._nos[this._nos.length - 1] : null
    }

    // insere o elemento em index específico
    public inserirEm (posicao: number, valor: T): No<T> {
        const anterior: No<T> = this._nos[posicao - 1] || null
        const proximo: No<T> = this._nos[posicao] || null
        const node: No<T> = { valor, proximo }

        if (anterior) {
            anterior.proximo = node
        }
        
        this._nos.splice(posicao, 0, node)
        return this._nos[posicao]
    }

    public inserirEmPrimeiro (valor: T): No<T> {
        return this.inserirEm(0, valor)
    }

    public inserirEmUltimo (valor: T): No<T> {
        return this.inserirEm(this.tamanho, valor)
    }

    // remove o elemento em index específico
    public removerEm (posicao: number): No<T> | null {
        const anterior = this._nos[posicao - 1]
        const proximo = this._nos[posicao + 1] || null

        if (anterior) {
            anterior.proximo = proximo;
        }
        const no: No<T> = this._nos.splice(posicao, 1)[0] || null
        return no
    }

    // lê o elemento em index específico
    public pegarEm (posicao: number): No<T> {
        return this._nos[posicao]
    }

    public contem(valor: T): boolean {
        for(let posicao = 0; posicao < this.tamanho; posicao++) {
            if(this._nos[posicao].valor === valor) {
                return true
            }
        }
        return false
    }

    public busca(valor:T): No<T> | null {
        for(let posicao = 0; posicao < this.tamanho; posicao++) {
            if(this._nos[posicao].valor === valor) {
                return this._nos[posicao]
            }
        }
        return null
    }

    public buscaPosicao(valor: T): number {
        for(let posicao = 0; posicao < this.tamanho; posicao++) {
            if(this._nos[posicao].valor === valor) {
                return posicao
            }
        }
        return -1
    }

    // limpar lista linkada
    public limpar (): void {
        this._nos = [];
    }

    // reverter ordem dos elementos na lista
    public reverse (): void {
        const copy = [...this._nos]
        const tamanho = this.tamanho
        this.limpar()
        for(let posicao = tamanho - 1; posicao >= 0; posicao--) {
            this.inserirEmUltimo(copy[posicao].valor)
        }
    }

    public emordem (cb: Function) {
        let no = this.cabeca;
        while (no) {
            if (cb) cb(no);
            no = no.proximo;
        }
    };
}
```