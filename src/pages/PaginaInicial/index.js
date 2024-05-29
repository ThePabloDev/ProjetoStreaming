import { Link } from 'react-router-dom';
import './PaginaInicial.css'
import imagemcapa from './img/capa.png'

function PaginaInicial() {
    return (
        <div className='fonte'>
            <div className='foto-container'>
                <img src={imagemcapa} className='foto-capa' />
                <img src={imagemcapa} className='foto-capa' />
            </div>
            <div className='texto-foto'>
                <h1>NoSignal</h1>
            </div>
            <div className='BotaoLoginPosicao'>
                <button className='BotaoLogin'><strong>ENTRAR</strong></button>
            </div>
        </div>

    );
}

export default PaginaInicial;