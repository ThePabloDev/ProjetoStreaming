import { Link } from 'react-router-dom';
import './Assinatura.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function Assinatura() {
    return (
        <body className="pagina-inicial">
            <Navbar>
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
                <p className='texto-titulo-assinatura'><strong>ESCOLHA O MELHOR PLANO <br />PARA VOCÊ</strong></p>
            </div>
            <div className="card-assinatura">
                <div className="header">
                    <span className="title">Padrão com anúncios</span><br/>
                    <span className="price">R$18,90</span>
                </div>
                <ul className="lists">
                    <li className="list">
                        <span>Qualidade de vídeo e áudio: Boa</span><br /><br /><br />
                    </li>
                    <li className="list">
                        <span>Resolução: 1080p (Full HD)</span><br /><br />
                    </li>
                    <li className="list">
                        <span>Aparelhos compatíveis: TV, computador, celular, tablet</span><br /><br /><br />
                    </li>
                    <li className="list">
                        <span>Usuarios disponíveis ao mesmo tempo: 2</span><br /><br /><br />
                    </li>
                    <li className="list">
                        <span>Anúncios: Alguns intervalos para anúncios</span><br /><br />
                    </li>
                </ul>
                <Link to="/home">
                    <button type="button" className="action">PROXIMO</button>
                </Link>
            </div>

            <br/>

            <div className="card-assinatura">
                <div className="header">
                    <span className="title">Padrão sem anúncios</span><br/>
                    <span className="price">R$35,90</span>
                </div>
                <ul className="lists">
                    <li className="list">
                        <span>Qualidade de vídeo e áudio: Boa</span><br /><br /><br />
                    </li>
                    <li className="list">
                        <span>Resolução: 1080p (Full HD)</span><br /><br />
                    </li>
                    <li className="list">
                        <span>Aparelhos compatíveis: TV, computador, celular, tablet</span><br /><br /><br />
                    </li>
                    <li className="list">
                        <span>Usuarios disponíveis ao mesmo tempo: 2</span><br /><br /><br />
                    </li>
                    <li className="list">
                        <span>Anúncios: Alguns intervalos para anúncios</span><br /><br />
                    </li>
                </ul>
                <Link to="/home">
                    <button type="button" className="action">PROXIMO</button>
                </Link>
            </div>

            <br/>

            <div className="card-assinatura">
                <div className="header">
                    <span className="title">Premium</span><br />
                    <span className="price">R$55,90</span>
                </div>
                <ul className="lists">
                    <li className="list">
                        <span>Qualidade de vídeo e áudio: Excepcional</span><br /><br /><br />
                    </li>
                    <li className="list">
                        <span>Resolução: 4K (Ultra HD) + HDR</span><br /><br />
                    </li>
                    <li className="list">
                        <span>Áudio espacial: Incluso</span><br /><br />
                    </li>
                    <li className="list">
                        <span>Aparelhos compatíveis: TV, computador, celular, tablet</span><br /><br /><br />
                    </li>
                    <li className="list">
                        <span>Usuarios disponíveis ao mesmo tempo: 4</span><br /><br /><br />
                    </li>
                    <li className="list">
                        <span>Anúncios: Sem anúncios</span><br /><br />
                    </li>
                </ul>
                <Link to="/home">
                    <button type="button" className="action">PROXIMO</button>
                </Link>
            </div>
            <br/>
            <footer>
                <a><strong className='footer'>FLICKER</strong></a>
            </footer>
        </body >
    );
}

export default Assinatura;