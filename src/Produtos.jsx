import acessorios from './assets/acessorios.png'
import filamentos from './assets/filamentos.png'
import impressoras from './assets/impressoras.png'
import resinas from './assets/resinas.png'
import pecas from './assets/pecas.png'
import voltar from './assets/voltar.png'
import s from './Produtos.module.css'
import { useNavigate } from 'react-router'


function Produtos(){

    const navigate = useNavigate()

    return(
        <>
        <img src={voltar} className={s.voltar} alt="" onClick={() => navigate('/app')}/>
        <div className={s.produtos_decima}>
            <img src={impressoras} alt="impressoras"/>
            <img src={resinas} alt="resinas"/>
            <img src={filamentos} alt="filamentos"/>
        </div><br/><br/><br/>
        <div className={s.produtos_debaixo}> 
            <img src={pecas} alt="peças"/>
            <img src={acessorios} alt="acessórios"/>
        </div>
        </>
    )
}
export default Produtos