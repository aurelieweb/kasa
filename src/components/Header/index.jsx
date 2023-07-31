import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';
import logo from '../../assets/LOGO.png';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/" className="menu-link">Accueil</Link>
          </li>
          <li className="menu-item">
            <Link to="/a-propos" className="menu-link">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

