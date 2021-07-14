import Slider from 'react-slick';
import api from '../api/api';
import { useState, useEffect } from 'react';
import {TitleBook} from '../style/Styled.Shelf'

export default function Shelf({mudaScreen, query}) {
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
    <div style={{ maxWidth: '100%', marginLeft: '25px' }}>
      <h2>{query}</h2>
      <div style={{ width: `${mudaScreen ? '95%': '120%'}`, margin: 'auto' }}>
      <Slider {...settings}>
        {shelfArray.map(item => {
          if (item.volumeInfo.imageLinks === undefined) {return (
            <div key={item.id}>
            <img
                  style={{width: `${mudaScreen ? '125px': '90px'}`, borderRadius: "0 15px 15px 0", border: "solid 1px #cecece", height: `${mudaScreen ? '175px': '135px'}`}}
                  alt={"default_book"}
                  src={"/img/default_book.png"}
                />
                <TitleBook>{item.volumeInfo.title}</TitleBook>
              </div>)
            return <div>Livro sem Tumb</div>;
          } else {
            return (
              <div key={item.id}>
                <img
                  style={{width:  `${mudaScreen ? '125px': '90px'}`, borderRadius: "0 15px 15px 0", border: "solid 1px #cecece", height:  `${mudaScreen ? '175px': '135px'}`}}
                  alt={item.volumeInfo.imageLinks.thumbnail}
                  src={item.volumeInfo.imageLinks.thumbnail}
                />
                <TitleBook>{item.volumeInfo.title}</TitleBook>
                
              </div>
            );
          }
        })}
        <div></div>
        <div></div>
      </Slider>
      </div>
    </div>
  );
}
