import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-alyf-blanc-bleu.png';
import './Header.css';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/nos-formations', label: 'Nos Formations' },
    { path: '/conseil-entreprise', label: 'Conseil Entreprise' },
    { path: '/integration', label: 'Intégration' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="ALYF Pro - Accueil">
          <img src={logo} alt="ALYF Pro" className="logo-image" />
        </Link>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

export default Header;