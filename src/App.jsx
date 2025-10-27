import Navbar from './components/NavigationBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import Skills from './pages/SkillsPage'
import Projects from './pages/ProjectsPage'
import Contact from './pages/ContactPage'

const App = () =>{
return(
  <div className='min-h-screen bg-gray-950'>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </div>
)
}

export default App