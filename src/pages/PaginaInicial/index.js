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
            <div>
                <div className='foto-container'>
                    <img src={imagemcapa} className='foto-capa' alt="Capa" />
                </div>
            </div>
            <div className='container-principal '>
                <p className='texto-titulo'><strong>Filmes, Séries, músicas e streamings</strong></p>
                <p className='texto-page'>Agora você pode assistir seus filmes e séries favoritos onde e quando quiser!<br />
                    Seja no conforto do seu sofá, durante a viagem ou até mesmo no intervalo do trabalho,<br />
                    a diversão está sempre ao seu alcance.
                </p>
                <button className='BotaoCadastro BotaoCadastroPosition '><strong>Vamos lá</strong></button>
                <div className="card">
                    <div className="card-content">
                        <p className="card-title">FLICKER</p>
                        <p className="card-para">Descubra os planos perfeitos para você! De soluções básicas a opções premium, temos tudo para atender às suas necessidades. Escolha sabiamente, escolha agora!</p>
                        <Link to="/Assinatura">
                            <button className="botao-card">
                                <strong>PLANOS</strong>
                            </button>
                        </Link>

                    </div>
                </div>
                <div className='alinhar'>
                    <img src={imgdispositivo} alt='imagem de varios dispositivos' className='img-dispositivo alinhar' />
                </div>
                <div>
                    <br />
                    <p className='texto-titulo'><strong>Assista em varios dispositivos</strong></p>
                    <p className='texto-page'>Assista aos seus conteúdos favoritos em vários dispositivos! Seja no celular, tablet, computador ou Smart TV,<br />
                        aproveite a flexibilidade de acompanhar suas séries, filmes e vídeos onde quer que esteja. A qualquer hora, em qualquer lugar,<br />
                        a diversão está garantida. Basta conectar e aproveitar!</p>
                </div>
                <br />
                <section id="card1" className="card alinhar">
                    <div class="question">
                        <p>Qual é o principal tipo de conteúdo que o site Flicker oferece aos seus usuários?</p>
                    </div>
                    <div class="card__content">
                        <p class="card__description">
                            O site Flicker oferece principalmente filmes, séries, músicas e streamings,
                            permitindo que os usuários assistam aos seus conteúdos favoritos em qualquer lugar e a qualquer momento.
                        </p>
                    </div>
                </section>
                <br />
                <section id="card1" class="card">
                    <div class="question">
                        <p>Que informações o site Flicker fornece sobre os planos de assinatura disponíveis?</p>
                    </div>
                    <div class="card__content">
                        <p class="card__description">
                            O site Flicker oferece diferentes planos de assinatura que atendem a diversas necessidades,
                            desde soluções básicas até opções premium, incentivando os usuários a escolher o plano que melhor se adequa às suas necessidades.
                        </p>
                    </div>
                </section>
                <br />
                <section id="card1" class="card">
                    <div class="question">
                        <p>Como o site Flicker garante a flexibilidade de assistir conteúdo em diferentes dispositivos?</p>
                    </div>
                    <div class="card__content">
                        <p class="card__description">
                            O site Flicker permite que os usuários assistam a conteúdos em diversos dispositivos, como celular, tablet,
                            computador e Smart TV, garantindo que possam aproveitar seus filmes e séries favoritos onde quer que estejam.
                        </p>
                    </div>
                </section>
                <br />
                <br />
                <footer>
                    <a><strong className='footer'>FLICKER</strong></a>
                </footer>
            </div>

        </body>
    );
}

export default PaginaInicial;