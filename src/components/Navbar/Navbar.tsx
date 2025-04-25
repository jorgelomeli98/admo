import "./Navbar.css";
import { SmartLink, SmartLinkProps } from "../../components";
import { useState } from "react";

interface Props {
  items: SmartLinkProps[];
}

export const Navbar = ({ items }: Props) => {
  const [enable, setEnable] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <SmartLink to="/">
          <img
            src={`/admo/assets/admo-ac-logotipo-color-mini.png`}
            alt="ADMO Logo"
            className="navbar-logo"
          ></img>
        </SmartLink>
        <button className="button-menu" onClick={() => setEnable(!enable)}>
          <i className="bi bi-list"></i>
        </button>
      </div>
      <ul className={`navbar-links ${enable ? "show" : "hide"}`}>
        {items.map((item, index) => {
          const delay = `${index * 100 + 400}ms`;
          return (
            <li
              key={index}
              style={{ animationDelay: enable ? delay : "0ms" }}
              className={enable ? "fade-in-li" : "fade-out-li"}
            >
              <SmartLink {...item}>{item.children}</SmartLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
