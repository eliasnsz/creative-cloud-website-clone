import { Card } from '../../Card/Card'
import './TabComponent.scss'

export function TabComponent({ title, desc, cards }) {
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

        </section>

      </section>

    </>
  )
}