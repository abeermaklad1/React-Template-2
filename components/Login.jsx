import {useRef, useEffect, useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
//import axios from "axios";

export default function Login() {
    let myInputRef = useRef();
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    let [username, setUsername] = useState('Abeer');
    let [email, setEmail] = useState('abeermaklad@gmail.com');
    let [pass, setPass] = useState('12345');
    let [phone, setPhone] = useState("0102345000");
    let [errors, setErrors] = useState({username: null, email: null, phone: null, pass: null});

    
  // let login = async (post) =>{
  //   let response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, post);
  //   console.log(response.data);
  // }

    useEffect(() => {
        myInputRef.current.focus()
    }, []);
    
    let getUsernameValue = (e) => {
        setUsername(e.target.value);
    };
    let getEmailValue = (e) => {
        setEmail(e.target.value);
    };
    let getPasswordValue = (e) => {
        setPass(e.target.value);
    };
    let getPhonelValue = (e) => {
        setPhone(e.target.value);
    };

    let validateForm = () => {
        let errors = {};
        if(username.length <= 3){
            errors.username = 'username length must be greater than 3';
        }
        if(!regex.test(email)){
            errors.email = 'email invalid';
        }
        if(phone.length != 11){
            errors.phone = 'invalid phone number';
        }
        if(pass.length <= 4){
            errors.pass = 'password length must be greater than 4 digits';
        };
        setErrors(errors);
        
        return Object.keys.length != 0 ? false : true;
    };
    let submitHandler = (e) => {
        e.preventDefault();
        let result = validateForm();
        
        if(result){
            //call API
            let values = {username, email, phone, pass};
            console.log(values);
            //login(values);
            
        }
        else{
            //show errors
        }
        console.log(errors);
    };

  return (
    <Container className="bg-light mt-3 p-3">
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
           type="text"
           placeholder="Enter Username"
           value={username}
           onChange={(event) => {getUsernameValue(event)}}
            />
          <Form.Text className="text-danger">
            {errors.username}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
           type="email" 
           placeholder="Enter email"
           value={email}
           onChange={(event) => {getEmailValue(event)}}
            />
          <Form.Text className="text-danger">
            {errors.email}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
           type="number" 
           placeholder="Enter Phone"
           value={phone}
           onChange={(event) => {getPhonelValue(event)}}
            />
          <Form.Text className="text-danger">
            {errors.phone}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
           type="password"
           placeholder="Password"
           value={pass}
           onChange={(event) => {getPasswordValue(event)}}
            />
            <Form.Text className="text-danger">
            {errors.pass}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <input
        ref={myInputRef}
        type='search'
        placeholder="Search"
        className="form-control mb-3"
        
        ></input>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
