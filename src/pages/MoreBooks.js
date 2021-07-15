import { useState, useEffect } from 'react';
import api from '../api/api';
import { ContainerMoreBooks } from '../style/Styled.HomePage';
import { Header } from '../components/Header';
import { TitleBook, TumbBooks } from '../style/Styled.Shelf';
import { useParams } from 'react-router-dom';

export default function HomePage({ mudaScreen }) {
  let id = useParams();
  const [shelfArray, setShelfArray] = useState([]);
  const [moreBooks, setMoreBooks] = useState(0);
  const [lessBooks, setLessBooks] = useState(false);

  useEffect(() => {
    async function teste() {
      let res = await api.get(
        `volumes?q=${id.id}&startIndex=${moreBooks}&maxResults=18`
      );
      console.log(id.id);
      setShelfArray(res.data.items);
    }
    if (moreBooks > 1) {
      setLessBooks(true);
    } else {
      setLessBooks(false);
    }
    teste();
  }, [moreBooks]);

  function lessBooksscroll() {
    setMoreBooks(moreBooks - 18);
    window.scrollTo(0, 0);
  }

  function moreBooksscroll() {
    setMoreBooks(moreBooks + 18);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header mudaScreen />
      <ContainerMoreBooks widthScreen={`${mudaScreen ? '900px' : '100%'}`}>
        {shelfArray.map(item => {
          if (item.volumeInfo.imageLinks === undefined) {
            return (
              <div
                style={{
                  width: `${mudaScreen ? '150px' : '120px'}`,
                  height: '250px',
                }}
                key={item.id}
              >
                <TumbBooks
                  widthScreen={`${mudaScreen ? '125px' : '110px'}`}
                  heightScreen={`${mudaScreen ? '175px' : '155px'}`}
                  borderradius={'0 15px 15px 0'}
                  alt={'default_book'}
                  src={'/img/default_book.png'}
                />
                <TitleBook>{item.volumeInfo.title}</TitleBook>
              </div>
            );
          } else {
            return (
              <div
                style={{
                  width: `${mudaScreen ? '150px' : '120px'}`,
                  height: '250px',
                }}
                key={item.id}
              >
                <TumbBooks
                  widthScreen={`${mudaScreen ? '125px' : '110px'}`}
                  heightScreen={`${mudaScreen ? '175px' : '155px'}`}
                  borderradius={'0 15px 15px 0'}
                  alt={item.volumeInfo.imageLinks.thumbnail}
                  src={item.volumeInfo.imageLinks.thumbnail}
                />
                <TitleBook>{item.volumeInfo.title}</TitleBook>
              </div>
            );
          }
        })}

        {lessBooks ? (
          <div
            style={{ padding: '30px', margin: 'auto', cursor: 'pointer' }}
            onClick={lessBooksscroll}
          >
            Voltar
          </div>
        ) : (
          ''
        )}
        <div
          style={{ padding: '30px', margin: 'auto', cursor: 'pointer' }}
          onClick={moreBooksscroll}
        >
          Avançar
        </div>
      </ContainerMoreBooks>
    </>
  );
}
