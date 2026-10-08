import { useState } from 'react'
import logo from './assets/logo.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section id="inicio">
      <img src={logo} alt="logo" />
      <button>ENTRAR</button>
    </section>
    </>
  )
}

export default App
