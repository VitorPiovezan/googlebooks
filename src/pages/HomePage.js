import { useState, useEffect } from 'react';
import { ContainerHome } from '../style/Styled.HomePage';
import { Header } from '../components/Header';

export default function HomePage() {
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
    <ContainerHome widthScreen={`${mudaScreen ? '900px' : '100%'}`}>
      <Header />
    </ContainerHome>
  );
}
