// Interface Nó
export interface No<T> {
    valor: T;
    proximo: No<T> | null;
}