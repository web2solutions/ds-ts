# Árvores de prefixo / Tries

Do inglês `Trie`, uma `árvore de prefixo`, ou também uma `árvore digital`, é uma estrutura de dados usada para implementar [`Tabelas de Símbolos`](https://pt.wikipedia.org/wiki/Tabela_de_s%C3%ADmbolos) de strings. Muito útil para `buscas` de sequências de caracteres, como nomes de pessoas, palavras de um livro e DNA.

É ainda conhecida como `R-way trie` `(RT)`. Onde o alfabeto das chaves tem R caracteres e que R = 256 (às vezes só 26, mas não 65536).


Os caracteres das chaves podem ser examinados um a um. Coisa que não faz sentido com chaves de tipo genérico

Cada chave tem um comprimento (número de caracteres).


O alfabeto (conjunto de caracteres) das chaves é conhecido a priori.


O desempenho de uma Tabela de Símbolos de strings é medido em termos de número `N` de chaves, comprimento máximo `W` das chaves, comprimento médio `w` das chaves e tamanho `R` do alfabeto.

Em muitas aplicações, o tempo de get(key) não depende de N mas é proporcional ao comprimento de key no caso de busca bem-sucedida essencialmente constante em busca malsucedida (porque nem chega a examinar todos os caracteres da chave).
