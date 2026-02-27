import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [lang, setLang] = useState<"fr" | "en" | "it" | "es">("fr");

  const t = {
    fr: {
      title: "Inspection aérienne et sous-marine par drone & ROV",
      desc: "Solutions innovantes pour l’inspection offshore, maritime, industrielle et infrastructures.",
      drone: "Drone aérien",
      rov: "ROV sous-marin",
      droneServices: [
        "Inspection toiture",
        "Bâtiments",
        "Photovoltaïque",
        "Industrielle",
        "Infrastructures",
        "Lignes électriques",
        "Thermographie",
      ],
      rovServices: [
        "Inspection offshore",
        "Maritime",
        "Portuaire",
        "Barrages",
        "Pipelines",
        "Ouvrages hydrauliques",
        "Fluvial",
      ],
    },
    en: {
      title: "Aerial and underwater inspection by drone & ROV",
      desc: "Innovative solutions for offshore, maritime, industrial and infrastructure inspection.",
      drone: "Aerial drone",
      rov: "Underwater ROV",
      droneServices: [
        "Roof inspection",
        "Buildings",
        "Solar panels",
        "Industrial",
        "Infrastructure",
        "Power lines",
        "Thermography",
      ],
      rovServices: [
        "Offshore inspection",
        "Maritime",
        "Ports",
        "Dams",
        "Pipelines",
        "Hydraulic structures",
        "River",
      ],
    },
    it: {
      title: "Ispezione aerea e subacquea con drone e ROV",
      desc: "Soluzioni innovative per ispezioni offshore, marittime e industriali.",
      drone: "Drone aereo",
      rov: "ROV subacqueo",
      droneServices: [
        "Ispezione tetti",
        "Edifici",
        "Fotovoltaico",
        "Industriale",
        "Infrastrutture",
        "Linee elettriche",
        "Termografia",
      ],
      rovServices: [
        "Offshore",
        "Marittimo",
        "Porti",
        "Dighe",
        "Pipeline",
        "Opere idrauliche",
        "Fluviale",
      ],
    },
    es: {
      title: "Inspección aérea y submarina con drone y ROV",
      desc: "Soluciones innovadoras para inspecciones offshore, marítimas e industriales.",
      drone: "Drone aéreo",
      rov: "ROV submarino",
      droneServices: [
        "Inspección tejados",
        "Edificios",
        "Fotovoltaico",
        "Industrial",
        "Infraestructura",
        "Líneas eléctricas",
        "Termografía",
      ],
      rovServices: [
        "Offshore",
        "Marítimo",
        "Puertos",
        "Presas",
        "Pipelines",
        "Obras hidráulicas",
        "Fluvial",
      ],
    },
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "40px",
        textAlign: "center",
        background: "#0b1c2c",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <img src={logo} alt="Drone ROV Service International" width="220" />

      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setLang("fr")}>🇫🇷</button>{" "}
        <button onClick={() => setLang("en")}>🇬🇧</button>{" "}
        <button onClick={() => setLang("it")}>🇮🇹</button>{" "}
        <button onClick={() => setLang("es")}>🇪🇸</button>
      </div>

      <h2>{t[lang].title}</h2>
      <p>{t[lang].desc}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Drone */}
        <div
          style={{
            background: "#132c44",
            padding: "25px",
            borderRadius: "12px",
            width: "320px",
          }}
        >
          <h3>{t[lang].drone}</h3>
          <ul style={{ textAlign: "left" }}>
            {t[lang].droneServices.map((s, i) => (
              <li key={i}>✔ {s}</li>
            ))}
          </ul>
        </div>

        {/* ROV */}
        <div
          style={{
            background: "#132c44",
            padding: "25px",
            borderRadius: "12px",
            width: "320px",
          }}
        >
          <h3>{t[lang].rov}</h3>
          <ul style={{ textAlign: "left" }}>
            {t[lang].rovServices.map((s, i) => (
              <li key={i}>✔ {s}</li>
            ))}
          </ul>
        </div>
      </div>

      <p style={{ marginTop: "50px" }}>
        Email : info.drsinternational@gmail.com
      </p>
    </div>
  );
}

export default App;
