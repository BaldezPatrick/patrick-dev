import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoPython,
  BiLogoDocker,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiNodejs } from "react-icons/di";

const dataSkills = [
  { id: 1, icon: <BiLogoHtml5 size={40} />, name: "Html" },
  { id: 2, icon: <BiLogoCss3 size={40} />, name: "Css" },
  { id: 3, icon: <BiLogoReact size={40} />, name: "ReactJs" },
  { id: 4, icon: <BiLogoJavascript size={40} />, name: "JavaScript" },
  { id: 5, icon: <BiLogoTypescript size={40} />, name: "TypeScript" },
  { id: 6, icon: <DiNodejs size={40} />, name: "NodeJs" },
  { id: 7, icon: <BiLogoJava size={40} />, name: "Java" },
  { id: 8, icon: <BiLogoPython size={40} />, name: "Python" },
  { id: 9, icon: <BiLogoDocker size={40} />, name: "Docker" },
];

export default dataSkills;
