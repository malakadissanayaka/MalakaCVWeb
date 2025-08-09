import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import MainPage from './Components/MainPage'
import AdminPage from './Components/AdminPage'
import AdminLogin from './Components/AdminLogin'
import PrivateRouteuser from './PrivateRoute'
import Projects from './Components/Projects'
import Aboutme from './Components/Aboutme'
import Skills from './Components/Skills'
import Intrests from './Components/Intrests'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        < Route path="/" element={<MainPage />} />
  
        <Route element={<PrivateRouteuser />}>
          < Route path="/AdminPage" element={<AdminPage />} />
        </Route>

        < Route path="/Projects" element={<Projects />} />
        < Route path="/Aboutme" element={<Aboutme />} />
         < Route path="/Skills" element={<Skills />} />
          < Route path="/Intrests" element={<Intrests />} />
        < Route path="/AdminLogin" element={<AdminLogin />} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
