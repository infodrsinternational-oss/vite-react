import { ArrowLeft } from "lucide-react";

type Language = "fr" | "en" | "it" | "es" | "ru";

type LegalProps = {
  language: Language;
  onBack: () => void;
};

const MAIL = "contact@drone-rov-service.com";

const L: Record<Language, Record<string, string>> = {
  fr: {
    back: "Retour au site", title: "Mentions légales", pub: "Éditeur du site",
    name: "Nom commercial", status: "Statut", statusV: "Entrepreneur individuel (auto-entrepreneur / micro-entreprise)",
    address: "Adresse", phone: "Téléphone", director: "Directeur de la publication", directorV: "Dom DRSI",
    host: "Hébergement", hostIntro: "Le site est hébergé par :", hostOr: "et/ou",
    ip: "Propriété intellectuelle",
    ipText: "L'ensemble des contenus (textes, images, logo, structure) présents sur ce site est protégé par le droit d'auteur. Toute reproduction, même partielle, sans autorisation préalable est interdite.",
  },
  en: {
    back: "Back to website", title: "Legal notice", pub: "Website publisher",
    name: "Trade name", status: "Status", statusV: "Sole proprietor (auto-entrepreneur / micro-enterprise)",
    address: "Address", phone: "Phone", director: "Publication director", directorV: "Dom DRSI",
    host: "Hosting", hostIntro: "The website is hosted by:", hostOr: "and/or",
    ip: "Intellectual property",
    ipText: "All content (texts, images, logo, structure) on this website is protected by copyright. Any reproduction, even partial, without prior authorisation is prohibited.",
  },
  it: {
    back: "Torna al sito", title: "Note legali", pub: "Editore del sito",
    name: "Denominazione commerciale", status: "Stato", statusV: "Imprenditore individuale (auto-entrepreneur / microimpresa)",
    address: "Indirizzo", phone: "Telefono", director: "Direttore della pubblicazione", directorV: "Dom DRSI",
    host: "Hosting", hostIntro: "Il sito è ospitato da:", hostOr: "e/o",
    ip: "Proprietà intellettuale",
    ipText: "Tutti i contenuti (testi, immagini, logo, struttura) presenti su questo sito sono protetti dal diritto d'autore. Qualsiasi riproduzione, anche parziale, senza previa autorizzazione è vietata.",
  },
  es: {
    back: "Volver al sitio", title: "Aviso legal", pub: "Editor del sitio",
    name: "Nombre comercial", status: "Estatuto", statusV: "Empresario individual (auto-entrepreneur / microempresa)",
    address: "Dirección", phone: "Teléfono", director: "Director de la publicación", directorV: "Dom DRSI",
    host: "Alojamiento", hostIntro: "El sitio está alojado por:", hostOr: "y/o",
    ip: "Propiedad intelectual",
    ipText: "Todos los contenidos (textos, imágenes, logotipo, estructura) de este sitio están protegidos por derechos de autor. Queda prohibida cualquier reproducción, incluso parcial, sin autorización previa.",
  },
  ru: {
    back: "Вернуться на сайт", title: "Правовые сведения", pub: "Издатель сайта",
    name: "Торговое наименование", status: "Статус", statusV: "Индивидуальный предприниматель (auto-entrepreneur / микропредприятие)",
    address: "Адрес", phone: "Телефон", director: "Ответственный за публикацию", directorV: "Dom DRSI",
    host: "Хостинг", hostIntro: "Сайт размещён у:", hostOr: "и/или",
    ip: "Интеллектуальная собственность",
    ipText: "Все материалы сайта (тексты, изображения, логотип, структура) защищены авторским правом. Любое воспроизведение, даже частичное, без предварительного разрешения запрещено.",
  },
};

export default function Legal({ language, onBack }: LegalProps) {
  const t = L[language];

  return (
    <main className="legal-page">
      <div className="container legal-inner">
        <button className="back-link" onClick={onBack}>
          <ArrowLeft size={17} /> {t.back}
        </button>
        <h1>{t.title}</h1>

        <section className="legal-section">
          <h2>{t.pub}</h2>
          <p>{t.name} : Drone ROV Service International (DRSI)</p>
          <p>{t.status} : {t.statusV}</p>
          <p>SIRET : 839 423 688 00028</p>
          <p>{t.address} : 33 boulevard Maréchal Juin, 06800 Cagnes-sur-Mer, France</p>
          <p>E-mail : {MAIL}</p>
          <p>{t.phone} : +33 (0)6 14 27 98 03</p>
          <p>{t.director} : {t.directorV}</p>
        </section>

        <section className="legal-section">
          <h2>{t.host}</h2>
          <p>{t.hostIntro}</p>
          <p>Vercel Inc., 440 North Barranca Avenue, Suite 4133, Covina, California 91723, USA — support@vercel.com</p>
          <p>{t.hostOr} OVH SAS, 2 rue Kellermann, 59100 Roubaix, France</p>
        </section>

        <section className="legal-section">
          <h2>{t.ip}</h2>
          <p>{t.ipText}</p>
        </section>
      </div>
    </main>
  );
}
