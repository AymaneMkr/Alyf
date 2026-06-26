import React from 'react';
import { Link } from 'react-router-dom';
import './ConseilEntreprise.css';
import UiIcon from '../components/UiIcon';

const services = [
  {
    icon: 'monitor',
    titre: 'Assistance & Support',
    texte: "Intervention rapide sur site ou à distance pour résoudre vos incidents informatiques. Nos consultants assurent la continuité de votre activité avec réactivité et expertise.",
  },
  {
    icon: 'shield',
    titre: 'Sécurité informatique',
    texte: "Audit de votre infrastructure, mise en place de politiques de sécurité, gestion des accès et protection contre les cybermenaces. Nous sécurisons vos données et vos systèmes.",
  },
  {
    icon: 'cloud',
    titre: 'Migration Cloud',
    texte: "Accompagnement complet dans votre transition vers le Cloud : audit, planification, migration et suivi. Nous vous aidons à choisir la solution adaptée à votre organisation.",
  },
  {
    icon: 'building',
    titre: 'Infrastructure IT',
    texte: "Conception, déploiement et optimisation de votre infrastructure réseau et serveurs. De la virtualisation à la gestion des postes de travail, nous intervenons à chaque étape.",
  },
  {
    icon: 'briefcase',
    titre: 'Audit & Conseil',
    texte: "Analyse de l'existant, identification des risques et recommandations stratégiques. Nous vous aidons à prendre les bonnes décisions pour votre système d'information.",
  },
  {
    icon: 'refresh',
    titre: 'Maintenance préventive',
    texte: "Suivi régulier de vos équipements, mises à jour et contrôles de performance. Anticipez les pannes et prolongez la durée de vie de votre parc informatique.",
  },
];

const etapes = [
  { num: '01', titre: 'Diagnostic', texte: "Analyse de votre infrastructure et de vos besoins spécifiques." },
  { num: '02', titre: 'Proposition', texte: "Plan d'action détaillé adapté à votre contexte et votre budget." },
  { num: '03', titre: 'Mise en œuvre', texte: "Déploiement par nos consultants avec un suivi rigoureux." },
  { num: '04', titre: 'Suivi', texte: "Accompagnement continu et ajustements selon vos retours." },
];

function ConseilEntreprise() {
  return (
    <div className="conseil-page">

      {/* HERO */}
      <section className="conseil-hero">
        <div className="container">
          <span className="hero-eyebrow">Conseil Entreprise</span>
          <h1>Votre partenaire IT<br />de confiance</h1>
          <p>
            Depuis 2004, Alyf accompagne les PME et ETI dans la gestion,
            l'évolution et la sécurisation de leur système d'information.
            Nos consultants interviennent directement dans vos locaux ou à distance.
          </p>
          <Link to="/contact" className="btn-hero">Demander un diagnostic gratuit</Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="conseil-services">
        <div className="container">
          <h2 className="section-title">Nos domaines d'intervention</h2>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.titre} className="service-card">
                <UiIcon name={s.icon} className="service-icon" />
                <h3>{s.titre}</h3>
                <p>{s.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="pourquoi">
        <div className="container">
          <div className="pourquoi-inner">
            <div className="pourquoi-text">
              <h2>Pourquoi choisir Alyf ?</h2>
              <p>
                Nos consultants sont des professionnels terrain, formateurs et praticiens à la fois.
                Cette double casquette nous permet de vous apporter des solutions concrètes,
                testées et adaptées à la réalité des entreprises.
              </p>
              <ul className="pourquoi-liste">
                <li>✓ Plus de 20 ans d'expérience dans l'IT</li>
                <li>✓ Consultants certifiés Microsoft, Linux et Cloud</li>
                <li>✓ Intervention rapide sur site (région Auvergne-Rhône-Alpes)</li>
                <li>✓ Tarifs adaptés aux PME et ETI</li>
                <li>✓ Approche sur-mesure, pas de solution préformatée</li>
              </ul>
            </div>
            <div className="pourquoi-chiffres">
              <div className="chiffre-item">
                <span className="chiffre-val">20+</span>
                <span className="chiffre-label">Années d'expérience</span>
              </div>
              <div className="chiffre-item">
                <span className="chiffre-val">20 000+</span>
                <span className="chiffre-label">Professionnels accompagnés</span>
              </div>
              <div className="chiffre-item">
                <span className="chiffre-val">100%</span>
                <span className="chiffre-label">Sur-mesure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉTAPES */}
      <section className="etapes">
        <div className="container">
          <h2 className="section-title">Notre méthode</h2>
          <div className="etapes-grid">
            {etapes.map((e, i) => (
              <div key={e.num} className="etape-card">
                {i < etapes.length - 1 && <div className="etape-connector" />}
                <div className="etape-num">{e.num}</div>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="conseil-cta">
        <div className="container">
          <h2>Parlons de votre projet</h2>
          <p>
            Chaque entreprise est unique. Contactez-nous pour un premier échange
            sans engagement, et construisons ensemble la solution adaptée à vos besoins.
          </p>
          <Link to="/contact" className="cta-btn">Prendre contact</Link>
        </div>
      </section>

    </div>
  );
}

export default ConseilEntreprise;