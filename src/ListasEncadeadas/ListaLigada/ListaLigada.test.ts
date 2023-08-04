
import { ListaLigada } from './ListaLigada'
import { No } from './No'

describe('Lista Ligada / Encadeada', () => {
    let lista: ListaLigada<number>
    
    beforeEach(() => {
        lista  = new ListaLigada<number>()
    });

    describe('Checar API da Lista encadeada', () => {
        it('Deve possuir a propriedade tamanho', () => {
            expect(lista.tamanho).toBeDefined()
            expect(lista.tamanho).toBe(0)
        })
        it('Deve possuir a propriedade cabeça', () => {
            expect(lista.cabeca).toBeDefined()
            expect(lista.cabeca).toBe(null)
        })
        it('Deve possuir a propriedade cauda', () => {
            expect(lista.cauda).toBeDefined()
            expect(lista.cauda).toBe(null)
        })
        it('Deve possuir o metodo inserir', () => {
            expect(lista.inserir).toBeDefined()
            expect(typeof lista.inserir).toBe('function');
        })
        it('Deve possuir o metodo inserirEm', () => {
            expect(lista.inserirEm).toBeDefined()
            expect(typeof lista.inserirEm).toBe('function');
        })
        it('Deve possuir o metodo busca', () => {
            expect(lista.busca).toBeDefined()
            expect(typeof lista.busca).toBe('function');
        })
        it('Deve possuir o metodo buscaPosicao', () => {
            expect(lista.buscaPosicao).toBeDefined()
            expect(typeof lista.buscaPosicao).toBe('function');
        })
    });

    describe('Testar operações da lista', () => {
        it('metodo inserir - Deve ser possivel inserir um novo valor do lado esquero da lista', () => {
            const celulaMock: No<number> = { valor: 22, proximo: null};
            lista.inserir(22);
            // ao inserir o primeiro elemento, ambos cabeça e cauda apontam para o elemento inserido
            expect(JSON.stringify(lista.cabeca)).toBe(JSON.stringify(celulaMock))
            expect(JSON.stringify(lista.cauda)).toBe(JSON.stringify(celulaMock))
        })
        it('metodo remover - Deve ser possivel remover um valor da lista', () => {
            expect(lista.tamanho).toBe(0)
            lista.inserir(22);
            expect(lista.tamanho).toBe(1);
            lista.inserir(23);
            expect(lista.tamanho).toBe(2)
            lista.remover(22);
            expect(lista.tamanho).toBe(1);
            expect(lista.busca(22)).toBe(null);
            const celulaMock: No<number> = { valor: 23, proximo: null};
            expect(JSON.stringify(lista.busca(23))).toBe(JSON.stringify(celulaMock))
        })
        it('metodo remover - Deve ser possivel remover em uma lista com um só elemento', () => {
            expect(lista.tamanho).toBe(0)
            lista.inserir(22);
            expect(lista.tamanho).toBe(1)
            expect(lista.remover(22)).toBe(true);
            expect(lista.tamanho).toBe(0)
            expect(lista.cabeca).toBe(null);
            expect(lista.cauda).toBe(null);
        })
        it('metodo remover - Deve ser impossivel remover um elemento não presente na lista', () => {
            expect(lista.tamanho).toBe(0)
            lista.inserir(22);
            expect(lista.tamanho).toBe(1)
            expect(lista.remover(50)).toBe(false);
        })
        it('metodo remover - Deve ser impossivel remover em uma lista vazia', () => {
            expect(lista.tamanho).toBe(0)
            expect(lista.remover(22)).toBe(false);
        })
        it('metodo busca - Deve ser possivel buscar um valor na lista', () => {
            lista.inserir(22);
            lista.inserir(23);
            console.log(lista)
            let celula = lista.busca(22)
            expect(celula?.valor).toBe(22)
        })
        it('metodo busca - Deve retornar null se nenhuma celula for encontrada', () => {
            lista.inserir(22);
            expect(lista.busca(55)).toBe(null)
        })
        it('metodo busca - deve retornar null se a lista tiver vazia', () => {
            expect(lista.busca(1)).toBe(null)
        })
        it('metodo buscaPosicao - deve retornar -1 se a lista tiver vazia', () => {
            expect(lista.buscaPosicao(1)).toBe(-1)
        })
        it('metodo buscaPosicao - Ultimo item inserido deve estar na posicao 1 da lista', () => {
            lista.inserir(1);
            lista.inserir(2);
            lista.inserir(3);
            expect(lista.buscaPosicao(1)).toBe(3)
            expect(lista.buscaPosicao(2)).toBe(2)
            expect(lista.buscaPosicao(3)).toBe(1)
        })
        it('metodo inserirEm - Deve ser possivel inserir um novo valor após um elemento presente na lista', () => {
            lista.inserir(1);
            let celula = lista.busca(1)
            if(celula) {
                lista.inserirEm(celula, 2);
                lista.inserirEm(celula, 3);
            }
            expect(lista.tamanho).toBe(3)
        })

        it('metodo inserirEm - elemento inserido deve ser a cauda da lista se houver um só elemento', () => {
            const celulaMock: No<number> = { valor:2, proximo: null};
            lista.inserir(1);
            const celula = lista.busca(1)
            if(celula) {
                lista.inserirEm(celula, 2);
            }
            expect(JSON.stringify(lista.cauda)).toBe(JSON.stringify(celulaMock))
        })
        // 
        it('metodo inserirEm - se houver somente um elemento, ele deve ser a cabeça da lista', () => {
            lista.inserir(1);
            const celula = lista.busca(1)
            if(celula) {
                lista.inserirEm(celula, 2);
            }
            expect(JSON.stringify(lista.cabeca)).toBe(JSON.stringify(lista.busca(1)))
        })

        it('propriedade valores - deve retornar lista ordenada de valores', () => {
            lista.inserir(1);
            lista.inserir(2);
            lista.inserir(3);
            lista.inserir(4);
            lista.inserir(5);
            lista.inserir(6);
            lista.inserir(7);
            expect(lista.valores).toEqual([7, 6, 5, 4, 3, 2, 1]);
        })

        it('propriedade valores - dever ser um array vazio se a lista estive vazia', () => {
            expect(lista.valores).toEqual([]);
        })
        
        it('Deve ser possível realizar operacoes em toda lista em ordem começando pelo primeiro No', () => {
            lista.inserirEmUltimo(9)
            lista.inserirEmPrimeiro(1)
            lista.inserirEmPrimeiro(2)
            lista.inserirEmUltimo(10)
            lista.inserirEmUltimo(9)
            const sum = function (no: No<number>) {
                no.valor = no.valor + 2;
            }
            lista.emordem(sum);
            expect(lista.valores).toEqual([4, 3, 11, 12, 11])
        })  
        it('Não Deve ser possível realizar operacoes uma lista vazia', () => {
            lista.emordem((no: No<number>) => {
                no.valor = Number(no.valor) + 2;
            });
            expect(lista.valores).toEqual([])
        })  
    });
  })