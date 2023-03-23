
import { ListaEncadeadaSimples } from './ListaEncadeadaSimples'
import { No } from './No'

describe('Lista Ligada / Encadeada', () => {
    let lista: ListaEncadeadaSimples
    
    beforeEach(() => {
        lista  = new ListaEncadeadaSimples()
    });

    describe('Checar API da Lista encadeada', () => {
        it('Deve ser capaz de retornar seu tamanho', () => {
            expect(lista.tamanho).toBeDefined()
            expect(lista.tamanho).toBe(0)
            lista.inserirEmPrimeiro(1)
            expect(lista.tamanho).toBe(1)
        })
    
        it('Deve ser capaz de retornar seus elementos como um array', () => {
            expect(lista.nos).toBeDefined()
            lista.inserirEmPrimeiro(1)
            expect(lista.nos[0].valor).toBe(1)
            expect(lista.nos).toEqual([{ valor: 1, proximo: null }])
        })
    
        it('Deve ser capaz de retornar seus valores armazenados como um array', () => {
            expect(lista.nos).toBeDefined()
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            expect(lista.valores).toEqual([2, 1])
        })
    
        it('A lista deve ser capaz de retornar sua cabeça', () => {
            expect(lista.cabeca).toBeDefined()
        })
    
        it('A cabeça da lista deve ser null caso esteja vazia', () => {
            expect(lista.cabeca).toBe(null)
        })
    
        it('A cabeça da lista deve apontar pro primeiro nó', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            expect(lista.cabeca).toEqual({ valor: 2, proximo: { valor: 1, proximo: null } })
            expect(lista.cabeca?.valor).toBe(2)
        })
    
        it('A lista deve ser capaz de retornar seu rabo', () => {
            expect(lista.rabo).toBeDefined()
        })
    
        it('O rabo da lista deve ser null caso esteja vazia', () => {
            expect(lista.rabo).toBe(null)
        })
    
        it('O rabo da lista deve apontar pro último nó', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            expect(lista.rabo?.valor).toBe(lista.nos[lista.tamanho -1].valor)
            expect(lista.rabo).toEqual({ valor: 1, proximo: null})
        })
    
        it('Deve ser possível inserir um nó dado sua posição e valor', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            lista.inserirEmPrimeiro(3)
            lista.inserirEmUltimo(4)
            
            lista.inserirEm(3, 5)
    
            expect(lista.pegarEm(3).valor).toBe(5)
        })
    
        it('Deve ser possível inserir um nó na primeira posição da lista', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            expect(lista.pegarEm(0).valor).toBe(2)
            expect(lista.pegarEm(1).valor).toBe(1)
        })
    
        it('Deve ser possível inserir um nó na última posição da lista', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            lista.inserirEmUltimo(10)
            lista.inserirEmUltimo(9)
            
            const primeiraPosicao = 0
            const segundaPosicao = 1
            const ultimaPosicao = lista.tamanho - 1
            const penultimaPosicao = lista.tamanho - 2
    
            expect(lista.pegarEm(primeiraPosicao).valor).toBe(2)
            expect(lista.pegarEm(segundaPosicao).valor).toBe(1)
            expect(lista.pegarEm(penultimaPosicao).valor).toBe(10)
            expect(lista.pegarEm(ultimaPosicao).valor).toBe(9)
        })
        
         it('Deve ser possível criar uma lista dado um nó', () => {
            const lista2 = new ListaEncadeadaSimples({ "valor": 3, "proximo": { "valor": 2, "proximo": { "valor": 2, "proximo": null } } })
            expect(lista2.cabeca?.valor).toBe(3)
        })
    
        it('Deve ser possível remover um nó da lista dado uma posição', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            
            lista.removerEm(1)
            
            expect(lista.pegarEm(0).valor).toBe(2)
        })
    
        it('Deve ser possível retornar um nó da lista dado uma posição', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            expect(lista.pegarEm(1).valor).toBe(1)
        })
    
        it('Deve ser possível checar se a lista contém determinado valor', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            expect(lista.contem(2)).toBe(true)
            expect(lista.contem(3)).toBe(false)
        })
    
        it('Deve ser possível checar se a lista contém determinado valor', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            expect(lista.contem(3)).toBe(false)
        })
    
        it('Deve ser possível buscar determinado valor na lista e retornar o nó associado', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            expect(lista.busca(1)).toEqual({ valor: 1, proximo: null })
        })
    
        it('Deve ser possível buscar determinado valor na lista e retornar a posição do nó associado', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            expect(lista.buscaPosicao(1)).toBe(1)
        })
    
        it('Deve ser possível limpar a lista', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            expect(lista.nos.length).toBe(2)
            lista.limpar()
            expect(lista.nos.length).toBe(0)
        })
    
        it('Deve ser possível reverter a ordem dos nós presentes na lista', () => {
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            lista.inserirEmUltimo(10)
            lista.inserirEmUltimo(9)
    
            expect(lista.valores).toEqual([2, 1, 10, 9])
            lista.reverse()
            expect(lista.valores).toEqual([9, 10, 1, 2])
        })
    });
  })