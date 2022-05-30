import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../hooks';

const PrivateAuth = ({ children }: React.ReactNode | any) => {
  const user = useAppSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/news-profile/login"></Navigate>;
  }

  return children;
};

export { PrivateAuth };
