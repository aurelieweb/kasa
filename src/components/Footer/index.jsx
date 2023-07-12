import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';
import logoFooter from '../../assets/logoFooter.png';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-logo">
            <Link to="/">
            <img className="logoFooter" src={logoFooter} alt="Logo" />
            </Link>
        </div>
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>

    </footer>
  );
}

export default Footer;