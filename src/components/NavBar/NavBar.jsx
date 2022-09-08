import './NavBar.scss'

export function NavBar () {
  
  return (
    <>
      <div id="navbar-container">
        <ul>
          <li>
            <input type="radio" name="navbar-radio" id="navbar-radio"/> 
            Visão geral
          </li>
          <li>
            <input type="radio" name="navbar-radio" id="navbar-radio"/>
            Foto
          </li>
          <li>
            <input type="radio" name="navbar-radio" id="navbar-radio"/> 
            Design gráfico
          </li>
          <li>
            <input type="radio" name="navbar-radio" id="navbar-radio"/> 
            Vídeo
          </li>
          <li>
            <input type="radio" name="navbar-radio" id="navbar-radio"/> 
            Ilustração
          </li>
          <li>
            <input type="radio" name="navbar-radio" id="navbar-radio"/> 
            Interface e experiência do usuário
          </li>
          <li>
            <input type="radio" name="navbar-radio" id="navbar-radio"/>  
            3D e realidade aumentada
          </li>
          <li>
            <input type="radio" name="navbar-radio" id="navbar-radio"/> 
            Redes sociais
          </li>
        </ul>
      </div>
    </>
  )
}