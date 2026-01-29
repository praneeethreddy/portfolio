import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
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
              I’m a Generative AI Engineer passionate about building
              intelligent, scalable systems that solve real-world problems.
              <br />
              <br />
              My work focuses on designing and deploying end-to-end AI
              solutions—from data pipelines and model training to
              production-grade Gen AI applications using
              <b className="purple">
                {" "}
                LangChain, LLM APIs (OpenAI, Azure), Hugging Face, and vector
                databases like Pinecone
              </b>
              .
              <br />
              <br />I leverage cloud-native services across{" "}
              <b className="purple">AWS, Azure, and GCP</b> to automate ETL
              workflows, deploy ML models, and build secure, observable AI
              systems with CI/CD and containerization (Docker/Kubernetes).
              <br />
              <br />
              While I have full-stack experience, my current focus is on
              optimizing backend AI infrastructure, improving semantic search,
              automating document intelligence, and enabling teams to ship
              reliable, scalable generative AI products faster.
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
            <p>Please connect with me at:</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/praneeethreddy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/reddypraneeth07/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
