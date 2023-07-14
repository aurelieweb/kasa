import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='container'>
      <div className='container__body'>
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
}

export default Layout;

