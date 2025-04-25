import { Card } from "../Card/Card";
import "./Somos.css";

const queEsDistrofia = `La Distrofia Muscular es un grupo de enfermedades hereditarias caracterizadas por una debilidad progresiva y un deterioro de 
  los músculos esqueléticos o voluntarios que controlan el movimiento, Distrofia Muscular Duchenne (DMD) es la más frecuente afecta 
  a 1 niño de cada 3000, y es diagnosticada entre los 3 y 7 años.
`;

const videoAdmo = (
  <>
    <div
      id="contenedor-video"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <iframe
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          src="https://player.vimeo.com/video/156453312?badge=0&autopause=0&player_id=0&app_id=58479"
          style={{
            height: "100%",
            left: "0",
            top: "0",
            width: "100%",
            border: "none",
          }}
          title="Asociación de Distrofia Muscular de Occidente"
        />
      </div>
      <script src="https://player.vimeo.com/api/player.js" />
    </div>
  </>
);

export const Somos = () => {
  return (
    <section className="somos" id="somos">
      <h2 className="titulo-container">Este es nuestro mundo</h2>
      <div className="card-grid">
        <Card
          srcImg={`${import.meta.env.BASE_URL}assets/que-es-dm-admo-ac.jpg`}
          text={queEsDistrofia}
        />
        <Card children={videoAdmo} idCssCard="iframe-video" text="¿Que es ADMO?"/>
      </div>
    </section>
  );
};
