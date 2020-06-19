# Documentação

## Execução do projeto

Para o correto funcionamento da aplicação, na raiz do projeto devemos executar o seguinte comando:

```sh
npm install
```

```sh
npm start
```

Esses comandos irão instalar as dependências e rodar o programa.

## Detalhes do método

Para a correta execução do método, podemos utilizar 2 formas distintas, sendo elas:

### Playground

Ao acessar a url `localhost:8080/playground`, iremos ser levados para um playground na qual podemos testar 
a execução da query, bem como ter acesso a uma documentação da mesma.

Exemplo da query:

```graphql
query {
  RequestSmartMEI(url:"https://www.smartmei.com.br") {
    dataConsulta
    descricaoTarifa
    valorReal
    valorDolar
    valorEuro
  }
}
```

### Endpoint

Podemos executar a endpoint `localhost:8000/graphql` utilizando o método **POST** para testar a query.

Exemplo da query:

```graphql
query {
  RequestSmartMEI(url:"https://www.smartmei.com.br") {
    dataConsulta
    descricaoTarifa
    valorReal
    valorDolar
    valorEuro
  }
}
```