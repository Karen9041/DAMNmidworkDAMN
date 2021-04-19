import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Table from './pages/Table'
import Bed from './pages/Bed'
import Shoebox from './pages/Shoebox'
import Sofa from './pages/Sofa'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Table" component={Table} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/Bed" component={Bed} />
        <Route path="/Shoebox" component={Shoebox} />
        <Route path="/Sofa" component={Sofa} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
