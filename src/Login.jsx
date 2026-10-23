import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import voltar from './assets/voltarPreto.png'
import s from './Login.module.css'

function Login() {
  const navigate = useNavigate()

  return (
      <div className={s.all}>
         <img
          src={voltar}
          className={s.voltar}
          alt="Voltar"
          onClick={() => navigate('/produtos')}
          style={{ cursor: 'pointer' }}
        />
        <h1 className={s.headline}>Login</h1>
        <br /><br /><br />
        <div className={s.botoes}>
          <input className={s.info} type="text" placeholder=' Usuário'/><br />
          <input className={s.info} type="text" placeholder=' Senha'/><br />
          <Link to="/produtos" className={s.botao}>
            ENTRAR
          </Link>
        </div>
      </div>
    )
}

export default Login