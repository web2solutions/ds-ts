

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

// =====

const grupoNumerico1 = new Set([1, 2, 3])
grupoNumerico1.add(3)
grupoNumerico1.add(4)
console.log(grupoNumerico1.has(2)) // true
console.log(grupoNumerico1.size) // 4
grupoNumerico1.add(5)
console.log(grupoNumerico1.has(5)) // true
console.log(grupoNumerico1.size) // 5
grupoNumerico1.delete(5)
console.log(grupoNumerico1.has(5)) // false
console.log(grupoNumerico1.size) // 4

const grupoNumerico2 = new Set([2, 3])

const grupoNumerico3 = new Set([3, 4, 5, 6])