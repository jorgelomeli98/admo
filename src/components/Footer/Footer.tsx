import "./Footer.css";
import { FooterColumn } from "../../components";
import { listLinksContacto, linkRedes, accesosRapidos } from "../../data";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-grid">
        <FooterColumn title="Contacto" items={listLinksContacto} />
        <FooterColumn title="Redes Sociales" items={linkRedes} />
        <FooterColumn title="Accesos Rapidos" items={accesosRapidos} />
      </div>
      <div id="small-footer">
        <small>
          © ADMO AC 2025 | Sitio rediseñado por: {" "}<br id="salto-small"/>
          <a
            id="link-portfolio"
            target="blank"
            href="https://jorgelomeli98.github.io/portafolioweb/"
          >
            Jorge Lomelí
          </a>
        </small>
      </div>
    </footer>
  );
};
