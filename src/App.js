import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/home';
import Contato from './pages/contato';
import Fotos from './pages/fotos';
import Equipe from './pages/equipe';
import Pesquisa from './pages/pesquisa';
import Teses from './pages/teses';
import Publicacoes from './pages/publicacoes';
import ScrollToTop from './components/scrollToTop';
import Eventos from './pages/eventos';

const App = () => {
  const [en, setEn] = useState(false);

  //recuperar a linguagem da sessão anterior
  useEffect(() => {
    const opt = localStorage.getItem('en') || false;

    if (opt === 'true') {
      document.title = 'Research Group - Gepecom';
      setEn(true);
    } else {
      document.title = 'Grupo de Pesquisa - Gepecom';
      setEn(false);
    }
  }, []);

  //função para mudar a linguagem quando a bandeira é clicada
  const lang = () => {
    if (en) {
      setEn(false);
      localStorage.setItem('en', false);
      document.title = 'Grupo de Pesquisa - Gepecom';
    } else {
      setEn(true);
      localStorage.setItem('en', true);
      document.title = 'Research Group - Gepecom';
    }
  };

  return (
    <Router>
      <ScrollToTop>
        <div>
          <Nav func={lang} en={en} />

          <Route exact path='/' render={() => <Home en={en} />} />

          <Route path='/equipe' render={() => <Equipe en={en} />} />
          <Route path='/pesquisa' render={() => <Pesquisa en={en} />} />
          <Route path='/publicacoes' render={() => <Publicacoes en={en} />} />
          <Route path='/teses' render={() => <Teses en={en} />} />
          <Route path='/fotos' render={() => <Fotos en={en} />} />
          <Route path='/eventos' render={() => <Eventos en={en} />} />
          <Route path='/contato' render={() => <Contato en={en} />} />
          <footer style={{ marginTop: 20, textAlign: 'center' }}>
            <p>
              <img
                src='/imagens/imagem_unifeilogo.jpg'
                style={{ height: '50px', marginRight: 10 }}
                alt='logo'
              />
              {en
                ? 'Federal University of Itajuba'
                : 'Universidade Federal de Itajubá'}
            </p>
          </footer>
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;
