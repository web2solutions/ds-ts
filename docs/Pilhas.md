# Pilhas - Stacks

Uma pilha ou o inglês, stack, é uma estrutura de dados que admite remoção de elementos e inserção de novos objetos.  Mais especificamente, uma  pilha (= stack)  é uma estrutura sujeita à seguinte regra de operação:  sempre que houver uma remoção, o elemento removido é o que está na estrutura há menos tempo.

Em outras palavras, o primeiro objeto a ser inserido na pilha é o último a ser removido. Esse padrão é conhecido pela sigla LIFO `Last-In-First-Out`.

## Implementação em um vetor

Suponha que nossa pilha está armazenada em um vetor:

        pilha[0..N-1]

A natureza dos elementos do vetor é irrelevante: eles podem ser inteiros, bytes, ponteiros, etc.

Digamos que a parte do vetor ocupada pela pilha é:

        pilha[0..t-1]

O índice t indica a primeira posição vaga do vetor e t-1 é o índice do topo da pilha.  A pilha está vazia se t vale 0 e cheia se t vale N.  No exemplo da figura, os caracteres A, B, … , H foram inseridos na pilha nessa ordem:

<table class="myarray" border="1" style="size: 400px;">
<tbody><tr class="indices">
   <td><kbd>0</kbd>
   </td><td>&nbsp;
   </td><td>&nbsp;
   </td><td>&nbsp;
   </td><td>&nbsp;
   </td><td>&nbsp;
   </td><td>&nbsp;
   </td><td>&nbsp;
   </td><td><kbd>t</kbd>
   </td><td>&nbsp;
   </td><td>&nbsp;
   </td><td><kbd>N-1</kbd>
</td></tr><tr class="boxes" style="background-color: #333;">
   <td class="mag">A
   </td><td class="mag">B
   </td><td class="mag">C
   </td><td class="mag">D
   </td><td class="mag">E
   </td><td class="mag">F
   </td><td class="mag">G
   </td><td class="mag">H
   </td><td class="gry">&nbsp;
   </td><td class="gry">&nbsp;
   </td><td class="gry">&nbsp;
   </td><td class="gry">&nbsp;
</td></tr></tbody></table>


Para remover, ou tirar, um elemento da pilha — essa operação é conhecida como desempilhar (= to pop) — faça

   x = pilha[--t];
Isso equivale ao par de instruções  t -= 1;  x = pilha[t];.  É claro que você só deve desempilhar se tiver certeza de que a pilha não está vazia.

Para inserir, ou colocar, um objeto y na pilha — a operação é conhecida como empilhar (= to push) — faça

   pilha[t++] = y;  
Isso equivale ao par de instruções  pilha[t] = y;  t += 1;.  Antes de empilhar, certifique-se de que a pilha não está cheia, para evitar um transbordamento (= overflow). 

Para facilitar a leitura do código, é conveniente embalar essas operações em duas pequenas funções. Se os objetos com que estamos lidando são do tipo char, podemos escrever:

```C
    char desempilha (void) {
        return pilha[--t];
    }

    void empilha (char y) {
        pilha[t++] = y;
    }
```

Estamos supondo aqui que as variáveis pilha e t são globais, ou seja, foram definidas fora do código das funções.  Para completar o pacote, precisaríamos de mais três funções: uma que crie uma pilha, uma que verifique se a pilha está vazia e uma que verifique se a pilha está cheia. (Veja exercício abaixo.)