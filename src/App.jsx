import { useState, createContext } from 'react'
import './App.scss'

import { Header } from './components/Header/Header'
import { MainSection } from './components/MainSection/MainSection'
import { NavBar } from './components/NavBar/NavBar'
import { VisaoGeral } from './components/Tabs/VisaoGeral'

export const TabContext = createContext()

export default function App() {

  const [tabSelected, setTabSelected] = useState("visao-geral") 
  console.log(tabSelected)

  return (
    <div className="App">
        <Header />
      <TabContext.Provider value={{ tabSelected, setTabSelected }}>
        <MainSection />
        <NavBar />
        {tabSelected == "visao-geral" ? <VisaoGeral/> : null}
        {tabSelected == "design-grafico" ? <h1>design</h1> : null}
        {tabSelected == "video" ? <h1>video</h1> : null}
        {tabSelected == "ilustracao" ? <h1>ilustracao</h1> : null}
        {tabSelected == "interface" ? <h1>interface</h1> : null}
        {tabSelected == "3d" ? <h1>3d</h1> : null}
        {tabSelected == "redes-sociais" ? <h1>Redes</h1> : null}
      </TabContext.Provider>
    </div>
  )
}

