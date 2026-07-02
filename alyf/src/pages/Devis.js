import React, { useState } from 'react';
import './Devis.css';
import emailjs from '@emailjs/browser';

const sujets = [
  "Formation intra-entreprise",
  "Formation inter-entreprise",
  "Formation sur-mesure",
  "Conseil IT / Accompagnement",
  "Intégration / Infrastructure",
  "Autre",
];

const EMAILJS_SERVICE  = 'service_2r438ym';
const EMAILJS_TEMPLATE = 'template_xowoayd';
const EMAILJS_KEY      = 'Ram0JKa-swWAfXAEy';

function Devis() {
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', societe: '', sujet: '', message: '',
  });
  const [envoye, setEnvoye] = useState(false);
  const [erreur, setErreur] = useState('');
  const [loading, setLoading] = useState(false);

  const messageObligatoire = form.sujet === 'Autre';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErreur('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.prenom || !form.nom || !form.email || !form.message) {
      setErreur('Merci de remplir tous les champs obligatoires.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setErreur('Adresse email invalide.');
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          prenom:  form.prenom,
          nom:     form.nom,
          email:   form.email,
          societe: form.societe || 'Non renseignée',
          sujet:   form.sujet   || 'Non renseigné',
          message: form.message,
        },
        EMAILJS_KEY
      );
      setEnvoye(true);
    } catch (err) {
      setErreur('Une erreur est survenue lors de l\'envoi. Réessayez ou contactez-nous directement.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setEnvoye(false);
    setForm({ prenom: '', nom: '', email: '', societe: '', sujet: '', message: '' });
  };

  return (
    <div className="devis-page">

      <section className="devis-hero">
        <div className="container">
          <h1>Demander un devis</h1>
          <p>
            Intra, inter ou sur-mesure : dites-nous ce dont vous avez besoin,
            nous vous répondons sous 24h avec une proposition adaptée.
          </p>
        </div>
      </section>

      <section className="devis-main">
        <div className="container">
          <div className="devis-wrap">
            {envoye ? (
              <div className="success-message">
                <span className="success-icon">✓</span>
                <h3>Demande envoyée !</h3>
                <p>Nous avons bien reçu votre demande de devis et vous recontacterons sous 24h ouvrées.</p>
                <button onClick={reset}>Envoyer une autre demande</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="devis-form" noValidate>
                <h2>Demander un devis</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="prenom">Prénom <span className="required">*</span></label>
                    <input type="text" id="prenom" name="prenom"
                      value={form.prenom} onChange={handleChange} placeholder="Jean" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nom">Nom <span className="required">*</span></label>
                    <input type="text" id="nom" name="nom"
                      value={form.nom} onChange={handleChange} placeholder="Dupont" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email professionnel <span className="required">*</span></label>
                  <input type="email" id="email" name="email"
                    value={form.email} onChange={handleChange}
                    placeholder="jean.dupont@entreprise.fr" />
                </div>

                <div className="form-group">
                  <label htmlFor="societe">Société</label>
                  <input type="text" id="societe" name="societe"
                    value={form.societe} onChange={handleChange}
                    placeholder="Nom de votre entreprise" />
                </div>

                {/* ── SUJET SÉLECTION ── */}
                <div className="form-group">
                  <label htmlFor="sujet">Type de demande</label>
                  <div className="sujet-grid">
                    {sujets.map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`sujet-btn ${form.sujet === s ? 'actif' : ''}`}
                        onClick={() => { setForm({ ...form, sujet: s }); setErreur(''); }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── MESSAGE ── */}
                <div className="form-group">
                  <label htmlFor="message">
                    Message{messageObligatoire
                      ? <span className="required"> *</span>
                      : <span className="optional"> (facultatif)</span>}
                  </label>
                  <textarea id="message" name="message"
                    value={form.message} onChange={handleChange}
                    placeholder={messageObligatoire
                      ? "Précisez votre demande..."
                      : "Des informations complémentaires ? (nombre de participants, dates souhaitées, niveau, etc.)"}
                    rows={5}
                  />
                  {messageObligatoire && (
                    <span className="field-hint">
                      Vous avez sélectionné "Autre" — merci de préciser votre demande.
                    </span>
                  )}
                </div>

                {erreur && <p className="form-erreur">{erreur}</p>}

                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
                </button>

                <p className="form-note">
                  <span className="required">*</span> Champs obligatoires.
                  Vos données ne sont pas transmises à des tiers.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Devis;