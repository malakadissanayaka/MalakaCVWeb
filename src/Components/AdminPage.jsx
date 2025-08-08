import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import "@radix-ui/themes/styles.css";
import { Flex, Grid, Text, Heading, Card } from "@radix-ui/themes";
import './AdminPageCSS.css';

function AdminPage(){

  const auth = getAuth();
  const navigate = useNavigate();

  const Logout = (e) => {
    signOut(auth)
    .then(() => {
      navigate("/AdminLogin")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }


    return(

  
    <Grid gap="0" width="100wh" height="100vh" rows="1" columns="1" >

      <Flex gap="1" className="navpanel" height="10vh" width="100wh"  direction="row" justify="end" wrap="wrap" overflow="auto"> 
        <Flex width="5%" minWidth="100px" height="100%" justify="center" align="center" className="nav" onClick={Logout}>
        <Text style={{ color:'white' }} size="3">Logout</Text>
        </Flex>

      </Flex>

      <Flex gap="1" className="main" height="90vh" width="100wh" justify="center" align="center" wrap="wrap" overflow="auto">
      
        <Heading size="9" style={{ color:'white' }} >Malaka CV site Admin Page</Heading>

      </Flex>

    </Grid>
   

    );
}
export default AdminPage;