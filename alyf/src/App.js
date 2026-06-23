import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import NosFormations from './pages/NosFormations';
import Entreprises from './pages/Entreprises';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/"                element={<Accueil />} />
          <Route path="/nos-formations"  element={<NosFormations />} />
          <Route path="/entreprises"     element={<Entreprises />} />
          <Route path="/contact"         element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;