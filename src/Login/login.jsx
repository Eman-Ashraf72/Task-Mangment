import { React, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import { login } from "../../services/users";
// import { login } from "../../services/users";

const initialState={email :"" ,password:""}

export default function Login() {
  const navigate = useNavigate();

  const [input ,setInput]=useState(initialState);

  const handleLogin =(e)=>{
    e.preventDefault();
    const loggedUser=JSON.parse(localStorage.getItem('user'))
    console.log(loggedUser);
    
    login()
    if (input.email === loggedUser.email && input.password === loggedUser.password) {
      navigate('/home');

    }
    else{
      alert('wrong email or password')
    }
  }

 


  return (
    <>
      <div className="my-5 w-50 container mx-auto">
          <h2 className="text-center mb-4">Log In</h2>
          {/* {error && <Alert variant="danger"></Alert>} */}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" 
             type="email"
             value={input.email}
             autoComplete="off"
             onChange={(e)=>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })}
             name="email"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                 type="password"
                 value={input.password}
                 autoComplete="off"
                 name="password"
                 onChange={(e)=>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })}
              />
            </Form.Group>
            <button   className="btn btn-primary w-100 my-4 text-center  mx-auto"   type="submit">
              Log In
            </button>
            {/* <p className="form__error">{error}</p> */}

          </Form>
         
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/">Sign Up</Link>
      </div>
    </>
  );
}
