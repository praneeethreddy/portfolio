import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="purple">Praneeth Reddy</span>, a Generative AI
            Engineer at <span className="purple">Toyota</span>, where I design
            and deploy intelligent systems that bridge cutting-edge AI research
            with real-world impact.
            <br />
            <br />I hold a Master’s in Computer Science from the{" "}
            <span className="purple">University of Central Missouri</span>, and
            I specialize in building scalable Gen AI applications using
            LangChain, LLMs, cloud-native services (AWS/Azure/GCP), and MLOps
            best practices.
            <br />
            <br />
            Beyond engineering, I’m passionate about capturing moments through
            photography, sharing insights via technical writing, and exploring
            new cultures through travel.
          </p>

          <p style={{ color: "rgb(155 126 172)", marginTop: "1.2rem" }}>
            “Mistakes make you stronger—but learning from them makes you
            exceptional.”
          </p>
          <footer className="blockquote-footer">— Praneeth Reddy</footer>
        </blockquote>
      </Card.Body>
      {/* <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Praneeth Reddy </span>
            <span className="purple"></span>
            <br />I am currently employed as a Gen AI developer at{" "}
            <span className="purple"> Toyota.</span>
            <br />I have completed Master's in Computer Science at{" "}
            <span className="purple"> University of Central Missouri, </span>MO.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Mistakes Makes You Strong!"{" "}
          </p>
          <footer className="blockquote-footer">Praneeth Reddy</footer>
        </blockquote>
      </Card.Body> */}
    </Card>
  );
}

export default AboutCard;
