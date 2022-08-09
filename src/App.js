import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { RequireAuth } from './hoc/RequireAuth';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './Layouts/MainPage/MainPage';
import ProductCardPage from './Layouts/ProductCardPage';
import BasketPage from './Layouts/BasketPage';

import './App.css';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

const App = () => {
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);
  const [signInIsOpen, setSignInIsOpen] = useState(false);
  const [count, setCount] = useState(false);

  return (
    <div className="app">
      <div className="wrapper">
        <Header
          setSignUpIsOpen={setSignUpIsOpen}
          setSignInIsOpen={setSignInIsOpen}
          count={count}
        />
        <SignUp signUpIsOpen={signUpIsOpen} setSignUpIsOpen={setSignUpIsOpen} setSignInIsOpen={setSignInIsOpen} />
        <SignIn signInIsOpen={signInIsOpen} setSignInIsOpen={setSignInIsOpen} setSignUpIsOpen={setSignUpIsOpen} />
        <Routes>
          <Route
            path="/"
            element={(
              <MainPage />
)}
          />
          <Route
            path="product/:id"
            element={(
              <ProductCardPage
                count={count}
                setCount={setCount}
                setSignInIsOpen={setSignInIsOpen}
              />
)}
          />
          <Route
            path="basket"
            element={(
              <RequireAuth setSignInIsOpen={setSignInIsOpen}>
                <BasketPage />
              </RequireAuth>
            )}
          />
        </Routes>
        <Footer />
      </div>

    </div>
  );
};

export default App;
