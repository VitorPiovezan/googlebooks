# Frontender Test

* Autor: Vitor Hugo do Nascimento Piovezan
* Desafio: 

  Usando a [API de Busca de Livros do Google](https://developers.google.com/books/docs/v1/getting_started), o candidato deve criar uma aplicação web responsiva em react baseada nesse layout https://marvelapp.com/5i92h5d.

  As prateleiras da tela inicial são resultados de busca pelo título da prateleira, por exemplo, tomando o layout proposto teríamos 4 chamadas diferentes para a API.

  Desconsiderar a parte de Filtros do layout.
  
  API: https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=10

  Onde:

  q - Termo a ser buscado. Ex: Aventura
  
  startIndex - A posição de partida dentro da lista, default é 0.
  
  maxResults - O número máximo de resultados. O default é 10, e o valor máximo permitido é 40.
_________________________________________________________________________________

O Projeto foi desenvolvido com a biblioteca React.JS juntamente com algumas dependencias, sendo elas:

* [styled-components](https://styled-components.com/docs)
* [react-slick](https://react-slick.neostack.com/docs/get-started)
* [axios](https://www.npmjs.com/package/axios)
* [material-ui](https://material-ui.com/pt/getting-started/installation/)
* [react-router-dom](https://reactrouter.com/web/guides/quick-start)

Os requisitos minimos cumpridos para o projeto foram:

- Documentação do repositório git
- [Histórico de commits](https://github.com/VitorPiovezan/googlebooks/commits/master)
- React
- Boas práticas
- Reproduzir fielmente o layout
- Estilização baseada em CSS-IN-JS, exemplo: Styled Component

Os requisitos desejáveis cumpridos foram:

- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- Paginação dos resultados

___________________________________________________________________________

# Iniciando o Projeto

Clone este repositório em sua máquina utilizando:

$ *git clone https://github.com/VitorPiovezan/googlebooks.git*

Instale as dependencias do projeto com o seguinte comando:

$ *yarn install*
ou
$ *yarn*

Após a instalação das dependenciais inicie o projeto com:

$ *yarn start*

__________________________________________________

# Api Utilizada

A API utilizada foi disponibilizada pelo Google, tendo a seguinte documentação https://developers.google.com/books/docs/v1/getting_started

caminho usado para comunicação dentro da aplicação: https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=10

______________________________________________

# Construção da aplicação

Diretórios

*Router.js (Componente de criação de rotas utilizando react-router-dom)*

*index.js (index que faz a ligação entre o root e a aplicação)*

*index.css (estilo padrão que procede na aplicação)*

* Public

  *index.js (Arquivo root onde é a base principal do projeto)*
  
* src

  * pages
  
      *HomePage.js (Pagina home onde engloga todos components referentes a página inicial)*
    
      *MoreBooks.js (Página de busca e de paginação dos livros)*
    
  * components
  
      *Header.js (Componente cabeçalho que é composto por logo e botão de pesquisar)*
    
      *Shelf.js (Componente que faz a mostra do carousel dos livros na tela home*
    
  * style
  
      *Styled.HomePage.js (Estilos feitos em styled-components referente a página HomePage)*
    
      *Styled.Shelf.js (Estilos feitos em styled-components referente ao componente Shelf)*
    
      *Styled.Header.js (Estilos feitos em styled-components referente ao componente Header)*
    
  * api
  
      *api.js (Rota principal de conexão com a API)*

_______________________________________________
