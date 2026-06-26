import React, { useState } from 'react';
import './Contact.css';
import UiIcon from '../components/UiIcon';
import logoQualiopi from '../assets/logo-qualiopi.png';
import logoDatadock from '../assets/logo-datadock.png';

const sujets = [
  "Demande d'information sur une formation",
  "Demande de devis (Conseil Entreprise)",
  "Demande de devis (Intégration)",
  "Inscription à une formation",
  "Partenariat",
  "Autre",
];

function Contact() {
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', societe: '', sujet: '', message: '',
  });
  const [envoye, setEnvoye] = useState(false);
  const [erreur, setErreur]  = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErreur('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.prenom || !form.nom || !form.email || !form.message) {
      setErreur('Merci de remplir tous les champs obligatoires.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setErreur('Adresse email invalide.');
      return;
    }
    // Ici tu brancheras un vrai service d'envoi (EmailJS, Formspree, etc.)
    setEnvoye(true);
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <span className="hero-eyebrow">Contact</span>
          <h1>Parlons de votre projet</h1>
          <p>
            Une question, un projet de formation ou une demande de conseil ?
            Remplissez le formulaire et nous vous répondons sous 24h.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">

            {/* FORMULAIRE */}
            <div className="contact-form-wrap">
              {envoye ? (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <h3>Message envoyé !</h3>
                  <p>Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.</p>
                  <button onClick={() => { setEnvoye(false); setForm({ prenom: '', nom: '', email: '', societe: '', sujet: '', message: '' }); }}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <h2>Nous écrire</h2>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="prenom">Prénom <span className="required">*</span></label>
                      <input
                        type="text" id="prenom" name="prenom"
                        value={form.prenom} onChange={handleChange}
                        placeholder="Jean"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="nom">Nom <span className="required">*</span></label>
                      <input
                        type="text" id="nom" name="nom"
                        value={form.nom} onChange={handleChange}
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email professionnel <span className="required">*</span></label>
                    <input
                      type="email" id="email" name="email"
                      value={form.email} onChange={handleChange}
                      placeholder="jean.dupont@entreprise.fr"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="societe">Société</label>
                    <input
                      type="text" id="societe" name="societe"
                      value={form.societe} onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="sujet">Sujet de votre demande</label>
                    <select id="sujet" name="sujet" value={form.sujet} onChange={handleChange}>
                      <option value="">Sélectionner un sujet</option>
                      {sujets.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea
                      id="message" name="message"
                      value={form.message} onChange={handleChange}
                      placeholder="Décrivez votre demande..."
                      rows={6}
                    />
                  </div>

                  {erreur && <p className="form-erreur">{erreur}</p>}

                  <button type="submit" className="submit-btn">
                    Envoyer le message
                  </button>

                  <p className="form-note">
                    <span className="required">*</span> Champs obligatoires.
                    Vos données ne sont pas transmises à des tiers.
                  </p>
                </form>
              )}
            </div>

            {/* INFOS */}
            <div className="contact-infos">
              <h2>Nos coordonnées</h2>

              <div className="info-bloc">
                <UiIcon name="pin" className="info-icon" />
                <div>
                  <h4>Adresse</h4>
                  <p>55 rue Charles de Gaulle<br />42000 Saint-Étienne</p>
                </div>
              </div>

              <div className="info-bloc">
                <UiIcon name="mail" className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:contact@alyfpro.fr">contact@alyfpro.fr</a>
                </div>
              </div>

              <div className="info-bloc">
                <UiIcon name="clock" className="info-icon" />
                <div>
                  <h4>Délai de réponse</h4>
                  <p>Nous répondons sous 24h ouvrées.</p>
                </div>
              </div>

              <div className="certif-bloc">
                <img className="certif-logo" src={logoQualiopi} alt="Logo Qualiopi" />
                <img className="certif-logo" src={logoDatadock} alt="Logo Datadock" />
              </div>

              {/* Carte Google Maps placeholder */}
              <div className="map-placeholder">
                <iframe
                  title="Localisation Alyf"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775.123!2d4.3922!3d45.4397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z55+rue+Charles+de+Gaulle+42000+Saint-%C3%89tienne!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;