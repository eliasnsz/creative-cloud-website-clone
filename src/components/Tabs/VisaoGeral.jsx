import "./VisaoGeral.scss"

import { Card } from "../Card/Card"

export function VisaoGeral () {
  return (
    <>
      <section id="tab-container">
        <div className="text-container">
          <h1>O que é a Creative Cloud?</h1>
          <p>
            A Creative Cloud é uma coleção de mais de 20 aplicativos e serviços para 
            desktop e dispositivos móveis para fotografia, design, vídeo, Web, 
            experiência do usuário e muito mais. Agora você pode dar vida às suas 
            ideias em qualquer lugar com o Photoshop no iPad, desenhar e pintar com o 
            Adobe Fresco e criar designs em 3D e para realidade aumentada. Junte-se à 
            nossa comunidade criativa global para criar algo ainda melhor juntos.
          </p>
        </div>

        <section id="grid-card-container">
          <Card 
            background={'https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PS_600x208?$pjpeg$&jpegSize=100&wid=600'}
            icon={"https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg"}
            title={"Photoshop"}
            desc={"Crie imagens incríveis, desenhos avançados e arte espetacular."}
            callToAction={"Experimente Gratis"}
          />
          <Card 
            background={"https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_AI_600x208?$pjpeg$&jpegSize=100&wid=600"}
            icon={"https://www.adobe.com/content/dam/cc/icons/illustrator.svg"}
            title={"Illustrator"}
            desc={"Crie belos desenhos, ícones e muito mais, para usar em qualquer lugar e em qualquer tamanho."}
            callToAction={"Experimente Gratis"}
          />
          <Card 
            background={"https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_ID_600x208?$pjpeg$&jpegSize=100&wid=600"}
            icon={"https://www.adobe.com/content/dam/cc/icons/indesign.svg"}
            title={"InDesign"}
            desc={"Crie e publique livros, revistas digitais, ebooks, pôsteres e PDFs interativos."}
            callToAction={"Experimente Gratis"}
          />
          <Card 
            background={"https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_PR_Pro_600x208?$pjpeg$&jpegSize=100&wid=600"}
            icon={"https://www.adobe.com/content/dam/cc/icons/premiere.svg"}
            title={"Premiere Pro"}
            desc={"O padrão do setor em edição profissional de filmes e vídeos."}
            callToAction={"Experimente Gratis"}
          />
          <Card 
            background={"https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_XD_600x208?$pjpeg$&jpegSize=100&wid=600"}
            icon={"https://www.adobe.com/content/dam/cc/icons/xd.svg"}
            title={"XD"}
            desc={"Crie experiências incríveis para sites, aplicativos, jogos e marcas. "}
            callToAction={"Experimente Gratis"}
          />
          <Card 
            background={"https://cc-prod.scene7.com/is/image/CCProdAuthor/2021-Product%20Card_Acrobat%20DC_600x208?$pjpeg$&jpegSize=100&wid=600"}
            icon={"https://www.adobe.com/content/dam/cc/icons/acrobat_reader_appicon_noshadow_256.svg"}
            title={"Acrobat"}
            desc={"Tenha ferramentas de PDF e assinatura eletrônica para todas as suas necessidades de documentos digitais."}
            callToAction={"Experimente Gratis"}
          />

        </section>
      </section>
    </>
  )
}