import styled from 'styled-components';
export const ContainerHome = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: ${props => props.widthScreen};
  margin-top: 20px;
`;

export const ContainerMoreBooks = styled.div`
  color: '#595A5C';
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: ${props => props.widthScreen};
  padding: 30px 10px;
`;
