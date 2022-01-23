import NavBar from "../NavBar.jsx";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-solid-svg-icons";
//import LinkedIn from "../../resources/linkedin.png";
//import gitHub from "../../resources/github.png";
//giving styles to the container
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  color: white;
  .social {
    z-index: 100;
    position: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translate(-275px, 0);
    a {
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      display: block;
      margin: 5px;
      padding: 20px;
      width: 300px;
      text-align: right;
      border-radius: 50px;
      transition: 1s transform;
      &:hover {
        transform: translate(140px, 0);
      }
    }
    .icon {
      margin-left: 10px;
      width: 50px;
      height: 50px;
    }
  }
`;
export default function Home() {
  return (
    <Container>
      <NavBar />
      <div className="social">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          LinkedIn
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          GitHub
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <Outlet />
    </Container>
  );
}
