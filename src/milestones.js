import React from "react";
import { ReactComponent as BootstrapLogo } from "../src/tech-logo/bootstrap.svg";
import { ReactComponent as CssLogo } from "../src/tech-logo/css.svg";
import { ReactComponent as DatabaseLogo } from "../src/tech-logo/database.svg";
import { ReactComponent as DockerLogo } from "../src/tech-logo/docker.svg";
import { ReactComponent as FramerMotionLogo } from "../src/tech-logo/framer-motion.svg";
import { ReactComponent as GitLogo } from "../src/tech-logo/git.svg";
import { ReactComponent as HtmlLogo } from "../src/tech-logo/html.svg";
import { ReactComponent as JqueryLogo } from "../src/tech-logo/jquery.svg";
import { ReactComponent as JavaScriptLogo } from "../src/tech-logo/js_official.svg";
import { ReactComponent as NetlifyLogo } from "../src/tech-logo/netlify.svg";
import { ReactComponent as NodeLogo } from "../src/tech-logo/node.svg";
import { ReactComponent as NodemonLogo } from "../src/tech-logo/nodemon.svg";
import { ReactComponent as NpmLogo } from "../src/tech-logo/npm.svg";
import { ReactComponent as PostgreSQLLogo } from "../src/tech-logo/postgreSQL.svg";
import { ReactComponent as ReactLogo } from "../src/tech-logo/reactjs.svg";
import { ReactComponent as ReduxLogo } from "../src/tech-logo/redux.svg";
import { ReactComponent as SassLogo } from "../src/tech-logo/sass.svg";
import { ReactComponent as SequelizeLogo } from "../src/tech-logo/sequelize.svg";
import { ReactComponent as UbuntuLogo } from "../src/tech-logo/ubuntu.svg";
import { ReactComponent as VscodeLogo } from "../src/tech-logo/vscode.svg";

const milestones = [
  {
    date: "2020-03-31T22:00:00.000Z",
    title: "Codaisseur bootcamp",
    description:
      "Intensive 3 month coding bootcamp in amsterdam. Around 500 hours of coding. Basically no life, just study.",
    UsedTechnologies: [
      <ReactLogo />,
      <ReduxLogo />,
      <JavaScriptLogo />,
      <HtmlLogo />,
      <CssLogo />,
      <DatabaseLogo />,
      <UbuntuLogo />,
      <GitLogo />,
      <NetlifyLogo />,
      <DockerLogo />,
      <NodeLogo />,
      <NodemonLogo />,
      <NpmLogo />,
      <PostgreSQLLogo />,
      <SequelizeLogo />,
      <VscodeLogo />,
    ],
  },
  {
    date: "2020-04-30T22:00:00.000Z",
    title: "freeCodeCamp - Responsive Webdesign Certficate",
    description:
      "300 Hours of coursework. Topics that were covered are html5, Basic CSS, applied visual design, applied accessibility, responsive webdesign principles, Flexbox, Grid and 5 webdesign Projects. ",
    UsedTechnologies: [<HtmlLogo />, <CssLogo />],
  },
  {
    date: "2020-05-31T22:00:00.000Z",
    title: "JavaScript Algorithms and Data Structures Certfication",
    description:
      "300 Hours of coursework. Topics that are covered are basic JavaScript, EcmaScript6, Regular Expressions, Debugging, Basic Data Structures, Basic Algorithm Scripting, Object Oriented Programming, Functional Programming, Intermediate Algorithm Scripting and 5 projects. ",
    UsedTechnologies: [<JavaScriptLogo />, <HtmlLogo />, <CssLogo />],
  },
  {
    date: "2020-06-30T22:00:00.000Z",
    title: "My own portfolio website!",
    description:
      "I made my own website. I made use of React, javascript, HTML/CSS, Framer motion and scalable vector art. I designed my logo In adobe Illustrator.",
    UsedTechnologies: [
      <ReactLogo />,
      <FramerMotionLogo />,
      <GitLogo />,
      <VscodeLogo />,
      <HtmlLogo />,
      <CssLogo />,
    ],
  },
  {
    date: "2020-07-31T22:00:00.000Z",
    title: "freeCodeCamp Front-end Libraries Certification",
    description:
      "300 Hours of coursework. Consists out of 5 project and several assignements working on Bootstrap, Jquery, Sass, React and Redux. ",
    UsedTechnologies: [
      <ReactLogo />,
      <SassLogo />,
      <ReduxLogo />,
      <JavaScriptLogo />,
      <JqueryLogo />,
      <BootstrapLogo />,
      <CssLogo />,
      <HtmlLogo />,
    ],
  },
];

export default milestones;
