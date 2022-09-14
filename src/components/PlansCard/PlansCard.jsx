import "./PlansCard.scss"

export function PlansCard({ title, descStrong, desc, descLink, link1, link2 }) {
  return (
    <>
      <div className="plans-card-container">
        <div className="text-content">
          <h4>{title}</h4>
          <p className="price">
            <strong>{descStrong}</strong>
          </p>
          <p>
            {desc}
            <a className="termos" href="">{descLink}</a>
          </p>
          <p>
            {
              link1 !== "" ? <><a href="">{link1}</a> | <a href="">{link2}</a></> : null
            }
          </p>
        </div>
        <div className="button-container">
          <hr />
          <button>Compre agora</button>
        </div>
      </div>
    </>
  )
}