import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.scss';
import logo from '../../assets/LOGO.png';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;

