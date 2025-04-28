import "./Button.css";

interface Props {
  label: string;
  onClick: () => void;
  classNameCustom?: string;
}

export const Button = ({ label, onClick, classNameCustom }: Props) => {
  return (
    <>
      {classNameCustom ? (
        <button className={classNameCustom} onClick={onClick}>
          {label}
        </button>
      ) : (
        <button className="button" onClick={onClick}>
          {label}
        </button>
      )}
    </>
  );
};
