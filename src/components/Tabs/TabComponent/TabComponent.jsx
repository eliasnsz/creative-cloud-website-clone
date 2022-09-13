import { Card } from '../../Card/Card'
import './TabComponent.scss'

export function TabComponent({ title, desc }) {
  return (
    <>
      <section id="tab-container">
        <h2 className='tab-title'>
          {title}
        </h2>
        <p className='tab-desc'>
          <a href="">{desc}</a>
        </p>

        <section id="grid-card-container">
          <Card
            background={'https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PSLR_600x208?$pjpeg$&jpegSize=100&wid=600'}
            icon={"https://www.adobe.com/content/dam/cc/icons/lightroom-cc.svg"}
            title={"Photoshop Lightroom"}
            devicesLogos={[
              "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
              "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
            ]}
            desc={"Ilumine fotos, realce cores, encontre e classifique imagens e deixe suas fotos incríveis em qualquer lugar."}
            callToAction={"Experimente Gratis"}
          />
          <Card 
            background={'https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PSLR%20CLassic_600x208?$pjpeg$&jpegSize=100&wid=600'}
            icon={"https://www.adobe.com/content/dam/cc/icons/lightroom-classic.svg"}
            title={"Photoshop Lightroom Classic"}
            devicesLogos={[
              "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg"
            ]}
            desc={"Aprimore ainda mais suas melhores fotos com as ferramentas de edição desenvolvidas para desktop."}
            callToAction={"Experimente Gratis"}
          />
          <Card 
            background={'https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PS_600x208?$pjpeg$&jpegSize=100&wid=600'}
            icon={"https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg"}
            title={"Photoshop"}
            devicesLogos={[
              "https://www.adobe.com/content/dam/cc/icons/S_DeviceDesktop_22_N.svg",
              "https://www.adobe.com/content/dam/cc/icons/S_TabletMobile_22_N.svg"
            ]}
            desc={"Crie imagens incríveis, desenhos avançados e arte espetacular."}
            callToAction={"Experimente Gratis"}
          />
          <Card 
            background={'https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PSExpress_600x208?$pjpeg$&jpegSize=100&wid=600'}
            icon={"https://www.adobe.com/content/dam/cc/icons/ps_express_appicon_256.svg"}
            title={"Photoshop Express"}
            devicesLogos={[
              "https://www.adobe.com/content/dam/cc/icons/S_DevicePhone_22_N.svg"
            ]}
            desc={"Edite, faça colagem e retoque fotos com rapidez para que se destaquem nas redes sociais e em todos os outros lugares."}
            callToAction={"Experimente Gratis"}
          />
          <Card 
            background={'https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PS_Camera_600x208?$pjpeg$&jpegSize=100&wid=600'}
            icon={"https://www.adobe.com/content/dam/cc/icons/pscamera.svg"}
            title={"Photoshop Camera"}
            devicesLogos={[
              "https://www.adobe.com/content/dam/cc/icons/S_DevicePhone_22_N.svg"
            ]}
            desc={"Melhore suas fotos com o aplicativo de câmera inteligente que sugere as melhores lentes e filtros para você."}
            callToAction={"Experimente Gratis"}
          />
        </section>

      </section>

    </>
  )
}