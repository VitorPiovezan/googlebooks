import { Icon } from '@material-ui/core';
import {
  ContainerHeader,
  ContentHeader,
  InputText,
} from '../style/Styled.Header';
import { useState } from 'react';

export function Header({ mudaScreen }) {
  const [mudaSearch, setMudaSearch] = useState(false);

  return (
    <ContainerHeader>
      <ContentHeader widthScreen={`${mudaScreen ? '900px' : '100%'}`}>
        {mudaSearch ? (
          <InputText placeholder="Buscar por livros ou autores" type="text" />
        ) : (
          <img alt="logo google livros" src="/img/logo.png" />
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
