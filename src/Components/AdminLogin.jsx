import {useState} from 'react'
import {  signInWithEmailAndPassword , getAuth  } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import "@radix-ui/themes/styles.css";
import { Flex, TextField, Button, Card, Callout } from "@radix-ui/themes";
import './Login.css';

function AdminLogin(){
    const Navigations = useNavigate();
    const [UserEmail, SetUserEmail] = useState('');
    const [UserPassword, SetUserPassword] = useState('');
    const [Error, setError] = useState('');
    const [BtnSpinner, setBtnSpinner] = useState(false);


const LoginFunction = (e) => {

    e.preventDefault();
    setBtnSpinner(true)
    //Get auth from firebase
    const auth = getAuth();
    var ErrorCall = document.getElementById("errorcall");

    signInWithEmailAndPassword(auth, UserEmail , UserPassword )
    .then(() => { 
        // insted of import.meta.env.VITE_Admin_ID you can use your userid provided by firebase in this case userid stored in .env file 
        if (auth.currentUser.uid == import.meta.env.VITE_Admin_ID) {
            Navigations("/AdminPage")
            console.log("Credentials correct")
            setBtnSpinner(false)
        } 
        else {
            ErrorCall.style.visibility = 'visible';
            setError("Credentials incorrect")
            setBtnSpinner(false)
        }

    })
    .catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Wrong Data"+errorCode+errorMessage)
            ErrorCall.style.visibility = 'visible';
            setError("Wrong Email or Password")
            setBtnSpinner(false)

     });
}


 
return(



    <Flex gap="0" style={{ backgroundColor: 'black' }} width="100vw" height="100vh" align="center" justify="center" wrap="wrap" overflow="auto"> 

            <Flex width="25%" minWidth="240px" height="50%" justify="center" align="center" direction="column">

                <Card size="5" className="Card" >

                    <Flex width="100%" minWidth="200px" height="100%" justify="center" align="center" direction="column">

                        <form onSubmit={LoginFunction} className='FormCss'>

                            <Flex width="100%" minWidth="200px" height="100%" justify="center" align="center" direction="column">
                            
                            
                            <TextField.Root 
                                id="useremailaddress" 
                                name="emailaddress" 
                                type="email" 
                                required  
                                placeholder="Email"   
                                variant="classic" 
                                className="TextFieldEmail"
                                value={UserEmail}
                                onChange={(e)=>SetUserEmail(e.target.value)}>
                            </TextField.Root>

                            <TextField.Root 
                                id="datbasepassword" 
                                name="databasepassword" 
                                type="password" 
                                required  
                                placeholder="Website Password (Not Email)"  
                                variant="classic" 
                                className="TextFieldPassword"
                                value={UserPassword}
                                onChange={(e)=>SetUserPassword(e.target.value)}>
                            </TextField.Root>

                            <Button variant="solid" type='submit' loading={BtnSpinner}>Login</Button>

                            <Callout.Root id='errorcall' variant="soft" color="red" className='CalloutError' style={{visibility : 'hidden'}} >
                                <Callout.Text size="1">
                                   {Error}
                                </Callout.Text>
                            </Callout.Root>
                            </Flex>

                        </form>

                    </Flex>

                </Card>

            </Flex>

        </Flex>
         

)
}
export default AdminLogin;