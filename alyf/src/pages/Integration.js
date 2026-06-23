import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Integration.css';

const domaines = [
  {
    id: 'infrastructure',
    icon: '🏗️',
    titre: 'Infrastructure Service',
    accroche: "Concevez et déployez une infrastructure robuste, évolutive et adaptée à vos enjeux.",
    description: "Nous intervenons sur la conception, le déploiement et l'optimisation de vos infrastructures informatiques. Virtualisation, stockage, réseau, haute disponibilité : nos équipes maîtrisent l'ensemble du spectre technique pour vous garantir une infrastructure fiable et performante.",
    services: [
      "Virtualisation (VMware, Hyper-V)",
      "Gestion et optimisation du stockage",
      "Architecture réseau et switching",
      "Haute disponibilité et PRA/PCA",
      "Déploiement et gestion des serveurs",
      "Supervision et monitoring",
    ],
  },
  {
    id: 'cybersecurite',
    icon: '🔐',
    titre: 'Cybersecurity Service',
    accroche: "Protégez vos données, vos systèmes et vos utilisateurs face aux cybermenaces.",
    description: "La cybersécurité est au cœur de chaque projet que nous menons. Nous réalisons des audits de sécurité, mettons en place des politiques de protection et accompagnons vos équipes pour faire face aux risques actuels. Notre approche est proactive : anticiper plutôt que subir.",
    services: [
      "Audit et analyse des vulnérabilités",
      "Mise en place de pare-feux et proxy",
      "Gestion des identités et des accès (IAM)",
      "Sécurisation des postes de travail",
      "Formation et sensibilisation des équipes",
      "Réponse aux incidents de sécurité",
    ],
  },
  {
    id: 'cloud',
    icon: '☁️',
    titre: 'Cloud Service',
    accroche: "Migrez vers le Cloud sereinement, avec une stratégie adaptée à votre organisation.",
    description: "Que vous souhaitiez migrer vers Microsoft Azure, adopter une architecture hybride ou optimiser vos coûts Cloud, nos experts vous accompagnent à chaque étape. Nous construisons avec vous une stratégie Cloud cohérente, sécurisée et alignée sur vos objectifs métier.",
    services: [
      "Audit et stratégie Cloud",
      "Migration Azure / Hybrid Cloud",
      "Architecture Multi-Cloud",
      "Optimisation des coûts Cloud",
      "Sécurité et conformité Cloud",
      "Sauvegarde et reprise d'activité",
    ],
  },
];

function Integration() {
  const [actif, setActif] = useState('infrastructure');
  const domaineActif = domaines.find(d => d.id === actif);

  return (
    <div className="integration-page">

      {/* HERO */}
      <section className="integration-hero">
        <div className="container">
          <span className="hero-eyebrow">Intégration</span>
          <h1>Des solutions IT<br />intégrées clé en main</h1>
          <p>
            Infrastructure, cybersécurité, Cloud : nous concevons et déployons
            des solutions sur mesure pour moderniser et sécuriser votre système d'information.
          </p>
          <Link to="/contact" className="btn-hero">Parler à un expert</Link>
        </div>
      </section>

      {/* DOMAINES — ONGLETS */}
      <section className="integration-domaines">
        <div className="container">
          <h2 className="section-title">Nos domaines d'expertise</h2>

          {/* Tabs */}
          <div className="tabs">
            {domaines.map((d) => (
              <button
                key={d.id}
                className={`tab-btn ${actif === d.id ? 'actif' : ''}`}
                onClick={() => setActif(d.id)}
              >
                <span>{d.icon}</span> {d.titre}
              </button>
            ))}
          </div>

          {/* Contenu de l'onglet actif */}
          <div className="tab-content">
            <div className="tab-text">
              <h3>{domaineActif.accroche}</h3>
              <p>{domaineActif.description}</p>
              <Link to="/contact" className="tab-cta">Nous contacter →</Link>
            </div>
            <div className="tab-services">
              <h4>Ce que nous faisons</h4>
              <ul>
                {domaineActif.services.map((s) => (
                  <li key={s}>
                    <span className="check">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="integration-chiffres">
        <div className="container">
          <div className="chiffres-grid">
            <div className="chiffre-bloc">
              <span className="chiffre-val">3</span>
              <span className="chiffre-label">Domaines d'expertise</span>
            </div>
            <div className="chiffre-bloc">
              <span className="chiffre-val">20+</span>
              <span className="chiffre-label">Années d'expérience</span>
            </div>
            <div className="chiffre-bloc">
              <span className="chiffre-val">100%</span>
              <span className="chiffre-label">Solutions sur mesure</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="integration-cta">
        <div className="container">
          <h2>Un projet d'intégration en vue ?</h2>
          <p>
            Dites-nous où vous en êtes. Nos experts analysent votre contexte
            et vous proposent une solution adaptée à votre infrastructure et votre budget.
          </p>
          <Link to="/contact" className="cta-btn">Démarrer le projet</Link>
        </div>
      </section>

    </div>
  );
}

export default Integration;