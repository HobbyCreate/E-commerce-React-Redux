import './App.css';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import SelectedItemPage from './components/selectedItemPage/SelectedItemPage';
import HomePage from './components/homePage/HomePage';
import Header from './components/Header/Header';
import CartPage from './components/CartPage/CartPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' exact element={<HomePage />} />
          <Route path='/product/:productId' exact element={<SelectedItemPage />} />
          <Route path='/cart' exact element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
