import { useState } from 'react'
import './App.css'
import { Button } from './Components/Button/Button'
import { CardRight } from './Components/Card/CardRight'
import { CardLeft } from './Components/Card/CardLeft'
import { NavBar } from './Components/NavBar/NavBar'
import { Footer } from './Components/Footer/Footer'

function App() {
  const buttonComponent = <Button text="Probar"></Button>
  const comingSoon = <span>Proximamente...</span>
  return (
    <>
      <NavBar></NavBar>
      <header>
        <div className='mainHeader'>
          <h1 className='mainTitle'>Encripta tu texto con uno de los siguientes algoritmos</h1>
        </div>
        <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </header>
      <body>
        <section className='CardsSection'>
          <CardRight
            title="Matriz transpuesta por clave"
            text="En él, el mensaje original estará limitado a un rectángulo, de izquierda a derecha y de arriba hacia abajo. Después, se escoge una clave para asignar un número a cada columna del rectángulo para determinar el orden. El número correspondiente a la letra de la clave estará determinado por orden alfabético. Por ejemplo, si la palabra clave es CAT y el mensaje es THE SKY IS BLUE el proceso sería el siguiente:"
            button={ buttonComponent }>    
          </CardRight>
          <CardLeft
            title="Matriz transpuesta por columna"
            text="En él, el mensaje original estará limitado a un rectángulo, de izquierda a derecha y de arriba hacia abajo. Después, se escoge una clave para asignar un número a cada columna del rectángulo para determinar el orden. El número correspondiente a la letra de la clave estará determinado por orden alfabético. Por ejemplo, si la palabra clave es CAT y el mensaje es THE SKY IS BLUE el proceso sería el siguiente:"
            button={ buttonComponent }>    
          </CardLeft>
          <CardRight
            title="Matriz transpuesta por clave"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            button={ comingSoon }>    
          </CardRight>
          <CardLeft
            title="Matriz transpuesta por columna"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            button={ comingSoon }>    
          </CardLeft>
        </section>
      </body>
      <footer>
        <Footer></Footer>

      </footer>
    </>
  )
}

export default App
