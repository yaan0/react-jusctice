import './FooterNav.css';

const FooterNav = () => (
  <div className="footer__body">
    <nav className="footer-nav">
      <ul className="footer-list">

        <li className="footer-list-item">
          <a className="footer-list-link" href="/">
            Our Products
          </a>
        </li>

        <li className="footer-list-item">
          <a className="footer-list-link" href="/">
            Privacy Terms
          </a>
        </li>

        <li className="footer-list-item">
          <a className="footer-list-link" href="/">
            Twitter
          </a>
        </li>

        <li className="footer-list-item">
          <a className="footer-list-link" href="/">
            Facebook
          </a>
        </li>

        <li className="footer-list-item">
          <a className="footer-list-link" href="/">
            Email
          </a>
        </li>

      </ul>
    </nav>
  </div>
);

export default FooterNav;
