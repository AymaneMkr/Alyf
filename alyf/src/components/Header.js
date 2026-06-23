import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/nos-formations', label: 'Formations' },
    { path: '/entreprises',    label: 'Entreprises' },
    { path: '/contact',        label: 'Contact' },
  ];

  return (
    <>
      {/* Bandeau supérieur */}
      <div className="topbar">
        <span>Organisme de formation IT · Certifié Qualiopi · Saint-Étienne</span>
        <a href="mailto:contact@alyfpro.fr">contact@alyfpro.fr</a>
      </div>

      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">
            alyf<span>pro</span>
          </Link>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname.startsWith(link.path) ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Demander un devis
            </Link>
          </nav>

          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;