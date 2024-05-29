import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from './pages/PaginaInicial';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Usuario from './pages/Usuario';
import Erro from './pages/Erro';
import Home from './pages/Home'


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaInicial/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;