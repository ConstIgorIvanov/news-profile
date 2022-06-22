import { Outlet } from 'react-router-dom';

import { Header } from '../Header';

const Layout: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export { Layout };
