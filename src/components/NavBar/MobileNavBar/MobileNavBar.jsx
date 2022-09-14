import { useContext } from 'react'
import { TabContext } from '../../../App'
import './MobileNavBar.scss'

export function MobileNavBar() {

  const { tabSelected, setTabSelected } = useContext(TabContext)

  return (
    <>
      <div id="mobile-navbar-container">
        <div className="select-container">
          <select onChange={e => setTabSelected(e.target.value)} className="form-select" aria-label="Default select example">
            <option value="visao-geral" defaultValue >Visão geral</option>
            <option value="foto" >Foto</option>
            <option value="design-grafico" >Design gráfico</option>
            <option value="video" >Vídeo</option>
            <option value="ilustracao" >Ilustração</option>
            <option value="interface" >Interface e experiência do usuário</option>
            <option value="3d" >3D e realidade aumentada</option>
            <option value="redes-sociais" >Redes sociais</option>
          </select>
        </div>
      </div>
    </>
  )
}