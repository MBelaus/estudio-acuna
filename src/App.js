import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/layout.js';
import Home from './home.js';
import Contacto from './contacto.js';
import Blog from './components/blog.js';
import Abogados from './abogados.js';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* <Route exact path='' component={} /> */}
          <Route exact path="/abogados" component={Abogados} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
