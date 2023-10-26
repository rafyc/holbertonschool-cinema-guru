import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import Login from './routes/auth/Login';

function App() {

  library.add(fas)

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        console.log(token);
        const response = await axios.post('/api/auth/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setIsLoggedIn(true)
        setUserUsername(response.data.user)
      }
      catch (err) {
        console.error(err)
      }
    }
    fetchDatas();
  }, [])


  return (
    <div className="App">

      <Authentication />
      <Login />
    </div>
  );
}

export default App
