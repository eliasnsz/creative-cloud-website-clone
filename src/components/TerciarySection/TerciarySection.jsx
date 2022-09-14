import './TerciarySection.scss'

export function TerciarySection() {
  return(
    <>
      <section id="terciary-section">
          <div className="title-container">
            <h1 className='terciary-h1'>Dúvidas? Nós temos as respostas.</h1>
          </div>
        <div id="text-flex">

          <div className='text-flex-container'>
            <h3>Quando minha assinatura entra em vigor?</h3>
            <p>Se você comprou a assinatura diretamente no site da Adobe, ela iniciará quando a Adobe Store finalizar o pedido. Para começar, basta fazer logon na conta.</p>
          </div>
          <div className='text-flex-container'>
            <h3>Posso compartilhar qualquer tipo de arquivo da Creative Cloud?</h3>
            <p>Não há restrições quanto aos tipos de arquivo que podem ser compartilhados na Creative Cloud.</p>
          </div>
          <div className='text-flex-container'>
            <h3>Quais tipos de arquivo posso armazenar na Creative Cloud?</h3>
            <p>Não há restrições quanto aos tipos de arquivo que você pode armazenar na Creative Cloud.</p>
          </div>
          <div className='text-flex-container'>
            <h3>Como faço para acessar meus aplicativos da Creative Cloud?</h3>
            <p>Os aplicativos são instalados e executados no desktop como qualquer outro aplicativo de desktop. Ao baixar um de nossos aplicativos de criação pela primeira vez, você baixa automaticamente o aplicativo de desktop da Creative Cloud, que serve para acessar, baixar e atualizar os aplicativos de criação.</p>
          </div>
          <div className='text-flex-container'>
            <h3>O que está incluso na Creative Cloud para equipes?</h3>
            <p>A Creative Cloud para equipes dá acesso ao conjunto completo de aplicativos de criação da Adobe, além de recursos exclusivos criados para ajudar sua equipe a trabalhar ainda melhor. Você também recebe o Admin Console online para facilitar o gerenciamento de licenças, suporte técnico avançado 24 horas e sessões individuais com especialistas.</p>
          </div>
          <div className='text-flex-container'>
            <h3>Qual é o desconto para estudantes da Creative Cloud?</h3>
            <p>Estudantes recebem mais de 60% de desconto sobre o preço normal no primeiro ano.  Eles pagam R$86,00/mês no primeiro ano e R$124,00/mês após esse período.  O preço normal é de R$224,00/mês.  Estudantes também têm acesso completo à Creative Cloud ao adquirirem uma assinatura.</p>
          </div>
        </div>

        <p className='down-link'>
          <a href="">Veja todas as perguntas frequentes</a>
        </p>
      </section>
    </>
  )
}