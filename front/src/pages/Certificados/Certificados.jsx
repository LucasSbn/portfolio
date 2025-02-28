import Navbar from "../../components/Navbar/Navbar"

import Style from "./Certificados.module.css";

//icons
import { BsFiletypeSql } from "react-icons/bs";
import { FaHtml5, FaCss3, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiDjango } from "react-icons/si";


const Certificados = () => {
  return (
    <div>
      <Navbar/>
      <h1 className={Style.h1Princ}>Certificados</h1>
    
        <div className={Style.divPrincDivs} >

          <div className={Style.DivBox}>
            <h2>Aprenda Python - Udemy</h2>
            <div className={Style.divHrsIcons}>
              <p>26Hrs</p>
              <div>
                <FaPython />
                <BsFiletypeSql />
              </div>
            </div>
          </div>

          <div className={Style.DivBox}>
            <h2>Jornada Python - Udemy</h2>
            <div className={Style.divHrsIcons}>
              <p>8Hrs</p>
              <div>
                <FaPython />
              </div>
            </div>
          </div>

          <div className={Style.DivBox}>
            <h2>Front-end através de uma formação completa - Udemy</h2>
            <div className={Style.divHrsIcons}>
              <p>51Hrs</p>
              <div>
                <FaHtml5/>
                <FaCss3/>
                <IoLogoJavascript/>
                <SiTypescript/>
                <FaReact/>
              </div>
            </div>
          </div>

          <div className={Style.DivBox}>
            <h2>Modelos de Processamento de Linguagem Natural - Udemy</h2>
            <div className={Style.divHrsIcons}>
              <p>11Hrs</p>
              <div>
                <FaPython />
                <SiTensorflow />
              </div>
            </div>
          </div>

          <div className={Style.DivBox}>
            <h2>Python 3 completo - Udemy</h2>
            <div className={Style.divHrsIcons}>
              <p>141Hrs</p>
              <div>
                <FaPython/>
                <GrMysql/>
                <SiDjango/>
              </div>
            </div>
          </div>

        </div>
    
    </div>
  )
}

export default Certificados