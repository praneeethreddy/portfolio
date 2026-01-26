import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/photo.jpg"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have been passionate about
              building intelligent systems ever since. Over the years, I have
              gained extensive experience in software development, with a strong
              focus on Python and AI technologies... <br />
              <br />I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python and its AI/ML ecosystem, including frameworks and
                  libraries such as PyTorch, TensorFlow, Hugging Face
                  Transformers, LangChain,TypeScript, Javascript, ReactJS, Java
                  and Spring Boot.{" "}
                </b>
              </i>
              <br />
              <br />
              My core interest lies in designing and developing AI-driven
              applications, especially those leveraging Generative AI and large
              language models to solve real-world problems.
              <br />
              <br />
              Whenever possible, I combine my skills in{" "}
              <b className="purple">Python</b> and
              <i>
                <b className="purple">
                  {" "}
                   modern AI frameworks to build innovative, scalable.
                </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> production-ready AI solutions </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="photo" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Social Media</h1>
            <p>
              Please Connect Me at
              {/* <span className="purple">connect </span> */}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/praneeethreddy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="url"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/reddypraneeth07/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                {/* <a
                  href="url"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a> */}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
