
import { Card, CardProps } from "../../components";
import "./Section.css";

interface SectionProps {
  id: string;
  tituloSection?: string;
  backgroundSection?: string;
  isFlexwrap?: boolean;
  cards?: CardProps[];
  columns?: string;
  rows?: string;
  children?: React.ReactNode;
}

export const Section = ({
  id,
  tituloSection,
  backgroundSection,
  cards,
  columns,
  rows,
  children,
}: SectionProps) => {
  return (
    <section
      className="section"
      id={id}
      style={
        backgroundSection
          ? { backgroundColor: `${backgroundSection}` }
          : undefined
      }
    >
      {tituloSection && (
        <h2 className="titulo-container-section">{tituloSection}</h2>
      )}
      {cards && (
        <div
          className="section-grid-cards"
          data-cols={columns}
          data-rows={rows}
        >
          {cards?.map((card, index) => {
            return <Card key={`card${index}`} {...card} />;
          })}
        </div>
      )}
      {children && <div className="children-section">{children}</div>}
    </section>
  );
};
