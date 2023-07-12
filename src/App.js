import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Logement from './pages/Logement';
import Error from './components/Error';
import './styles/styles.scss'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route de la page d'accueil */}
          <Route path="/" element={<Accueil />} />

          {/* Route de la page À propos */}
          <Route path="/a-propos" element={<APropos />} />

          {/* Route de la page de logement avec un paramètre d'ID */}
          <Route path="/logement/:id" element={<Logement />} />

          {/* Route par défaut pour la page d'erreur */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

