import { Icon } from '@material-ui/core';
import {
  ContainerHeader,
  ContentHeader,
  InputText,
} from '../style/Styled.Header';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export function Header({ mudaScreen }) {
  const history = useHistory();
  const [mudaSearch, setMudaSearch] = useState(false);
  const [search, setSearch] = useState('');

  function SearchTeste() {
    if (mudaSearch === false) {
      setMudaSearch(!mudaSearch);
    } else {
      history.push('/morebooks/' + search);
    }
  }

  return (
    <ContainerHeader>
      <ContentHeader widthScreen={`${mudaScreen ? '900px' : '100%'}`}>
        {mudaSearch ? (
          <InputText
            autoFocus
            placeholder="Buscar por livros ou autores"
            type="text"
            onChange={e => setSearch(e.target.value)}
          />
        ) : (
          <Link to={'/home'}>
            <img alt="logo google livros" src="/img/logo.png" />
          </Link>
        )}

        <Icon onClick={SearchTeste} color="action" fontSize="large">
          search
        </Icon>
      </ContentHeader>
    </ContainerHeader>
  );
}
