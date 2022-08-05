import { useNavigate } from 'react-router-dom';

import './Cart.css';
import cart from '../../../assets/img/svg/cart.svg';

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="header-cart">
      <img className="user-cart-img" src={cart} alt="cart" />
      <p className="cart-item__text" onClick={() => navigate('basket')}>Cart</p>
      <span className="header-cart-quantity">1</span>
    </div>
  );
};

export default Cart;
