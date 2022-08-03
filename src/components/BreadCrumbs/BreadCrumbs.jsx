import './BreadCrumbs.css';

const BreadCrumbs = () => (
  <div className="container">
    <nav className="productCard-nav">
      <ul className="productCard-list">
        <li className="productCard-list-item">
          <a className="product-list-link link__nav-page" href="/react-app/my-app/public">
            Main page /
          </a>
        </li>
        <li className="productCard-list-item">
          <a className="product-list-link" href="/react-app/my-app/public">
            Product card
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default BreadCrumbs;
