import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Existing project images
import style from "../../Assets/Projects/styleSpectrum.webp";
import groccery from "../../Assets/Projects/groccery.png";
import house from "../../Assets/Projects/house.jpeg";
import techbazaar from "../../Assets/Projects/tech.png";
import fashion from "../../Assets/Projects/fashion.avif";
import patterns from "../../Assets/Projects/patterns.avif";
import  ai from "../../Assets/Projects/ai.jpeg";

// For AI projects: use a generic AI icon or fallback
// If you have an AI-themed image, replace this path
// import aiIcon from "../../Assets/Projects/ai-placeholder.png"; // Optional: create this or use an existing one

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* === NEW: Agentic AI Projects (Top Priority) === */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patterns}
              isBlog={false}
              title="Agentic AI Patterns"
              description="A comprehensive implementation of advanced agentic design patterns including Tool Use, Agentic RAG, Multi-Agent Collaboration, and Metacognition. Built with LangChain, Azure AI Foundry, and GitHub Models to demonstrate production-ready AI agent architectures."
              ghLink="https://github.com/praneeethreddy/Agentic-AI-Patterns"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="Agentic AI Implementation"
              description="Hands-on implementation of Microsoft's Agentic AI curriculum, covering 10 core lessons on building intelligent agents. Features integrations with Azure AI Foundry, Hugging Face, and open LLMs to showcase real-world Gen AI workflows and trustworthiness techniques."
              ghLink="https://github.com/praneeethreddy/Agentic-AI"
            />
          </Col>

          {/* === Existing Projects Below === */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techbazaar}
              isBlog={false}
              title="TechBazaar Ecommerce"
              description="Using Material-UI and React.js, TechBazaar E-commerce is an online marketplace for gadgets and accessories. It provides real-time inventory management, secure login, customized product suggestions, and user registration."
              ghLink="https://github.com/praneeethreddy/TechBazaar-E-commerece"
              demoLink="https://youtu.be/onhQ2Lm1nE0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={style}
              isBlog={false}
              title="Style Spectrum"
              description="Style Spectrum E-commerce is an advanced platform for shopping clothes, shoes, and accessories, offering features like inventory management, delivery tracking, customer management, and personalized product selection."
              ghLink="https://github.com/praneeethreddy/StyleSpectrum"
              demoLink="https://drive.google.com/file/d/12t11-uD9SFK_1bk0rWWxF7paq9vpkbpW/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashion}
              isBlog={false}
              title="Fashion Flex E-Commerce"
              description="FashionFlex E-commerce is a state-of-the-art online marketplace with features like safe payment and real-time order tracking that provide a seamless and pleasurable buying experience for stylish clothing."
              ghLink="https://github.com/praneeethreddy/FashionFlex-webApp"
              demoLink="https://drive.google.com/file/d/1bphucoWawGdp4USvFuIC7vGBCxvJ-9vp/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groccery}
              isBlog={false}
              title="Grocery Store"
              description="With automated inventory management and order processing, the Grocery Management System is a dynamic e-commerce platform for online grocery ordering. Supports pickup/delivery options and admin controls."
              ghLink="https://github.com/praneeethreddy/grocercy-ecomerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="House Rental Management"
              description="A cloud-based house rental management application leveraging AWS S3, EC2, and Lambda functions. Enables property owners to efficiently oversee rentals remotely with real-time guest logs."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
