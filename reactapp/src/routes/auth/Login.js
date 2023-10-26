import './auth.css'
import Input from './../../components/general/Input';
import Button from '../../components/general/Button';

const Login = ({ username, password, setUsername, setPassword }) => {
  return (
    <div id='main'>
      <div className='title'>Sign in with your account</div>
      <Input label='Username' type='text' className='username' setValue={() => { }} icon='user' />
      <Input label='Password' type='password' className='password' setValue={() => { }} icon='key' />
      <div id='login-button'>
        <Button label='Sign Up' className='form' size={'small'} icon='key' />
      </div>
    </div>
  )
}

export default Login;
