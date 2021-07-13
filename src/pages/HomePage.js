import { useState, useEffect } from 'react';
import { ContainerHome } from '../style/Styled.HomePage';
import { Header } from '../components/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function HomePage() {
  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
  };

  const [mudaScreen, setMudaScreen] = useState(
    window.innerWidth > 900 ? true : false
  );

  useEffect(() => {
    function posicaoScreen() {
      if (window.innerWidth > 900) {
        setMudaScreen(true);
      } else {
        setMudaScreen(false);
      }
    }

    window.addEventListener('resize', posicaoScreen);
  }, []);

  return (
    <>
      <Header mudaScreen />
      <ContainerHome widthScreen={`${mudaScreen ? '900px' : '100%'}`}>
        <div style={{ maxWidth: '90%', margin: 'auto' }}>
          <h2>Aventura</h2>
          <Slider {...settings}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </Slider>
        </div>
      </ContainerHome>
    </>
  );
}
