import "@radix-ui/themes/styles.css";
import { Flex, Grid, Text, Heading, Card } from "@radix-ui/themes";
import './AdminPageCSS.css';
import { auth } from '../firebase';

function MainPage(){
return(

  <Grid gap="0" width="100wh" height="100vh" rows="1" columns="1" >

      <Flex gap="1" className="navpanel" height="10vh" width="100wh"  direction="row" align="center" justify="center" wrap="wrap" overflow="auto"> 
        <Flex width="5%" minWidth="100px" height="100%" justify="center" align="center" className="nav">
              <Text style={{ color:'white' }} size="3">My Projects</Text>
        </Flex>

      </Flex>

      <Flex gap="1" className="main" height="90vh" width="100wh" justify="center" align="center" wrap="wrap" overflow="auto">
      
        <Heading size="9" style={{ color:'white' }} >Malaka CV site</Heading>

      </Flex>

    </Grid>
)

}
export default MainPage;