import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import MainPage from '../MainPage/MainPage';

import './App.css';

const App = () => (
  <div className="app">
    <div className="wrapper">
      <Header />
      <MainPage />
      <Footer />
    </div>
  </div>
);

export default App;
