import { JSX } from "react";
import "./Modal.css";

interface ModalProps {
  text?: string;
  onClose: () => void;
  iconModal?: React.ElementType;
  listParrafosModal?: JSX.Element[]
}

export const Modal: React.FC<ModalProps> = ({
  text,
  onClose,
  iconModal: Icon,
  listParrafosModal
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {Icon && <Icon className="icon-modal" size={100}/>}
        {text ? <p className="text-parrafo">{text}</p> : 
        <>{listParrafosModal}</>}
        
      </div>
    </div>
  );
};
