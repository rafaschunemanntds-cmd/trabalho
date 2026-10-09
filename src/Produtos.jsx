import acessorios from './assets/acessorios.png'
import filamentos from './assets/filamentos.png'
import impressoras from './assets/impressoras.png'
import pecas from './assets/pecas.png'
import resinas from './assets/resinas.png'
function Produtos(){
    return(
        <>
           <img src={impressoras} alt="impressoras"/>
           <img src={resinas} alt="resinas"/>
           <img src={filamentos} alt="filamentos"/><br/>
           <img src={pecas} alt="peças"/>
           <img src={acessorios} alt="acessórios"/>
        </>
    )
}
export default Produtos