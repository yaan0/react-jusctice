import './Basket.css';

import delateBasket from '../../resourses/img/svg/delateBasket.svg';

const Basket = () => (
  <div className="basket-main">
    <div className="container-basket__main container">
      <div className="basket__body">
        <div className="basket-title__body">
          <h1 className="body-item__title"> Basket </h1>
        </div>
        <div className="basket-content">
          <div className="basket-item__wrapper">
            <div className="basket-content__wrapper">
              <div className="content__basket-item">
                <div className="content__basket-img">
                  <img src="/images/iceCreamBasket.png" alt="ice" />
                </div>
                <div className="content__basket-title">
                  <h4 className="item__content-title"> Snow Tender Ice Cream</h4>
                  <p className="item__content-text"> 1 pcs.</p>
                </div>
              </div>
              <div className="content__basket-price">
                <p className="item__content-price">$243.00</p>
                <img src={delateBasket} alt="delate" />
              </div>

            </div>

            {/* /!* ////////////////////////////////////// *!/ */}

            <div className="basket-content__wrapper">
              <div className="content__basket-item">
                <div className="content__basket-img">
                  <img src="/images/iceCreamBasket.png" alt="ice" />
                </div>
                <div className="content__basket-title">
                  <h4 className="item__content-title"> Snow Tender Ice Cream</h4>
                  <p className="item__content-text"> 1 pcs.</p>
                </div>
              </div>
              <div className="content__basket-price">
                <p className="item__content-price">$243.00</p>
                <img src={delateBasket} alt="delate" />
              </div>

            </div>

            {/* /!* ////////////////////////////////////// *!/ */}

            <div className="basket-content__wrapper">
              <div className="content__basket-item">
                <div className="content__basket-img">
                  <img src="/images/iceCreamBasket.png" alt="ice" />
                </div>
                <div className="content__basket-title">
                  <h4 className="item__content-title"> Snow Tender Ice Cream</h4>
                  <p className="item__content-text"> 1 pcs.</p>
                </div>
              </div>
              <div className="content__basket-price">
                <p className="item__content-price">$243.00</p>
                <img src={delateBasket} alt="delate" />
              </div>
            </div>

          </div>

          <div className="wrapper__content-total">
            <div className="content-total__sub">
              <h4 className="total-item__title"> Sub total:</h4>
              <p className="total-item__price">$3,629.00</p>
            </div>

            <button className="item__wrapper-button"> Check out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Basket;
