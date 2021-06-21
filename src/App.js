import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/layout.js';
import Home from './components/home.js';
import Blog from './components/blog.js';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route exact path='' component={} />
      <Route exact path='' component={} /> */}
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
