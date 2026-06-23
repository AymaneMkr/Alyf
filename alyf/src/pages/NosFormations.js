import React, { useState, useMemo } from 'react';
import './NosFormations.css';
import { useSearchParams } from 'react-router-dom';

// ── Données ──────────────────────────────────────────────
const formations = [
  // POSTE DE TRAVAIL
  { ref: "MSMD100",    titre: "Windows 10 – Installation, configuration et maintenance", categorie: "Poste de travail",  duree: "5 jours (35h)", tarif: "2 750 €" },
  { ref: "W10-DEPL",   titre: "Déploiement de Windows 10",                               categorie: "Poste de travail",  duree: "3 jours (21h)", tarif: "1 650 €" },
  { ref: "W10-DAM",    titre: "Windows 10 – Déploiement, administration et maintenance", categorie: "Poste de travail",  duree: "3 jours (21h)", tarif: "1 650 €" },
  { ref: "W10-SEC",    titre: "Windows 10 – Sécurité",                                   categorie: "Poste de travail",  duree: "3 jours (21h)", tarif: "2 400 €" },
  { ref: "W10-SUPP",   titre: "Windows 10 – Support et dépannage",                       categorie: "Poste de travail",  duree: "3 jours (21h)", tarif: "1 650 €" },
  // LINUX
  { ref: "LUX-FO",     titre: "Linux – Les fondamentaux",                                categorie: "Linux",             duree: "4 jours (28h)", tarif: "2 000 €" },
  { ref: "LUX-DBADM",  titre: "Linux Debian – Administration",                           categorie: "Linux",             duree: "5 jours (35h)", tarif: "2 500 €" },
  { ref: "LUX-RES",    titre: "Linux – Configuration des services réseaux",              categorie: "Linux",             duree: "4 jours (28h)", tarif: "2 200 €" },
  { ref: "LUX-SH",     titre: "Linux – Programmation Shell Bash",                        categorie: "Linux",             duree: "4 jours (28h)", tarif: "2 000 €" },
  // MESSAGERIE
  { ref: "MS20345-1",  titre: "Exchange Server 2016 – Administration",                   categorie: "Messagerie",        duree: "5 jours (35h)", tarif: "2 800 €" },
  { ref: "MS20345-2",  titre: "Exchange Server 2016 – Conception et déploiement",        categorie: "Messagerie",        duree: "5 jours (35h)", tarif: "2 800 €" },
  { ref: "XCH19-ACT",  titre: "Exchange Server 2019 – Actualisation des connaissances", categorie: "Messagerie",        duree: "2 jours (14h)", tarif: "1 200 €" },
  { ref: "XCH19-ADM",  titre: "Exchange Server 2019 – Administration",                   categorie: "Messagerie",        duree: "4 jours (28h)", tarif: "2 200 €" },
  // WINDOWS SERVEUR
  { ref: "MS22740",    titre: "Windows Server 2016 – Installation, stockage et virtualisation", categorie: "Windows Serveur", duree: "5 jours (35h)", tarif: "2 800 €" },
  { ref: "MS22741",    titre: "Windows Server 2016 – Mise en réseau",                    categorie: "Windows Serveur",   duree: "5 jours (35h)", tarif: "2 800 €" },
  { ref: "MS22742",    titre: "Windows Server 2016 – Identité et accès aux données",     categorie: "Windows Serveur",   duree: "5 jours (35h)", tarif: "2 800 €" },
  { ref: "MS22743",    titre: "Windows Server 2016 – Mise à jour des connaissances",     categorie: "Windows Serveur",   duree: "5 jours (35h)", tarif: "2 800 €" },
  { ref: "MS22744",    titre: "Windows Server 2016 – Sécurisation de l'infrastructure",  categorie: "Windows Serveur",   duree: "5 jours (35h)", tarif: "2 800 €" },
  { ref: "WS19-ACT",   titre: "Windows Server 2019 – Actualisation depuis WS 2016",      categorie: "Windows Serveur",   duree: "3 jours (21h)", tarif: "1 800 €" },
  { ref: "WS19-FND",   titre: "Windows Server 2019 – Les bases de l'administration",     categorie: "Windows Serveur",   duree: "5 jours (35h)", tarif: "2 750 €" },
  { ref: "WS19-IMPL",  titre: "Windows Server 2019 – Implémenter une infrastructure",    categorie: "Windows Serveur",   duree: "4 jours (28h)", tarif: "2 200 €" },
  { ref: "WS19-DOCK",  titre: "Windows Server 2019 – Docker",                            categorie: "Windows Serveur",   duree: "3 jours (21h)", tarif: "1 980 €" },
  { ref: "WS19-SEC",   titre: "Windows Server 2019 – Sécurité Niveau 1",                 categorie: "Windows Serveur",   duree: "4 jours (28h)", tarif: "2 400 €" },
  // MICROSOFT 365
  { ref: "MS10997",    titre: "Office 365 – Administration et troubleshooting",           categorie: "Microsoft 365",     duree: "3 jours (21h)", tarif: "1 800 €" },
  { ref: "MSMS900",    titre: "Microsoft 365 – Fondamentaux",                             categorie: "Microsoft 365",     duree: "1 jour (7h)",   tarif: "700 €"   },
  { ref: "MSMS030",    titre: "Microsoft 365 – Administration",                           categorie: "Microsoft 365",     duree: "5 jours (35h)", tarif: "3 000 €" },
  { ref: "MSMS500",    titre: "Microsoft 365 – Administration de la sécurité",            categorie: "Microsoft 365",     duree: "4 jours (28h)", tarif: "2 400 €" },
  { ref: "MSMS100",    titre: "Microsoft 365 – Migration On-Premise vers le Cloud",       categorie: "Microsoft 365",     duree: "5 jours (35h)", tarif: "3 000 €" },
  // DEVOPS
  { ref: "DO500",      titre: "DevOps – Culture et pratiques",                            categorie: "DevOps",            duree: "5 jours (35h)", tarif: "5 775 €" },
  { ref: "DVO-OUT",    titre: "Culture DevOps et nouveaux outils",                        categorie: "DevOps",            duree: "3 jours (21h)", tarif: "2 250 €" },
  // CLOUD
  { ref: "CLOUD-TC",   titre: "Connaissance du Cloud",                                    categorie: "Cloud",             duree: "2 jours (14h)", tarif: "1 500 €" },
  { ref: "CLOUD-GS",   titre: "Cloud – Gouvernance et sécurité",                          categorie: "Cloud",             duree: "3 jours (21h)", tarif: "2 250 €" },
  { ref: "CLOUD-MULTI",titre: "Architecture Multi-Cloud",                                  categorie: "Cloud",             duree: "3 jours (21h)", tarif: "2 250 €" },
  { ref: "CLOUD-MIGR", titre: "Les bonnes pratiques de la migration vers le Cloud",        categorie: "Cloud",             duree: "3 jours (21h)", tarif: "2 250 €" },
  { ref: "MSAZ900T00", titre: "Microsoft Azure – Fondamentaux",                            categorie: "Cloud",             duree: "2 jours (14h)", tarif: "1 200 €" },
  { ref: "MSAZ104",    titre: "Microsoft Azure – Administrateur",                          categorie: "Cloud",             duree: "4 jours (28h)", tarif: "2 400 €" },
];

const categories = ["Toutes", "Poste de travail", "Linux", "Messagerie", "Windows Serveur", "Microsoft 365", "DevOps", "Cloud"];

const categorieColors = {
  "Poste de travail": "#0077cc",
  "Linux":            "#e8720c",
  "Messagerie":       "#7c3aed",
  "Windows Serveur":  "#0f766e",
  "Microsoft 365":    "#0369a1",
  "DevOps":           "#b91c1c",
  "Cloud":            "#1d4ed8",
};

const modalites = [
  { icon: "🏢", titre: "Intra-entreprise",    texte: "Formation dans vos locaux, adaptée à votre contexte et vos outils." },
  { icon: "👥", titre: "Inter-entreprise",    texte: "Rejoignez un groupe dans nos locaux ou en distanciel." },
  { icon: "🎯", titre: "Sur-mesure",          texte: "Programme entièrement personnalisé selon vos objectifs." },
  { icon: "♿", titre: "Accessibilité",       texte: "Toutes nos formations sont adaptables aux situations de handicap." },
];

// ── Composant carte ───────────────────────────────────────
function CarteFormation({ formation }) {
  const couleur = categorieColors[formation.categorie] || "#002147";

  return (
    <div className="carte">
      <div className="carte-header">
        <span className="carte-categorie" style={{ color: couleur, borderColor: couleur }}>
          {formation.categorie}
        </span>
        <span className="carte-ref">Réf. {formation.ref}</span>
      </div>
      <h3 className="carte-titre">{formation.titre}</h3>
      <div className="carte-infos">
        <span className="carte-info">
          <span className="info-icon">⏱</span> {formation.duree}
        </span>
        <span className="carte-info">
          <span className="info-icon">💶</span> {formation.tarif}
        </span>
      </div>
      <a
        href={`/formations/${formation.ref}.pdf`}
        className="carte-btn"
        style={{ '--btn-color': couleur }}
        target="_blank"
        rel="noreferrer"
      >
        Voir la fiche →
      </a>
    </div>
  );
}

// ── Page principale ───────────────────────────────────────
function NosFormations() {
  const [searchParams] = useSearchParams();
    const [categorieActive, setCategorieActive] = useState(
      searchParams.get('cat') || "Toutes"
    );
    const [recherche, setRecherche] = useState(
      searchParams.get('q') || ""
    );

  const formationsFiltrees = useMemo(() => {
    return formations.filter((f) => {
      const matchCat = categorieActive === "Toutes" || f.categorie === categorieActive;
      const matchSearch = f.titre.toLowerCase().includes(recherche.toLowerCase())
                       || f.ref.toLowerCase().includes(recherche.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [categorieActive, recherche]);

  return (
    <div className="formations-page">

      {/* HERO */}
      <section className="formations-hero">
        <div className="container">
          <h1>Nos Formations</h1>
          <p>
            Des formations IT dispensées par des consultants confirmés,
            au plus près de la réalité terrain.
            <strong> 36 formations</strong> disponibles dans 7 domaines.
          </p>
        </div>
      </section>

      {/* MODALITÉS */}
      <section className="modalites">
        <div className="container">
          <h2 className="section-title">Nos modalités</h2>
          <div className="modalites-grid">
            {modalites.map((m) => (
              <div key={m.titre} className="modalite-card">
                <span className="modalite-icon">{m.icon}</span>
                <h3>{m.titre}</h3>
                <p>{m.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="catalogue">
        <div className="container">
          <h2 className="section-title">Catalogue de formations</h2>

          {/* Barre de recherche */}
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Rechercher une formation ou une référence..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
            />
            {recherche && (
              <button className="search-clear" onClick={() => setRecherche("")}>✕</button>
            )}
          </div>

          {/* Filtres */}
          <div className="filtres">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filtre-btn ${categorieActive === cat ? "actif" : ""}`}
                style={categorieActive === cat && cat !== "Toutes"
                  ? { backgroundColor: categorieColors[cat], borderColor: categorieColors[cat] }
                  : {}
                }
                onClick={() => setCategorieActive(cat)}
              >
                {cat}
                <span className="filtre-count">
                  {cat === "Toutes"
                    ? formations.length
                    : formations.filter(f => f.categorie === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Résultats */}
          <div className="resultats-info">
            {formationsFiltrees.length} formation{formationsFiltrees.length > 1 ? "s" : ""} trouvée{formationsFiltrees.length > 1 ? "s" : ""}
          </div>

          {/* Grille */}
          {formationsFiltrees.length > 0 ? (
            <div className="catalogue-grid">
              {formationsFiltrees.map((f) => (
                <CarteFormation key={f.ref} formation={f} />
              ))}
            </div>
          ) : (
            <div className="aucun-resultat">
              <p>Aucune formation ne correspond à votre recherche.</p>
              <button onClick={() => { setRecherche(""); setCategorieActive("Toutes"); }}>
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="formations-cta">
        <div className="container">
          <h2>Vous ne trouvez pas votre formation ?</h2>
          <p>Nos formations sont adaptables et sur-mesure. Contactez-nous pour construire un programme qui correspond à vos besoins.</p>
          <a href="/contact" className="cta-btn">Nous contacter</a>
        </div>
      </section>

    </div>
  );
}

export default NosFormations;