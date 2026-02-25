import { useState } from "react";
import "./App.css";

function App() {
  const [lang, setLang] = useState<"fr" | "en" | "it" | "es">("fr");

  const t = {
    fr: {
      title: "Inspection aérienne et sous-marine par drone & ROV",
      desc: "Solutions innovantes pour l’inspection industrielle, maritime, fluvial et infrastructurelle.",
      contact: "Contact",
    },
    en: {
      title: "Aerial and underwater inspection by drone & ROV",
      desc: "Innovative solutions for industrial, maritime, river and infrastructure inspection.",
      contact: "Contact",
    },
    it: {
      title: "Ispezione aerea e subacquea con drone e ROV",
      desc: "Soluzioni innovative per ispezioni industriali, marittime e infrastrutturali.",
      contact: "Contatto",
    },
    es: {
      title: "Inspección aérea y submarina con drone y ROV",
      desc: "Soluciones innovadoras para inspecciones industriales y marítimas.",
      contact: "Contacto",
    },
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "40px", textAlign: "center" }}>
      <h1>Drone ROV Service International</h1>

      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setLang("fr")}>🇫🇷</button>{" "}
        <button onClick={() => setLang("en")}>🇬🇧</button>{" "}
        <button onClick={() => setLang("it")}>🇮🇹</button>{" "}
        <button onClick={() => setLang("es")}>🇪🇸</button>
      </div>

      <h2>{t[lang].title}</h2>
      <p>{t[lang].desc}</p>

      <p style={{ marginTop: "40px" }}>
        Email : info.drsinternational@gmail.com
      </p>
    </div>
  );
}

export default App;
