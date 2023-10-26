import './auth.css'
import Input from './../../components/general/Input';
import Button from '../../components/general/Button';

const Login = ({ username, password, setUsername, setPassword }) => {
  return (
    <>
      <div className='title'>Create a New account</div>
      <Input label='Username' type='text' className='username' setValue={() => { }} icon='user' />
      <Input label='Password' type='text' className='password' setValue={() => { }} icon='key' />
      <Button label='Sign Up' className='form' size={'small'} />
    </>
  )
}

export default Login;
