import { Link } from 'react-router-dom';
import './cadastro.css';



function Cadastro() {
    return (
        <div>
            <div class="wrapper positionCadastro">
                <form action="">
                    <p class="form-login">FLICKER</p>
                    <div class="input-box">
                        <input required="" placeholder="Email" type="email" />
                    </div>
                    <div class="input-box">
                        <input required="" placeholder="Senha" type="password" />
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" />Manter conectado</label>
                    </div>
                    <Link to='/home'>
                        <button class="btn" type="submit">Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;