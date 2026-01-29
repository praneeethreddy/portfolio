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
import { Col, Row } from "react-bootstrap";
import { DiPython, DiJava, DiJavascript, DiReact } from "react-icons/di";
import {
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  // SiHuggingface,
  SiOpenai,
  SiAnthropic,
  // SiLangchain,
  SiPinecone,
  SiRedis,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiFastapi,
  SiJupyter,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
      </Col>

      {/* Full-Stack Frameworks (minimal) */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>

      {/* Gen AI & LLM Ecosystem */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiLangchain />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiHuggingface />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnthropic /> {/* For Claude models */}
      </Col>

      {/* Vector DBs & Caching */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPinecone />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>

      {/* Traditional ML (supporting role) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>

      {/* Data & Storage */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>

      {/* DevOps & Cloud for AI */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
    </Row>
  );
}

export default Techstack;
