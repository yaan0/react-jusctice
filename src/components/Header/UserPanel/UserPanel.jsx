import Cart from '../Cart/Cart';

import './UserPanel.css';
import user from '../../../assets/img/svg/user.svg';

const UserPanel = ({
  setSignUpIsOpen, setSignInIsOpen,
}) => {
  const userPanel = JSON.parse(localStorage.getItem('user'));

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <div className="header-user">
      <img className="user-img" src={user} alt="user" />

      {
        localStorage.getItem('user')
          ? (
            <>
              <p>{userPanel.name}</p>
              <button className="logOut-user" onClick={logOut}> Logout</button>
            </>
          )
          : (
            <>
              <button className="user-link" onClick={() => setSignUpIsOpen(true)}>Sign up</button>
              {' / '}
              <button className="user-link" onClick={() => setSignInIsOpen(true)}>Sing in</button>
            </>
          )

      }

      <div>
        {' '}
        <Cart />
        {' '}
      </div>
    </div>
  );
};

export default UserPanel;
