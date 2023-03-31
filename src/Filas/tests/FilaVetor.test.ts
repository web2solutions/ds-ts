import { FilaVetor } from '../FilaVetor'

describe('suite de testes da Fila', () => {
  const valores = ['José', 'João', 'Jesus'];
  let fila: FilaVetor<string> = new FilaVetor({ valores }); 
  
  describe(`testar construtor`, () => {
    it('criar fila com valores iniciais somente.', () => {
      const fila2 = new FilaVetor<number>({ valores: [1, 2, 3] }); 
      expect(fila2.primeiroDaFila).toBe(1);
      expect(fila2.tamanho).toBe(3);
    });
    
    it('criar fila sem nenhum atributo. Valores padrão', () => {
      const fila3 = new FilaVetor<number>({}); 
      expect(fila3.tamanho).toBe(0);
    });
  });
  describe(`checar API da fila`, () => {
    it('deve conter o método enfileirar()', () => {
      expect(fila).toHaveProperty('enfileirar');
    });
    
    it('deve conter o método desenfileirar()', () => {
      expect(fila).toHaveProperty('desenfileirar');
    });
    
    it('deve conter a propriedade estaVazia', () => {
      expect(fila).toHaveProperty('estaVazia');
    });
    
    it('deve conter o método tamaho()', () => {
      expect(fila).toHaveProperty('tamanho');
    });
    
    it('deve conter a propriedade primeiroDaFila', () => {
      expect(fila).toHaveProperty('primeiroDaFila');
    });
  });
  
  describe(`checar operações suportadas, a fila atual contém: ${valores.join(', ')}`, () => {
    
    
    it(`a fila deve suportar enfileiramento ... enfileirando Judah.`, () => {
      fila.enfileirar('James');
      expect(fila.primeiroDaFila).toBe('José');
    });
    
    
    it('a fila deve suportar desenfileirar, ao desenfileirar deve remover o Judah e retornar a farinha', () => {
      fila.desenfileirar();
      expect(fila.primeiroDaFila).toBe('João');
    });
    
    it('a fila deve suportar retornar seu tamanho', () => {
      expect(fila.tamanho).toBe(3);
    });
    
    it('a fila deve suportar limpar()', () => {
      const fila2 = new FilaVetor<number>({ valores: [1, 2, 3] }); 
      expect(fila2.primeiroDaFila).toBe(1);
      expect(fila2.tamanho).toBe(3);
      fila2.limpar();
      expect(fila2.tamanho).toBe(0);
      expect(() => {
        const primeiro = fila2.primeiroDaFila;
      }).toThrow('Fila vazia');
    });
    
    
    it('deve ser impossível desenfileirar uma  fila vazia', () => {
      expect(fila.estaVazia).toBeFalsy();
      fila.desenfileirar();
      fila.desenfileirar();
      fila.desenfileirar();
      // console.log(fila);
      expect(fila.estaVazia).toBeTruthy();
      expect(() => {
        fila.desenfileirar();
      }).toThrow('Fila vazia');
    });
    
  });
});
