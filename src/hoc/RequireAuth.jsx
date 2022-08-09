import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RequireAuth = ({ children, setSignInIsOpen }) => {
  const [isAuth] = useState(Boolean(localStorage.getItem('user')));

  useEffect(() => {
    if (!isAuth) {
      setSignInIsOpen(true);
    }
  }, [isAuth]);

  return isAuth ? children : <Navigate to="/" />;
};

export { RequireAuth };
