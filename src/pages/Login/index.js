import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validate = () => {
        let emailError = '';
        let passwordError = '';

        if (!email.includes('@')) {
            emailError = 'Email inválido';
        }

        if (password.length < 6) {
            passwordError = 'A senha deve ter pelo menos 6 caracteres';
        }

        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            window.location.href = '/home';
        }
    };

    return (
        <div>
            <div className="wrapper positionCadastro">
                <form onSubmit={handleSubmit}>
                    <p className="form-login">FLICKER</p>
                    <div className="input-box">
                        <input
                            required
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="input-box">
                        <input
                            required
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Manter conectado
                        </label>
                        <Link to='/login'>
                            <a href="#">Esqueceu sua senha?</a>
                        </Link>
                    </div>
                    <button className="btn" type="submit">Login</button>
                    <div className="register-link">
                        <p>Você não tem uma conta?</p> <Link to='/cadastro'><a>Cadastre-se</a></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
