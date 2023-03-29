import { Pilha } from '../Pilha_inversa'

function taBalanceado(caracteres: string | string[]): boolean {
  // criar pilha vazia
  const pilha: Pilha<string> = new Pilha({ capacidade: 500 });
  
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
      if (pilha.itemNoTopo === '[') {
        pilha.desempilhar();
      } else {
        pilha.empilhar(bracket);
      }
    } else if (bracket === '}') {
      if (pilha.itemNoTopo === '{') {
        pilha.desempilhar();
      } else {
        pilha.empilhar(bracket);
      }
    } else if (bracket === '>') {
      if (pilha.itemNoTopo === '<') {
        pilha.desempilhar();
      } else {
        pilha.empilhar(bracket);
      }
    } else if (bracket === ')') {
      if (pilha.itemNoTopo === '(') {
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
  const valores = ['arroz', 'feijão', 'farinha'];
  beforeAll(() => {
    pilha = new Pilha({ valores }); 
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
    
    it('deve conter a propriedade itemNoTopo', () => {
      expect(pilha).toHaveProperty('itemNoTopo');
    });
    
    it('deve conter a propriedade topo', () => {
      expect(pilha).toHaveProperty('topo');
    });
    
    it('deve conter a propriedade base', () => {
      expect(pilha).toHaveProperty('base');
    });
    
    it('deve conter a propriedade capacidade', () => {
      expect(pilha).toHaveProperty('capacidade');
    });
    
    describe(`testar construtor`, () => {
      it('criar pilha com valores iniciais somente. Capacidade deverá ser 10', () => {
        const pilha2 = new Pilha<number>({ valores: [1, 2, 3] }); 
        expect(pilha2.itemNoTopo).toBe(3);
        expect(pilha2.capacidade).toBe(10);
        expect(pilha2.tamanho).toBe(3);
      });
      
      it('criar pilha informando somente a capacidade. Capacidade deverá ser 30', () => {
        const pilha4 = new Pilha<number>({ capacidade: 30 }); 
        expect(pilha4.capacidade).toBe(30);
        expect(pilha4.tamanho).toBe(0);
      });
      
      it('criar pilha sem nenhum atributo. Valores padrão. Capacidade deverá ser 10', () => {
        const pilha3 = new Pilha<number>({}); 
        expect(pilha3.capacidade).toBe(10);
        expect(pilha3.tamanho).toBe(0);
      });
      
      it(`Quantidade de valores iniciais não podem ser maior que a capacidade. Capacidade atual: 10. Empilhando pilha[N+1] ...`, () => {
        expect(() => {
          const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // 11 elementos
          new Pilha<number>({ valores }); // capacidade padrão inicial é 10
        }).toThrow('Pilha transbordada - Stack overflow');
      });
    });
    
    describe(`checar operações suportadas, a pilha atual contém: ${valores.join(', ')}`, () => {
      it('o topo da pilha deve ser 3 - 1 = 2', () => {
        expect(pilha.topo).toBe(3 - 1);
      });
      
      it(`a pilha deve suportar empilhamento ... empilhando açúcar.`, () => {
        pilha.empilhar('açúcar');
        expect(pilha.itemNoTopo).toBe('açúcar');
      });
      
      it('o topo da pilha deve ser 4 - 1 = 3', () => {
        expect(pilha.topo).toBe(4 - 1);
      });
      
      it('a pilha deve suportar desempilhamento, ao desempilhar deve remover o açúcar e retornar a farinha', () => {
        pilha.desempilhar();
        expect(pilha.itemNoTopo).toBe('farinha');
      });
      
      it('a pilha deve suportar retornar seu tamanho', () => {
        expect(pilha.tamanho).toBe(3);
      });
      
      it('a pilha deve suportar retornar sua capacidade', () => {
        expect(pilha.capacidade).toBe(10);
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
      
      it(`deve ser impossível empilhar mais ítems que a capacidade da lista. Capacidade atual: 10. Empilhando pilha[N+1] ...`, () => {
        expect(() => {
          while (pilha.tamanho < (pilha.capacidade + 1)) {
            pilha.empilhar('açúcar');
          }
        }).toThrow('Pilha transbordada - Stack overflow');
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
    it('a string ((((((((((([][]<>)(abc))))))))))) deve tá balanceada', () => {
      expect(taBalanceado('((((((((((([][]<>)(abc)))))))))))'.split(''))).toBeTruthy();
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
