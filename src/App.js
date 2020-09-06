import React,{useState} from 'react';
import './App.css';
import Login from './component/Login';
import Home from './component/Home';

function App() {
  let initialLogin=localStorage.getItem("loggedIn")==="true"?true:false;
 const [login,SetLogin]=useState(initialLogin);

 let initialUser=localStorage.getItem("user")?localStorage.getItem("user"):"";
 const [user,setUser]=useState(initialUser);
 const loginHandler=(user,pass)=>{
   if((user==="test" && pass==="test") || (user==="prashant" && pass==="prashant") ){
     setUser(user);
     SetLogin(true);
     localStorage.setItem("loggedIn", "true");
     localStorage.setItem("user", user);
   }
  else{
   alert("Wrong Credentials");
  }
 }

 const logoutHandler=()=>{
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("user");
  SetLogin(false);
 }
  return (
    <div >
      {login ?<Home logout={logoutHandler} user={user}/>:<Login click={(user,pass)=>loginHandler(user,pass)} />}
    </div>
  );
}

export default App;
