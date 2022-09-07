import './MainSection.scss'

export function MainSection() {
  return(
    <>
      <section id="main-section-container">
        
        <div id="main-section-flex-container">
          <div id="main-section-content">

            <img src="https://www.adobe.com/content/dam/cc/icons/icon-specialoffers-cc.svg" alt="adobe-cloud-logo" />

            <h1>Criatividade para todos.</h1>

            <p>
              Tenha mais de 20 aplicativos, incluindo o Photoshop, o Illustrator e o Acrobat Pro, e economize mais de 40% no primeiro ano.
            </p>
            <a href="">Veja os termos.</a>


            <div className="button-container">
              <button>Compare os planos</button>
              <button>Experimente grátis</button>
            </div>

          </div>
        </div>
        
        <video poster='"https://cc-prod.scene7.com/is/image/CCProdAuthor/ccOverview-gradient-bg?$png$&jpegSize=300&wid=1440"' preload='metadata' muted playsInline autoPlay>
          <source src='https://images-tv.adobe.com/mpcv3/1041/1f840c0e-c677-4ec0-acca-51e58cd628ef_1631912166.1280x720at2000_h264.mp4'/>
        </video>
      </section>
    </>
  )
}