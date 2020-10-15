# <center> <img src="./src/images/checked-2.png" width="40" height="40" /> Input Validator

## Sobre o projeto ##

Cansado de fazer validações manuais em formulários? Input validator chegou para resolver o seu problema de um jeito simples e eficiente.

## Importando e inicializando a biblioteca ##

Primeiramente, é necessário adicionar o arquivo `input-validator.js` ao seu arquivo .html. O arquivo se encontra dentro da pasta `dist`, ou pode ser gerado novamente, basta seguir [esses passos](#gerando-arquivo-input-validator.js). Em seguida, basta inicializar a biblioteca rodando o comando abaixo.

**Importação**
~~~html
<script type="text/javascript" src="input-validator.js"></script>
~~~

**Inicialização**
~~~html
<script type="text/javascript">
  validator.initiate()
</script>
~~~

## Funcionamento

Crie um formulário e adicione a classe **input-validator**. Em seguida, adicione o atributo **validator-rules** utilizando algum dos seguintes métodos de validação:
  * required: campo obrigatório;
  * email: campo deve ter o formato de um e-mail válido;
  * max=8: campo com um valor máximo de caracteres (ex. 8);
  * min=4 : campo com um valor mínimo de caracteres (ex. 4);
  * confirm: compara o valor informado com o input cujo name seja **password**.

Exemplo abaixo:

~~~html
<form action="/register" class="input-validator">
  <div class="input-group">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" validator-rules="required|min=3">
  </div>

  <div class="input-group">
    <label for="email">E-mail:</label>
    <input type="text" name="email" id="email" validator-rules="required|email">
  </div>

  <div class="input-group">
    <label for="password">Password:</label>
    <input type="password" name="password" id="password" validator-rules="required|max=8">
  </div>

  <div class="input-group">
    <label for="confirm-password">Confirmar senha:</label>
    <input type="password" name="confirm-password" id="confirm-password" validator-rules="required|confirm">
  </div>

  <div class="input-group">
    <input type="submit" value="Register">
  </div>
</form>
~~~

## Gerando arquivo input-validator.js

* Primeiramente, faça o download/clone desse repositório para o seu computador;
* Instale as dependências rodando o comando **yarn** no terminal;
* Com as dependências instaladas, rode o comando **yarn build** no terminal.
* Na pasta dist será gerado o novo arquivo `input-validator.js` minificado. Adicione o arquivo a página html ao qual deseja usar a validação.

## Licença

MIT © [gustakoch](https://github.com/gustakoch)
