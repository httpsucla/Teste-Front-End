# Teste Front-End

## Setup do ambiente
- Node ```v16.14.0```
- Npm ```9.8.0```
- React ```18.2.0```


## Como rodar o projeto

- Clone o projeto ```git clone https://github.com/httpsucla/Teste-Front-End.git```
- Entre dentro da pasta "electrolux"
- Rode o comando ```npm install```
- Rodar o comando ```npm start```

## Estrutura do projeto

- ```./src/App.js``` é onde está a estrutura da página contruida
- ```./src/components``` é onde estão os componentes que fazem parte da estrutura da página
- ```./src/api``` corresponde ao local destinado onde é realizado a requisição da Api
- ```./src/images``` pasta destinada aos conteúdos de imagem usados no projeto

## Componentes do projeto
### Minicart
Componente de Minicart responsável por agrupar os produtos selecionados na vitrine
- Ao clicar no botão "Comprar" de qualquer produto, o item é adicionado ao minicart;
- O Minicart não abre automaticamente quando clicado no botão "Comprar", sendo necessário subir a tela e clicar no ícone de Carrinho;
- Não é possível editar a quantidade ou excluir os produtos inseridos, apenas adicionar novos itens.
### Search
Componente de busca que retorna o nome dos produtos presentes na loja
- O componente busca os itens da requisição e filtra apenas os nomes dos mesmos;
- A busca se da pelo início do nome, ou seja, caso o conjunto letras pesquisados existam no meio do nome de um produto, o componente **não** retornará esse item.
### Product
Componete que retorna os produtos presentes na requisição da api
- Componente busca os itens dentro da Api e os exibe em formato de lista;
- Os parâmetros exibidos são: ```product.title```, ```product.image``` e ```product.price```.

### BuyButton
Botão de compra indivídual de cada produto
- Componente responsável por chamar a função que insere o produto selecionado dentro do Minicart.

## Api
Utilização do *Axios* para a chamada da requisição assíncrona.
