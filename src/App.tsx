import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import droneImg from "./assets/drone.webp";
import rovImg from "./assets/rov.jpg";

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
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222", width: "100%", margin: 0, padding: 0 }}>

      <div style={{ background: "#0a1628", color: "white", padding: "28px 16px 20px", textAlign: "center", width: "100%" }}>
        <img src={logo} alt="Logo" style={{ width: 120, height: 120, objectFit: "contain", marginBottom: 10 }} />
        <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: 0.5, marginBottom: 14 }}>
          Drone ROV Service International
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
          {flags.map(({ code, flag }) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              style={{
                fontSize: 28,
                background: lang === code ? "rgba(255,255,255,0.2)" : "none",
                border: "none",
                cursor: "pointer",
                borderRadius: 6,
                padding: "4px 8px",
                opacity: lang === code ? 1 : 0.5,
              }}
            >
              {flag}
            </button>
          ))}
        </div>
      </div>

      <div style={{ background: "#0d2040", color: "white", padding: "52px 24px", textAlign: "center", width: "100%" }}>
        <h1 style={{ fontSize: "clamp(20px, 3.5vw, 32px)", fontWeight: 700, lineHeight: 1.4, maxWidth: 700, margin: "0 auto 16px" }}>
          {t.heroTitle}
        </h1>
        <p style={{ fontSize: "clamp(14px, 2vw, 17px)", opacity: 0.85, maxWidth: 580, margin: "0 auto 12px", lineHeight: 1.7 }}>
          {t.heroDesc}
        </p>
        <p style={{ fontSize: 14, opacity: 0.6, fontStyle: "italic" }}>{t.heroTag}</p>
      </div>

      <div style={{ padding: "52px 24px", background: "#f5f7fa", width: "100%" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(18px, 2.5vw, 24px)", marginBottom: 32, color: "#0a1628" }}>
          {t.svcTitle}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 860, margin: "0 auto" }}>
          <div style={{ background: "white", borderRadius: 14, overflow: "hidden", border: "1px solid #e0e4ea" }}>
            <img src={droneImg} alt="Drone" style={{ width: "100%", height: 220, objectFit: "contain", background: "#f0f4ff", padding: 12 }} />
            <div style={{ padding: "20px 24px" }}>
              <h3 style={{ fontSize: 18, color: "#0a1628", marginBottom: 14, fontWeight: 700 }}>{t.droneTitle}</h3>
              <ul style={{ listStyle: "none", padding: 0, fontSize: 14, color: "#444" }}>
                {t.droneList.map((s) => (
                  <li key={s} style={{ padding: "5px 0", borderBottom: "1px solid #f0f0f0" }}>✔ {s}</li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ background: "white", borderRadius: 14, overflow: "hidden", border: "1px solid #e0e4ea" }}>
            <img src={rovImg} alt="ROV" style={{ width: "100%", height: 220, objectFit: "contain", background: "#0a1628" }} />
            <div style={{ padding: "20px 24px" }}>
              <h3 style={{ fontSize: 18, color: "#0a1628", marginBottom: 14, fontWeight: 700 }}>{t.rovTitle}</h3>
              <ul style={{ listStyle: "none", padding: 0, fontSize: 14, color: "#444" }}>
                {t.rovList.map((s) => (
                  <li key={s} style={{ padding: "5px 0", borderBottom: "1px solid #f0f0f0" }}>✔ {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "52px 24px", background: "white", width: "100%" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(18px, 2.5vw, 24px)", marginBottom: 28, color: "#0a1628" }}>
          {t.whyTitle}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, maxWidth: 760, margin: "0 auto" }}>
          {([["📋", t.w1, t.w1s], ["⚡", t.w2, t.w2s], ["🛡️", t.w3, t.w3s]] as [string, string, string][]).map(([icon, title, sub]) => (
            <div key={title} style={{ textAlign: "center", padding: "24px 16px", background: "#eef2ff", borderRadius: 12 }}>
              <div style={{ fontSize: 28 }}>{icon}</div>
              <strong style={{ display: "block", fontSize: 15, color: "#0a1628", marginTop: 10 }}>{title}</strong>
              <span style={{ fontSize: 13, color: "#666" }}>{sub}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "#0a1628", color: "white", padding: "52px 24px", textAlign: "center", width: "100%" }}>
        <h2 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", marginBottom: 18 }}>{t.contactTitle}</h2>
        <a href="mailto:info.drsinternational@gmail.com" style={{ color: "#7eb8f7", fontSize: 17, textDecoration: "none", fontWeight: 500 }}>
          info.drsinternational@gmail.com
        </a>
        <p style={{ fontSize: 14, opacity: 0.6, marginTop: 10 }}>{t.contactSub}</p>
      </div>

    </div>
  );
}

export default App;
