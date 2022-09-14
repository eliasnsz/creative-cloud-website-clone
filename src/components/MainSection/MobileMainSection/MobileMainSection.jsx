import './MobileMainSection.scss'

export function MobileMainSection() {
  return (
    <>
      <section id="mobile-main-section-container">
        <div className="background-container">

        </div>
        <div id="mobile-text-container">
          <h1>Criatividade para todos.</h1>
          <p>
          Tenha mais de 20 aplicativos, incluindo o Photoshop, o Illustrator e o Acrobat Pro, e economize mais de 40% no primeiro ano.
          <br />
          <a href="">Veja os termos.</a>
          </p>

          <div className="mobile-button">
            <button>Compare os planos</button>
            <button className='blue-button'>Experimente grátis</button>
          </div>
        </div>
      </section>
    </>
  )
} 