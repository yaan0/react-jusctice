import './Cart.css';
import cart from '../../../resourses/img/svg/cart.svg'



const Cart = () => {
  return (
    <div className='header-cart'>
      <img className='user-cart-img' src={cart} alt='cart'/>
      <a>Cart</a>
      <span className='header-cart-quantity'>1</span>
    </div>
  )
}

export default Cart;