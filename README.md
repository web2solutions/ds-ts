# Estrutura de dados usando Typescript

O propósito desse repositório é demonstrar e compartilhar com desenvolvedores da língua portuguesa a implementação das diversas estuturas de dados usando a linguagem Typescript.

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

    ```javascript
        const ano: number = 2022
    ```

- `BigInt`

    É um objeto empacotador primitivo usado para lidar com dados BigInt, que são números `muito grande para serem manipulados` pelo tipo `number`.

    ```javascript
        const numeroGrande1: BigInt = 9007199254740991n // conversão adicionando `n` no final do número
        const numeroGrande2: BigInt = BigInt(9007199254740991) // conversão usando o empacotador BigInt()
    ```
    
- `String`

    É o tipo usado para manipular dados do tipo texto ou sequência de caracteres.

    ```javascript
        const nome: string = 'José Eduardo'
    ```

- `Boolean`

    É tipo usado para manipular valores lógicos como `verdadeiro` e `falso`.

    ```javascript
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

    ```javascript
        const objeto: Record<string|symbol, any> = {
            'chave 1': 'texto',
            'chave 1': 2,
            'chave 3': 9007199254740991n,
            'chave 4': function () {
                return 'minha função'
            }
        }
    ```
    
    - `Arranjo associativo`

    Em Javascript, `arrays` também são `objetos`. Isso quer dizer que você poderia reescrever o objeto acima com a seguinte notação:

    ```javascript 
        const arranjoAssociativo = [];
        arranjoAssociativo['chave 1'] = 'texto'
        arranjoAssociativo['chave 2'] = 2
        arranjoAssociativo['chave 3'] = 9007199254740991n
        arranjoAssociativo['chave 4'] = function () {
            return 'minha função'
        }
    ```

    Observe que o código acima é somente válido como Javascript. Caso tente transpilar esse código com Typescript, você terá um erro como o exemplo á seguir:

    `error TS7015: Element implicitly has an 'any' type because index expression is not of type 'number'.`

    Ainda considerando apenas o Javascript, qual seria então a diferença entre as duas notações?

    `O prototype que o objeto herdou`. Em Javascript, objetos são construídos com `protypes - protótipos`. Nesse caso o primeiro código herdou o protótipo do tipo `object` e o segundo herdou o protótipo do tipo `array`. Isso significa que os `métodos` e `propriedades` que fazem parte de cada uma das estruturas de dados, a API, sejam diferentes.

- `Datas`

- `Coleções indexadas`
    - `Array`
    - `Array tipado`


- `Coleções chaveadas`
    - `Map`
    
        Mapeamento entre chave e objeto

    - `Set`

        Representa um conjunto de objetos

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

1. [Pilhas](/src/Pilhas)
2. [Filas](/src/Filas)
3. [Listas Encadeadas](/src/ListasEncadeadas)


### Referências:

- https://www.dimap.ufrn.br/~umberto/paed/lista04.pdf

- http://sites.poli.usp.br/p/fabio.cozman/Didatico/Comp/Material/estruturas.pdf
