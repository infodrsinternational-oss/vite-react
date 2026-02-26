import { useState } from "react";
import "./App.css";

function App() {
  const [lang, setLang] = useState<"fr" | "en" | "it" | "es">("fr");

  const t = {
    fr: {
      title: "Inspection aérienne et sous-marine par drone & ROV",
      desc: "Solutions innovantes pour l’inspection industrielle, maritime et infrastructures.",
      services: "Nos services",
      contact: "Contact",
    },
    en: {
      title: "Aerial and underwater inspection by drone & ROV",
      desc: "Innovative solutions for industrial, maritime and infrastructure inspection.",
      services: "Our services",
      contact: "Contact",
    },
    it: {
      title: "Ispezione aerea e subacquea con drone e ROV",
      desc: "Soluzioni innovative per ispezioni industriali e marittime.",
      services: "Servizi",
      contact: "Contatto",
    },
    es: {
      title: "Inspección aérea y submarina con drone y ROV",
      desc: "Soluciones innovadoras para inspecciones industriales y marítimas.",
      services: "Servicios",
      contact: "Contacto",
    },
  };

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center" }}>
      <h1>Drone ROV Service International</h1>

      <div style={{ margin: "20px" }}>
        <button onClick={() => setLang("fr")}>🇫🇷</button>{" "}
        <button onClick={() => setLang("en")}>🇬🇧</button>{" "}
        <button onClick={() => setLang("it")}>🇮🇹</button>{" "}
        <button onClick={() => setLang("es")}>🇪🇸</button>
      </div>

      <h2>{t[lang].title}</h2>
      <p>{t[lang].desc}</p>

      <img
        src="https://images.unsplash.com/photo-1508612761958-e931b117bfd3"
        alt="drone"
        width="400"
        style={{ marginTop: "20px", borderRadius: "10px" }}
      />

      <h2 style={{ marginTop: "40px" }}>{t[lang].services}</h2>
      <ul style={{ listStyle: "none" }}>
        <li>✔ Inspection offshore & maritime</li>
        <li>✔ Inspection portuaire</li>
        <li>✔ Inspection barrage & ouvrages</li>
        <li>✔ Inspection pipelines</li>
      </ul>

      <button
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {t[lang].contact}
      </button>

      <p style={{ marginTop: "40px" }}>
        Email : info.drsinternational@gmail.com
      </p>
    </div>
  );
}

export default App;
