import { useState } from 'react'
import logo from './assets/logo.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import s from './App.module.css'
import { Link } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className={s.inicio}>
      <img className={s.logo} src={logo} alt="logo" /><br/><br/>
      <Link to={'/produtos'}className={s.botao}>ENTRAR</Link>
    </section>
    </>
  )
}

export default App
