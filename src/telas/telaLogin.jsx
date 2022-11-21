import logo from '../img/bellomix.jpg'
import Button from 'react-bootstrap/Button';

const Login = () => {

    return (
        <>
            <img src={logo} alt='' height='300px'/>
            <div>
                <span>Usuário: </span>
                <input type="text" placeholder='Digite o usuário' id='user' />
            </div>
            <div>
                <span>Senha: </span>
                <input type="text" placeholder='Digite a senha' id='password' />

            </div>

            <Button href='/clientes/'>Entrar</Button>
        </>



    )
}
export default Login