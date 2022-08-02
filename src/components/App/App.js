import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import MainPage from '../MainPage/MainPage';
import ProductCard from '../Card/ProductCard/ProductCard';

import './App.css';

const App = () => (
  <div className="app">
    <div className="wrapper">
      <Header />
      {/* <MainPage /> */}
      <ProductCard />
      <Footer />
    </div>
  </div>
);

export default App;
