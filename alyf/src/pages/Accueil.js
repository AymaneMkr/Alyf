import React from 'react';
import { Link } from 'react-router-dom';
import illustrationClasse from '../assets/illustration-classe.jpg';
import certifQualiopi from '../assets/logo-qualiopi.png';
import certifDatadock from '../assets/logo-datadock.png';
import confianceConseilConstitutionnel from '../assets/logo-confiance-conseilconstitutionnel.png';
import confianceDelcoupe from '../assets/logo-confiance-delcoupe.png';
import confianceEdugroupe from '../assets/logo-confiance-edugroupe.png';
import confianceFitech from '../assets/logo-confiance-fitech.png';
import confianceIsitech from '../assets/logo-confiance-isitech.png';
import confianceM2i from '../assets/logo-confiance-m2i.jpg';
import confianceMga from '../assets/logo-confiance-mga.png';
import confianceOrsys from '../assets/logo-confiance-orsys.jpg';
import confianceOrt from '../assets/logo-confiance-ort.png';
import confiancePresident from '../assets/logo-confiance-president.jpg';
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

const references = [
  { src: confianceConseilConstitutionnel, alt: 'Logo confiance Conseil Constitutionnel' },
  { src: confianceDelcoupe, alt: 'Logo confiance Delcoupe' },
  { src: confianceEdugroupe, alt: 'Logo confiance EduGroupe' },
  { src: confianceFitech, alt: 'Logo confiance Fitech' },
  { src: confianceIsitech, alt: 'Logo confiance Isitech' },
  { src: confianceM2i, alt: 'Logo confiance M2i' },
  { src: confianceMga, alt: 'Logo confiance MGA' },
  { src: confianceOrsys, alt: 'Logo confiance Orsys' },
  { src: confianceOrt, alt: 'Logo confiance ORT' },
  { src: confiancePresident, alt: 'Logo confiance President' },
];

function Accueil() {
  return (
    <div className="accueil">
      <section className="hero">
        <div className="hero-inner hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Formation IT et conseil</span>
            <h1>Acteur de la formation IT<br />depuis 2004</h1>
            <p>
              Plus de 20 000 professionnels formés. Nos formations sont dispensées par des
              consultants et managers confirmés, au plus près de la réalité terrain.
            </p>
            <div className="hero-buttons">
              <Link to="/nos-formations" className="btn btn-primary">Voir nos formations</Link>
              <Link to="/contact" className="btn btn-secondary">Nous contacter</Link>
            </div>
          </div>
          <div className="hero-visual">
            <img src={illustrationClasse} alt="Illustration d'une salle de classe" />
          </div>
        </div>
      </section>

      <section className="citation">
        <div className="container">
          <div className="quote-card">
            <blockquote>
              « Acteur de la formation depuis 2004, Alyf a déjà permis à plus de 20 000
              professionnels de tous horizons de progresser dans le domaine de l'IT. Notre offre
              est basée sur les compétences et expériences de nos consultants acquises sur le
              terrain. »
            </blockquote>
            <cite>— Youssef Omari, Directeur</cite>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="section-offset section-offset-left">
          <h2 className="section-title section-title-left">Nos services</h2>
          <p className="section-lead section-lead-left">
            Nous intervenons sur trois axes complémentaires pour vous aider à former, structurer
            et faire évoluer vos équipes dans la durée.
          </p>
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
        </div>
      </section>

      <section className="chiffres">
        <div className="container">
          <div className="section-offset section-offset-right">
          <h2 className="section-title section-title-right">Quelques chiffres clés</h2>
          <p className="section-lead section-lead-light section-lead-right">
            Des repères simples pour situer l’expérience, le volume d’accompagnement et la
            diversité de notre offre.
          </p>
          <div className="chiffres-grid">
            {chiffres.map((c) => (
              <div key={c.label} className="chiffre-item">
                <span className="chiffre-valeur">{c.valeur}</span>
                <span className="chiffre-label">{c.label}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="references">
        <div className="container">
          <h2 className="section-title">Ils nous font confiance</h2>
          <p className="section-lead">
            Des organisations qui nous ont choisis pour la qualité de nos contenus, la clarté de
            nos interventions et notre approche de terrain.
          </p>
          <div className="references-carousel" aria-label="Logos de confiance défilants">
            <div className="references-track">
              {[...references, ...references].map((logo, index) => (
                <div className="reference-logo" key={`${logo.alt}-${index}`}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="certifications">
        <div className="container">
          <h2 className="section-title">Des garanties reconnues</h2>
          <p className="section-lead">
            Nos certifications structurent notre démarche qualité et renforcent la fiabilité de
            nos actions de formation.
          </p>
          <div className="certif-grid">
            <div className="certif-item">
              <div className="certif-badge certif-badge-logo">
                <img src={certifQualiopi} alt="Logo Qualiopi" />
              </div>
              <p>Certifiée Qualiopi – Actions de Formation</p>
            </div>
            <div className="certif-item">
              <div className="certif-badge certif-badge-logo">
                <img src={certifDatadock} alt="Logo Datadock" />
              </div>
              <p>Référencée Datadock</p>
            </div>
          </div>
        </div>
      </section>

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