import { useState } from 'react'
import './Header.scss'

export function Header() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastPosition, setLastPosition] = useState(0);

  const handleHeaderAnimation = (e) => {
    if(typeof(scrollY) == "number") {
      if (scrollY == lastPosition || scrollY <= 60) return

      if(scrollY > lastPosition) {  
        setLastPosition(scrollY)
        setIsHeaderVisible(false)
        return
      } else {
        setIsHeaderVisible(true)
        setLastPosition(scrollY)
        return
      }
    }
  }

  window.addEventListener('scroll', handleHeaderAnimation)
  window.addEventListener('touchmove', handleHeaderAnimation)

  return (
    <>
      <header id="main-header" className={isHeaderVisible ? "" : "retracted"} >
        <section className="main-header-content">
          
          <div className="main-header-logo">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 133.46 118.11"><defs><style>.cls-1;</style></defs><polygon className="cls-1" points="84.13 0 133.46 0 133.46 118.11 84.13 0"/><polygon className="cls-1" points="49.37 0 0 0 0 118.11 49.37 0"/><polygon className="cls-1" points="66.75 43.53 98.18 118.11 77.58 118.11 68.18 94.36 45.18 94.36 66.75 43.53"/></svg>
            <span className='main-header-logo-title'>Adobe</span>
          </div>

          <div className="header-right-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" focusable="false">
              <path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path>
          </svg>

          <span>Fazer logon</span>
          </div>

        </section>
      </header>
    </>
  )
}