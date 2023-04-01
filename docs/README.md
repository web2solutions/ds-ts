# Estrutura de dados usando Typescript

Antes de falar sobre dados e estrutura de dados, precisamos entender o que é uma informação:

## O que é uma `informação`?

Podemos dizer grosseiramente que na computação o conceito de informação é um `conjunto de dados` que podem dar idéia sobre um fato, um evento ou uma coisa.

## O que é um `dado`?

Um dado é uma parte menor e abstrata da informação, e logo não faz muito sentido sem o conjunto de dados restante (informação).

Um dado é uma parte de uma informação manipulada por um programa e que pode ser acessado através de um identificador, como um ponteiro ou uma variável.

Os tipos de dados mais comuns são:

- Números inteiros
- Números flutuantes
- Booleano
- Texto

Como a linguagem Typescript é um superset do Javascript, logo seus tipos de dados são herdados da linguagem Javascript. Os tipos de dados podem ser primitivos ou não primitivos.

- [Dados Primitivos](DadosPrimitivos.html)

- [Dados não Primitivos](DadosnaoPrimitivos.html)


## O que é Estrutura de dados?

Estrutura de dados é o ramo da computação que estuda os diversos mecanismos de organização de dados para atender aos diferentes requisitos de processamento.

As estruturas de dados definem a organização, métodos de acesso e opções de processamento para a informação manipulada pelo programa. A definição da organização interna de uma estrutura de dados é tarefa do projetista da estrutura, que define também qual a API para a estrutura, ou seja, qual o conjunto de procedimentos que podem ser usados para manipular os dados na estrutura. É esta API que determina a visão funcional da estrutura de dados, que é a única informação relevante para um programador que vá utilizar uma estrutura de dados pré-definida.

Além disso, uma estrutura de dados é um objeto que armazena dados de forma eficiente, oferecendo certos “serviços” para o usuário (ordenação eficiente dos dados, busca por meio de palavras chave, etc).

`Características das Estruturas de Dados`

- `Lineares` ou `não lineares`

Estrutura de dados cujos itens são ordenados de acordo com ordem que são inseridos ou removidos da estrutura. Uma vez que um item é inserido, fica em uma mesma posição em relação aos demais itens que foram inseridos antes ou que serão inseridos depois.

Estruturas lineares podem ser consideradas como tendo duas extremidades. Às vezes essas estremidades são chamadas de esquerda e direita ou, em alguns casos, de frente e traseira. Você também pode chamá-las de topo e base. 

Os nomes dados às extremidades não são relevantes. O que distingue uma estrutura linear de outra é a maneira em que itens são inseridos e removidos, em particular a extremidade onde estes inserções e remoções ocorrem. Por exemplo, uma estrutura pode permitir que novos itens sejam inseridos em apenas uma das extremidades (pilhas e filas). Algumas estruturas podem permitir que itens sejam removidos de ambas as extremidades (deques).

A estrutura de dados linear e não linear é a subclassificação da estrutura de dados que vem sob a estrutura de dados não-primitivos. A diferença crucial entre eles é que a estrutura de dados linear organiza os dados em uma sequência e segue algum tipo de ordem. Considerando que, a estrutura de dados não lineares não organiza os dados de maneira seqüencial.

A estrutura de dados linear é uma estrutura de dados de nível único, enquanto as estruturas de dados não lineares são a estrutura de dados de vários níveis. A estrutura de dados descreve previamente como os dados são organizados, acessados, associados e processados.

- `Homogênias` ou `heterogêneas`
- `Estáticas` ou `dinâmicas`

### Pilhas

Pilhas, ou stacks, são estruturas de dados que suportam operações de adição e remoção de elementos e obrigatoriamente deve implementar as seguintes regras:  

1. A adição de novos elementos é feita no topo da estrutura.
2. Na remoção, o elemento removido é o que está na estrutura há menos tempo. Ou seja, o elemento removido é que se encontra no topo.

[Ver pilhas](Pilhas.html)

### Filas

Filas, ou queues, são estruturas de dados que suportam operações de `adição (enfileirar)` e `remoção (desenfileirar)` de elementos e obrigatoriamente deve implementar as seguintes regras:  

1. O acesso á estrutura é restrito ao elemento mais antigo
2. Na remoção, o elemento removido é o que está na estrutura há mais tempo. Ou seja, o elemento removido é que se encontra no começo da fila.

[Ver filas](Filas.html)

### Listas

[Listas Encadeadas - Linked Lists](ListasEncadeadas.html)

- Simples
- Duplamente ligadas

### Montes

[Montes - Heaps](ListasEncadeadas.html)

- MaxHeap
- MinHeap

### Árvores

- [Árvores - Tries](Arvores.html)
- [Árvores de Busca - Tries](ArvoredePrefixos.html)
- [Árvores Binárias - Binary Tree](Arvores.html)
- [Árvores de Busca Binárias - Binary Search Tree](Arvores.html)
- [Graphs](ListasEncadeadas.html)


## Referências

- https://developer.mozilla.org/pt-BRWeb/JavaScript/Data_structures

- https://www.dimap.ufrn.br/~umberto/paed/lista04.pdf

- http://sites.poli.usp.br/p/fabio.cozman/Didatico/Comp/Material/estruturas.pdf

- https://www.ime.usp.br/~pf/estruturas-de-dados/aulas/tries.html

- https://people.cs.pitt.edu/~aus/cs1501/search-b-tree.pdf

- https://pt.wikipedia.org/wiki/Topologia_em_%C3%A1rvore

- https://www.ime.usp.br/~pf/algoritmos/index.html