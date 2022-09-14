import './SecondaryCard.scss'

export function SecondaryCard({ logo, title, desc }) {
  return(
    <>
      <div id="secondary-card-container">
        <div className="secondary-card-logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="secondary-card-text-container">
          <h4>{title}</h4>
          <p>{desc}</p>
          <a href="">Saiba mais</a>
        </div>
      </div>
    </>
  )
}