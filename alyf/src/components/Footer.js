import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <div className="footer-logo">alyf<span>pro</span></div>
          <p>Organisme de formation IT basé à Saint-Étienne, certifié Qualiopi et référencé Datadock depuis 2004.</p>
          <div className="footer-certifs">
            <span>Qualiopi</span>
            <span>Datadock</span>
            <span>OPCO éligible</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Catalogue</h4>
          <Link to="/nos-formations">Toutes les formations</Link>
          <Link to="/nos-formations?cat=Windows%20Serveur">Windows Serveur</Link>
          <Link to="/nos-formations?cat=Cloud">Cloud & Azure</Link>
          <Link to="/nos-formations?cat=Linux">Linux</Link>
          <Link to="/nos-formations?cat=DevOps">DevOps</Link>
        </div>

        <div className="footer-col">
          <h4>Entreprise</h4>
          <Link to="/entreprises">Conseil IT</Link>
          <Link to="/entreprises">Intégration</Link>
          <Link to="/contact">Demander un devis</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>55 rue Charles de Gaulle<br />42000 Saint-Étienne</p>
          <a href="mailto:contact@alyfpro.fr">contact@alyfpro.fr</a>
        </div>

      </div>

      <div className="footer-legal">
        <span>© 2024 ALYF — Organisme de Formation n°84 42 03528 42 · SIRET : 87839525000011 · NAF-APE : 6202A · TVA : FR51878395250</span>
        <Link to="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  );
}

export default Footer;