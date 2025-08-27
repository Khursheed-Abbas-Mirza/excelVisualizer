import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './components/Home';
import './App.css';
import Messages from './components/Messages';
function App() {
 
  return (
    <div className='container'>
    <Home/>
    <Messages/>
    </div>
  )
}

export default App
