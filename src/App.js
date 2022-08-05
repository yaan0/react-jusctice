import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import ProductCardPage from './Layouts/ProductCardPage';
import BasketPage from './Layouts/BasketPage';

import './App.css';

const App = () => (
  <div className="app">
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="product/:id" element={<ProductCardPage />} />
        <Route path="basket" element={<BasketPage />} />
      </Routes>
      <Footer />
    </div>

  </div>
);

export default App;
