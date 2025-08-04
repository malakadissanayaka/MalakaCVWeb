import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import MainPage from './Components/MainPage'
import AdminPage from './Components/AdminPage'
import AdminLogin from './Components/AdminLogin'
import PrivateRouteuser from './PrivateRoute'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        < Route path="/" element={<MainPage />} />
  
        <Route element={<PrivateRouteuser />}>
          < Route path="/AdminPage" element={<AdminPage />} />
        </Route>
  
        
        < Route path="/AdminLogin" element={<AdminLogin />} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
