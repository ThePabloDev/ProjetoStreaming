import { Link } from 'react-router-dom';
import './erro.css';

const Erro = () => {
  return (
    <div className='error-container'>
      <div className='error-content'>
        <h1 style={{ color: 'red' }}>Oops! Algo deu errado...</h1>
        <p style={{ color: 'black' }}>Parece que encontramos um erro.</p>
        <p style={{ color: 'black' }}>Por favor, tente novamente mais tarde.</p>
        {}
        <Link to="/" style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', fontSize: '16px', marginTop: '20px', display: 'inline-block' }}>Ir para a página inicial</Link>
      </div>
    </div>
  );
}

export default Erro;
