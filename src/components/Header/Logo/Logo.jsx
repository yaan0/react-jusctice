import { useNavigate } from 'react-router-dom';

import './Logo.css';
import logo from '../../../resourses/img/svg/logo.svg';
import logoText from '../../../resourses/img/svg/logo-text.svg';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="logo" />
      <img className="logo-img-text" src={logoText} alt={logo} onClick={() => navigate('/')} />
    </div>
  );
};

export default Logo;
