import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUser, deleteUser } from '../../features/userSlice';

import './loginpage.scss';

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const [userData, setData] = React.useState({
    username: '',
    password: '',
  });

  const changeUsername = (name: string) => {
    setData((prev) => ({ ...prev, username: name }));
  };
  const changePassword = (password: string) => {
    setData((prev) => ({ ...prev, password: password }));
  };

  const register = () => {
    if (userData.username && userData.password !== '') {
      dispatch(setUser(userData));
      setData({
        username: '',
        password: '',
      });
    }
  };

  return (
    <>
      {user ? (
        <div className="container">
          <div>{user.username}</div>
          <div>{user.password}</div>
          <button onClick={() => dispatch(deleteUser())}>Logout</button>
        </div>
      ) : (
        <div className="container">
          <div>Register to have access to Profile</div>
          <div>
            <div>username:</div>
            <input
              onChange={(e) => changeUsername(e.target.value)}
              value={userData.username}></input>
          </div>
          <div>
            <div>password:</div>
            <input
              onChange={(e) => changePassword(e.target.value)}
              value={userData.password}></input>
          </div>
          <button onClick={() => register()}>Register</button>
        </div>
      )}
    </>
  );
};

export { LoginPage };
