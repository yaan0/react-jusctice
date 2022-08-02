import LogoFooter from './LogoFooter/LogoFooter';
import FooterNav from './FooterNav/FooterNav';
import FooterBottom from './FooterBottom/FooterBottom';

import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <LogoFooter />
        <FooterNav />
      </div>
      <FooterBottom />
    </div>
  </div>
);

export default Footer;
