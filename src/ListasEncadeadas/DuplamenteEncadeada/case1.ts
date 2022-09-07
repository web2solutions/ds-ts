import { ListaDuplamenteEncadeada } from './ListaDuplamenteEncadeada'


const lista  = new ListaDuplamenteEncadeada()

console.log('--- inserir 1 em primeiro: ', lista.inserirEmPrimeiro(1))
console.log('--- inserir 2 em primeiro: ', lista.inserirEmPrimeiro(2))
console.log('--- inserir 3 em primeiro: ', lista.inserirEmPrimeiro(3))
console.log('--- inserir 4 em ultimo: ', lista.inserirEmUltimo(4))
console.log('--- inserir 5 na posicao 3: ', lista.inserirEm(3, 5))

console.log('==== valores na lista', lista.valores) // [3, 2, 1, 5, 4]

console.log('==== reverter lista', lista.reverse())

console.log('==== valores na lista', lista.valores) // [4, 5, 1, 2, 3]

/*
console.log('==== Tamanho da lista', lista.tamanho) // 5
console.log('==== Cabeca da lista', lista.cabeca?.valor) // 2
console.log('==== Ultimo da lista', lista.ultimo?.valor) // 4


console.log('==== buscar 5 na lista', lista.busca(5)) // [3, 2, 1, 5, 4]


console.log( lista.removerEm(1)?.valor )               // 2
console.log(lista.pegarEm(1).valor)          // 1
console.log(lista.cabeca?.proximo?.valor)           // 1
// [...list.map(e => e.value)];    // [3, 1, 5, 4] */