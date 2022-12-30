import './App.css';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import SinglePage from './components/singleItemPage/SinglePage';
import HomePage from './components/homePage/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' exact element={<HomePage />} />
          {/* <Route path='/home' exact element={<HomePage />} /> */}
          <Route path='/product/:productId' exact element={<SinglePage />} />
          {/* <Route path='/cart' exact element={<SinglePage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
