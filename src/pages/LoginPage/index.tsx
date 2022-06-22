import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUser, deleteUser } from '../../features/userSlice';

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
          <div className="logout">
            <div className="logout__username">
              Username: <span>{user.username}</span>
            </div>
            <button className="btn" onClick={() => dispatch(deleteUser())}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="register">
            <div className="register__title">Register to have access to Profile</div>
            <div>
              <div className="register__username">username:</div>
              <input
                className="register__username--input"
                onChange={(e) => changeUsername(e.target.value)}
                value={userData.username}></input>
            </div>
            <div>
              <div className="register__password">password:</div>
              <input
                className="register__password--input"
                onChange={(e) => changePassword(e.target.value)}
                value={userData.password}></input>
            </div>
            <button className="btn" onClick={() => register()}>
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { LoginPage };
