import "./loginpage.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, deleteUser } from "../../features/userSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [userData, setData] = React.useState({
    username: "",
    password: "",
  });
  const changeUsername = (e) => {
    setData((prev) => ({ ...prev, username: e }));
  };
  const changePassword = (e) => {
    setData((prev) => ({ ...prev, password: e }));
  };
  const register = () => {
    if (userData.username && userData.password !== "") {
      dispatch(setUser(userData));
      setData({
        username: "",
        password: "",
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
              value={userData.username}
            ></input>
          </div>
          <div>
            <div>password:</div>
            <input
              onChange={(e) => changePassword(e.target.value)}
              value={userData.password}
            ></input>
          </div>
          <button onClick={() => register()}>Register</button>
        </div>
      )}
    </>
  );
};

export { LoginPage };
