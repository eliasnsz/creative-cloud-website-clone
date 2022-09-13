import { useState, createContext } from 'react'
import './App.scss'

import { Header } from './components/Header/Header'
import { MainSection } from './components/MainSection/MainSection'
import { NavBar } from './components/NavBar/NavBar'
import { TabComponent } from './components/Tabs/TabComponent/TabComponent'
import { VisaoGeral } from './components/Tabs/VisaoGeral/VisaoGeral'

export const TabContext = createContext()

export default function App() {

  const [tabSelected, setTabSelected] = useState("visao-geral") 
  console.log(tabSelected)

  return (
    <div className="App">
        <Header />
      <TabContext.Provider value={{ tabSelected, setTabSelected }}>
        <MainSection />
        <NavBar />
        {tabSelected == "visao-geral" ? <VisaoGeral/> : null}
        {tabSelected == "foto" ? 
          <TabComponent 
            title={"Crie imagens incríveis usando as melhores ferramentas de fotografia."}
            desc={"Saiba mais sobre fotografia"}
            cards={[
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PSLR_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/lightroom-cc.svg", 
                title: "Photoshop Lightroom",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                    "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                  ],
                desc: "Ilumine fotos, realce cores, encontre e classifique imagens e deixe suas fotos incríveis em qualquer lugar.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_AI_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/illustrator.svg", 
                title: "Illustrator",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceTablet_22_N.svg"
                  ],
                desc: "Crie belos desenhos, ícones e muito mais, para usar em qualquer lugar e em qualquer tamanho.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PSExpress_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/ps_express_appicon_256.svg", 
                title: "Photoshop Express",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DevicePhone_22_N.svg"
                  ],
                desc: "Edite, faça colagem e retoque fotos com rapidez para que se destaquem nas redes sociais e em todos os outros lugares.",
                callToAction: "Saiba Mais" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_ID_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/indesign.svg", 
                title: "InDesign",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "Crie e publique livros, revistas digitais, ebooks, pôsteres e PDFs interativos.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_DN_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/dimension.svg", 
                title: "Dimension",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "Crie imagens fotorrealistas para marcas, fotos de produto e design de embalagens.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_Acrobat%20DC_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/acrobat_reader_appicon_noshadow_256.svg", 
                title: "Acrobat",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                    "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                  ],
                desc: "Tenha ferramentas de PDF e assinatura eletrônica para todas as suas necessidades de documentos digitais.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/product-card-SP?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/spark.svg", 
                title: "Adobe Spark",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DevicePhone_22_N.svg",
                    "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                  ],
                desc: "Criação em minutos de ilustrações, páginas da Web e histórias em vídeo.",
                callToAction: "Iniciar avaliação gratuita" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_IC_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/incopy.svg", 
                title: "InCopy",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "Colabore com redatores e editores.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_FR_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Adobe_Fresco_CC_2021_Logo.png", 
                title: "Adobe Fresco",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                    "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                  ],
                desc: "Tenha uma experiência natural de pintura e desenho com a maior coleção de pincéis.",
                callToAction: "Saiba mais" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_Fonts_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/adobe-fonts.svg", 
                title: "Adobe Fonts",
                devicesLogos: [],
                desc: "Negrito, itálico, cursivo ou todas maiúsculas: encontre a fonte ideal para qualquer projeto, com mais de 20 mil opções para explorar. ",
                callToAction: "Procurar fontes" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_ST_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/stock.svg", 
                title: "Adobe Stock",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceTablet_22_N.svg"
                  ],
                desc: "Escolha entre milhões de fotos, desenhos, videoclipes e muito mais para adicionar às suas criações.",
                callToAction: "Experimente grátis" 
              },
            ]}
          /> : 
          null}
        {tabSelected == "design-grafico" ? <h1>design</h1> : null}
        {tabSelected == "video" ? <h1>video</h1> : null}
        {tabSelected == "ilustracao" ? <h1>ilustracao</h1> : null}
        {tabSelected == "interface" ? <h1>interface</h1> : null}
        {tabSelected == "3d" ? <h1>3d</h1> : null}
        {tabSelected == "redes-sociais" ? <h1>Redes</h1> : null}
      </TabContext.Provider>
    </div>
  )
}

