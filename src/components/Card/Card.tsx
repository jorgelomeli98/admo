import { JSX, useState } from "react";
import { SmartLink, Modal } from "../../components";
import "./Card.css";

export interface CardProps {
  onClick?: () => void;
  text?: string;
  icon?: React.ElementType;
  colorIcon?: string;
  sizeIcon?: number;
  srcImg?: string;
  alt?: string;
  children?: React.ReactNode;
  fontSizeText?: string;
  widthCard?: string;
  heightCard?: string;
  urlOut?: string;
  alignTextCard?: "left" | "right" | "center" | "justify" | "start" | "end";
  showModal?: boolean;
  modalText?: string;
  listParrafos?: JSX.Element[];
  idCssCard?: string;
}

export const Card = ({
  onClick,
  text,
  srcImg,
  alt,
  icon: Icon,
  sizeIcon,
  colorIcon,
  children,
  fontSizeText,
  heightCard,
  urlOut,
  alignTextCard,
  showModal,
  modalText,
  listParrafos,
  idCssCard
}: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    if (showModal) {
      setIsOpen(true);
    } else if (onClick) {
      onClick();
    }
  };

  const newCard = (
    <div
      className="card"
      id={idCssCard ? idCssCard : undefined}
      onClick={handleCardClick}
      style={
        heightCard
          ? { height: `${heightCard}`, width: `${heightCard}` }
          : undefined
      }
    >
      {children && <div className="children-card">{children}</div>}
      {srcImg && (
        <div className="img-container-card">
          <img src={srcImg} alt={alt}></img>
        </div>
      )}
      {Icon && (
        <div className="icon-card">
          <Icon
            size={sizeIcon}
            style={colorIcon ? { color: `${colorIcon}` } : { color: "black" }}
          />
        </div>
      )}
      {text && (
        <div className="text-card-container">
          <p
            style={
              fontSizeText || alignTextCard
                ? {
                    ...(fontSizeText && { fontSize: fontSizeText }),
                    ...(alignTextCard && { textAlign: alignTextCard }),
                  }
                : undefined
            }
          >
            {text}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <>
      {urlOut && !showModal ? (
        <SmartLink href={urlOut}>{newCard}</SmartLink>
      ) : (
        newCard
      )}

      {showModal &&
        isOpen &&
        (listParrafos ? (
          <Modal
            listParrafosModal={listParrafos || "Contenido del modal"}
            onClose={() => setIsOpen(false)}
            iconModal={Icon}
          />
        ) : (
          <Modal
            text={modalText || "Contenido del modal"}
            onClose={() => setIsOpen(false)}
            iconModal={Icon}
          />
        ))}
    </>
  );
};
