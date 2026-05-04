import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

const T = {
  fr: {
    heroTitle: "Inspection aérienne et sous-marine par drone & ROV",
    heroDesc: "Solutions innovantes pour l'inspection industrielle, maritime, fluviale et infrastructurelle.",
    heroTag: "Sécurité · Précision · Réduction des coûts",
    svcTitle: "Nos services",
    droneTitle: "Drone aérien",
    droneList: ["Inspection toiture & bâtiment","Inspection photovoltaïque","Inspection industrielle","Inspection infrastructures","Inspection lignes électriques","Thermographie"],
    rovTitle: "ROV sous-marin",
    rovList: ["Inspection offshore & maritime","Inspection portuaire","Inspection barrages","Inspection puits","Inspection fluviale","Ouvrages hydrauliques"],
    whyTitle: "Pourquoi nous choisir",
    w1: "Rapports HD détaillés", w1s: "Documentation complète",
    w2: "Interventions rapides", w2s: "Délais optimisés",
    w3: "Technologies avancées", w3s: "Drone & ROV de pointe",
    contactTitle: "Contact", contactSub: "Devis gratuit et rapide",
  },
  en: {
    heroTitle: "Aerial and underwater inspection by drone & ROV",
    heroDesc: "Innovative solutions for industrial, maritime, river and infrastructure inspection.",
    heroTag: "Safety · Precision · Cost reduction",
    svcTitle: "Our services",
    droneTitle: "Aerial drone",
    droneList: ["Roof & building inspection","Photovoltaic inspection","Industrial inspection","Infrastructure inspection","Power line inspection","Thermography"],
    rovTitle: "Underwater ROV",
    rovList: ["Offshore & maritime inspection","Port inspection","Dam inspection","Well inspection","River inspection","Hydraulic structures"],
    whyTitle: "Why choose us",
    w1: "Detailed HD reports", w1s: "Complete documentation",
    w2: "Fast interventions", w2s: "Optimized deadlines",
    w3: "Advanced technologies", w3s: "Cutting-edge drone & ROV",
    contactTitle: "Contact", contactSub: "Free and fast quote",
  },
  it: {
    heroTitle: "Ispezione aerea e subacquea con drone e ROV",
    heroDesc: "Soluzioni innovative per ispezioni industriali, marittime, fluviali e infrastrutturali.",
    heroTag: "Sicurezza · Precisione · Riduzione dei costi",
    svcTitle: "I nostri servizi",
    droneTitle: "Drone aereo",
    droneList: ["Ispezione tetto e edificio","Ispezione fotovoltaico","Ispezione industriale","Ispezione infrastrutture","Ispezione linee elettriche","Termografia"],
    rovTitle: "ROV subacqueo",
    rovList: ["Ispezione offshore e marittima","Ispezione portuale","Ispezione dighe","Ispezione pozzi","Ispezione fluviale","Opere idrauliche"],
    whyTitle: "Perché sceglierci",
    w1: "Rapporti HD dettagliati", w1s: "Documentazione completa",
    w2: "Interventi rapidi", w2s: "Tempi ottimizzati",
    w3: "Tecnologie avanzate", w3s: "Drone & ROV all'avanguardia",
    contactTitle: "Contatto", contactSub: "Preventivo gratuito e rapido",
  },
  es: {
    heroTitle: "Inspección aérea y submarina con drone y ROV",
    heroDesc: "Soluciones innovadoras para inspecciones industriales, marítimas, fluviales e infraestructurales.",
    heroTag: "Seguridad · Precisión · Reducción de costes",
    svcTitle: "Nuestros servicios",
    droneTitle: "Drone aéreo",
    droneList: ["Inspección de techos y edificios","Inspección fotovoltaica","Inspección industrial","Inspección de infraestructuras","Inspección de líneas eléctricas","Termografía"],
    rovTitle: "ROV submarino",
    rovList: ["Inspección offshore y marítima","Inspección portuaria","Inspección de presas","Inspección de pozos","Inspección fluvial","Obras hidráulicas"],
    whyTitle: "Por qué elegirnos",
    w1: "Informes HD detallados", w1s: "Documentación completa",
    w2: "Intervenciones rápidas", w2s: "Plazos optimizados",
    w3: "Tecnologías avanzadas", w3s: "Drone & ROV de vanguardia",
    contactTitle: "Contacto", contactSub: "Presupuesto gratuito y rápido",
  },
};

type Lang = "fr" | "en" | "it" | "es";

const DroneIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="20" width="12" height="8" rx="2" fill="#1a3a6b"/>
    <rect x="22" y="18" width="4" height="12" rx="1" fill="#2a5a9b"/>
    <rect x="4" y="14" width="10" height="4" rx="2" fill="#1a3a6b"/>
    <rect x="34" y="14" width="10" height="4" rx="2" fill="#1a3a6b"/>
    <rect x="4" y="30" width="10" height="4" rx="2" fill="#1a3a6b"/>
    <rect x="34" y="30" width="10" height="4" rx="2" fill="#1a3a6b"/>
    <line x1="14" y1="16" x2="18" y2="22" stroke="#1a3a6b" strokeWidth="2"/>
    <line x1="34" y1="16" x2="30" y2="22" stroke="#1a3a6b" strokeWidth="2"/>
    <line x1="14" y1="32" x2="18" y2="26" stroke="#1a3a6b" strokeWidth="2"/>
    <line x1="34" y1="32" x2="30" y2="26" stroke="#1a3a6b" strokeWidth="2"/>
    <circle cx="9" cy="13" r="3" fill="#7eb8f7"/>
    <circle cx="39" cy="13" r="3" fill="#7eb8f7"/>
    <circle cx="9" cy="35" r="3" fill="#7eb8f7"/>
    <circle cx="39" cy="35" r="3" fill="#7eb8f7"/>
    <circle cx="24" cy="24" r="3" fill="#7eb8f7"/>
  </svg>
);

const ROVIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="16" width="28" height="18" rx="3" fill="#1a3a6b"/>
    <rect x="14" y="20" width="8" height="6" rx="1" fill="#7eb8f7"/>
    <circle cx="30" cy="23" r="4" fill="#0d2040" stroke="#7eb8f7" strokeWidth="1.5"/>
    <circle cx="30" cy="23" r="2" fill="#7eb8f7"/>
    <rect x="16" y="12" width="16" height="4" rx="1" fill="#2a5a9b"/>
    <rect x="6" y="20" width="4" height="3" rx="1" fill="#2a5a9b"/>
    <rect x="38" y="20" width="4" height="3" rx="1" fill="#2a5a9b"/>
    <rect x="14" y="34" width="5" height="5" rx="1" fill="#2a5a9b"/>
    <rect x="29" y="34" width="5" height="5" rx="1" fill="#2a5a9b"/>
    <line x1="20" y1="39" x2="20" y2="44" stroke="#2a5a9b" strokeWidth="2"/>
    <line x1="32" y1="39" x2="32" y2="44" stroke="#2a5a9b" strokeWidth="2"/>
    <path d="M6 38 Q12 34 18 38" stroke="#7eb8f7" strokeWidth="1.5" fill="none" strokeDasharray="2,2"/>
    <path d="M14 42 Q24 38 34 42" stroke="#7eb8f7" strokeWidth="1.5" fill="none" strokeDasharray="2,2"/>
  </svg>
);

function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = T[lang];

  const flags: { code: Lang; flag: string }[] = [
    { code: "fr", flag: "🇫🇷" },
    { code: "en", flag: "🇬🇧" },
    { code: "it", flag: "🇮🇹" },
    { code: "es", flag: "🇪🇸" },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222", maxWidth: "100%", overflowX: "hidden" }}>

      {/* HEADER */}
      <div style={{ background: "#0a1628", color: "white", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={logo} alt="Logo" style={{ width: 60, height: 60, objectFit: "contain" }} />
          <span style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.3 }}>Drone ROV Service<br />International</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {flags.map(({ code, flag }) => (
            <button key={code} onClick={() => setLang(code)} style={{ fontSize: 22, background: lang === code ? "rgba(255,255,255,0.2)" : "none", border: "none", cursor: "pointer", borderRadius: 4, padding: "4px 6px", opacity: lang === code ? 1 : 0.55 }}>
              {flag}
            </button>
          ))}
        </div>
      </div>

      {/* HERO */}
      <div style={{ background: "#0d2040", color: "white", padding: "56px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 700, marginBottom: 14, lineHeight: 1.4, maxWidth: 700, margin: "0 auto 14px" }}>{t.heroTitle}</h1>
        <p style={{ fontSize: "clamp(13px, 2vw, 16px)", opacity: 0.85, maxWidth: 560, margin: "0 auto 10px", lineHeight: 1.6 }}>{t.heroDesc}</p>
        <p style={{ fontSize: 13, opacity: 0.65, fontStyle: "italic" }}>{t.heroTag}</p>
      </div>

      {/* SERVICES */}
      <div style={{ padding: "48px 24px", background: "#f5f7fa" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(17px, 2.5vw, 22px)", marginBottom: 28, color: "#0a1628" }}>{t.svcTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, maxWidth: 780, margin: "0 auto" }}>
          {[
            { title: t.droneTitle, list: t.droneList, icon: <DroneIcon /> },
            { title: t.rovTitle, list: t.rovList, icon: <ROVIcon /> }
          ].map(({ title, list, icon }) => (
            <div key={title} style={{ background: "white", borderRadius: 12, padding: 24, border: "1px solid #e0e4ea" }}>
              <div style={{ marginBottom: 12 }}>{icon}</div>
              <h3 style={{ fontSize: 17, color: "#0a1628", marginBottom: 12, fontWeight: 700 }}>{title}</h3>
              <ul style={{ listStyle: "none", padding: 0, fontSize: 14, color: "#444" }}>
                {list.map((s) => <li key={s} style={{ padding: "4px 0", borderBottom: "1px solid #f0f0f0" }}>✔ {s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* POURQUOI NOUS */}
      <div style={{ padding: "48px 24px", background: "white" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(17px, 2.5vw, 22px)", marginBottom: 24, color: "#0a1628" }}>{t.whyTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, maxWidth: 700, margin: "0 auto" }}>
          {[["📋", t.w1, t.w1s], ["⚡", t.w2, t.w2s], ["🛡️", t.w3, t.w3s]].map(([icon, title, sub]) => (
            <div key={String(title)} style={{ textAlign: "center", padding: "20px 14px", background: "#eef2ff", borderRadius: 10 }}>
              <div style={{ fontSize: 24 }}>{icon}</div>
              <strong style={{ display: "block", fontSize: 14, color: "#0a1628", marginTop: 8 }}>{title}</strong>
              <span style={{ fontSize: 12, color: "#666" }}>{sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ background: "#0a1628", color: "white", padding: "48px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(17px, 2.5vw, 22px)", marginBottom: 16 }}>{t.contactTitle}</h2>
        <a href="mailto:info.drsinternational@gmail.com" style={{ color: "#7eb8f7", fontSize: 16, textDecoration: "none" }}>
          info.drsinternational@gmail.com
        </a>
        <p style={{ fontSize: 13, opacity: 0.65, marginTop: 8 }}>{t.contactSub}</p>
      </div>

    </div>
  );
}

export default App;
