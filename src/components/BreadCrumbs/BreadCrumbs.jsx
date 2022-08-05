import './BreadCrumbs.css';
import { useLocation, useNavigate } from 'react-router-dom';

const BreadCrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="container">
      <nav className="productCard-nav">
        <ul className="productCard-list">
          <li className="productCard-list-item">
            <div className="product-list-link link__nav-page" onClick={() => navigate('/')}>
              Main page /
            </div>
          </li>
          <li className="productCard-list-item">
            <p className="product-list-link">
              {location.pathname.includes('basket') ? 'Basket' : 'Product Card'}
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumbs;
