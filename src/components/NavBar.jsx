import { NavLink } from "react-router-dom";
import styled from "styled-components";

//styling navBar
const Nav = styled.nav`
  margin: 0 auto;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      margin: 15px;
      a {
        text-decoration: none;
        color: white;
        font-size: 24px;
      }
    }
    .active {
      transition: 0.6s;
      border-bottom: 5px solid lightblue;
    }
  }
`;
export default function NavBar() {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            Who I am?
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active">
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}
