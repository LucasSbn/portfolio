import Navbar from "../../components/Navbar/Navbar"

import Style from "./Sobre.module.css"

const Sobre = () => {
  return (
    <div>
      <Navbar/>
      <h1 className={Style.h1PrincSobre}>Sobre</h1>

      <div className={Style.divPrincSobre}>
        <p>
        Olá, sou desenvolvedor backend com experiência em projetos que integram tecnologia de ponta e soluções inteligentes. Tive a oportunidade de ser bolsista da FACEPE, onde desenvolvi uma assistente virtual baseada em IA, combinando habilidades de Python, Flask e Pandas para criar respostas eficientes e interativas. Com foco em inovação, utilizei aprendizado de máquina e integração com Excel para otimizar resultados.
        </p>
        <p>Além disso, atuei em projetos como uma plataforma de planejamento de estudos para o ENEM/SSA, utilizando Express.js e Firebase, agregando funcionalidades que incluem notificações e relatórios de progresso.</p>
        <p>
        Com uma forte base em APIs RESTful e banco de dados MySQL, busco constantemente aprimorar meus conhecimentos, utilizando tecnologias modernas para criar soluções eficientes. Estou pronto para contribuir com meu conhecimento técnico e visão estratégica para novos desafios.
        </p>
        <p> Habilidades principais:
        Python, Flask, Pandas, MySQL, API RESTful, Firebase, JavaScript, Node.js, Git/GitHub.
        </p>
      </div>

    </div>
  )
}

export default Sobre