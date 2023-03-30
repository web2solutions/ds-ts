# Filas - Queues

Filas são estruturas de dados que suportam operações de `adição (enfileirar)` e `remoção (desenfileirar)` de elementos e obrigatoriamente deve implementar as seguintes regras:  

1. O acesso á estrutura é restrito ao elemento mais antigo
2. Na remoção, o elemento removido é o que está na estrutura há mais tempo. Ou seja, o elemento removido é que se encontra no começo da fila.

Dessa forma, podemos dizer que o `primeiro objeto a ser inserido na fila é também o primeiro a ser removido`.

Esse padrão é conhecido pela sigla `FIFO`, que significa `First-In-First-Out`.

A implementação mais comum de uma `fila` é feita com `vetores circulares`. Alternativamente, uma fila pode ser implementadas usando uma estrutura de `Lista Ligada`, composta por nós interligados.

![Fila](Fila.png "Fila")

### Complexidade de tempo e espaço - Big O

Independentemente do tamanho N da fila, numa fila ideal utilizando vetores, operações básicas devem ocorrer em `O(1)` - `tempo constante` considerando a memória já alocada.  A complexidade será O(n) quando a memória alocada for excedida em operações de inserção.

#### Fila.enfileirar

`Complexidade de tempo`: O(1)

`Complexidade de espaço`: O(1)

#### Fila.desenfileirar

`Complexidade de tempo`: O(1)

`Complexidade de espaço`: O(1)


#### Pilha.primeiroDaFila

`Complexidade de tempo`: O(1)

`Complexidade de espaço`: O(1)

## Implementação de uma Fila usando a linguagem Typescript.

Caso a fila esteja `vazia` e haja a tentativa de um `desenfileiramento` deve ocorrer um `Erro`.

  ***`Tipo da fila`***
  
  Apesar do tipo de dados dos elementos do vetor ser irrelevante, a implementação á seguir 
  associa um tipo de dado específico aos ítems do vetor.

#### Implementação em um vetor


```typescript
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
```

## Uso

```typescript
const max_items = 500000;
const valores = ['José', 'João', 'Jesus'];

const fila = new FilaVetor<string>({ valores }); // ou new FilaVetor({ valores })
while (fila.tamanho <= max_items) {
  fila.enfileirar(`James ${fila.tamanho}`);
}

```

### Benchmark

`Hardware`

Mac Mini 

Processor: 3 GHz 6-Core Intel Core i5

Memory: 32 GB 2667 MHz DDR4

`Requerimento`

Considerando a idéia de `Fila usando um Vetor`, `Fila usando um Map` e `Fila usando uma Lista Ligada` citada anteriormente. Veja a seguir o benchmark para cada tipo de implementação:

O programa deverá criar uma Fila contendo os ítens 'José', 'João', 'Jesus'.

Após a fila ser criada, o programa deverá empilhar novos ítens até atingir 500.000 ítens.

```typescript
const max_items = 500000;
const valores = ['José', 'João', 'Jesus'];

const fila = new FilaVetor<string>({ valores }); // ou new FilaVetor({ valores })
while (fila.tamanho <= max_items) {
  fila.enfileirar(`James ${fila.tamanho}`);
}
```

#### Resultados

- `Fila usando um Vetor` - 500.000 ítens

      $ ts-node ts-node ./src/Filas/benchmark/FilaVetor.ts
      Tempo de execução: 77.337266 ms
      consumo aproximado: 127.77216339111328 MB

- `Fila usando um Map` - 500.000 ítens

      $ ts-node ts-node ./src/Filas/benchmark/FilaMap.ts
      Tempo de execução: 165.776193 ms
      consumo aproximado: 147.30326080322266 MB



## Repositório

O código completo poderá ser encontrado em [https://github.com/web2solutions/ds-ts/tree/main/src/Filas](https://github.com/web2solutions/ds-ts/tree/main/src/Filas).

Todos os arquivos para download: [https://github.com/web2solutions/ds-ts/raw/main/src/Filas.zip](https://github.com/web2solutions/ds-ts/raw/main/src/Filas.zip)
