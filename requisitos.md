#### 7. Implemente a lógica para preencher as opções do campo "Moedas", buscando as siglas das moedas da API:

- Ao entrar na página `/carteira`, você deverá fazer uma requisição para a API das moedas e preencher as opções do `<select>` de "Moedas" com os valores retornados. Utilizando as siglas das moedas.

- As opções devem conter os valores: 'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH' e 'XRP'.

  - Esses valores devem vir da API através do endpoint: https://economia.awesomeapi.com.br/json/all.

  - Remova das informações trazidas pela API a opção 'USDT' (Dólar Turismo).

---

#### 8. Desenvolva a opção de "Adicionar despesa" na sua tabela de gastos

- Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão, as seguintes ações sejam executadas:

  - Os valores dos campos devem ser salvos no estado da aplicação, na chave **_expenses_**, dentro de um array contendo todos gastos que serão adicionados:

    - O `id` da despesa **deve** ser um número sequencial, começando em 0. Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2, e assim por diante.

    - Você deverá salvar a cotação do câmbio feita no momento da adição para ter esse dado quando for efetuar uma edição do gasto. Caso você não tenha essa informação salva, o valor da cotação trazida poderá ser diferente do obtido anteriormente.

      > **Atenção nesse ponto:** você deverá fazer uma requisição para API e buscar a cotação no momento que o botão de `Adicionar despesa` for apertado. Para isso você deve utilizar um thunk. Atente-se ao formato do objeto da despesa descrito abaixo: o valor retornado pela API deverá ficar dentro da chave `exchangeRates`.

  - Após adicionar a despesa, atualize a soma total das despesas. Essa informação deve ficar no header dentro do elemento com `data-testid="total-field"`

  - As despesas salvas no Redux ficarão com um formato semelhante ao seguinte:
    <details>
    <summary>Clique para expandir.</summary>
    <p>

    ```javascript
      expenses: [{
        "id": 0,
        "value": "3",
        "description": "Hot Dog",
        "currency": "USD",
        "method": "Dinheiro",
        "tag": "Alimentação",
        "exchangeRates": {
          "USD": {
            "code": "USD",
            "name": "Dólar Comercial",
            "ask": "5.6208",
            ...
          },
          "CAD": {
            "code": "CAD",
            "name": "Dólar Canadense",
            "ask": "4.2313",
            ...
          },
          "EUR": {
            "code": "EUR",
            "name": "Euro",
            "ask": "6.6112",
            ...
          },
          "GBP": {
            "code": "GBP",
            "name": "Libra Esterlina",
            "ask": "7.2498",
            ...
          },
          "ARS": {
            "code": "ARS",
            "name": "Peso Argentino",
            "ask": "0.0729",
            ...
          },
          "BTC": {
            "code": "BTC",
            "name": "Bitcoin",
            "ask": "60299",
            ...
          },
          "LTC": {
            "code": "LTC",
            "name": "Litecoin",
            "ask": "261.69",
            ...
          },
          "JPY": {
            "code": "JPY",
            "name": "Iene Japonês",
            "ask": "0.05301",
            ...
          },
          "CHF": {
            "code": "CHF",
            "name": "Franco Suíço",
            "ask": "6.1297",
            ...
          },
          "AUD": {
            "code": "AUD",
            "name": "Dólar Australiano",
            "ask": "4.0124",
            ...
          },
          "CNY": {
            "code": "CNY",
            "name": "Yuan Chinês",
            "ask": "0.8278",
            ...
          },
          "ILS": {
            "code": "ILS",
            "name": "Novo Shekel Israelense",
            "ask": "1.6514",
            ...
          },
          "ETH": {
            "code": "ETH",
            "name": "Ethereum",
            "ask": "5184",
            ...
          },
          "XRP": {
            "code": "XRP",
            "name": "Ripple",
            "ask": "1.4",
            ...
          }
        }
      }]
    ```

      </p>
    </details>

---

### Tabela de Gastos

#### 9. Desenvolva uma tabela com os gastos contendo as seguintes características:

- A tabela deve possuir um cabeçalho **exatamente** com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir

- Atente-se ao formato semântico da tabela. Utilize os elementos corretos para o cabeçalho, para as linhas e para as células.

- A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave **_expenses_** que vem do reducer `wallet`.

  - O campo de Moeda e Moeda de Conversão deverão conter o nome da moeda. Portanto, ao invés de 'USD' ou 'EUR', deve conter "Dólar Comercial" e "Euro", respectivamente

  - Por padrão, o campo 'Moeda de conversão' exibirá 'Real'

  - Atenção também às casas decimais dos campos. Como são valores contábeis, eles devem apresentar duas casas após a vírgula. Arredonde sua resposta somente na hora de renderizar o resultado, e para os cálculos utilize sempre os valores vindos da API (utilize o campo `ask` que vem da API).

  - Utilize sempre o formato `0.00` (número - ponto - duas casas decimais)

O que será testado:

```
- A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido e Moeda de conversão.
- A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave expenses que vem do reducer wallet.
```

#### 10. Crie um botão para deletar uma despesa da tabela contendo as seguintes características:

![image](btnExcluir.gif)

- O botão deve estar na linha da tabela e deve possuir `data-testid="delete-btn"`.

- Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global.

O que será testado:

```
- O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="delete-btn"`
- Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global
```

### Bônus

#### 11. Crie um botão para editar uma despesa da tabela contendo as seguintes características:

![image](btnEditar.gif)

- O botão deve estar dentro da linha da tabela e deve possuir `data-testid="edit-btn"`

- Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global.

  - O formulário deverá ter os mesmos `data-testid` do formulário de adicionar despesa. Você pode reaproveitá-lo.

  - O botão para submeter a despesa para edição deverá conter **exatamente** o texto "Editar despesa"

  **Atenção**: o câmbio utilizado na edição deve ser o mesmo do cálculo feito na adição do gasto.

O que será testado:

```
- O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="edit-btn"
- Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global
```

---