# Estrutura de dados usando Typescript

O propósito desse repositório é demonstrar e compartilhar com desenvolvedores da língua portuguesa a implementação das diversas estuturas de dados usando a linguagem Typescript.

Antes de falar sobre dados e estrutura de dados, precisamos entender o que é uma informação:

## O que é uma `informação`?

Podemos dizer grosseiramente que na computação o conceito de informação é a `reunião ou o conjunto de dados`.

## O que é `dado`?

Um dado é uma parte de uma informação manipulasa por um programa e que pode ser acessado através de um identificador, como um ponteiro ou uma variável.

Os tipos de dados mais comuns são:

- Números inteiros
- Números flutuantes
- Booleano
- Texto

Como a linguagem Typescript é um superset do Javascript, logo seus tipos de dados são herdados da linguagem Javascript. Os tipos de dados podem ser primitivos ou não primitivos.

### Dados primitivos:

- `Number`
- `BigInt`

    É um objeto empacotador primitivo usado para lidar com dados BigInt, que são números `muito grande para serem manipulados` pelo tipo `number`.
    
- `String`
- `Boolean`
- `Symbol`

    Símbolos (ou atoms) são primitivos únicos e imutáveis e podem ser usados como uma chave de uma propriedade de um objeto.

- `Undefined`

    Utilizado para expressar um dado não definido / declarado.

- `Null`

    Utilizado quando de forma intencional a não ter nenhum dado atribuido.

- `Nan`

    É comumente encontrado quando o resultado de uma expressão aritmética não é um número válido.

Os tipos de `dados primitivos` podem armazenar `somente um dado` por vez. Para o armazenamento de `múltiplos dados`, é necessário utilizar os tipos de dados `não primitivos`.

### Dados não primitivos:

- `Objetos`
    
    Um objeto do JavaScript é um `mapeamento entre chaves e valores`. Chaves são Strings e valores podem ser de qualquer tipo. Isso faz com que objetos sejam perfeitos para `hashmaps`
    
    - `Array associativo`

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


Características das Estruturas de Dados:

- Lineares
- Não lineares
- Homogênias ou heterogêneas
- Estáticas ou dinâmicas

1. [Pilhas](/src/Pilhas)
2. [Filas](/src/Filas)
3. [Listas Encadeadas](/src/ListasEncadeadas)


### Referências:

- https://www.dimap.ufrn.br/~umberto/paed/lista04.pdf

- http://sites.poli.usp.br/p/fabio.cozman/Didatico/Comp/Material/estruturas.pdf
