import './BreadCrumbs.css';
import { useNavigate } from 'react-router-dom';

const BreadCrumbs = () => {
  const navigate = useNavigate();

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
              Product card
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumbs;
