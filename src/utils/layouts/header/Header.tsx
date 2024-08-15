import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Header.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="container">
      <div className="header">
        <NavLink className="header__title" to="/">
          Timer
        </NavLink>
        <NavLink className="header__title" to="calc">
          Calculator
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Header;
