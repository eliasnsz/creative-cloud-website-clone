import { PlansCard } from '../PlansCard/PlansCard'
import './Plans.scss'

export function Plans() {
  return (
    <>
      <section id="plans-container">
        <div className="plans-title">
          <h1>Encontre o plano da Creative Cloud ideal para você.</h1>
        </div>
        <div className="plans-flex">
          <PlansCard
          title={"Uso pessoal"}
          descStrong={"R$124,00/mês no primeiro ano, depois R$224,00/mês."}
          desc={"Tenha mais de 20 aplicativos da Creative Cloud e economize mais de 40% no primeiro ano. Veja os termos. "}
          descLink={"Veja os termos."}
          link1={"Veja o que está incluído"}
          link2={"Saiba mais"}
          />
          <PlansCard
          title={"Estudantes e professores"}
          descStrong={"R$86,00/mês."}
          desc={"Economize mais de 60% em mais de 20 aplicativos da Creative Cloud. "}
          descLink={"Saiba mais"}
          link1={""}
          link2={""}
          />
          <PlansCard
          title={"Equipes"}
          descStrong={"A partir de R$145,00/mês."}
          desc={"Tenha tudo para criar trabalhos incríveis, além de gerenciamento fácil de licenças, suporte avançado e muito mais. "}
          descLink={"Saiba mais"}
          link1={""}
          link2={""}
          />
          <div className="spacament"></div>
        </div>

        <p className='contato'>Compre pelo telefone: <a href="tel:08000474493" >0800 047 4493</a></p>
      </section>
    </>
  )
}