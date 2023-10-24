import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import Input from './components/general/Input';

function App() {
  library.add(fas)
  return (
    <div className="App">
      <Input type='text' className='lolo' value='' label='User name:' icon='user' />
    </div>
  );
}

export default App
