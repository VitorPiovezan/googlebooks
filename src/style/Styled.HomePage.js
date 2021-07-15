import styled from 'styled-components';
export const ContainerHome = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: ${props => props.widthScreen}; ;
`;

export const ContainerMoreBooks = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: ${props => props.widthScreen};
  padding: 30px 10px;
`;
