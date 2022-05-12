import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateAuth = ({ children }) => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  
  return children;
};

export { PrivateAuth };
