import './auth.css'
import Input from './../../components/general/Input';
import Button from '../../components/general/Button';

const Register = ({ username, password, setUsername, setPassword }) => {
  return (
    <div id='main'>
      <div className='title'>Create a new account</div>
      <Input label='Username' type='text' className='username' value={username} setValue={setUsername} icon='user' />
      <Input label='Password' type='password' className='password' value={password} setValue={setPassword} icon='key' />
      <div id='login-button'>
        <Button label='Sign In' className='form' size={'small'} icon='plus' />
      </div>
    </div>
  )
}

export default Register;
