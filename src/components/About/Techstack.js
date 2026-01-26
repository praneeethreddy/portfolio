// import React from "react";
// import { Col, Row } from "react-bootstrap";

// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiPostgresql,
//   SiSpringboot,
//   SiHtml5,
//   SiCsswizardry,
//   SiTypescript,
//   SiMysql,
//   SiJquery
// } from "react-icons/si";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      

//       <Col xs={4} md={2} className="tech-icons">
//         <SiTypescript />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiJquery/>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiHtml5 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiCsswizardry />
//       </Col>
//        <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSpringboot />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMysql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;


import React from "react";
import { Col, Row } from "react-bootstrap";

import { DiPython, DiGit } from "react-icons/di";

import {
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  // SiHuggingface,
  SiOpenai,
  SiDocker,
  SiFastapi,
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiPostgresql,
  SiMongodb,
  SiJupyter,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming & Core AI */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      {/* AI/ML Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>

      {/* Generative AI / NLP
      <Col xs={4} md={2} className="tech-icons">
        <SiHuggingface />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>

      {/* Cloud & Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>

      {/* Data Science Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
    </Row>
  );
}

export default Techstack;
