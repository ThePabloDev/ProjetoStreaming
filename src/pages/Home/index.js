import React, { useState } from 'react';
import { FaBars, FaFilm, FaTv, FaMusic, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './home.css';
import trailer from './videos/trailer.mp4';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import debi_loide from './img/debi_loide_2.jpg';
import drango_ball from './img/drango_ball.jpg';
import emily from './img/emily.jpg';
import grande_mauricinho from './img/grande_mauricinho.jpg';
import inimigo_do_meu_inimigo from './img/inimigo_do_meu_inimigo.jpg';
import legiao_de_herois from './img/legiao_de_herois.jpg';
import maria_e_joao from './img/maria_e_joao.jpg';
import menina_e_o_dragao from './img/menina_e_o_dragao.jpg';
import nao_abra from './img/nao_abra.jpg';
import nina from './img/nina.jpg';
import no_olho_do_furacao from './img/no_olho_do_furacao.jpg';
import novo_mundo from './img/novo_mundo.jpg';
import o_amor_da_voltas from './img/o_amor_da_voltas.jpg';
import o_corvo from './img/o_corvo.jpg';
import o_exorcismo from './img/o_exorcismo.jpg';
import o_nome_da_morte from './img/o_nome_da_morte.jpg';
import profecia_do_mal from './img/profecia_do_mal.jpg';
import reflexos_do_medo from './img/reflexos_do_medo.jpg';
import segredos_do_universo from './img/segredos_do_universo.jpg';
import terror_no_pantano from './img/terror_no_pantano.jpg';
import zona_de_risco from './img/zona_de_risco.jpg';


const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="home-container">
            <Navbar className='nav-home'>
                <Container>
                    <Navbar.Brand href="./">
                        <strong className='texto-navhome'>FLICKER</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <div className="burger-icon" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                        <CSSTransition
                            in={isMenuOpen}
                            timeout={300}
                            classNames="menu"
                            unmountOnExit
                        >
                            <div className="menu-background" onClick={toggleMenu}></div>
                        </CSSTransition>
                        <CSSTransition
                            in={isMenuOpen}
                            timeout={300}
                            classNames="menu"
                            unmountOnExit
                        >
                            <div className="menu">
                                <ul>
                                    <li><FaFilm /> <Link to="/home">Filmes</Link></li>
                                    <li><FaTv /> <Link to="/home">Séries</Link></li>
                                    <li><FaMusic /> <Link to="/home">Músicas</Link></li>
                                    <li><FaUsers /> <Link to="/">Usuários</Link></li>
                                </ul>
                            </div>
                        </CSSTransition>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section className="video-container">
                <video id="home-video" autoPlay loop>
                    <source src={trailer} type="video/mp4" />
                </video>
            </section>

            <div className='container-filmes'>
                <p className='texto-titulo-home'><strong>FILMES</strong></p>
            </div>
            <div className='grid-container'>
                <div className='grid-item'>
                    <img src={debi_loide} alt='filme' className='filme' />
                    <img src={drango_ball} alt='filme' className='filme' />
                    <img src={emily} alt='filme' className='filme' />
                    <img src={grande_mauricinho} alt='filme' className='filme' />
                    <img src={inimigo_do_meu_inimigo} alt='filme' className='filme' />
                    <img src={legiao_de_herois} alt='filme' className='filme' />
                    <img src={maria_e_joao} alt='filme' className='filme' />
                    <img src={menina_e_o_dragao} alt='filme' className='filme' />
                    <img src={nao_abra} alt='filme' className='filme' />
                    <img src={nina} alt='filme' className='filme' />
                    <img src={no_olho_do_furacao} alt='filme' className='filme' />
                    <img src={novo_mundo} alt='filme' className='filme' />
                    <img src={o_amor_da_voltas} alt='filme' className='filme' />
                    <img src={o_corvo} alt='filme' className='filme' />
                    <img src={o_exorcismo} alt='filme' className='filme' />
                    <img src={o_nome_da_morte} alt='filme' className='filme' />
                    <img src={profecia_do_mal} alt='filme' className='filme' />
                    <img src={reflexos_do_medo} alt='filme' className='filme' />
                    <img src={segredos_do_universo} alt='filme' className='filme' />
                    <img src={terror_no_pantano} alt='filme' className='filme' />
                    <img src={zona_de_risco} alt='filme' className='filme' />
                    <img src={debi_loide} alt='filme' className='filme' />
                    <img src={drango_ball} alt='filme' className='filme' />
                    <img src={emily} alt='filme' className='filme' />
                    <img src={grande_mauricinho} alt='filme' className='filme' />
                    <img src={inimigo_do_meu_inimigo} alt='filme' className='filme' />
                    <img src={legiao_de_herois} alt='filme' className='filme' />
                    <img src={maria_e_joao} alt='filme' className='filme' />
                    <img src={menina_e_o_dragao} alt='filme' className='filme' />
                    <img src={nao_abra} alt='filme' className='filme' />
                    <img src={nina} alt='filme' className='filme' />
                    <img src={no_olho_do_furacao} alt='filme' className='filme' />
                    <img src={novo_mundo} alt='filme' className='filme' />
                    <img src={o_amor_da_voltas} alt='filme' className='filme' />
                    <img src={o_corvo} alt='filme' className='filme' />
                    <img src={o_exorcismo} alt='filme' className='filme' />
                    <img src={o_nome_da_morte} alt='filme' className='filme' />
                    <img src={profecia_do_mal} alt='filme' className='filme' />
                    <img src={reflexos_do_medo} alt='filme' className='filme' />
                    <img src={segredos_do_universo} alt='filme' className='filme' />
                    <img src={terror_no_pantano} alt='filme' className='filme' />
                    <img src={zona_de_risco} alt='filme' className='filme' />
                    <img src={debi_loide} alt='filme' className='filme' />
                    <img src={drango_ball} alt='filme' className='filme' />
                    <img src={emily} alt='filme' className='filme' />
                    <img src={grande_mauricinho} alt='filme' className='filme' />
                    <img src={inimigo_do_meu_inimigo} alt='filme' className='filme' />
                    <img src={legiao_de_herois} alt='filme' className='filme' />
                    <img src={maria_e_joao} alt='filme' className='filme' />
                    <img src={menina_e_o_dragao} alt='filme' className='filme' />
                    <img src={nao_abra} alt='filme' className='filme' />
                    <img src={nina} alt='filme' className='filme' />
                    <img src={no_olho_do_furacao} alt='filme' className='filme' />
                    <img src={novo_mundo} alt='filme' className='filme' />
                    <img src={o_amor_da_voltas} alt='filme' className='filme' />
                    <img src={o_corvo} alt='filme' className='filme' />
                    <img src={o_exorcismo} alt='filme' className='filme' />
                    <img src={o_nome_da_morte} alt='filme' className='filme' />
                    <img src={profecia_do_mal} alt='filme' className='filme' />
                    <img src={reflexos_do_medo} alt='filme' className='filme' />
                    <img src={segredos_do_universo} alt='filme' className='filme' />
                    <img src={terror_no_pantano} alt='filme' className='filme' />
                    <img src={zona_de_risco} alt='filme' className='filme' />
                    <img src={debi_loide} alt='filme' className='filme' />
                    <img src={drango_ball} alt='filme' className='filme' />
                    <img src={emily} alt='filme' className='filme' />
                </div>
            </div>
            <br />
            <footer>
                <a><strong className='footer'>FLICKER</strong></a>
            </footer>

        </div>

    );
};

export default Home;
