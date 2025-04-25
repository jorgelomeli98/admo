import { SmartLink, SmartLinkProps } from "../../components";

interface FooterColumsProps {
  title: string;
  items: SmartLinkProps[];
}

export const FooterColumn = ({ title, items }: FooterColumsProps) => {
  //generamos la lista de links

  return (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <SmartLink {...item}>{item.children}</SmartLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
