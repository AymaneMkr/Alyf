import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Entreprises.css';
import UiIcon from '../components/UiIcon';

const onglets = [
  {
    id: 'conseil',
    label: 'Conseil IT',
    titre: 'Votre partenaire IT de confiance',
    accroche: "Nous accompagnons les PME et ETI dans la gestion, l'évolution et la sécurisation de leur système d'information.",
    services: [
      { icon: 'monitor', titre: 'Assistance & Support', texte: "Intervention rapide sur site ou à distance pour résoudre vos incidents et garantir la continuité de votre activité." },
      { icon: 'shield', titre: 'Sécurité informatique', texte: "Audit, politiques de sécurité, gestion des accès et protection contre les cybermenaces." },
      { icon: 'cloud', titre: 'Migration Cloud', texte: "Audit, planification et migration vers le Cloud avec suivi complet par nos experts." },
      { icon: 'building', titre: 'Infrastructure IT', texte: "Conception, déploiement et optimisation de votre réseau, serveurs et postes de travail." },
      { icon: 'briefcase', titre: 'Audit & Conseil', texte: "Analyse de l'existant, identification des risques et recommandations stratégiques pour votre SI." },
      { icon: 'refresh', titre: 'Maintenance préventive', texte: "Suivi régulier, mises à jour et contrôles de performance pour anticiper les pannes." },
    ],
    atouts: [
      "Plus de 20 ans d'expérience dans l'IT",
      "Consultants certifiés Microsoft, Linux et Cloud",
      "Intervention rapide en région Auvergne-Rhône-Alpes",
      "Tarifs adaptés aux PME et ETI",
      "Approche sur-mesure, pas de solution préformatée",
    ],
  },
  {
    id: 'integration',
    label: 'Intégration',
    titre: 'Des solutions IT intégrées clé en main',
    accroche: "Infrastructure, cybersécurité, Cloud : nous concevons et déployons des solutions sur mesure pour moderniser votre système d'information.",
    services: [
      { icon: 'building', titre: 'Infrastructure Service', texte: "Virtualisation (VMware, Hyper-V), stockage, réseau, haute disponibilité et supervision." },
      { icon: 'shield', titre: 'Cybersecurity Service', texte: "Audit de vulnérabilités, pare-feux, gestion des identités, sécurisation des postes et réponse aux incidents." },
      { icon: 'cloud', titre: 'Cloud Service', texte: "Migration Azure, architecture hybride, optimisation des coûts, sauvegarde et reprise d'activité." },
    ],
    atouts: [
      "Expertise Microsoft Azure certifiée",
      "Sécurité intégrée à chaque projet",
      "Approche Multi-Cloud flexible",
      "Accompagnement de A à Z : audit → déploiement → suivi",
      "Solutions scalables adaptées à votre croissance",
    ],
  },
];

const etapes = [
  { num: '01', titre: 'Diagnostic', texte: "Analyse de votre infrastructure et de vos besoins spécifiques." },
  { num: '02', titre: 'Proposition', texte: "Plan d'action détaillé adapté à votre contexte et budget." },
  { num: '03', titre: 'Mise en œuvre', texte: "Déploiement par nos consultants avec un suivi rigoureux." },
  { num: '04', titre: 'Suivi', texte: "Accompagnement continu et ajustements selon vos retours." },
];

function Entreprises() {
  const [actif, setActif] = useState('conseil');
  const onglet = onglets.find(o => o.id === actif);

  return (
    <div className="entreprises-page">

      {/* HERO */}
      <section className="ent-hero">
        <div className="container">
          <span className="eyebrow">Solutions Entreprise</span>
          <h1>Conseil IT & Intégration<br />pour PME et ETI</h1>
          <p>
            Depuis 2004, nos consultants accompagnent les entreprises dans la gestion,
            la sécurisation et la modernisation de leur système d'information.
          </p>
        </div>
      </section>

      {/* ONGLETS */}
      <section className="ent-onglets">
        <div className="container">
          <div className="onglet-tabs">
            {onglets.map(o => (
              <button
                key={o.id}
                className={`onglet-tab ${actif === o.id ? 'actif' : ''}`}
                onClick={() => setActif(o.id)}
              >
                <UiIcon name={o.id === 'conseil' ? 'building' : 'cloud'} className="onglet-icon" />
                {o.label}
              </button>
            ))}
          </div>

          <div className="onglet-content">
            <div className="onglet-intro">
              <h2>{onglet.titre}</h2>
              <p>{onglet.accroche}</p>
              <ul className="atouts-list">
                {onglet.atouts.map(a => <li key={a}>✓ {a}</li>)}
              </ul>
              <Link to="/contact" className="btn-contact-ent">Nous contacter →</Link>
            </div>
            <div className="services-mini-grid">
              {onglet.services.map(s => (
                <div key={s.titre} className="service-mini">
                  <UiIcon name={s.icon} className="service-mini-icon" />
                  <h4>{s.titre}</h4>
                  <p>{s.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="methode">
        <div className="container">
          <span className="eyebrow">Notre méthode</span>
          <h2>4 étapes pour un projet réussi</h2>
          <div className="etapes-grid">
            {etapes.map((e, i) => (
              <div key={e.num} className="etape">
                <div className="etape-num">{e.num}</div>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
                {i < etapes.length - 1 && <div className="etape-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ent-cta">
        <div className="container">
          <h2>Parlons de votre projet</h2>
          <p>Chaque entreprise est unique. Contactez-nous pour un premier échange sans engagement.</p>
          <Link to="/contact" className="btn-primary-ent">Prendre contact</Link>
        </div>
      </section>

    </div>
  );
}

export default Entreprises;