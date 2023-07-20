import { useContext, useReducer, useState } from 'react';
import authReducer from './reducers/authReducer';
import AuthContext from './contexts/authContext';

const LoginStatus = () => {
  const { user, authDispatch } = useContext(AuthContext);

  if (user)
    return (
      <>
        <div>
          <span className='mx-2'>{user}</span>
          <a onClick={() => authDispatch({ type: 'LOGOUT' })} href='#'>
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          authDispatch({ type: 'LOGIN', username: 'mosh.hamedani' })
        }
        href='#'
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
