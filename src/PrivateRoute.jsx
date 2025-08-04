import {Outlet, useLocation, Navigate} from 'react-router-dom'
import { auth } from './firebase';

const PrivateRouteuser = () => {
    const location = useLocation();


  
    try {
    return auth.currentUser != null && auth.currentUser.id == "4pjT9kbTWQYz6H1MUVZqoOIkVm33"  ? (
      
      <Outlet/>
    ):(
      <Navigate to="/" state={{from:location}} replace/>
    );
    
    } catch (error) {
        console.log(error)
    }

  


}

export default PrivateRouteuser;