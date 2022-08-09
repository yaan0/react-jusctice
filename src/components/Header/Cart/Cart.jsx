import { useNavigate } from 'react-router-dom';

import './Cart.css';
import cart from '../../../assets/img/svg/cart.svg';

const Cart = ({ count }) => {
  const navigate = useNavigate();
  return (
    <div className="header-cart">
      <img className="user-cart-img" src={cart} alt="cart" onClick={() => navigate('basket')} />
      <p className="cart-item__text" onClick={() => navigate('basket')}>Cart</p>
      { count
        ? <span className="header-cart-quantity">{count}</span>
        : null }

    </div>
  );
};

export default Cart;
