import { Icon } from '@material-ui/core';
import {
  ContainerHeader,
  ContentHeader,
  InputText,
} from '../style/Styled.Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header({ mudaScreen }) {
  const [mudaSearch, setMudaSearch] = useState(false);

  return (
    <ContainerHeader>
      <ContentHeader widthScreen={`${mudaScreen ? '900px' : '100%'}`}>
        {mudaSearch ? (
          <InputText placeholder="Buscar por livros ou autores" type="text" />
        ) : (
          <Link to={'/home'}>
            <img alt="logo google livros" src="/img/logo.png" />
          </Link>
        )}

        <Icon
          onClick={e => setMudaSearch(!mudaSearch)}
          color="action"
          fontSize="large"
        >
          search
        </Icon>
      </ContentHeader>
    </ContainerHeader>
  );
}
