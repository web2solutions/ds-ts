### Dados primitivos:

Os tipos de `dados primitivos` podem armazenar `somente um dado` por vez. Para o armazenamento de `múltiplos dados`, é necessário utilizar os tipos de dados `não primitivos`.

- `Number`

    É o tipo usado para manipular números.

    ```typescript
        const ano: number = 2022
    ```

- `BigInt`

    É um objeto empacotador primitivo usado para lidar com dados BigInt, que são números `muito grande para serem manipulados` pelo tipo `number`.

    ```typescript
        const numeroGrande1: BigInt = 9007199254740991n // conversão adicionando `n` no final do número
        const numeroGrande2: BigInt = BigInt(9007199254740991) // conversão usando o empacotador BigInt()
    ```
    
- `String`

    É o tipo usado para manipular dados do tipo texto ou sequência de caracteres.

    ```typescript
        const nome: string = 'José Eduardo'
    ```

- `Boolean`

    É tipo usado para manipular valores lógicos como `verdadeiro` e `falso`.

    ```typescript
        const ceuAzul: boolean = true;
    ```

- `Symbol`

    Símbolos (ou atoms) são primitivos únicos e imutáveis e podem ser usados como uma chave de uma propriedade de um objeto.

- `Undefined`

    Utilizado para expressar um dado não definido / declarado.

    ```javascript
        function testarIndefinido(parametro) {
            if (typof parametro === 'undefined') {
                throw 'Você deve atribuir um valor ao parâmtero'
            }
            return 'O parâmetro está definido'
        }
    ```

- `Null`

    Utilizado quando de forma intencional a não ter nenhum dado atribuido.

- `NaN`

    É comumente encontrado quando o resultado de uma expressão aritmética não é um número válido.

    ```javascript
        console.log(parseInt('a')) // NaN
    ```
