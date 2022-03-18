import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductListing from './components/ProductListing/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App__header">
          <Header/>
        </div>
        <Routes>
          <Route exact  path='/' element={<ProductListing/>} />
          <Route  exact path='/product/:productId' element={<ProductDetails/>}/>
          <Route>404 Not Found</Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
