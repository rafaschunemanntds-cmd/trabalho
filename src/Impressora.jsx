import { useNavigate } from 'react-router-dom'
import voltar from './assets/voltar.png'
import s from './Impressora.module.css'

function Impressora() {
  const navigate = useNavigate()

  return (
    <>
      <img
        src={voltar}
        className={s.voltar}
        alt="Voltar"
        onClick={() => navigate('/produtos')}
        style={{ cursor: 'pointer' }}
      />
    </>
  )
}

export default Impressora