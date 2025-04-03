import './css/App.css'
import Teams from './pages/Teams'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/teams' element={<Teams />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App
