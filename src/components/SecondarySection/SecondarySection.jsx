import { SecondaryCard } from '../SecondaryCard/SecondaryCard'
import './SecondarySection.scss'

export function SecondarySection() {
  return(
    <>
      <section id="secondary-section">
        <div className="title-container">
          <h1>O que está incluso na Creative Cloud?</h1>
        </div>
        <div id="flex-container">
          <SecondaryCard 
            logo={"https://www.adobe.com/content/dam/cc/icons/icon-30apps.svg"}
            title={"Mais de 20 aplicativos"}
            desc={"Explore sua criatividade com aplicativos para desktop e dispositivos móveis, incluindo o Photoshop, o InDesign e o Premiere Rush."}
          />
          <SecondaryCard 
            logo={"https://www.adobe.com/content/dam/cc/icons/icon-fonts.svg"}
            title={"Adobe Fonts"}
            desc={"Acesse milhares de fontes para projetos diretamente nos aplicativos da Creative Cloud."}
          />
          <SecondaryCard 
            logo={"https://www.adobe.com/content/dam/cc/icons/icon-behance.svg"}
            title={"Behance"}
            desc={"Destaque e descubra trabalhos criativos."}
          />
          <SecondaryCard 
            logo={"https://www.adobe.com/content/dam/cc/icons/icon-libraries.svg"}
            title={"Bibliotecas da Creative Cloud"}
            desc={"Salve, procure e compartilhe ativos das bibliotecas diretamente nos aplicativos da Creative Cloud."}
          />
          <SecondaryCard 
            logo={"https://www.adobe.com/content/dam/cc/icons/icon-portfolio.svg"}
            title={"Adobe Portfolio"}
            desc={"Crie e personalize seu próprio site de portfólio."}
          />
          <SecondaryCard 
            logo={"https://www.adobe.com/content/dam/cc/icons/icon-storage.svg"}
            title={"Armazenamento"}
            desc={"100 GB de armazenamento na nuvem para compartilhamento de arquivos e colaboração."}
          />
          <SecondaryCard 
            logo={"https://www.adobe.com/content/dam/cc/icons/collaboration.svg"}
            title={"Ferramentas de colaboração"}
            desc={"Trabalhe melhor em equipe com ferramentas que permitem compartilhar, revisar e comentar."}
          />
          <div className="spacament-div"></div> 
          <div className="spacament-div"></div> 
        </div>

        <p className='down-link'>
          <a href="">Saiba mais sobre os serviços da Creative Cloud</a>
        </p>

      </section>
    </>
  )
}