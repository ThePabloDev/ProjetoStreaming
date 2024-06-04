import { Link } from 'react-router-dom';
import './login.css';



function Login() {
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
                        <Link to='/login'>
                            <a href="#">Esqueceu sua senha?</a>
                        </Link>
                    </div>
                    <Link to='/home'>
                        <button class="btn" type="submit">Login</button>
                    </Link>
                    <div class="register-link">
                        <p>Você não tem uma conta?</p> <Link to='/cadastro'><a>Cadastre-se</a></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;