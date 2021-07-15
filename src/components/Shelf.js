import Slider from 'react-slick';
import api from '../api/api';
import { useState, useEffect } from 'react';
import { TitleBook, TumbBooks, TumbBooksMore } from '../style/Styled.Shelf';
import { Link } from 'react-router-dom';

export default function Shelf({
  mudaScreen,
  query,
  colorBackground,
  colorText,
  colorTitle,
  borderradius,
}) {
  const settings = {
    //configurações da biblioteca Slick para o uso de carousel
    infinite: false,
    speed: 700,
    slidesToShow: mudaScreen ? 4 : 3,
    slidesToScroll: mudaScreen ? 4 : 3,
    focusOnSelect: true,
  };

  const [shelfArray, setShelfArray] = useState([]);

  useEffect(() => {
    async function teste() {
      let res = await api.get(`volumes?q=${query}&startIndex=0&maxResults=10`);
      console.log(res.data);
      setShelfArray(res.data.items);
    }
    teste();
  }, []);

  return (
    <div
      style={{
        maxWidth: '100%',
        padding: '0 0 0 25px',
        backgroundColor: `${colorBackground}`,
      }}
    >
      <h2 style={{ color: `${colorTitle}` }}>{query}</h2>
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          margin: 'auto',
          color: `${colorText}`,
        }}
      >
        <Slider {...settings}>
          {shelfArray.map(item => {
            if (item.volumeInfo.imageLinks === undefined) {
              return (
                <div key={item.id}>
                  <TumbBooks
                    widthScreen={`${mudaScreen ? '125px' : '110px'}`}
                    heightScreen={`${mudaScreen ? '175px' : '155px'}`}
                    borderradius={borderradius}
                    alt={'default_book'}
                    src={'/img/default_book.png'}
                  />
                  <TitleBook>{item.volumeInfo.title}</TitleBook>
                </div>
              );
            } else {
              return (
                <div key={item.id}>
                  <TumbBooks
                    widthScreen={`${mudaScreen ? '125px' : '110px'}`}
                    heightScreen={`${mudaScreen ? '175px' : '155px'}`}
                    borderradius={borderradius}
                    alt={item.volumeInfo.imageLinks.thumbnail}
                    src={item.volumeInfo.imageLinks.thumbnail}
                  />
                  <TitleBook>{item.volumeInfo.title}</TitleBook>
                </div>
              );
            }
          })}
          <div>
            <Link
              to={'/morebooks/' + query}
              style={{
                textDecoration: 'none',
                color: '#595A5C',
              }}
            >
              <TumbBooksMore
                widthScreen={`${mudaScreen ? '125px' : '110px'}`}
                heightScreen={`${mudaScreen ? '175px' : '155px'}`}
              ></TumbBooksMore>
              <TitleBook>Ver Mais</TitleBook>
            </Link>
          </div>
          <div></div>
        </Slider>
      </div>
    </div>
  );
}
