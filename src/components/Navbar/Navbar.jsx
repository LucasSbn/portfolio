import Style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={Style.divPrincNavbar}>

      <div>
        <h1>Lucas Cauã</h1>
      </div>

      <div className={Style.linksContainer}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? Style.linkAtivo : Style.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? Style.linkAtivo : Style.link
          }
        >
          Skills
        </NavLink>

        <NavLink
          to="/certificados"
          className={({ isActive }) =>
            isActive ? Style.linkAtivo : Style.link
          }
        >
          Certificados
        </NavLink>

        <NavLink
          to="/sobre"
          className={({ isActive }) =>
            isActive ? Style.linkAtivo : Style.link
          }
        >
          Sobre
        </NavLink>

      </div>

    </div>
  );
};

export default Navbar;
