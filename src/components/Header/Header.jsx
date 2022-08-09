import UserPanel from './UserPanel/UserPanel';
import Logo from './Logo/Logo';

import './Header.css';

const Header = ({
  setSignUpIsOpen, setSignInIsOpen,
}) => (
  <div className="header">
    <div className="container">
      <div className="header__wrapper">
        <Logo />
        <UserPanel
          setSignUpIsOpen={setSignUpIsOpen}
          setSignInIsOpen={setSignInIsOpen}
        />
      </div>
    </div>
  </div>
);

export default Header;
