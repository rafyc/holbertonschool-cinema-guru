import { useState } from 'react'
import './auth.css'
import Button from '../../components/general/Button';
import Register from './Register';
import Login from './Login';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {

  const [_switch, setSwitch] = useState(true);
  const [usernamestring, setUsernamestring] = useState('');
  const [passwordstring, setPasswordstring] = useState('');

  return (
    <>
      <Button label='Sign In' className={_switch ? 'active' : 'signIn'} onClick={() => { setSwitch(true) }} />
      <Button label='Log In' className={!_switch ? 'active' : 'signIn'} onClick={() => { setSwitch(false) }} />
      {_switch ? <Register /> : <Login />}
    </>
  )

}


export default Authentication;
