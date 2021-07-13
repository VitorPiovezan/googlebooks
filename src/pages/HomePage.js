import { useState, useEffect } from 'react';
import { ContainerHome } from '../style/Styled.HomePage';
import { Header } from '../components/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Shelf from '../components/Shelf';

export default function HomePage() {
  const [mudaScreen, setMudaScreen] = useState(
    window.innerWidth > 900 ? true : false
  );

  useEffect(() => {
    function posicaoScreen() {
      // função para indentificar tamanho da tela
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
        <Shelf />
      </ContainerHome>
    </>
  );
}
