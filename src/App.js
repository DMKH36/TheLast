import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';

import Layout from './layout/Layout';

import home from "./halaman/home";
import toko from "./halaman/toko";
import kelompok from "./halaman/kelompok";
import hp from "./halaman/hp";
import laptop from "./halaman/laptop";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Container>
        <Switch>
          <Route path="/home" exact component={home} />
          <Route path="/toko" exact component={toko} />
          <Route path="/kelompok" exact component={kelompok} />
          <Route path="/hp" exact component={hp} />
          <Route path="/laptop" exact component={laptop} />
        </Switch>
      </Container>
    </Layout>
    </BrowserRouter>
  );
}

export default App;