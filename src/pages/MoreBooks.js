import { useState, useEffect } from 'react';
import api from '../api/api';
import { ContainerMoreBooks } from '../style/Styled.HomePage';
import { Header } from '../components/Header';
import { TitleBook, TumbBooks } from '../style/Styled.Shelf';
import { useParams } from 'react-router-dom';

export default function HomePage({ mudaScreen }) {
  let id = useParams();
  const [shelfArray, setShelfArray] = useState([]);

  useEffect(() => {
    async function teste() {
      let res = await api.get(`volumes?q=${id.id}&startIndex=0&maxResults=18`);
      console.log(id.id);
      setShelfArray(res.data.items);
    }
    teste();
  }, []);

  return (
    <>
      <Header mudaScreen />
      <ContainerMoreBooks widthScreen={`${mudaScreen ? '900px' : '100%'}`}>
        {shelfArray.map(item => {
          if (item.volumeInfo.imageLinks === undefined) {
            return (
              <div style={{ width: '120px', height: '250px' }} key={item.id}>
                <TumbBooks
                  widthScreen={`${mudaScreen ? '125px' : '110px'}`}
                  heightScreen={`${mudaScreen ? '175px' : '155px'}`}
                  alt={'default_book'}
                  src={'/img/default_book.png'}
                />
                <TitleBook>{item.volumeInfo.title}</TitleBook>
              </div>
            );
          } else {
            return (
              <div style={{ width: '120px', height: '250px' }} key={item.id}>
                <TumbBooks
                  widthScreen={`${mudaScreen ? '125px' : '110px'}`}
                  heightScreen={`${mudaScreen ? '175px' : '155px'}`}
                  alt={item.volumeInfo.imageLinks.thumbnail}
                  src={item.volumeInfo.imageLinks.thumbnail}
                />
                <TitleBook>{item.volumeInfo.title}</TitleBook>
              </div>
            );
          }
        })}
      </ContainerMoreBooks>
    </>
  );
}
