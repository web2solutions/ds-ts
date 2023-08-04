# Listas ligadas

Listas ligada é uma estrutura de dados linear que representa uma sequência de objetos, todos do mesmo tipo, na memória RAM de um computador. Cada objeto da sequência é armazenado em uma célula (ou nó) da lista. Uma Lista Ligada oferece ao menos as seguintes operações: `inserir`, `buscar`, `remover`

Cada célula (ou nó) é composta por um objeto (todos do mesmo tipo) e o endereço da celula (ou nó) seguinte.

Pode ser útil tratar as células como um novo tipo de dado e atribuir um nome a esse novo tipo.

### Representçao de uma `Célula - Nó`

       obj    end
    |-------|------|
    |   3   | prox |
    |-------|------|

`Célula - Nó como um novo tipo de dado:`

```typescript
interface No {
    valor: number;
    proximo: number | null;
}
```

O endereço de uma lista ligada é sempre o primeiro nó ou célula da lista.

Se `n` é um Nó então `n.valor` é o conteúdo, ou carga útil, da célula e `n.proximo` é o endereço da próxima célula. 

Se `e` é o endereço de uma célula, então `e.valor` é o conteúdo da célula e `e.proximo` é o endereço da próxima célula. 

Se `e` é o endereço da última célula da lista então  `e.proximo` vale null.

### Representçao da Lista

     cabeça                                                           rabo
    |-------|       |-------|       |-------|       |-------|       |-------|
    |   3   |  -->  |   2   |  -->  |   1   |  -->  |   5   |  -->  |   4   |  --> null
    |-------|       |-------|       |-------|       |-------|       |-------|