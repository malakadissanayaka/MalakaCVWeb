import React, {useState,useEffect} from 'react';
import { getAuth, signOut } from "firebase/auth";
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc, query, where } from "firebase/firestore";
import "@radix-ui/themes/styles.css";
import { Flex, Grid, Text, Heading, TextField, Button, Card, Table, Separator  } from "@radix-ui/themes";
import './AdminPageCSS.css';
import { auth } from '../firebase';

function Intrests(){
    const [Items, setItems] = useState([]);
    const [BtnSpinnershow, setBtnSpinnershow] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();
    var ItemsObjects = []; 
    
    const NavigAboutme = () => {
            navigate("/Aboutme")
    }
    const NavigProjects = () => {
            navigate("/Projects")
    }
    const NavigSkills = () => {
            navigate("/Skills")
    }
    const NavigMainPage = () => {
            navigate("/")
    }


   useEffect(() => {
    // This code will run only once after the initial render (component mount),Empty Array make this runs only once'
            console.log("running");
            //Take data from collection where date equal to refered date in form
            const q =  query(collection(db, '/CV/Malaka/Intrests'));
            onSnapshot(q, (querySnapshot) => {
            //Set data taken from Database to a map called ItemData
            setItems(querySnapshot.docs.map((doc) => {
                
                return {
                    id: doc.id,
                    data: doc.data()
                }
            }))
            
        });
    }, []); 


return(

  <Grid gap="0" width="100wh" height="100vh" rows="1" columns="1" >

    <Flex gap="1" className="navpanel" height="10vh" width="100wh"  direction="row" align="center" justify="center" wrap="wrap" overflow="auto"> 
        <Flex width="5%" minWidth="100px" height="100%" justify="center" align="center" className="nav" onClick={NavigMainPage}>
              <Text style={{ color:'white' }} size="3">Front Page</Text>
        </Flex>
        <Flex width="5%" minWidth="100px" height="100%" justify="center" align="center" className="nav" onClick={NavigAboutme}>
              <Text style={{ color:'white' }} size="3" >About Me</Text>
        </Flex>
        <Flex width="5%" minWidth="100px" height="100%" justify="center" align="center" className="nav" onClick={NavigProjects}> 
              <Text style={{ color:'white' }} size="3">Projects</Text>
        </Flex>
        <Flex width="5%" minWidth="100px" height="100%" justify="center" align="center" className="nav" onClick={NavigSkills}>
              <Text style={{ color:'white' }} size="3">Skills</Text>
        </Flex>

      </Flex>

      <Flex gap="1" className="main" height="90vh" width="100wh" direction="column" justify="center" align="center" wrap="wrap" overflow="auto">

           {Items?.map(({ id, data }) => (

          
          <Flex key={id} gap="1"  className="mainsecond" width="100%" direction="column"  justify="center" align="center" wrap="wrap" overflow="auto">   
            <Heading size="8" style={{ color:'white' }} >{data.Name}</Heading>
            <Heading size="4" style={{ color:'white' }} >{data.Details}</Heading>
          </Flex>

           ))}


      </Flex>

    </Grid>
)

}
export default Intrests;