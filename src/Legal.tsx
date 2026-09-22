import { useState, useEffect, type ReactNode, type CSSProperties } from "react";

const COMPANY = {
  name: "Drone ROV Service International (DRSI)",
  status: "Entrepreneur individuel (auto-entrepreneur / micro-entreprise)",
  siret: "839 423 688 00028",
  address: "211 quartier de l'Église, 83570 Carcès, France", // ⚠️ à mettre à jour dès la nouvelle domiciliation effective
  email: "contact@drone-rov-service.com",
};

// ---------- Modal générique ----------
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
      onClick={onClose}
    >
      <div
        style={{ background: "#fff", borderRadius: 12, maxWidth: 640, width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "28px 24px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ fontSize: 20, color: "#0a1628", margin: 0 }}>{title}</h2>
          <button onClick={onClose} aria-label="Fermer" style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#666" }}>
            ×
          </button>
        </div>
        <div style={{ fontSize: 14, color: "#333", lineHeight: 1.7 }}>{children}</div>
      </div>
    </div>
  );
}

// ---------- Mentions légales ----------
export function MentionsLegalesModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal title="Mentions légales" onClose={onClose}>
      <p>
        <strong>Éditeur du site</strong>
        <br />
        Nom commercial : {COMPANY.name}
        <br />
        Statut : {COMPANY.status}
        <br />
        SIRET : {COMPANY.siret}
        <br />
        Adresse : {COMPANY.address}
        <br />
        Email : <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        <br />
        Directeur de la publication : [Dom]
      </p>

      <p>
        <strong>Hébergement</strong>
        <br />
        Le site est hébergé par :
        <br />
        Vercel Inc., 440 North Barranca Avenue, Suite 4133, Covina, California 91723, États-Unis — support@vercel.com
        <br />
        et/ou OVH SAS, 2 rue Kellermann, 59100 Roubaix, France
      </p>

      <p>
        <strong>Propriété intellectuelle</strong>
        <br />
        L'ensemble des contenus (textes, images, logo, structure) présents sur ce site est protégé par le droit
        d'auteur. Toute reproduction, même partielle, sans autorisation préalable est interdite.
      </p>
    </Modal>
  );
}

// ---------- Politique de confidentialité ----------
export function PolitiqueConfidentialiteModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal title="Politique de confidentialité" onClose={onClose}>
      <p>
        <strong>1. Responsable du traitement</strong>
        <br />
        {COMPANY.name}, {COMPANY.status}, SIRET {COMPANY.siret} — {COMPANY.email}
      </p>

      <p>
        <strong>2. Données collectées</strong>
        <br />
        — Via le formulaire de contact : nom, email, message et, le cas échéant, téléphone.
        <br />
        — Via les cookies : données de navigation à des fins de mesure d'audience (voir section Cookies).
      </p>

      <p>
        <strong>3. Finalités et base légale</strong>
        <br />
        Les données du formulaire sont utilisées pour répondre à vos demandes de devis ou de contact, sur la base de
        votre consentement (art. 6.1.a du RGPD). Les cookies non essentiels ne sont déposés qu'avec votre
        consentement.
      </p>

      <p>
        <strong>4. Destinataires</strong>
        <br />
        Vos données sont destinées uniquement à {COMPANY.name}. Elles peuvent être traitées techniquement par nos
        prestataires d'hébergement (Vercel, OVHcloud) et notre outil de mesure d'audience, dans le cadre strict de
        leur fonction.
      </p>

      <p>
        <strong>5. Durée de conservation</strong>
        <br />
        Les données issues du formulaire de contact sont conservées 3 ans maximum à compter du dernier échange. Les
        cookies ont une durée de vie maximale de 13 mois.
      </p>

      <p>
        <strong>6. Vos droits</strong>
        <br />
        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation,
        d'opposition et de portabilité de vos données. Pour l'exercer, contactez-nous à{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Vous pouvez également introduire une réclamation
        auprès de la CNIL (www.cnil.fr).
      </p>

      <p>
        <strong>7. Cookies</strong>
        <br />
        Ce site utilise un cookie de mesure d'audience (compteur de visites Flag Counter) qui n'est déposé qu'avec
        votre consentement, recueilli via le bandeau affiché lors de votre première visite. Vous pouvez retirer
        votre consentement à tout moment en réinitialisant vos préférences depuis ce même bandeau.
      </p>

      <p>
        <strong>8. Transfert de données hors UE</strong>
        <br />
        Certains de nos prestataires techniques (notamment Vercel Inc.) sont basés aux États-Unis. Ces transferts
        sont encadrés par les garanties prévues par le RGPD (clauses contractuelles types).
      </p>
    </Modal>
  );
}

// ---------- Liens de pied de page ----------
const linkBtnStyle: CSSProperties = {
  background: "none",
  border: "none",
  color: "#7eb8f7",
  textDecoration: "underline",
  cursor: "pointer",
  fontSize: 12,
  padding: 0,
};

export function LegalFooterLinks() {
  const [open, setOpen] = useState<"mentions" | "confidentialite" | null>(null);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 20, fontSize: 12, opacity: 0.8, flexWrap: "wrap" }}>
        <button onClick={() => setOpen("mentions")} style={linkBtnStyle}>
          Mentions légales
        </button>
        <button onClick={() => setOpen("confidentialite")} style={linkBtnStyle}>
          Politique de confidentialité
        </button>
      </div>
      {open === "mentions" && <MentionsLegalesModal onClose={() => setOpen(null)} />}
      {open === "confidentialite" && <PolitiqueConfidentialiteModal onClose={() => setOpen(null)} />}
    </>
  );
}

// ---------- Bandeau cookies (pop-up) ----------
export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ audience: true, date: Date.now() }));
    setVisible(false);
  };
  const refuse = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ audience: false, date: Date.now() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#0a1628",
        color: "white",
        padding: "18px 20px",
        zIndex: 2000,
        boxShadow: "0 -4px 16px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, justifyContent: "space-between" }}>
        <p style={{ fontSize: 13, margin: 0, flex: "1 1 320px", lineHeight: 1.6 }}>
          Nous utilisons un cookie de mesure d'audience pour améliorer votre expérience. Vous pouvez accepter,
          refuser, ou en savoir plus.
          {showDetails && (
            <span style={{ display: "block", marginTop: 8, opacity: 0.8 }}>
              Cookie utilisé : compteur de visites (Flag Counter), déposé uniquement si vous acceptez. Aucune donnée
              personnelle identifiable n'est collectée à cette fin. Voir notre politique de confidentialité pour
              plus de détails.
            </span>
          )}
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={() => setShowDetails((s) => !s)}
            style={{ background: "none", border: "1px solid rgba(255,255,255,0.4)", color: "white", padding: "8px 14px", borderRadius: 6, cursor: "pointer", fontSize: 13 }}
          >
            {showDetails ? "Masquer" : "En savoir plus"}
          </button>
          <button
            onClick={refuse}
            style={{ background: "none", border: "1px solid rgba(255,255,255,0.4)", color: "white", padding: "8px 14px", borderRadius: 6, cursor: "pointer", fontSize: 13 }}
          >
            Refuser
          </button>
          <button
            onClick={accept}
            style={{ background: "#2a6fdb", border: "none", color: "white", padding: "8px 14px", borderRadius: 6, cursor: "pointer", fontSize: 13, fontWeight: 600 }}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
