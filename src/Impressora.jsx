import { useNavigate } from 'react-router-dom'
import impressoraUm from './assets/impressoraum.png'
import impressoraDois from './assets/impressoradois.png'
import voltar from './assets/voltar.png'
import s from './Impressora.module.css'

function Impressora() {
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
      <div className={s.impressoras}>
        <div className={s.espacoUm}> 
          <img src={impressoraUm} 
          className={s.impressoraUm}
          alt="Impressora" />
          <div className={s.wrapInfo}>     
            <h2>R$ 7.099,00</h2> 
            <button className={s.add}>Adicionar ao Carrinho</button>          
            <br/>
            <div className={s.luide}>
              Quantidade: <input className={s.quant} type="number"/>
            </div>
          </div>
        </div>

        <div className={s.espacoDois}>
          <img src={impressoraDois} 
          className={s.impressoraDois}
          alt="Impressora" />
          <div className={s.wrapInfo}>
            <h2>R$ 2.099,00</h2>
            <button className={s.add}>Adicionar ao Carrinho</button>
            <br/>
            <div className={s.luide}>
              Quantidade: <input className={s.quant} type="number"/>
            </div>
          </div>
        </div>
      </div>
      <h1 className={s.titulo}>Confira nossas Impressoras 3D. Novas ofertas todos os dias.</h1>
      <p className={s.texto}><strong>Como funcionam nossas impressoras 3D :</strong> O processo de impressão 3D começa com um modelo digital 3D, 
        geralmente criado em softwares CAD, como Tinkercad, Fusion 360, Blender, ou baixado de plataformas 
        como o Thingiverse, nossa impressoras são 400 mm x 400 mm x 450 mm.</p>
    </div>
  )
}

export default Impressora