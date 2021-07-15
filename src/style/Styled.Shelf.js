import styled from 'styled-components';
export const TitleBook = styled.p`
  font-size: 0.9rem;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 90%; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const TumbBooks = styled.img`
  width: ${props => props.widthScreen};
  border-radius: ${props => props.borderradius};
  border: solid 1px #dedede;
  height: ${props => props.heightScreen};
`;

export const BottomMoreLess = styled.div`
  padding: 10px 20px;
  margin: auto;
  cursor: pointer;
  background-color: #56c7ff;
  color: #fff;
  border-radius: 0 10px 0 10px;
`;

export const ShelfItem = styled.div`
  width: ${props => props.widthScreen};
  height: 250px;
  color: #595a5c;
`;

export const ContainerShelf = styled.div`
  background-color: ${props => props.bgcolor};
  max-width: 100%;
  padding: 0 0 25px 25px;
`;

export const SliderContainer = styled.div`
  color: ${props => props.txcolor};
  width: 100%;
  overflow: hidden;
  margin: auto;
`;
