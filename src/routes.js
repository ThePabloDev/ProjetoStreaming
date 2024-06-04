import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from './pages/PaginaInicial';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Erro from './pages/Erro';
import Home from './pages/Home';
import Assinatura from './pages/Assinatura';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaInicial/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/assinatura" element={<Assinatura/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;