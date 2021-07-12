import { Icon } from '@material-ui/core';
import { ContainerHeader } from '../style/Styled.Header';

export function Header() {
  return (
    <ContainerHeader>
      <img alt="logo google livros" src="/img/logo.png" />
      <Icon color="action" fontSize="large">
        search
      </Icon>
    </ContainerHeader>
  );
}
