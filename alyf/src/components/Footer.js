import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-alyf-blanc-bleu.png';
import linkedinLogo from '../assets/logo-linkedin.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-logo">
            <img src={logo} alt="ALYF Pro" className="logo-image" />
          </div>
          <p>Organisme de formation IT, certifié Qualiopi et référencé Datadock.</p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <Link to="/">Accueil</Link>
          <Link to="/nos-formations">Nos Formations</Link>
          <Link to="/conseil-entreprise">Conseil Entreprise</Link>
          <Link to="/integration">Intégration</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>contact@alyfpro.fr</p>
          <p>55 rue Charles de Gaulle 42000 Saint Etienne</p>
          <a className="linkedin-link" href="https://www.linkedin.com/in/alyf-sarl-a63895230/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn ALYF">
            <img src={linkedinLogo} alt="LinkedIn" className="linkedin-logo" />
          </a>
        </div>
      </div>
      <div className="footer-legal">
        ALYF – Organisme de Formation n°84 42 03528 42 – SIRET : 87839525000011 – NAF-APE : 6202A – TVA : FR51878395250
        &nbsp;|&nbsp;
        <Link to="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  );
}

export default Footer;