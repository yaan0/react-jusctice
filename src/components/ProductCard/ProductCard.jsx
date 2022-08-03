import './ProductCard.css';
import addButton from '../../resourses/img/svg/addButton.svg';
import addedCard from '../../resourses/img/svg/addedCard.svg';

const ProductCard = ({
  id, title, description, text, price,
}) => (
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
            <p className="amount-price">{price}</p>
            <div className="amount-button">
              <button className="amount-button-item dec">-</button>
              1
              <button className="amount-button-item inc">+</button>
            </div>
          </div>
          <div className="wrapper__content-button">
            <button className="content-button">
              <img src={addButton} alt="add" />
              Add to cart
            </button>
            <div className="content-img">
              <img src={addedCard} alt="addedCard" />
              <p>Added to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
