import { useState, useContext } from 'react'
import { TabContext } from '../../App'
import { MobileNavBar } from './MobileNavBar/MobileNavBar'
import './NavBar.scss'

export function NavBar () {

  const { tabSelected, setTabSelected } = useContext(TabContext)

  return (
    <>
      <div id="navbar-container">
        <MobileNavBar/>
        
        <ul id='navbar-ul'>
          <li>
            <input type="radio" onClick={e => { setTabSelected(e.target.value)}} 
            name="navbar-radio" id="navbar-radio" value={"visao-geral"}/> 
            Visão geral
            <img src="" alt="" />
          </li>
          <li>
            <input type="radio" onClick={e => setTabSelected(e.target.value)}
            name="navbar-radio" id="navbar-radio" value={"foto"}/>
            Foto
          </li>
          <li>
            <input type="radio"  onClick={e => setTabSelected(e.target.value)} 
            name="navbar-radio" id="navbar-radio" value={"design-grafico"}/> 
            Design gráfico
          </li>
          <li>
            <input type="radio" onClick={e => setTabSelected(e.target.value)} 
            name="navbar-radio" id="navbar-radio" value={"video"}/> 
            Vídeo
          </li>
          <li>
            <input type="radio" onClick={e => setTabSelected(e.target.value)} 
            name="navbar-radio" id="navbar-radio" value={"ilustracao"}/> 
            Ilustração
          </li>
          <li>
            <input type="radio" onClick={e => setTabSelected(e.target.value)}
            name="navbar-radio" id="navbar-radio" value={"interface"}/> 
            Interface e experiência do usuário
          </li>
          <li>
            <input type="radio" onClick={e => setTabSelected(e.target.value)}
            name="navbar-radio" id="navbar-radio" value={"3d"}/>  
            3D e realidade aumentada
          </li>
          <li>
            <input type="radio" onClick={e => setTabSelected(e.target.value)}
            name="navbar-radio" id="navbar-radio" value={"redes-sociais"}/> 
            Redes sociais
          </li>
        </ul>        
      </div>
    </>
  )
}