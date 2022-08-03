import './ProductCard.css';
import addButton from '../../../resourses/img/svg/addButton.svg';
import addedCard from '../../../resourses/img/svg/addedCard.svg';

const ProductCard = () => (
  <div className="productCard-main">
    <div className="container container__main">
      <div className="productCard-nav">
        <a className="product-link link__nav-page" href="/">
          Main page /
        </a>
        <a className="product-link" href="/">
          Product card
        </a>
      </div>
      <div className="productCard-body">
        <div className="productCard-img">
          <img src="/images/iceProductCard.png" alt="ice" />
        </div>
        <div className="productCard-content">
          <div className="content-cupon">SKU: BXD100BLK</div>
          <h1 className="content-title">Snow Tender Ice Cream</h1>
          <h4 className="content-description">Description:</h4>
          <div className="content-text">
            <p className="content-item chocolate-text">
              Chocolate ice cream has a bright, rich and refreshing taste of the
              ingredient it contains. Thanks to liquid nitrogen shock freezing
              (-193°C), which freezes all the ingredients instantly and gives the
              ice cream an amazingly delicate texture, all the flavors, vitamins
              and nutrients are preserved by 99%.
            </p>
            <p className="content-item">
              Blast freezing with liquid nitrogen (-193°C), which freezes all the
              ingredients instantly and gives the ice cream an amazingly delicate
              texture, preserving all the flavors, vitamins and nutrients by 99%.
            </p>
          </div>
          <div className="content-amount">
            <p className="amount-price">$243.00</p>
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
