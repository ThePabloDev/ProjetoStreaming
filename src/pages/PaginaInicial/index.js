import { Link } from 'react-router-dom';
import './PaginaInicial.css';
import imagemcapa from './img/capa.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imgpipoca from './img/pipoca.png'

function PaginaInicial() {
    return (
        <body className="pagina-inicial">
            <Navbar fixed="top">
                <Container>
                    <Navbar.Brand href="./">
                        <strong className='texto-nav'>FLICKER</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/login">
                            <button className='BotaoLogin'><strong>ENTRAR</strong></button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='fonte'>
                <div className='foto-container'>
                    <img src={imagemcapa} className='foto-capa' alt="Capa" />
                </div>
            </div>
            <div className='container-texto'>
                <p className='texto-titulo'><strong>Filmes, Séries, músicas e streamings</strong></p>
                <p className='texto-page'>Agora você pode assistir seus filmes e séries favoritos onde e quando quiser!
                    Seja no conforto do seu sofá, durante a viagem ou até mesmo no intervalo do trabalho,
                    a diversão está sempre ao seu alcance.
                </p>
                <button className='BotaoCadastro BotaoCadastroPosition'><strong>Vamos lá</strong></button>
            </div>
        </body>
    );
}

export default PaginaInicial;
