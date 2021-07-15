import { useState, useEffect } from 'react';
import { ContainerHome } from '../style/Styled.HomePage';
import { Header } from '../components/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Shelf from '../components/Shelf';

export default function HomePage({ mudaScreen }) {
  return (
    <>
      <Header mudaScreen />
      <ContainerHome widthScreen={`${mudaScreen ? '900px' : '100%'}`}>
        <Shelf
          mudaScreen={mudaScreen}
          query={'Aventura'}
          colorBackground={'#fff'}
          colorText={'#595A5C'}
          colorTitle={'#2D2D2E'}
          borderradius={'0 15px 15px 0'}
        />
        <Shelf
          mudaScreen={mudaScreen}
          query={'Infantil'}
          colorBackground={'#fff'}
          colorText={'#595A5C'}
          colorTitle={'#2D2D2E'}
          borderradius={'0 15px 15px 0'}
        />
        <Shelf
          mudaScreen={mudaScreen}
          query={'Destaques'}
          colorBackground={'#47B7ED'}
          colorText={'#fff'}
          colorTitle={'#fff'}
          borderradius={'0 15px 0 15px'}
        />
        <Shelf
          mudaScreen={mudaScreen}
          query={'Ação'}
          colorBackground={'#fff'}
          colorText={'#595A5C'}
          colorTitle={'#2D2D2E'}
          borderradius={'0 15px 15px 0'}
        />
      </ContainerHome>
    </>
  );
}
