import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Accueil.css';
import logoConfiancePresident from '../assets/logo-confiance-president.jpg';
import logoConfianceOrt from '../assets/logo-confiance-ort.png';
import logoConfianceOrsys from '../assets/logo-confiance-orsys.jpg';
import logoConfianceMga from '../assets/logo-confiance-mga.png';
import logoConfianceM2i from '../assets/logo-confiance-m2i.jpg';
import logoConfianceIsitech from '../assets/logo-confiance-isitech.png';
import logoConfianceFitech from '../assets/logo-confiance-fitech.png';
import logoConfianceEdugroupe from '../assets/logo-confiance-edugroupe.png';
import logoConfianceDelcoupe from '../assets/logo-confiance-delcoupe.png';
import logoConfianceConseilConstitutionnel from '../assets/logo-confiance-conseilconstitutionnel.png';

const statsBar = [
  { val: '4,8/5',    label: 'Satisfaction' },
  { val: 'Qualiopi', label: 'Certification qualité' },
  { val: 'Datadock', label: 'Référencement' },
  { val: '20 000+',  label: 'Professionnels formés' },
  { val: '20+',      label: "Années d'expérience" },
];

const formationsVedette = [
  { ref: 'WS19-FND',   cat: 'Windows Serveur', titre: "Windows Server 2019 – Les bases de l'administration",   duree: '5 jours', niveau: 'Fondamental',    tarif: '2 750 €' },
  { ref: 'MSAZ104',    cat: 'Cloud',           titre: 'Microsoft Azure – Administrateur',                       duree: '4 jours', niveau: 'Intermédiaire',  tarif: '2 400 €' },
  { ref: 'MSMS030',    cat: 'Microsoft 365',   titre: 'Microsoft 365 – Administration',                         duree: '5 jours', niveau: 'Intermédiaire',  tarif: '3 000 €' },
  { ref: 'DO500',      cat: 'DevOps',          titre: 'DevOps – Culture et pratiques',                           duree: '5 jours', niveau: 'Avancé',         tarif: '5 775 €' },
  { ref: 'LUX-DBADM', cat: 'Linux',           titre: 'Linux Debian – Administration',                           duree: '5 jours', niveau: 'Intermédiaire',  tarif: '2 500 €' },
  { ref: 'XCH19-ADM', cat: 'Messagerie',      titre: 'Exchange Server 2019 – Administration',                   duree: '4 jours', niveau: 'Intermédiaire',  tarif: '2 200 €' },
];

const categorieColors = {
  'Windows Serveur': '#0f766e',
  'Cloud':           '#1d4ed8',
  'Microsoft 365':   '#0369a1',
  'DevOps':          '#b91c1c',
  'Linux':           '#e8720c',
  'Messagerie':      '#7c3aed',
  'Poste de travail':'#0077cc',
};

const niveauColors = {
  'Fondamental':   { bg: '#f0fdf4', color: '#166534' },
  'Intermédiaire': { bg: '#eff6ff', color: '#1e40af' },
  'Avancé':        { bg: '#fff7ed', color: '#9a3412' },
};

const univers = [
  { icon: '🖥️', label: 'Poste de travail',  count: 5,  desc: 'Windows 10, déploiement, sécurité et support.' },
  { icon: '🐧', label: 'Linux',             count: 4,  desc: 'Fondamentaux, administration Debian, Shell Bash.' },
  { icon: '📧', label: 'Messagerie',        count: 4,  desc: 'Exchange Server 2016 et 2019.' },
  { icon: '🖧', label: 'Windows Serveur',   count: 10, desc: 'WS 2016 et 2019, administration, sécurité, Docker.' },
  { icon: '☁️', label: 'Microsoft 365',    count: 5,  desc: 'Administration, sécurité, migration Cloud.' },
  { icon: '⚙️', label: 'DevOps',           count: 2,  desc: 'Culture DevOps et nouveaux outils.' },
  { icon: '🌐', label: 'Cloud',            count: 6,  desc: 'Azure, gouvernance, migration, architecture multi-cloud.' },
];

const faq = [
  { q: 'Comment s\'inscrire à une formation ?',
    r: 'Contactez-nous par email ou via le formulaire de contact. Nous revenons vers vous sous 24h pour cadrer votre besoin et valider l\'inscription.' },
  { q: 'Quelles modalités proposez-vous ?',
    r: 'Nos formations sont disponibles en intra-entreprise (dans vos locaux), inter-entreprise (sessions planifiées), et sur-mesure selon vos objectifs.' },
  { q: 'Vos formations sont-elles finançables (OPCO, CPF) ?',
    r: 'Oui. Alyf est certifié Qualiopi et référencé Datadock. Nos formations sont éligibles aux dispositifs de financement OPCO et plan de développement des compétences.' },
  { q: 'Proposez-vous des formations adaptées au handicap ?',
    r: 'Oui. Toutes nos formations sont adaptables aux situations de handicap. Contactez-nous pour que nous puissions mettre en place les aménagements nécessaires.' },
  { q: 'Intervenez-vous en dehors de Saint-Étienne ?',
    r: 'Nos formations intra-entreprise peuvent se tenir dans vos locaux partout en région Auvergne-Rhône-Alpes. Les formations distanciel sont accessibles depuis toute la France.' },
];

function CarteFormationVedette({ f }) {
  const couleurCat = categorieColors[f.cat] || '#002147';
  const niv = niveauColors[f.niveau] || { bg: '#f5f5f5', color: '#333' };
  return (
    <div className="carte-vedette">
      <div className="carte-top">
        <span className="carte-cat" style={{ color: couleurCat, borderColor: couleurCat }}>{f.cat}</span>
        <span className="carte-niv" style={{ background: niv.bg, color: niv.color }}>{f.niveau}</span>
      </div>
      <h3 className="carte-titre">{f.titre}</h3>
      <div className="carte-meta">
        <span>⏱ {f.duree}</span>
        <span>💶 {f.tarif}</span>
      </div>
      <div className="carte-actions">
        <Link to="/nos-formations" className="btn-voir">Voir la formation</Link>
        <Link to="/contact" className="btn-devis">Demander un devis</Link>
      </div>
    </div>
  );
}

function FaqItem({ q, r }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-reponse">{r}</div>}
    </div>
  );
}

function Accueil() {
  const [recherche, setRecherche] = useState('');
  const navigate = useNavigate();

  const references = [
    { src: logoConfiancePresident, alt: 'Présidence de la République' },
    { src: logoConfianceOrt, alt: 'ORT' },
    { src: logoConfianceOrsys, alt: 'Orsys' },
    { src: logoConfianceMga, alt: 'MGA' },
    { src: logoConfianceM2i, alt: 'm2i Formation' },
    { src: logoConfianceIsitech, alt: 'ISITECH' },
    { src: logoConfianceFitech, alt: 'Fitech' },
    { src: logoConfianceEdugroupe, alt: 'Edugroupe' },
    { src: logoConfianceDelcoupe, alt: 'Delcoupe' },
    { src: logoConfianceConseilConstitutionnel, alt: 'Conseil constitutionnel' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (recherche.trim()) {
      navigate(`/nos-formations?q=${encodeURIComponent(recherche.trim())}`);
    } else {
      navigate('/nos-formations');
    }
  };

  return (
    <div className="accueil">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">Organisme de formation · Certifié Qualiopi</div>
          <h1>La formation IT qui fait<br />progresser vos équipes.</h1>
          <p>
            Infrastructure, Cloud, Microsoft 365, Linux, DevOps et messagerie :
            un catalogue de <strong>36 formations</strong> dispensées par des consultants
            confirmés, au plus près de la réalité terrain.
          </p>

          {/* Recherche */}
          <form className="hero-search" onSubmit={handleSearch}>
            <span className="search-ico">🔍</span>
            <input
              type="text"
              placeholder="Rechercher une formation (ex: Azure, Windows Server, Linux...)"
              value={recherche}
              onChange={e => setRecherche(e.target.value)}
            />
            <button type="submit">Rechercher</button>
          </form>

          {/* Tags rapides */}
          <div className="hero-tags">
            {['Windows Server', 'Azure', 'Linux', 'Exchange', 'DevOps', 'Microsoft 365'].map(tag => (
              <button
                key={tag}
                className="hero-tag"
                onClick={() => navigate(`/nos-formations?q=${encodeURIComponent(tag)}`)}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── BARRE STATS ── */}
      <div className="stats-bar">
        {statsBar.map(s => (
          <div key={s.label} className="stat-item">
            <span className="stat-val">{s.val}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FORMATIONS VEDETTE ── */}
      <section className="vedette">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">Formations les plus demandées</span>
              <h2>Une sélection pour les besoins les plus courants.</h2>
            </div>
            <Link to="/nos-formations" className="voir-tout">Explorer tout le catalogue →</Link>
          </div>
          <div className="vedette-grid">
            {formationsVedette.map(f => <CarteFormationVedette key={f.ref} f={f} />)}
          </div>
        </div>
      </section>

      {/* ── UNIVERS MÉTIER ── */}
      <section className="univers">
        <div className="container">
          <span className="section-eyebrow">Univers métier</span>
          <h2>7 domaines pour couvrir tous vos besoins IT.</h2>
          <div className="univers-grid">
            {univers.map(u => (
              <Link
                to={`/nos-formations?cat=${encodeURIComponent(u.label)}`}
                key={u.label}
                className="univers-card"
              >
                <span className="univers-icon">{u.icon}</span>
                <div className="univers-info">
                  <strong>{u.label}</strong>
                  <span>{u.count} formation{u.count > 1 ? 's' : ''}</span>
                </div>
                <span className="univers-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIFFRES ── */}
      <section className="chiffres">
        <div className="container">
          <div className="chiffres-grid">
            <div className="chiffre">
              <span className="chiffre-val">36</span>
              <span className="chiffre-lab">formations au catalogue</span>
              <p>Infrastructure, Cloud, messagerie, Linux, DevOps et Microsoft 365.</p>
            </div>
            <div className="chiffre">
              <span className="chiffre-val">7</span>
              <span className="chiffre-lab">domaines couverts</span>
              <p>Des catégories précises pour orienter rapidement vers la bonne formation.</p>
            </div>
            <div className="chiffre">
              <span className="chiffre-val">20+</span>
              <span className="chiffre-lab">années d'expérience</span>
              <p>Acteur de la formation IT depuis 2004, ancré dans la réalité terrain.</p>
            </div>
            <div className="chiffre">
              <span className="chiffre-val">3</span>
              <span className="chiffre-lab">modalités de suivi</span>
              <p>Intra, inter-entreprise et sur-mesure selon votre contexte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RÉFÉRENCES ── */}
      <section className="references">
        <div className="container">
          <h2>Ils nous font confiance</h2>
          <div className="refs-grid">
            {references.map(ref => (
              <div key={ref.alt} className="ref-logo">
                <img src={ref.src} alt={ref.alt} />
              </div>
            ))}
          </div>
          <div className="certif-row">
            <div className="certif-pill">✓ Qualiopi</div>
            <div className="certif-pill">✓ Datadock</div>
            <div className="certif-pill">✓ OPCO éligible</div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq">
        <div className="container faq-inner">
          <div className="faq-left">
            <span className="section-eyebrow">Questions fréquentes</span>
            <h2>Tout ce qu'il faut savoir avant de vous lancer.</h2>
            <p>Vous ne trouvez pas votre réponse ? Notre équipe vous répond sous 24h.</p>
            <Link to="/contact" className="btn-primary">Nous contacter</Link>
          </div>
          <div className="faq-right">
            {faq.map(item => <FaqItem key={item.q} q={item.q} r={item.r} />)}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-final">
        <div className="container">
          <h2>Un projet de formation pour vos équipes ?</h2>
          <p>Intra, inter ou sur-mesure : construisons ensemble le dispositif adapté à vos besoins et votre budget.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Demander un devis</Link>
            <Link to="/nos-formations" className="btn-outline">Explorer le catalogue</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Accueil;