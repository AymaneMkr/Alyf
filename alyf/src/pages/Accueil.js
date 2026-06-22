import React from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';

const services = [
  {
    icon: '🎓',
    titre: 'Formations',
    texte: 'Intra, inter, sur-mesure ou adaptées au handicap. Des dizaines de formations IT disponibles.',
    lien: '/nos-formations',
  },
  {
    icon: '🏢',
    titre: 'Conseil Entreprise',
    texte: 'Accompagnement des PME et ETI dans leur infrastructure, sécurité et évolution informatique.',
    lien: '/conseil-entreprise',
  },
  {
    icon: '🔧',
    titre: 'Intégration',
    texte: 'Infrastructure, cybersécurité et Cloud : nous intégrons des solutions sur mesure pour vos besoins.',
    lien: '/integration',
  },
];

const chiffres = [
  { valeur: '20 000+', label: 'Professionnels formés' },
  { valeur: '20+', label: "Années d'expérience" },
  { valeur: '36', label: 'Formations disponibles' },
];

const references = ['EduGroupe', 'MGA France', 'm2i Formation'];

function Accueil() {
  return (
    <div className="accueil">

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Acteur de la formation IT<br />depuis 2004</h1>
          <p>Plus de 20 000 professionnels formés. Nos formations sont dispensées par des consultants et managers confirmés, au plus près de la réalité terrain.</p>
          <div className="hero-buttons">
            <Link to="/nos-formations" className="btn btn-primary">Voir nos formations</Link>
            <Link to="/contact" className="btn btn-secondary">Nous contacter</Link>
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section className="citation">
        <div className="container">
          <blockquote>
            « Acteur de la formation depuis 2004, Alyf a déjà permis à plus de 20 000 professionnels
            de tous horizons de progresser dans le domaine de l'IT. Notre offre est basée sur les
            compétences et expériences de nos consultants acquises sur le terrain. »
          </blockquote>
          <cite>— Youssef Omari, Directeur</cite>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Nos services</h2>
          <div className="services-grid">
            {services.map((s) => (
              <Link to={s.lien} key={s.titre} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.titre}</h3>
                <p>{s.texte}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="chiffres">
        <div className="container">
          <div className="chiffres-grid">
            {chiffres.map((c) => (
              <div key={c.label} className="chiffre-item">
                <span className="chiffre-valeur">{c.valeur}</span>
                <span className="chiffre-label">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉFÉRENCES */}
      <section className="references">
        <div className="container">
          <h2 className="section-title">Ils nous font confiance</h2>
          <div className="references-grid">
            {references.map((r) => (
              <div key={r} className="reference-logo">{r}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certifications">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certif-grid">
            <div className="certif-item">
              <div className="certif-badge">Qualiopi</div>
              <p>Certifiée Qualiopi – Actions de Formation</p>
            </div>
            <div className="certif-item">
              <div className="certif-badge">Datadock</div>
              <p>Référencée Datadock</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Prêt à développer les compétences de vos équipes ?</h2>
          <Link to="/contact" className="btn btn-primary">Contactez-nous</Link>
        </div>
      </section>

    </div>
  );
}

export default Accueil;