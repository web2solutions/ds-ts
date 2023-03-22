import { ArvoredePrefixos } from './ArvoredePrefixos'

describe('Arvore de Prefixo', () => {
    let arvore: ArvoredePrefixos; 
    beforeAll(() => {
      arvore = new ArvoredePrefixos(); 
    });
    describe('checar API da árvore', () => {
      it('deve conter o método adicionar()', () => {
        expect(arvore).toHaveProperty('adicionar');
      });
      it('deve conter o método busca()', () => {
        expect(arvore).toHaveProperty('busca');
      });
      it('deve conter o método remover()', () => {
        expect(arvore).toHaveProperty('remover');
      });
      it('deve conter o método chavesComOPrefixo()', () => {
        expect(arvore).toHaveProperty('chavesComOPrefixo');
      });
      it('deve conter o método chavesComOCoringa()', () => {
        expect(arvore).toHaveProperty('chavesComOCoringa');
      });
    });
    describe('checar operações suportadas', () => {
      it('deve suportar operações de inclusão e busca exata de palavras - adicionar(palavra) && busca(palavra)', () => {
        arvore.adicionar('vendas');
        expect(arvore.busca('vendas')).toBeTruthy();
      });
      describe('deve suportar múltipla inclusões', () => {
        it('deve adicionar a palavra vender', () => {
          arvore.adicionar('vender');
          expect(arvore.busca('vender')).toBeTruthy();
        });
        it('deve adicionar a palavra vendido', () => {
          arvore.adicionar('vendido');
          expect(arvore.busca('vendido')).toBeTruthy();
        });
        it('deve adicionar a palavra você', () => {
          arvore.adicionar('você');
          expect(arvore.busca('você')).toBeTruthy();
        });
        it('deve adicionar a palavra pai', () => {
          arvore.adicionar('pai');
          expect(arvore.busca('pai')).toBeTruthy();
        });
      });
      it('deve suportar operação de busca de chaves/palavras dado um prefixo', () => {
        const palavrasEncontradas = arvore.chavesComOPrefixo('v');
        expect(palavrasEncontradas.length).toBe(4);
        expect(palavrasEncontradas[0]).toBe('vendas');
        expect(palavrasEncontradas[1]).toBe('vender');
      });
      it('buscar chaves por prefixo com string vazia deve retornar zero palavras', () => {
        const palavrasEncontradas = arvore.chavesComOPrefixo('');
        expect(palavrasEncontradas.length).toBe(0);
      });
      it('deve suportar operações de remoção de palavras', () => {
        arvore.remover('você');
        expect(arvore.busca('você')).toBeFalsy();
      });
    });
  })