import { useState } from "react";
import { Button } from "../Button/Button";
import "./MaquinaEscribir.css";
import { useInterval } from "../../CustomHooks";

interface Props {
  text: string;
}

export const MaquinaEscribir = ({ text }: Props) => {
  const [iterador, setIterador] = useState(1);

  const visibleText = text.slice(0, iterador);

  useInterval({
    callback: () => {
      setIterador(prev => prev + 1);
    },
    delay: iterador <= text.length ? 100 : null, // puedes subir a 70-100 si quieres que sea aún más fluido
  });

  return (
    <section className="maquina">
      <div className="text-container">
        <h2>{visibleText}<span className="cursor" /></h2>
      </div>
      <div className="button-container">
        <Button
          label={iterador > text.length ? "Reiniciar" : "Saltar"}
          onClick={() => {
            setIterador(iterador > text.length ? 1 : text.length + 1);
          }}
        />
      </div>
    </section>
  );
};
