import styled from 'styled-components';
export const TitleBook = styled.p`
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

export const TumbBooksMore = styled.div`
  background-color: '#dffaff';
  width: ${props => props.widthScreen};
  border-radius: 0 15px 15px 0;
  border: solid 1px #dedede;
  height: ${props => props.heightScreen};
`;
