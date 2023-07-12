import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='container'>
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Layout;

