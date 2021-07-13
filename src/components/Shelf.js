import Slider from 'react-slick';
import api from '../api/api';
import { useState, useEffect } from 'react';

export default function Shelf() {
  const settings = {
    //configurações da biblioteca Slick para o uso de carousel
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
  };

  const [shelfArray, setShelfArray] = useState([]);

  useEffect(() => {
    async function teste() {
      let res = await api.get('volumes?q=aventura&startIndex=0&maxResults=10');
      console.log(res.data);
      setShelfArray(res.data.items);
    }
    teste();
  }, []);

  return (
    <div style={{ maxWidth: '90%', margin: 'auto' }}>
      <h2>Aventura</h2>
      <Slider {...settings}>
        {shelfArray.map(item => {
          if (item.volumeInfo.imageLinks === undefined) {
            return <div>Livro sem Tumb</div>;
          } else {
            return (
              <div key={item.id}>
                <img
                  alt={item.volumeInfo.imageLinks.thumbnail}
                  src={item.volumeInfo.imageLinks.thumbnail}
                />
                <p>{item.volumeInfo.title}</p>{' '}
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
}
