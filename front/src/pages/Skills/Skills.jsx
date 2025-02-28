import Navbar from "../../components/Navbar/Navbar"

///icons
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiPandas } from "react-icons/si";

//STYLE
import Style from "./Skills.module.css"

const Skills = () => {
    return (
      <div>
        <Navbar/>

        <h1 className={Style.h1Skills}>Skills</h1>

        <div className={Style.linguagens}>

          <div className={Style.html}>
            <FaHtml5/>
            <h3>HTML5</h3>
          </div>

          <div className={Style.css}>
            <FaCss3Alt/>
            <h3>CSS3</h3>
          </div>


          <div className={Style.javascript}>
            <IoLogoJavascript/>
            <h3>Javascript</h3>
          </div>

          <div className={Style.firebase}>
            <IoLogoFirebase/>
            <h3>Firebase</h3>
          </div>

          <div className={Style.python}>
            <FaPython/>
            <h3>Python</h3>
          </div>

          <div className={Style.pandas}>
            <SiPandas/>
            <h3>Pandas</h3>
          </div>

          <div className={Style.flask}>
            <SiFlask/>
            <h3>Flask</h3>
          </div>

          <div className={Style.django}>
            <SiDjango/>
            <h3>Django</h3>
          </div>

          <div className={Style.node}>
            <FaNodeJs/>
            <h3>Node</h3>
          </div>

          <div className={Style.mysql}>
            <GrMysql/>
            <h3>MySQL</h3>
          </div>

          <div className={Style.express}>
            <SiExpress/>
            <h3>Express</h3>
          </div>

          <div className={Style.github}>
            <FaGithub/>
            <h3>GitHub</h3>
          </div>

          <div className={Style.git}>
            <FaGitAlt/>
            <h3>Git</h3>
          </div>

          </div>

    </div>
  )
}

export default Skills