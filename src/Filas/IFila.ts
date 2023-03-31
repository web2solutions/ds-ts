export interface IFila<T> {
    enfileirar: (valor: T) => void;
    desenfileirar: () => T | undefined;
    limpar: () => void;
    tamanho: number;
    primeiroDaFila: T | undefined;
    estaVazia: boolean;
}