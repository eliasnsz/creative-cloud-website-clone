import { Card } from '../../Card/Card'
import './TabComponent.scss'

export function TabComponent({ title, extra, desc, cards }) {
  return (
    <>
      <section id="tab-container">
        <h2 className='tab-title'>
          {title}
        </h2>
        <p className='tab-desc'>
          <span className='extra-desc'>{extra} <a href="">{desc}</a></span>
        </p>

        <section id="grid-card-container">
          {
            cards.map((card, i) => {
              return ( <Card
                key={i}
                background={card.background}
                icon={card.icon}
                title={card.title}
                devicesLogos={card.devicesLogos}
                desc={card.desc}
                callToAction={card.callToAction}
              /> )            
            })
          }
          {
            cards.length % 2 !== 0 ?
              <div className="spacament-div"></div> : null
          }
        </section>

      </section>

    </>
  )
}