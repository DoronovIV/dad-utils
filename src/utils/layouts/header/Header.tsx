import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="container">
      <Navbar className="header">
        <Nav.Link className="header__link" href="/">
          Timer
        </Nav.Link>
        <Nav.Link className="header__link" href="calc">
          Calculator
        </Nav.Link>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default Header;
