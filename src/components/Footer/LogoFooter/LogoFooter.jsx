import './LogoFooter.css';
import logo from '../../../assets/img/svg/logo.svg';
import logoText from '../../../assets/img/svg/logo-text.svg';

const LogoFooter = () => (
  <div className="footer-logo">
    <img className="logo-img" src={logo} alt="logo" />
    <img className="logo-img-text" src={logoText} alt={logo} />
  </div>
);

export default LogoFooter;
