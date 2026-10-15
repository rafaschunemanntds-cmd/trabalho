
import acessorios from './assets/acessorios.png'
import filamentos from './assets/filamentos.png'
import impressoras from './assets/impressoras.png'
import resinas from './assets/resinas.png'
import pecas from './assets/pecas.png'
import voltar from './assets/voltar.png'
import s from './Produtos.module.css'
import { useNavigate } from 'react-router-dom'

function Produtos() {
  const navigate = useNavigate()

  return (
    <>
      <img
        src={voltar}
        className={s.voltar}
        alt="Voltar"
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      />

      <div className={s.produtos_decima}>
        <img
        src={impressoras}
        className={s.impressoras}
        alt="Voltar"
        onClick={() => navigate('/impressora')}
        style={{ cursor: 'pointer' }}
      />
        <img src={resinas} alt="Resinas" />
        <img src={filamentos} alt="Filamentos" />
      </div>

      <br /><br /><br />

      <div className={s.produtos_debaixo}>
        <img src={pecas} alt="Peças" />
        <img src={acessorios} alt="Acessórios" />
      </div>
    </>
  )
}

export default Produtos