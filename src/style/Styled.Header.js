import styled from 'styled-components';
export const ContentHeader = styled.div`
  max-width: ${props => props.widthScreen};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  margin: auto;
`;
export const ContainerHeader = styled.div`
  width: 100%;
  background-color: #effaff;
`;

export const InputText = styled.input`
  width: 80%;
  padding: 5px;
  background: none;
  border: none;
  outline: none;
`;
