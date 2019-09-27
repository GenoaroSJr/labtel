import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Contato from "./pages/contato";
import Fotos from "./pages/fotos";
import Equipe from "./pages/equipe";
import Pesquisa from "./pages/pesquisa";
import Teses from "./pages/teses";
import Publicacoes from "./pages/publicacoes";
import Workshop from "./pages/workshop";
import ScrollToTop from "./components/scrollToTop";

class App extends React.Component {
  state = {
    en: false
  };

  componentDidMount() {
    var opt = localStorage.getItem("en") || false;

    if (opt === "true") {
      document.title = "Research Group - Gepecom";
      this.setState({ en: true });
    } else {
      document.title = "Grupo de Pesquisa - Gepecom";
      this.setState({ en: false });
    }
  }

  lang = () => {
    if (this.state.en) {
      this.setState({ en: false });
      localStorage.setItem("en", false);
      document.title = "Grupo de Pesquisa - Gepecom";
    } else {
      this.setState({ en: true });
      localStorage.setItem("en", true);
      document.title = "Research Group - Gepecom";
    }
  };

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Nav func={this.lang} en={this.state.en} />

            <Route exact path="/" render={() => <Home en={this.state.en} />} />

            <Route
              path="/equipe"
              render={() => <Equipe en={this.state.en} />}
            />
            <Route
              path="/pesquisa"
              render={() => <Pesquisa en={this.state.en} />}
            />
            <Route
              path="/publicacoes"
              render={() => <Publicacoes en={this.state.en} />}
            />
            <Route path="/teses" render={() => <Teses en={this.state.en} />} />
            <Route path="/fotos" render={() => <Fotos en={this.state.en} />} />
            <Route
              path="/contato"
              render={() => <Contato en={this.state.en} />}
            />
            <Route
              path="/workshop"
              render={() => <Workshop en={this.state.en} />}
            />
            <footer style={{ marginTop: 20, textAlign: "center" }}>
              <p>
                <img
                  src={require("./imagens/imagem_unifeilogo.jpg")}
                  style={{ height: "50px", marginRight: 10 }}
                  alt="logo"
                />
                {this.state.en
                  ? "Federal University of Itajuba"
                  : "Universidade Federal de Itajubá"}
              </p>
            </footer>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
