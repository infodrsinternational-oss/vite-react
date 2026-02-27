import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  const [lang, setLang] = useState<"fr" | "en" | "it" | "es">("fr");

  const t = {
    fr: {
      title: "Inspection aérienne et sous-marine par drone & ROV",
      desc: "Solutions innovantes pour l’inspection industrielle, maritime, offshore et infrastructures.",
      services: "Nos services",
      drone: "Drone aérien",
      rov: "ROV sous-marin",
      quote: "Demande de devis",
      send: "Envoyer",
    },
    en: {
      title: "Aerial and underwater inspection by drone & ROV",
      desc: "Innovative solutions for industrial, maritime, offshore and infrastructure inspection.",
      services: "Our services",
      drone: "Aerial drone",
      rov: "Underwater ROV",
      quote: "Request a quote",
      send: "Send",
    },
    it: {
      title: "Ispezione aerea e subacquea con drone e ROV",
      desc: "Soluzioni innovative per ispezioni industriali, marittime e infrastrutturali.",
      services: "I nostri servizi",
      drone: "Drone aereo",
      rov: "ROV subacqueo",
      quote: "Richiedi un preventivo",
      send: "Invia",
    },
    es: {
      title: "Inspección aérea y submarina con drone y ROV",
      desc: "Soluciones innovadoras para inspecciones industriales y marítimas.",
      services: "Nuestros servicios",
      drone: "Drone aéreo",
      rov: "ROV submarino",
      quote: "Solicitar presupuesto",
      send: "Enviar",
    },
  };

  const droneServices = {
    fr: ["Inspection toiture", "Bâtiments", "Photovoltaïque", "Industrielle", "Infrastructures", "Lignes électriques", "Thermographie"],
    en: ["Roof", "Buildings", "Solar", "Industrial", "Infrastructure", "Power lines", "Thermography"],
    it: ["Tetti", "Edifici", "Fotovoltaico", "Industriale", "Infrastrutture", "Linee elettriche", "Termografia"],
    es: ["Tejados", "Edificios", "Fotovoltaica", "Industrial", "Infraestructuras", "Líneas eléctricas", "Termografía"],
  };

  const rovServices = {
    fr: ["Offshore", "Maritime", "Portuaire", "Barrages", "Pipelines", "Ouvrages hydrauliques", "Fluvial"],
    en: ["Offshore", "Maritime", "Ports", "Dams", "Pipelines", "Hydraulic structures", "River"],
    it: ["Offshore", "Marittimo", "Porti", "Dighe", "Pipeline", "Opere idrauliche", "Fluviale"],
    es: ["Offshore", "Marítimo", "Puertos", "Presas", "Pipelines", "Obras hidráulicas", "Fluvial"],
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "40px", textAlign: "center" }}>
      
      {/* Logo */}
      <img src={logo} alt="Drone ROV Service International" width="220" />

      {/* Langues */}
      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setLang("fr")}>🇫🇷</button>{" "}
        <button onClick={() => setLang("en")}>🇬🇧</button>{" "}
        <button onClick={() => setLang("it")}>🇮🇹</button>{" "}
        <button onClick={() => setLang("es")}>🇪🇸</button>
      </div>

      {/* Hero */}
      <h2>{t[lang].title}</h2>
      <p>{t[lang].desc}</p>

      {/* Services */}
      <h3 style={{ marginTop: "40px" }}>{t[lang].services}</h3>

      <h4>{t[lang].drone}</h4>
      <ul style={{ maxWidth: "400px", margin: "auto", textAlign: "left" }}>
        {droneServices[lang].map((s, i) => (
          <li key={i}>✔ {s}</li>
        ))}
      </ul>

      <h4 style={{ marginTop: "20px" }}>{t[lang].rov}</h4>
      <ul style={{ maxWidth: "400px", margin: "auto", textAlign: "left" }}>
        {rovServices[lang].map((s, i) => (
          <li key={i}>✔ {s}</li>
        ))}
      </ul>

      {/* FORMULAIRE */}
      <section style={{ marginTop: "60px" }}>
        <h2>{t[lang].quote}</h2>

        <form
          action="https://formsubmit.co/info.drsinternational@gmail.com"
          method="POST"
          style={{ maxWidth: "500px", margin: "30px auto", textAlign: "left" }}
        >
          <input type="hidden" name="_subject" value="Nouveau devis DRS" />
          <input type="hidden" name="_captcha" value="false" />

          <input type="text" name="name" placeholder="Nom" required style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
          <input type="email" name="email" placeholder="Email" required style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
          <textarea name="message" placeholder="Votre projet..." required style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />

          <button type="submit" style={{ padding: "12px 25px" }}>
            {t[lang].send}
          </button>
        </form>
      </section>

      <p style={{ marginTop: "40px" }}>
        Email : info.drsinternational@gmail.com
      </p>
    </div>
  );
}

export default App;
