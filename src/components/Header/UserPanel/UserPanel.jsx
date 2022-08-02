import { useState } from 'react';

import Cart from '../Cart/Cart';
// import SignUp from '../SignUp/SignUp';
import './UserPanel.css';
import user from '../../../resourses/img/svg/user.svg';

const UserPanel = () => {
  const [IsAuth] = useState(true);

  return (
    <div className="header-user">
      <img className="user-img" src={user} alt="user" />

      {IsAuth ? (<a className="user-link" href="/">Logout</a>) : (
        <div>
          <a className="user-link" href="/">Sign up</a>
          {' / '}
          <a className="user-link" href="/">Sing in</a>
        </div>
      )}
      <div>
        {' '}
        <Cart />
        {' '}
      </div>
    </div>
  );
};

export default UserPanel;
