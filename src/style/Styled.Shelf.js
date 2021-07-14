import styled from 'styled-components';
export const TitleBook = styled.p`
  text-transform:capitalize; 
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   max-width: 90%;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
`;