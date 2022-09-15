import { useState, createContext } from 'react'
import './App.scss'
import { Footer } from './components/Footer/Footer'

import { Header } from './components/Header/Header'
import { MainSection } from './components/MainSection/MainSection'
import { NavBar } from './components/NavBar/NavBar'
import { Plans } from './components/Plans/Plans'
import { SecondarySection } from './components/SecondarySection/SecondarySection'
import { TabComponent } from './components/Tabs/TabComponent/TabComponent'
import { VisaoGeral } from './components/Tabs/VisaoGeral/VisaoGeral'
import { TerciarySection } from './components/TerciarySection/TerciarySection'

export const TabContext = createContext()

export default function App() {

  const [tabSelected, setTabSelected] = useState("visao-geral") 
  console.log(tabSelected)

  return (
    <div className="App">
        <Header />
      <TabContext.Provider value={{ tabSelected, setTabSelected }}>
        <MainSection id="MainSection" />
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
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PSLR%20CLassic_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/lightroom-classic.svg", 
                title: "Photoshop Lightroom Classic",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "Aprimore ainda mais suas melhores fotos com as ferramentas de edição desenvolvidas para desktop.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PS_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg", 
                title: "Photoshop",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                  "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                ],
                desc: "Crie imagens incríveis, desenhos avançados e arte espetacular.",
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
                callToAction: "Saiba mais" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PS_Camera_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/pscamera.svg", 
                title: "Photoshop Camera",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DevicePhone_22_N.svg"
                  ],
                desc: "Melhore suas fotos com o aplicativo de câmera inteligente que sugere as melhores lentes e filtros para você.",
                callToAction: "Saiba mais" 
              }
            ]}
          /> : 
          null}
        {tabSelected == "design-grafico" ? 
          <TabComponent 
            title={"Crie designs e documentos incríveis para impressão e mídia digital."}
            desc={"Saiba mais sobre design gráfico"}
            cards={[
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PS_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg", 
                title: "Photoshop",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                  "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                ],
                desc: "Crie imagens incríveis, desenhos avançados e arte espetacular.",
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
        {tabSelected == "video" ? 
          <TabComponent 
            title={"Crie e edite vídeos, áudios, efeitos visuais e animações extraordinários."}
            desc={"Saiba mais sobre vídeo e animação"}
            cards={[
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PR_Pro_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/premiere.svg", 
                title: "Premiere Pro",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "O padrão do setor em edição profissional de filmes e vídeos. ",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/product-card-RU?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/premiere-rush.svg", 
                title: "Premiere Rush",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                    "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                  ],
                desc: "Grave, edite e compartilhe conteúdo de alta qualidade com o aplicativo de edição de vídeo em qualquer lugar.",
                callToAction: "Comece agora" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PS_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg", 
                title: "Photoshop",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                    "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                  ],
                desc: "Crie imagens incríveis, desenhos avançados e arte espetacular.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_AE_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/aftereffects.svg", 
                title: "After Effects",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "Crie títulos de filmes, introduções e transições com o padrão do setor para animações e efeitos visuais.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_AU_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/audition.svg", 
                title: "Audition",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "Crie, mixe e adicione efeitos sonoros a filmes, publicações para redes sociais e podcasts.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_AN_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/animate.svg", 
                title: "Animate",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "Crie animações para desenhos animados, banners, jogos e Web.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_CH_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/character-animator.svg", 
                title: "Character Animator",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "Use suas expressões e movimentos para dar vida a personagens em tempo real.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_ME_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/media-encoder.svg", 
                title: "Media Encoder",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "Produção rápida de arquivos de vídeo para qualquer tela.",
                callToAction: "Saiba mais" 
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
            ]}
          /> : 
          null}
        {tabSelected == "ilustracao" ? 
          <TabComponent 
            title={"Crie belos desenhos, ilustrações e pinturas para impressão, Web, vídeo e dispositivos móveis."}
            desc={"Saiba mais sobre ilustração"}
            cards={[
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
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PS_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg", 
                title: "Photoshop",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                  "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                ],
                desc: "Crie imagens incríveis, desenhos avançados e arte espetacular.",
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
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/product-card-draw?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/illustrator-draw.svg", 
                title: "Illustrator Draw",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DevicePhone_22_N.svg"
                  ],
                desc: "Criação de designs e artes vetoriais no dispositivo móvel.",
                callToAction: "Saiba mais" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_CA_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/capture.svg", 
                title: "Capture",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DevicePhone_22_N.svg"
                  ],
                desc: "Capture combinações de cores, texturas e muito mais no smartphone para usar em projetos de vídeo, foto e design.",
                callToAction: "Saiba mais" 
              },
            ]}
          /> : 
          null}
        {tabSelected == "interface" ? 
          <TabComponent 
            title={"Crie experiências envolventes para Web, dispositivos móveis, voz e muito mais."}
            desc={"Saiba mais sobre interface e experiência do usuário"}
            cards={[
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_XD_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/xd.svg", 
                title: "XD",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                  "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                ],
                desc: "Crie experiências incríveis para sites, aplicativos, jogos e marcas.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PS_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg", 
                title: "Photoshop",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                  "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                ],
                desc: "Crie imagens incríveis, desenhos avançados e arte espetacular.",
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
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_AE_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/aftereffects.svg", 
                title: "After Effects",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "Crie títulos de filmes, introduções e transições com o padrão do setor para animações e efeitos visuais.",
                callToAction: "Experimente grátis" 
              },
            ]}
          /> : 
          null}
        {tabSelected == "3d" ? 
          <TabComponent 
            title={"Crie modelos e personagens 3D, além de experiências avançadas e imersivas.  "}
            extra={"Os aplicativos Substance 3D são vendidos exclusivamente com um plano do Substance 3D."}
            desc={"Saiba mais sobre 3D e realidade aumentada"}
            cards={[
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/sg_product_card?$png$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/substance-3d-stager.svg", 
                title: "Substance 3D Stager",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                ],
                desc: "Crie e renderize cenas inovadoras em 3D no seu próprio estúdio virtual.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/product-card-AR?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/aero.svg", 
                title: "Aero",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                  "https://www.adobe.com/content/dam/cc/icons/S_DevicePhone_22_N.svg"
                ],
                desc: "Crie e compartilhe experiências imersivas de realidade aumentada, sem necessidade de programação.",
                callToAction: "Saiba mais" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/sa_product_card?$png$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/sa_appicon_64.svg", 
                title: "Substance 3D Sampler",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                ],
                desc: "Crie rapidamente materiais e iluminação em 3D usando imagens reais.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/pt_product_card?$png$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/pt_appicon_64.svg", 
                title: "Substance 3D Painter",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                ],
                desc: "Desenvolva modelos em 3D em tempo real com o aplicativo padrão do setor.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/ds_product_card?$png$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/ds_appicon_64.svg", 
                title: "Substance 3D Designer ",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                ],
                desc: "Projete ativos paramétricos em 3D com controle total e possibilidades infinitas.",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/md_product_card?$png$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/us/en/products/substance3d-modeler/md_beta_appicons_256.svg", 
                title: "Substance 3D Modeler (beta)",
                devicesLogos: 
                [
                  "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                ],
                desc: "Crie modelos em 3D de modo intuitivo no desktop e em realidade virtual. Participe do beta.",
                callToAction: "Saiba mais" 
              },
            ]}
          /> : 
          null}
        {tabSelected == "redes-sociais" ? 
          <TabComponent 
            title={"Grave, edite e compartilhe vídeos em qualquer lugar."}
            desc={"Saiba mais sobre redes sociais"}
            cards={[
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PR_Pro_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/premiere.svg", 
                title: "Premiere Pro",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
                  ],
                desc: "O padrão do setor em edição profissional de filmes e vídeos. ",
                callToAction: "Experimente grátis" 
              },
              {
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/product-card-RU?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/premiere-rush.svg", 
                title: "Premiere Rush",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
                    "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
                  ],
                desc: "Grave, edite e compartilhe conteúdo de alta qualidade com o aplicativo de edição de vídeo em qualquer lugar.",
                callToAction: "Comece agora" 
              },
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
                background: "https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PS_Camera_600x208?$pjpeg$&jpegSize=100&wid=600", 
                icon: "https://www.adobe.com/content/dam/cc/icons/pscamera.svg", 
                title: "Photoshop Camera",
                devicesLogos: 
                  [
                    "https://www.adobe.com/content/dam/cc/icons/S_DevicePhone_22_N.svg"
                  ],
                desc: "Melhore suas fotos com o aplicativo de câmera inteligente que sugere as melhores lentes e filtros para você.",
                callToAction: "Saiba mais" 
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
              }
            ]}
          /> : 
          null}
      </TabContext.Provider>
      <SecondarySection/>
      <TerciarySection/>
      <div id="hr-gradient"></div>
      <Plans/>
      <div id="hr-gradient"></div>
      <Footer/>
    </div>
  )
}
