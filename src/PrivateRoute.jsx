import {Outlet, useLocation, Navigate} from 'react-router-dom'
import { auth } from './firebase';

const PrivateRouteuser = () => {
    const location = useLocation();
    try {
    
    return auth.currentUser != null && auth.currentUser.uid == import.meta.env.VITE_Admin_ID ? (
      <Outlet/>
    ):(
      <Navigate to="/AdminLogin" state={{from:location}} replace/>
    );
    
    } catch (error) {
        console.log(error)
    }

};

export default PrivateRouteuser;

