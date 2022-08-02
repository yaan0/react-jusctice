import UserPanel from './UserPanel/UserPanel';
import Logo from './Logo/Logo';

import './Header.css';

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="header__wrapper">
        <Logo />
        <UserPanel />
      </div>
    </div>
  </div>
);

export default Header;
