# Árvores de prefixo / Tries

Do inglês `Trie`, uma `árvore de prefixos`, ou também uma `árvore digital`, é uma estrutura de dados usada para implementar [`Tabelas de Símbolos`](https://pt.wikipedia.org/wiki/Tabela_de_s%C3%ADmbolos) de strings. Muito útil para `buscas` de sequências de caracteres por prefixos, como nomes de pessoas, palavras de um livro e DNA.

É ainda conhecida como `R-way trie` `(RT)`, cada nó pode ter `R` filhos. Onde o alfabeto das chaves tem R caracteres e que R = 256 (às vezes só 26, mas não 65536).

## Tabela de Símbolos de string


Os caracteres das chaves podem ser examinados um a um. Coisa que não faz sentido com chaves de tipo genérico

Cada chave tem um comprimento (número de caracteres).


O alfabeto (conjunto de caracteres) das chaves é conhecido a priori.


O desempenho de uma Tabela de Símbolos de strings é medido em termos de número `N` de chaves, comprimento máximo `W` das chaves, comprimento médio `w` das chaves e tamanho `R` do alfabeto.

Em muitas aplicações, o tempo de get(key) não depende de N mas é proporcional ao comprimento de key no caso de busca bem-sucedida essencialmente constante em busca malsucedida (porque nem chega a examinar todos os caracteres da chave).

## O conceito de árvore

Conceitualmente, uma árvore é composta por uma cadeia de ramos originados em sua raiz.

A raiz é o primeiro nó na cadeia de ramos.

Cada ramo é composto com por um conjunto de nós que podem originar novas cadeias de ramos ou não.

## A Árvore de prefixos

Prefixos são strings que podem resultar em diferentes palavras / chaves.

Em uma `árvore de prefixos`, os ramos são prefixos que podem compor múltiplas chaves. As chaves são armazenadas como uma sequência de caracteres, ou sequência de nós, em forma de lista duplamente ligada.

O primeiro caractere da chave é um nó filho da raiz da árvore. Os caracteres sucessores são nós filhos de seus antecessessores, respectivamente.

O último caractere da palavra é conhecido como sendo o `nó terminal` de uma chave.

Dito isto, palavras que compartilham o mesmo prefixo, compartilham o mesmo ramo na árvore.

![árvore](arvore.png "Árvore")

A string `v` está representada na árvore mas não é uma chave. `vendas`,  `vender` e `você` são chaves que compartilham o mesmo prefixo.

A string `vend` está representada na árvore mas não é uma chave. `vendas` e `vender` são chaves que compartilham o mesmo prefixo.
