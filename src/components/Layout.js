import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        {/* Contenu du footer */}
      </footer>
    </div>
  );
}

export default Layout;

