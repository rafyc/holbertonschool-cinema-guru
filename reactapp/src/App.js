import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';

function App() {
  library.add(fas)
  return (
    <div className="App">
      <Input type='text' className='lolo' value='' label='User name:' icon='user' />
      <SelectInput label='Test' options={['lolo', 'lala', 'lili']} className='lala' value='choose' ></SelectInput>
      <Button label='Click Me' className='mybutton' onClick={() => { }} icon='user'></Button>
    </div>
  );
}

export default App
