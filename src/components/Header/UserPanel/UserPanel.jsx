import { useState } from 'react';

import Cart from '../Cart/Cart';
import SignUp from '../SignUp/SignUp';

import './UserPanel.css';
import user from '../../../assets/img/svg/user.svg';

const UserPanel = () => {
  const [modalActive, setModalActive] = useState(false);
  const [IsAuth] = useState(false);

  return (
    <div className="header-user">
      <img className="user-img" src={user} alt="user" />

      {IsAuth ? (<a className="user-link" href="/">Logout</a>) : (
        <div>
          <button className="user-link" onClick={() => setModalActive(true)}>Sign up</button>
          {' / '}
          <button className="user-link">Sing in</button>
        </div>
      )}
      <div>
        {' '}
        <Cart />
        {' '}
      </div>

      <SignUp modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  );
};

export default UserPanel;
