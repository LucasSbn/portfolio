import Navbar from "../../components/Navbar/Navbar"
import PDF from "../../../Assets/curriculoLC.docx.pdf";
import IMG from "../../../Assets/imgLC.png";
import { Link } from "react-router-dom";

/////icons
import { FaRegFileCode } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

////useFetch
import { useFetch } from "../../Hook/UseFetch";

import Style from "./Home.module.css";

const Home = () => {

  const url = "https://api.github.com/users/LucasSbn/repos";

  const {data} = useFetch(url);

  console.log(data)

  return (
    <div>
        <Navbar/>

      <div className={Style.titlePrinc}>
          <div>
           <div className={Style.titleName}>
              
              <div>
                <h1>Lucas Cauã</h1>
                <h1>Sabino</h1>
              </div>

              <h2>Desenvolvedor Back-end</h2>
            
            </div>

            <div className={Style.titleCV}>
              <a href={PDF} download="curriculoLC.docx.pdf">Download CV</a>
              <Link to="mailto:lucas_sbn@outlook.com">Entrar em contato</Link>
            </div>

          </div>

          <div>

            <div className={Style.divImg}>
              <img src={IMG}/>
            </div>


          </div>
      </div>

      <div className={Style.projects}>
          <div className={Style.aboutProjects}>
            <p>Meus projetos</p>
            <span>No meu GitHub, destaco três projetos principais desenvolvidos em Python. O primeiro é uma assistente virtual com IA, capaz de interagir de forma inteligente e oferecer soluções personalizadas para diferentes cenários. Também desenvolvi um sistema completo para barbearias, com funcionalidades como agendamento, controle de clientes e gestão de serviços, voltado para otimizar a operação diária. Por fim, criei um bot para Discord com comandos interativos, sistemas de moderação e automações, trazendo praticidade e engajamento para comunidades da plataforma. Esses projetos refletem minha habilidade em criar soluções modernas e eficientes. </span>
          </div>


          <div className={Style.reposAbout}>
            {data && data.map((repo)=>(
              <div key={repo.id} className={Style.reposAbout_div}>
                <h2>{repo.name}</h2>

                <div className={Style.languageUsage}>
                <FaRegFileCode/>
                <p>{repo.language}</p>
                </div>

                <p className={Style.repoAbout}>{repo.about}</p>

                <div className={Style.divLinks}>
                  {repo.repoPage ? (<Link to={repo.repoPage} target="_blanck">  <IoRocketSharp className={Style.repoPage}/></Link>) : (<IoRocketSharp style={{color:"gray"}}/>)}
                <Link to={repo.repoLink} target="_blanck">  <FaGithub className={Style.repoGit}
                /></Link>
                </div>
              
              </div>
            ))}
          </div>

    </div>

    </div>
  )
}

export default Home