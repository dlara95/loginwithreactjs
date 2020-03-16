import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Form, Button } from 'react-bootstrap';


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {

    if(email.length > 0 && password.length > 0){
      alert("You have logged in successfully");
    }else{
      alert("Please fill all the required fields")
    }
    
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="main-bg">
    <div className="box shadow">
      <h2 className="loginHeader">Member Login</h2>
    <Form className="Login" onSubmit={validateForm}>
  <Form.Group  controlId="email" >
    <Form.Control type="text" placeholder="Username" 
    autoFocus
    value={email}
    onChange={e => setEmail(e.target.value)}/>
 
  </Form.Group>

  <Form.Group controlId="password" >
    <Form.Control type="password" placeholder="Password" 
    value={password}
    onChange={e => setPassword(e.target.value)}/>
  </Form.Group>
  
  <Button variant="success" type="submit"  block >
    Login
  </Button>
</Form>
<div className="forgotPasswordContainer">
    <a href="#">Forgot Password?</a>
</div>
</div>
</div>
  );
}

export default App;
