import { useState } from 'react';

import SignIn from '../SignIn/SignIn';

import addButton from '../../assets/img/svg/addButton.svg';
import addedCard from '../../assets/img/svg/addedCard.svg';
import spinner from '../../assets/img/svg/spinner.svg';
import './ProductCard.css';

const ProductCard = ({
  id, title, description, text, price, setSignInIsOpen, count, setCount,
}) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth] = useState(Boolean(localStorage.getItem('user')));
  const clickHandler = () => {
    if (isAuth) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } else {
      setSignInIsOpen(true);
    }
  };

  const incrementProduct = () => {
    setTotalPrice(totalPrice + price);
    setCount(count + 1);
  };

  const decrementProduct = () => {
    setTotalPrice(totalPrice - price);
    setCount(count - 1);
  };

  const state = {
    img: addedCard,
    text: 'Added to card',
  };

  return (
    <div className="productCard-main">
      <div className="container container__main">
        <div className="productCard-body">
          <div className="productCard-img">
            <img src="/images/iceProductCard.png" alt="ice" />
          </div>
          <div className="productCard-content">
            <div className="content-cupon">{id}</div>
            <h1 className="content-title">{title}</h1>
            <h4 className="content-description">{description}</h4>
            <div className="content-text">
              <p className="content-item">
                {text}
              </p>
            </div>
            <div className="content-amount">
              <p className="amount-price">
                $
                {totalPrice}
                .00
              </p>
              <div className="amount-button">
                <button className="amount-button-item dec" onClick={decrementProduct}>-</button>
                {count}
                <button className="amount-button-item inc" onClick={incrementProduct}>+</button>
              </div>
            </div>
            <div className="wrapper__content-button">
              <button className="content-button" onClick={clickHandler}>
                { isLoading ? (<img src={spinner} className="spinner" alt="spinner" />) : (
                  <>
                    <img src={addButton} alt="add" />
                    Add to cart
                  </>
                )}
              </button>
              {isAuth ? (
                <div className="content-img">
                  <img src={state.img} alt="addedCard" />
                  <p>{state.text}</p>
                </div>
              ) : <SignIn />}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
