import { Link } from 'react-router-dom';
import './PaginaInicial.css';
import imagemcapa from './img/capa.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imgdispositivo from './img/dispositivo.png';

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
                <div className="card">
                    <div className="card-content">
                        <p className="card-title">FLICKER</p>
                        <p className="card-para">Descubra os planos perfeitos para você! De soluções básicas a opções premium, temos tudo para atender às suas necessidades. Escolha sabiamente, escolha agora!</p>
                        <button className="botao-card"><strong>PLANOS</strong></button>
                    </div>
                </div>
                <div>
                    <img src={imgdispositivo} alt='imagem de varios dispositivos' className='img-dispositivo' />
                </div>
                <div>
                    <br />
                    <p className='texto-titulo'><strong>Assista em varios dispositivos</strong></p>
                    <p className='texto-page'>Assista aos seus conteúdos favoritos em vários dispositivos! Seja no celular, tablet, computador ou Smart TV,
                        aproveite a flexibilidade de acompanhar suas séries, filmes e vídeos onde quer que esteja. A qualquer hora, em qualquer lugar,
                        a diversão está garantida. Basta conectar e aproveitar!</p>
                </div>
            </div>
        </body>
    );
}

export default PaginaInicial;