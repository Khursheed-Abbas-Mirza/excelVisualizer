
import { Home } from './components/Home';
import './App.css';
import Messages from './components/Messages';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router';
import Add from './components/Add';
function App() {
 
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <div className='mt-[80px]'>

        <Routes>

          <Route path='/' element={<Home/>}/>
          {/* <Route path='/add' element={<Add/>}/> */}
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
