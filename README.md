# Estrutura de dados usando Typescript [![CircleCI](https://dl.circleci.com/status-badge/img/gh/web2solutions/ds-ts/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/web2solutions/ds-ts/tree/main)

O propósito desse repositório é demonstrar e compartilhar, com desenvolvedores Typescript e Javascript de língua portuguesa, a implementação das diversas estuturas de dados usando a linguagem Typescript. 

Se você quer aprender Typescript, provavelmente está procurando pela [documentação oficial da linguagem](https://www.typescriptlang.org/).


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

### Dados primitivos:

- `Number`

    É o tipo usado para manipular números.

    ```typescript
        const ano: number = 2022
    ```

- `BigInt`

    É um objeto empacotador primitivo usado para lidar com dados BigInt, que são números `muito grande para serem manipulados` pelo tipo `number`.

    ```typescript
        const numeroGrande1: BigInt = 9007199254740991n // conversão adicionando `n` no final do número
        const numeroGrande2: BigInt = BigInt(9007199254740991) // conversão usando o empacotador BigInt()
    ```
    
- `String`

    É o tipo usado para manipular dados do tipo texto ou sequência de caracteres.

    ```typescript
        const nome: string = 'José Eduardo'
    ```

- `Boolean`

    É tipo usado para manipular valores lógicos como `verdadeiro` e `falso`.

    ```typescript
        const ceuAzul: boolean = true;
    ```

- `Symbol`

    Símbolos (ou atoms) são primitivos únicos e imutáveis e podem ser usados como uma chave de uma propriedade de um objeto.

- `Undefined`

    Utilizado para expressar um dado não definido / declarado.

    ```javascript
        function testarIndefinido(parametro) {
            if (typof parametro === 'undefined') {
                throw 'Você deve atribuir um valor ao parâmtero'
            }
            return 'O parâmetro está definido'
        }
    ```

- `Null`

    Utilizado quando de forma intencional a não ter nenhum dado atribuido.

- `NaN`

    É comumente encontrado quando o resultado de uma expressão aritmética não é um número válido.

    ```javascript
        console.log(parseInt('a')) // NaN
    ```

Os tipos de `dados primitivos` podem armazenar `somente um dado` por vez. Para o armazenamento de `múltiplos dados`, é necessário utilizar os tipos de dados `não primitivos`.

### Dados não primitivos:

- `Objetos`
    
    Um objeto do JavaScript é um `mapeamento entre chaves e valores`. Chaves podem ser do tipo `String` e `Symbol`. Os valores podem ser de qualquer tipo. Isso faz com que objetos sejam perfeitos para `hashmaps`.

    ```typescript
        const objeto: Record<string|symbol, any> = {
            'chave 1': 'texto',
            'chave 2': 2,
            'chave 3': 9007199254740991n,
            'chave 4': function () {
                return 'minha função'
            }
        }

        console.log(objeto)

        /** 
        {
            'chave 1': 'texto',
            'chave 2': 2,
            'chave 3': 9007199254740991n,
            'chave 4': [Function: chave 4]
        }
        */
    ```
    
    - `Arranjo associativo`

    Em Javascript, `arrays` também são `objetos`. Isso quer dizer que você poderia reescrever o objeto acima com a seguinte notação:

    ```javascript 
        const arranjoAssociativo = []
        arranjoAssociativo['chave 1'] = 'texto'
        arranjoAssociativo['chave 2'] = 2
        arranjoAssociativo['chave 3'] = 9007199254740991n
        arranjoAssociativo['chave 4'] = function () {
            return 'minha função'
        }

        console.log(arranjoAssociativo)
        /** [
            'chave 1': 'texto',
            'chave 2': 2,
            'chave 3': 9007199254740991n,
            'chave 4': [Function (anonymous)]
        ] */
    ```

    Observe que o código acima é somente válido como Javascript. Caso tente transpilar esse código com Typescript, você terá um erro como o exemplo á seguir:

    `error TS7015: Element implicitly has an 'any' type because index expression is not of type 'number'.`

    Ainda considerando apenas o Javascript, qual seria então a diferença entre as duas notações?

    `O prototype que o objeto herdou`. Em Javascript, objetos são construídos com `protypes - protótipos`. Nesse caso o primeiro código herdou o protótipo do tipo `object` e o segundo herdou o protótipo do tipo `array`. Isso significa que os `métodos` e `propriedades` que fazem parte de cada uma das estruturas de dados, a API, sejam diferentes.

- `Datas`

O tipo `Data` é utilizado para manipular dados do tipo data. Para criar um dado do tipo `data` utilizamos o objeto `Date` do Javascript. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC).

```typescript
    const hoje: Date = new Date()
    const data1: Date = new Date("December 17, 1995 03:24:00")
    const data2: Date = new Date("1995-12-17T03:24:00")
    const data3: Date = new Date(1995,11,17)
    const data4: Date = new Date(1995,11,17,3,24,0)
```

- `Coleções indexadas`

    Coleções indexadas são coleções de dados que são ordenados por um valor indexado.

    - `Array`

        Arranjos, array ou vetor é são conjuntos de dados que podem ser referenciados por um nome e um índice numérico.

        Para se criar um vetor utilizamos o objeto `Array` do Javascript.

        Em Javascript, os dados de um arranjo podem ser de qualquer tipo.

        Em Typescript, definimos os possíveis tipos de dados aceito pelo arranjo em questão.

        Por padrão os arranjos `não têm uma dimensão definida`.

        `Javascript`

        ```javascript
            const arranjo1 = ['elemento 1', 'elemento 2', { propriedade: 1}]
            const arranjo2 = new Array('elemento 1', 'elemento 2', { propriedade: 1})
        ```

        `Typescript`

        ```typescript
            const arranjo1: Array<string> = ['elemento 1', 'elemento 2']
            const arranjo2: string[] = new Array('elemento 1', 'elemento 2')
        ```

        `Arranjo com dimensão definida`

        ```typescript
            const vetorLimitado: string[] = new Array(10) // vetor de string com 10 elementos
        ```

    - `Array tipado`

    São objetos do tipo `array` com mecanismos para acessar dados binários crus. 
    
    É necessário para o acesso fácil e performático de dados binários

    `Como funciona um arranjo tipado?`

    A implementação de arranjos tipados é dividida entre `buffer` e `view`. Um buffer (implementado pelo objeto `ArrayBuffer`) é um objeto que representa um monte de dados; não possui nenhum formato específico e não oferece nenhum mecanismo para acessar seu conteúdo. Para acessar a memória contida em um buffer, você precisa usar uma view. Uma view provê um contexto — ou seja, um tipo de dado, um offset inicial e número de elementos — que transforma o dado em um array tipado real.

    `ArrayBuffer`

    O `ArrayBuffer` é um tipo de dado usado para representar um `buffer de dados binários de tamanho fixo genérico`. Você `não pode manipular diretamente o conteúdo de um ArrayBuffer`; ao invés disso, você deve criar uma view de array tipado ou uma `DataView` (visuzalizador de dados) que represente o buffer em um formato específico, e use esta view para ler e modificar o conteúdo do buffer.


- `Coleções chaveadas`

    Coleções chaveadas são coleções de dados que são ordenados por uma chave. Elas contêm elementos que são iteráveis em ordem de inserção.


    - `Map` - `Mapa` 
    
        Um mapa permite a criação de pares de mapeamento entre chave e valor. A ordem final das chaves é a mesma que a ordem de inserção original. Dados primitivos e não primitivos podem ser usados como chave ou valor. Em Javascript, para criar um mapa, utilizamos o construtor `Map`.

        Uma chave pode ocorrer somente uma vez em um mapa, ela é única em uma coleção.

        A iteração se dá  por ordem de inserção e retorna um par de `[chave, valor]` para cada iteração.

        A especificação requer que um Map seja implementado de forma que, em média, ofereça tempo de acesso que seja sublinear ao número de elementos na coleção. Porém, ele pode ser reprenstado internamente como uma tabela hash com (with O(1) lookup), a search tree (with O(log(N)) lookup) ou qualquer outra estutura de dados, contanto que sua complexidade seja melhor que O(N)

    ```javascript
        const clientes:Map<any, any> = new Map()
        clientes.set('José Eduardo', { telefone: '+55 27 99737-5850', email: 'web2solucoes@gmail.com' })
        clientes.set('Amanda Souza', { telefone: '+55 27 99455-6436', email: 'amanda@icloud.com' })
        console.log(clientes.size) // 2
        console.log(clientes.get('José Eduardo')) // { telefone: '+55 27 99737-5850', email: 'web2solucoes@gmail.com' }
        console.log(clientes.has('José Eduardo')) // true

        let iterador = clientes.entries()
        console.log(iterador.next().value)
        /**
        * [
        'José Eduardo',
        { telefone: '+55 27 99737-5850', email: 'web2solucoes@gmail.com' }
        ]
        */
        console.log(iterador.next().value)
        /**
        * [
        'Amanda Souza',
        { telefone: '+55 27 99455-6436', email: 'amanda@icloud.com' }
        ]
        */

        iterador = clientes.values()
        console.log(iterador.next().value)
        /**
        * { telefone: '+55 27 99737-5850', email: 'web2solucoes@gmail.com' }
        */
        console.log(iterador.next().value)
        /**
        * { telefone: '+55 27 99455-6436', email: 'amanda@icloud.com' }
        */


        clientes.forEach((value, key, map) => console.log(key, value))
        // José Eduardo { telefone: '+55 27 99737-5850', email: 'web2solucoes@gmail.com' }
        // Amanda Souza { telefone: '+55 27 99455-6436', email: 'amanda@icloud.com' }

        clientes.delete('José Eduardo')

        clientes.clear() // vazio
    ```

    `Mapas X Objeto`

    Em Javascrit, um mapa é similar á um objeto. Ambos permitem associar dados  á uma chave. Antes do construtor `Map` ser implementado na linguagem, `objetos` eram utilizados como `mapas`.

    Dentre as duas implementações, o construtor `Map` deve ser priorizado por diversas razões: eficiência, segurança e uma melhor API.

    - `Set` - `Grupo`

        Um grupo representa um conjunto de dados únicos. Os dados podem ser primitivos ou uma referência á um objeto. Um dado em um grupo deve ocorrer somente uma vez. Em Javascript, para criar um grupo, utilizamos o construtor `Set`.

        A especificação requer que um Set seja implementado de forma que, em média, ofereça tempo de acesso que seja sublinear ao número de elementos na coleção. Porém, ele pode ser reprenstado internamente como uma tabela hash com (with O(1) lookup), a search tree (with O(log(N)) lookup) ou qualquer outra estutura de dados, contanto que sua complexidade seja melhor que O(N)

        ```javascript
            const grupoHibrido = new Set()
            grupoHibrido.add(1)           // Set [ 1 ]
            grupoHibrido.add(5)           // Set [ 1, 5 ]
            grupoHibrido.add(5)           // Set [ 1, 5 ]
            grupoHibrido.add('texto') // Set [ 1, 5, 'texto' ]
            const objeto = {a: 1, b: 2}
            grupoHibrido.add(objeto)

            grupoHibrido.add({a: 1, b: 2})   // a variável objeto está referenciando outro objeto, logo adicionar esse valor ao grupo, é válido

            for (const elemento of grupoHibrido) {
                    console.log(elemento);
            }
            /**
            *
                    1
                    5
                    texto
                    { a: 1, b: 2 }
                    { a: 1, b: 2 }
            */

            for (const chave of grupoHibrido.keys()) {
                    console.log(chave);
            }
            /**
            *
                    1
                    5
                    texto
                    { a: 1, b: 2 }
                    { a: 1, b: 2 }
            */

            for (const valor of grupoHibrido.values()) {
                    console.log(valor);
            }
            /**
            *
                    1
                    5
                    texto
                    { a: 1, b: 2 }
                    { a: 1, b: 2 }
            */

            for (const [chave, valor] of grupoHibrido.entries()) {
            console.log(chave, valor);
            }
            /**
            *
                    1 1 
                    5 5
                    texto texto
                    { a: 1, b: 2 } { a: 1, b: 2 }
                    { a: 1, b: 2 } { a: 1, b: 2 }
            */
        ```

        `Conversão entre Grupos e Arranjos`

        ```typescript
            const grupo: Set<string | number>= new Set()
            grupo.add(1)   // Set [ 1 ]
            grupo.add(5)   // Set [ 1, 5 ]
            grupo.add(5)   // Set [ 1, 5 ]
            grupo.add('texto') // Set [ 1, 5, 'texto' ]

            const arranjo: Array<string | number> = Array.from(grupo) 

            const arranjo2: Array<string | number> = [...grupo] // [1, 5, 'texto']

            console.log(arranjo) // [1, 5, 'texto']
            console.log(arranjo2) // [1, 5, 'texto']
        ```

        `Operações com grupos`

        `Interseção`

        ```typescript
            function eIntersecao (grupo: Set<number>, subGrupo: Set<number>) {
                for (const numero of subGrupo) { 
                    if (!grupo.has(numero)) { 
                    return false
                    }
                } 
                return true
            }

            const grupo1: Set<number> = new Set([1, 2, 3, 4, 5, 6])
            const grupo2: Set<number> = new Set([3, 4, 5])

            console.log(eIntersecao(grupo1, grupo2)) // true
        ``

    - `WeakMap`

        Mapeamento entre chave e objeto

    - `WeakSet`

        representa um conjunto de objetos

## O que é Estrutura de dados?

Estrutura de dados é o ramo da computação que estuda os diversos mecanismos de organização de dados para atender aos diferentes requisitos de processamento.

As estruturas de dados definem a organização, métodos de acesso e opções de processamento para a informação manipulada pelo programa. A definição da organização interna de uma estrutura de dados é tarefa do projetista da estrutura, que define também qual a API para a estrutura, ou seja, qual o conjunto de procedimentos que podem ser usados para manipular os dados na estrutura. É esta API que determina a visão funcional da estrutura de dados, que é a única informação relevante para um programador que vá utilizar uma estrutura de dados pré-definida.

Além disso, uma estrutura de dados é um objeto que armazena dados de forma eficiente, oferecendo certos “serviços” para o usuário (ordenação eficiente dos dados, busca por meio de palavras chave, etc).


` Características das Estruturas de Dados`

- `Lineares` ou `não lineares`
- `Homogênias` ou `heterogêneas`
- `Estáticas` ou `dinâmicas`

1. [Pilhas - Stacks](/src/Pilhas)
2. [Filas - Queues](/src/Filas)
3. [Listas Encadeadas - Linked Lists](/src/ListasEncadeadas)
    - Duplamente ligadas
5. [Montes - Heaps](/src/ListasEncadeadas)
    - MaxHeap
    - MinHeap
6. [Árvores - Tree](/src/ListasEncadeadas)
7. [Árvores Binárias - Binary Trees](/src/ListasEncadeadas)
8. [Árvores de Busca Binárias - Binary Search Trees](/src/ListasEncadeadas)
9. [Graphs](/src/ListasEncadeadas)


### Referências:

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures

- https://www.dimap.ufrn.br/~umberto/paed/lista04.pdf

- http://sites.poli.usp.br/p/fabio.cozman/Didatico/Comp/Material/estruturas.pdf




1) Data Structures - Practice data structures like Heaps, HashTable, Tree, LinkedList, Stack, Queue, and Graph. 
2) Algorithm - Practice recursion, Merge-Sort, Quick-Sort, Breadth-first search, Depth-first search, Divide and Conquer, and Dynamic Programming
3) Explain your thought process - Extremely important. Practice describing your solution and design decisions clearly and concisely.
4) Collaborate – Don't forget to discuss, present multiple solutions, and take hints from the interviewer.




1. Sliding Window
https://medium.com/codex/sliding-window-problems-27d599c6cc13

2. Islands (Matrix Traversal)
3. Two Pointers
4. Fast & Slow Pointers
5. Merge Intervals
6. Cyclic Sort
7. In-place Reversal of a LinkedList
8. Tree Breadth-First Search
9. Tree Depth First Search
10. Two Heaps
11. Subsets
12. Modified Binary Search
13. Bitwise XOR
14. Top ‘K’ Elements
15. K-way Merge
16. 0/1 Knapsack
17. Unbounded Knapsack
18. Fibonacci Numbers
19. Palindromic Subsequence
20. Longest Common Substring
21. Topological Sort
22. Backtracking
23. Multi-threaded





