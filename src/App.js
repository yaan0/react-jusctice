import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { RequireAuth } from './hoc/RequireAuth';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import ProductCardPage from './Layouts/ProductCardPage';
import BasketPage from './Layouts/BasketPage';

import './App.css';
import SignUp from './components/Header/SignUp/SignUp';
import SignIn from './components/Header/SignIn/SignIn';

const App = () => {
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);
  const [signInIsOpen, setSignInIsOpen] = useState(false);

  return (
    <div className="app">
      <div className="wrapper">
        <Header
          setSignUpIsOpen={setSignUpIsOpen}
          setSignInIsOpen={setSignInIsOpen}
        />
        <Routes>
          <Route
            path="/"
            element={(
              <MainPage />
)}
          />
          <Route path="product/:id" element={<ProductCardPage />} />
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

      <SignUp signUpIsOpen={signUpIsOpen} setSignUpIsOpen={setSignUpIsOpen} setSignInIsOpen={setSignInIsOpen} />
      <SignIn signInIsOpen={signInIsOpen} setSignInIsOpen={setSignInIsOpen} setSignUpIsOpen={setSignUpIsOpen} />

    </div>
  );
};

export default App;
