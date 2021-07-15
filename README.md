# Frontender Test

* Autor: Vitor Hugo do Nascimento Piovezan
* Desafio: 

  Usando a API de Busca de Livros do Google, o candidato deve criar uma aplicação web responsiva em react baseada nesse layout https://marvelapp.com/5i92h5d.

  As prateleiras da tela inicial são resultados de busca pelo título da prateleira, por exemplo, tomando o layout proposto teríamos 4 chamadas diferentes para a API.

  Desconsiderar a parte de Filtros do layout.
  
  API: https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=10

  Onde:

  q - Termo a ser buscado. Ex: Aventura
  
  startIndex - A posição de partida dentro da lista, default é 0.
  
  maxResults - O número máximo de resultados. O default é 10, e o valor máximo permitido é 40.
_________________________________________________________________________________

O Projeto foi desenvolvido com a biblioteca React.JS juntamente com algumas dependencias, sendo elas:

* styled-components
* react-slick
* axios
* material-ui
* react-router-dom

Os requisitos minimos cumpridos para o projeto foram:

- Documentação do repositório git
- Histórico de commits
- React
- Boas práticas
- Reproduzir fielmente o layout
- Estilização baseada em CSS-IN-JS, exemplo: Styled Component

Os requisitos desejáveis cumpridos foram:

- React Hooks
- Paginação dos resultados

In the project directory, you can run:

# Iniciando o Projeto

Clone este repositório em sua máquina utilizando:

### git clone https://github.com/VitorPiovezan/googlebooks.git

Instale as dependencias do projeto com o seguinte comando:

### yarn install
ou
### yarn

Após a instalação das dependenciais inicie o projeto com:

### yarn start
