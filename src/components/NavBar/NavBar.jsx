import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;

    .link {
      text-decoration: none;
      font-weight: bold;
    }

    .active {
      color: red;
    }
  }
`;

const NavBar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Iniciar Sesión", path: "/login" },
    { label: "Registrarse", path: "/register" },
  ];
  return (
    <StyledNav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                [isActive ? "link active" : "link"].join(" ")
              }
              to={link.path}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default NavBar;
