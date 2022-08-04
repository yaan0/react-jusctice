import './BreadCrumbs.css';
import { Link } from 'react-router-dom';

const BreadCrumbs = () => (
  <div className="container">
    <nav className="productCard-nav">
      <ul className="productCard-list">
        <li className="productCard-list-item">
          <div className="product-list-link link__nav-page">
            <Link to="/">
              Main page /
            </Link>
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

export default BreadCrumbs;
