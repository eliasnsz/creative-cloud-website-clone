import { useState } from 'react'
import './App.scss'
import { Header } from './components/Header/Header'
import { MainSection } from './components/MainSection/MainSection'
import { NavBar } from './components/NavBar/NavBar'

export default function App() {

  

  return (
    <div className="App">
      <Header />
      <MainSection />
      <NavBar />
    </div>
  )
}

