import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  const [lang, setLang] = useState<"fr" | "en" | "it" | "es">("fr");

  const t = {
    fr: {
      title: "Inspection aérienne et sous-marine par drone & ROV",
      desc: "Solutions innovantes pour l’inspection industrielle, maritime, fluviale et infrastructures.",
      servicesTitle: "Nos services",
      services: [
        "Inspection toiture et bâtiment",
        "Inspection offshore et maritime",
        "Inspection portuaire",
        "Inspection barrages et ouvrages",
        "Inspection pipelines",
        "Inspection industrielle",
      ],
      drone: "Drone aérien",
      rov: "ROV sous-marin",
    },
    en: {
      title: "Aerial and underwater inspection by drone & ROV",
      desc: "Innovative solutions for industrial, maritime, river and infrastructure inspection.",
      servicesTitle: "Our services",
      services: [
        "Roof and building inspection",
        "Offshore and maritime inspection",
        "Port inspection",
        "Dam and structure inspection",
        "Pipeline inspection",
        "Industrial inspection",
      ],
      drone: "Aerial drone",
      rov: "Underwater ROV",
    },
    it: {
      title: "Ispezione aerea e subacquea con drone e ROV",
      desc: "Soluzioni innovative per ispezioni industriali, marittime e infrastrutturali.",
      servicesTitle: "I nostri servizi",
      services: [],
      drone: "Drone aereo",
      rov: "ROV subacqueo",
    },
    es: {
      title: "Inspección aérea y submarina con drone y ROV",
      desc: "Soluciones innovadoras para inspecciones industriales y marítimas.",
      servicesTitle: "Nuestros servicios",
      services: [],
      drone: "Drone aéreo",
      rov: "ROV submarino",
    },
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "40px", textAlign: "center" }}>
      <img src={logo} alt="Drone ROV Service International" width="220" />

      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setLang("fr")}>🇫🇷</button>{" "}
        <button onClick={() => setLang("en")}>🇬🇧</button>{" "}
        <button onClick={() => setLang("it")}>🇮🇹</button>{" "}
        <button onClick={() => setLang("es")}>🇪🇸</button>
      </div>

      <h2>{t[lang].title}</h2>
      <p>{t[lang].desc}</p>

      

      <h4>{t[lang].drone}</h4>
      <p>
        ✔ Inspection toiture<br/>
        ✔ Inspection bâtiments<br/>
        ✔ Inspection photovoltaïque<br/>
        ✔ Inspection industrielle<br/>
        ✔ Inspection infrastructures<br/>
        ✔ Inspection lignes électriques<br/>
        ✔ Thermographie
      </p>

      <h4>{t[lang].rov}</h4>
      <p>
        ✔ Inspection offshore<br/>
        ✔ Inspection maritime<br/>
        ✔ Inspection portuaire<br/>
        ✔ Inspection barrage<br/>
        ✔ Inspection pipelines<br/>
        ✔ Inspection ouvrages hydrauliques<br/>
        ✔ Inspection fluviale
      </p>

      <p style={{ marginTop: "40px" }}>
        Email : info.drsinternational@gmail.com
      </p>
    </div>
  );
}

export default App;
