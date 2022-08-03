import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import MainPage from '../MainPage/MainPage';
import ProductCardPage from './Layouts/ProductCardPage';

import './App.css';

const App = () => (
  <div className="app">
    <div className="wrapper">
      <Header />
      {/* <MainPage /> */}
      <ProductCardPage />
      <Footer />
    </div>
  </div>
);

export default App;
