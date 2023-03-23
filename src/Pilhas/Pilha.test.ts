import { Pilha } from './Pilha'

function taBalanceado(caracteres: string | string[]): boolean {
    // criar pilha vazia
  const pilha: Pilha<string> = new Pilha([]);
    
    for (const bracket of caracteres) {
      if (bracket === '[') {
        pilha.empilhar(bracket);
      } else if (bracket === '{') {
        pilha.empilhar(bracket);
      } else if (bracket === '<') {
        pilha.empilhar(bracket);
      } else if (bracket === '(') {
        pilha.empilhar(bracket);
      } else if (bracket === ']') {
        if (pilha.topo === '[') {
          pilha.desempilhar();
        } else {
          pilha.empilhar(bracket);
        }
      } else if (bracket === '}') {
        if (pilha.topo === '{') {
          pilha.desempilhar();
        } else {
          pilha.empilhar(bracket);
        }
      } else if (bracket === '>') {
        if (pilha.topo === '<') {
          pilha.desempilhar();
        } else {
          pilha.empilhar(bracket);
        }
      } else if (bracket === ')') {
        if (pilha.topo === '(') {
          pilha.desempilhar();
        } else {
          pilha.empilhar(bracket);
        }
      } else {
        continue;
      }
    }
  
    return pilha.tamanho === 0;
  }

describe('Pilhas', () => {
    let pilha: Pilha<string>;
    const cargaInicial = ['arroz', 'feijão', 'farinha'];
    beforeAll(() => {
      pilha = new Pilha(cargaInicial); 
    });
    describe('checar API da pilha', () => {
      it('deve conter o método empilhar()', () => {
        expect(pilha).toHaveProperty('empilhar');
      });
      it('deve conter o método desempilhar()', () => {
        expect(pilha).toHaveProperty('desempilhar');
      });
      it('deve conter a propriedade estaVazia', () => {
        expect(pilha).toHaveProperty('estaVazia');
      });
      it('deve conter o método tamaho()', () => {
        expect(pilha).toHaveProperty('tamanho');
      });
      it('deve conter a propriedade topo', () => {
        expect(pilha).toHaveProperty('topo');
      });
      it('deve conter a propriedade base', () => {
        expect(pilha).toHaveProperty('base');
      });
      it('testar construtor', () => {
        const pilha2 = new Pilha<number>([1, 2, 3]); 
        expect(pilha2.topo).toBe(3);

        const pilha3 = new Pilha<number>(); 
        expect(pilha3.tamanho).toBe(0);
      });
      describe(`checar operações suportadas, a pilha atual contém: ${cargaInicial.join(', ')}`, () => {
        it('a pilha deve suportar empilhamento ... empilhando açúcar.', () => {
            pilha.empilhar('açúcar');
            expect(pilha.topo).toBe('açúcar');
        });
        it('a pilha deve suportar desempilhamento, ao desempilhar deve remover o açúcar e retornar a farinha', () => {
            pilha.desempilhar();
            expect(pilha.topo).toBe('farinha');
        });
        it('a pilha deve suportar retornar seu tamanho', () => {
            expect(pilha.tamanho).toBe(3);
        });
        it('deve ser impossível desempilhar uma  pilha vazia', () => {
            expect(pilha.estaVazia).toBeFalsy();
            pilha.desempilhar();
            pilha.desempilhar();
            pilha.desempilhar();
            expect(pilha.estaVazia).toBeTruthy();
            expect(() => {
                pilha.desempilhar();
            }).toThrow('Pilha vazia');
        });
        it('a pilha deve estar vazia', () => {
            expect(pilha.estaVazia).toBeTruthy();
        });
    });
    });
    describe('Resolução de problemas com Pilhas', () => {
        it('a string ([]) deve tá balanceada', () => {
            expect(taBalanceado('([])'.split(''))).toBeTruthy();
        });
        it('a string {} deve tá balanceada', () => {
            expect(taBalanceado('{}'.split(''))).toBeTruthy();
        });
        it('a string ([][]) deve tá balanceada', () => {
            expect(taBalanceado('([][])'.split(''))).toBeTruthy();
        });
        it('a string ([][]<>)() deve tá balanceada', () => {
            expect(taBalanceado('([][]<>)()'.split(''))).toBeTruthy();
        });
        it('a string ([][]<>)(abc) deve tá balanceada', () => {
            expect(taBalanceado('([][]<>)(abc)'.split(''))).toBeTruthy();
        });
        it('a string ([>]) não deve tá balanceado', () => {
            expect(taBalanceado('([>])'.split(''))).toBeFalsy();
        });
        it('a string ([]>) não deve tá balanceado', () => {
            expect(taBalanceado('([]>)'.split(''))).toBeFalsy();
        });
        it('a string {}} não deve tá balanceado', () => {
            expect(taBalanceado('{}}'.split(''))).toBeFalsy();
        });
    });
  });
