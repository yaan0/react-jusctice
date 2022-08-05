import './ProductCard.css';
import { useState } from 'react';
import addButton from '../../assets/img/svg/addButton.svg';
import addedCard from '../../assets/img/svg/addedCard.svg';
import spinner from '../../assets/img/svg/spinner.svg';

const ProductCard = ({
  id, title, description, text, price,
}) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const state = {
    img: addedCard,
    text: 'Added to card',
  };

  const clickHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShow(true);
    }, 1500);
  };

  const incrementProduct = () => {
    setTotalPrice(totalPrice + price);
    setCount(count + 1);
  };

  const decrementProduct = () => {
    setTotalPrice(totalPrice - price);
    setCount(count - 1);
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
              {show ? (
                <div className="content-img">
                  <img src={state.img} alt="addedCard" />
                  <p>{state.text}</p>
                </div>
              ) : null}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
