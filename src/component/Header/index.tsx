import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="header">
      <NavLink className="header__link" to="news-profile/">
        На главную
      </NavLink>
      <NavLink className="header__link" to="news-profile/news">
        Новости
      </NavLink>
      <NavLink className="header__link" to="news-profile/profile">
        Профиль
      </NavLink>
      <NavLink className="header__link" to="news-profile/login">
        Логин
      </NavLink>
    </div>
  );
};

export { Header };
