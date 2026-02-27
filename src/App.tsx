import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  const [lang, setLang] = useState<"fr" | "en" | "it" | "es">("fr");

  const t = {
    fr: {
      title: "Inspection aérienne et sous-marine par drone & ROV",
      desc: "Solutions innovantes pour l’inspection industrielle, maritime, fluviale et infrastructures.",
      about:
        "Drone ROV Service International propose des inspections techniques avancées pour les secteurs industriels, offshore et infrastructures.",
      drone: "Drone aérien",
      rov: "ROV sous-marin",
      gallery: "Galerie",
      contact: "Demande de devis",
    },
    en: {
      title: "Aerial and underwater inspection by drone & ROV",
      desc: "Innovative solutions for industrial, maritime, river and infrastructure inspection.",
      about:
        "Drone ROV Service International provides advanced technical inspections for industrial, offshore and infrastructure sectors.",
      drone: "Aerial drone",
      rov: "Underwater ROV",
      gallery: "Gallery",
      contact: "Request a quote",
    },
    it: {
      title: "Ispezione aerea e subacquea con drone e ROV",
      desc: "Soluzioni innovative per ispezioni industriali, marittime e infrastrutturali.",
      about:
        "Drone ROV Service International offre ispezioni tecniche avanzate per settori industriali e offshore.",
      drone: "Drone aereo",
      rov: "ROV subacqueo",
      gallery: "Galleria",
      contact: "Richiesta preventivo",
    },
    es: {
      title: "Inspección aérea y submarina con drone y ROV",
      desc: "Soluciones innovadoras para inspecciones industriales y marítimas.",
      about:
        "Drone ROV Service International ofrece inspecciones técnicas avanzadas.",
      drone: "Drone aéreo",
      rov: "ROV submarino",
      gallery: "Galería",
      contact: "Solicitud de presupuesto",
    },
  };

  return (
    <div className="container">
      <img src={logo} alt="Drone ROV Service International" className="logo" />

      <div className="lang">
        <button onClick={() => setLang("fr")}>🇫🇷</button>
        <button onClick={() => setLang("en")}>🇬🇧</button>
        <button onClick={() => setLang("it")}>🇮🇹</button>
        <button onClick={() => setLang("es")}>🇪🇸</button>
      </div>

      <h1>{t[lang].title}</h1>
      <p className="desc">{t[lang].desc}</p>

      <section className="about">
        <p>{t[lang].about}</p>
      </section>

      <section className="services">
        <div className="card">
          <h2>{t[lang].drone}</h2>
          <ul>
            <li>Inspection toiture</li>
            <li>Bâtiments</li>
            <li>Photovoltaïque</li>
            <li>Industrielle</li>
            <li>Infrastructures</li>
            <li>Lignes électriques</li>
            <li>Thermographie</li>
          </ul>
        </div>

        <div className="card">
          <h2>{t[lang].rov}</h2>
          <ul>
            <li>Inspection offshore</li>
            <li>Maritime</li>
            <li>Portuaire</li>
            <li>Barrages</li>
            <li>Pipelines</li>
            <li>Ouvrages hydrauliques</li>
            <li>Fluvial</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>{t[lang].gallery}</h2>
        <div className="gallery">
          <img src="https://images.unsplash.com/photo-1508615070457-7baeba4003ab" />
          <img src="https://images.unsplash.com/photo-1527979809431-40e7a0b53fb2" />
          <img src="https://images.unsplash.com/photo-1516939884455-1445c8652f83" />
        </div>
      </section>

      <section className="contact">
        <h2>{t[lang].contact}</h2>
        <p>Email : info.drsinternational@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
