import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoreBooks from './pages/MoreBooks';

export default function App() {
  const [mudaScreen, setMudaScreen] = useState(
    window.innerWidth > 700 ? true : false
  );

  useEffect(() => {
    function posicaoScreen() {
      // função para indentificar tamanho da tela
      if (window.innerWidth > 700) {
        setMudaScreen(true);
      } else {
        setMudaScreen(false);
      }
    }
    window.addEventListener('resize', posicaoScreen);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/morebooks/:id">
          <MoreBooks mudaScreen={mudaScreen} />
        </Route>
        <Route path="/home">
          <HomePage mudaScreen={mudaScreen} />
        </Route>
        <Redirect to={{ pathname: '/home' }} />
      </Switch>
    </Router>
  );
}
