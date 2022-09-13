import './Card.scss'

export function Card({ background, icon, title, devicesLogos, desc, callToAction}) {
  return (
    <>
      <section id='card-container'>
        <div style={{
          backgroundImage: `url(${background})`
        }} className="img">
          
        </div>
        <div className="card-content">
          <div className="card-header">
            <div className="right-header">
              <img className='card-logo-img' src={icon} alt="photoshop-logo" />
              <h2>{title}</h2>
            </div>
            <div className="devices-logo">
              {
                devicesLogos.map((logoUrl, i) => {
                  return <img key={i} src={logoUrl} alt="" />
                })
              }
            </div>
            
          </div>
          <div className="card-body">
            <p>
              {desc} <a href="">Saiba mais</a>             
            </p>
          </div>
          <div className="card-footer">
            <hr />
            <button>{callToAction}</button>
          </div>
        </div>

      </section>
    </>
  )
}