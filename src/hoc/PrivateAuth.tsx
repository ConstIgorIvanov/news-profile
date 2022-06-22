import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../hooks';

interface PrivateAuthProps {
  children: JSX.Element;
}

const PrivateAuth = ({ children }: PrivateAuthProps): JSX.Element => {
  const user = useAppSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/news-profile/login"></Navigate>;
  }

  return children;
};

export { PrivateAuth };
