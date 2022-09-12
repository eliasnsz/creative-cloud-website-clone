import { useState } from 'react'
import './NavBar.scss'

export function NavBar () {

  const [ tabSelected, setTabSelected ] = useState("")


  return (
    <>
      <div id="navbar-container">
        <ul>
          <li>
            <input type="radio" onClick={() => setTabSelected("visao-geral")} 
            name="navbar-radio" id="navbar-radio"/> 
            Visão geral
            <img src="" alt="" />
          </li>
          <li>
            <input type="radio" onClick={() => setTabSelected("foto")}
            name="navbar-radio" id="navbar-radio"/>
            Foto
          </li>
          <li>
            <input type="radio" onClick={() => setTabSelected("design-grafico")} 
            name="navbar-radio" id="navbar-radio"/> 
            Design gráfico
          </li>
          <li>
            <input type="radio" onClick={() => setTabSelected("video")} 
            name="navbar-radio" id="navbar-radio"/> 
            Vídeo
          </li>
          <li>
            <input type="radio" onClick={() => setTabSelected("ilustracao")} 
            name="navbar-radio" id="navbar-radio"/> 
            Ilustração
          </li>
          <li>
            <input type="radio" onClick={() => setTabSelected("interface")}
            name="navbar-radio" id="navbar-radio"/> 
            Interface e experiência do usuário
          </li>
          <li>
            <input type="radio" onClick={() => setTabSelected("3d")}
            name="navbar-radio" id="navbar-radio"/>  
            3D e realidade aumentada
          </li>
          <li>
            <input type="radio" onClick={() => setTabSelected("redes-sociais")}
            name="navbar-radio" id="navbar-radio"/> 
            Redes sociais
          </li>
        </ul>
      </div>
    </>
  )
}