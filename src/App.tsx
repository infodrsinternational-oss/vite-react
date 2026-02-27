import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  const [lang, setLang] = useState<"fr" | "en" | "it" | "es">("fr");

  const t = {
    fr: {
      title: "Inspection aérienne et sous-marine par drone & ROV",
      desc: "Solutions innovantes pour l’inspection industrielle, maritime, fluviale et infrastructures.",
      services: "Nos services",
      drone: "Drone aérien",
      rov: "ROV sous-marin",

      droneList: [
        "Inspection toiture",
        "Inspection bâtiments",
        "Inspection photovoltaïque",
        "Inspection industrielle",
        "Inspection infrastructures",
        "Inspection lignes électriques",
        "Thermographie",
      ],

      rovList: [
        "Inspection offshore",
        "Inspection maritime",
        "Inspection portuaire",
        "Inspection barrages",
        "Inspection pipelines",
        "Inspection ouvrages hydrauliques",
        "Inspection fluviale",
      ],
    },

    en: {
      title: "Aerial and underwater inspection by drone & ROV",
      desc: "Innovative solutions for industrial, maritime, river and infrastructure inspection.",
      services: "Our services",
      drone: "Aerial drone",
      rov: "Underwater ROV",

      droneList: [
        "Roof inspection",
        "Building inspection",
        "Solar panel inspection",
        "Industrial inspection",
        "Infrastructure inspection",
        "Power line inspection",
        "Thermography",
      ],

      rovList: [
        "Offshore inspection",
        "Maritime inspection",
        "Port inspection",
        "Dam inspection",
        "Pipeline inspection",
        "Hydraulic structure inspection",
        "River inspection",
      ],
    },

    it: {
      title: "Ispezione aerea e subacquea con drone e ROV",
      desc: "Soluzioni innovative per ispezioni industriali e marittime.",
      services: "I nostri servizi",
      drone: "Drone aereo",
      rov: "ROV subacqueo",

      droneList: [
        "Ispezione tetti",
        "Ispezione edifici",
        "Ispezione fotovoltaica",
        "Ispezione industriale",
        "Ispezione infrastrutture",
        "Ispezione linee elettriche",
        "Termografia",
      ],

      rovList: [
        "Ispezione offshore",
        "Ispezione marittima",
        "Ispezione portuale",
        "Ispezione dighe",
        "Ispezione pipeline",
        "Ispezione strutture idrauliche",
        "Ispezione fluviale",
      ],
    },

    es: {
      title: "Inspección aérea y submarina con drone y ROV",
      desc: "Soluciones innovadoras para inspecciones industriales y marítimas.",
      services: "Nuestros servicios",
      drone: "Drone aéreo",
      rov: "ROV submarino",

      droneList: [
        "Inspección de techos",
        "Inspección de edificios",
        "Inspección fotovoltaica",
        "Inspección industrial",
        "Inspección de infraestructuras",
        "Inspección de líneas eléctricas",
        "Termografía",
      ],

      rovList: [
        "Inspección offshore",
        "Inspección marítima",
        "Inspección portuaria",
        "Inspección de presas",
        "Inspección de tuberías",
        "Inspección de estructuras hidráulicas",
        "Inspección fluvial",
      ],
    },
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "40px", textAlign: "center" }}>
      <img src={logo} alt="Drone ROV Service International" width="220" />

      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setLang("fr")}>🇫🇷</button>
        <button onClick={() => setLang("en")}>🇬🇧</button>
        <button onClick={() => setLang("it")}>🇮🇹</button>
        <button onClick={() => setLang("es")}>🇪🇸</button>
      </div>

      <h2>{t[lang].title}</h2>
      <p>{t[lang].desc}</p>

      <h3>{t[lang].services}</h3>

      <h4>{t[lang].drone}</h4>
      <ul>
        {t[lang].droneList.map((item, i) => (
          <li key={i}>✔ {item}</li>
        ))}
      </ul>

      <h4>{t[lang].rov}</h4>
      <ul>
        {t[lang].rovList.map((item, i) => (
          <li key={i}>✔ {item}</li>
        ))}
      </ul>

      <p style={{ marginTop: "40px" }}>
        Email : info.drsinternational@gmail.com
      </p>
    </div>
  );
}

export default App;
