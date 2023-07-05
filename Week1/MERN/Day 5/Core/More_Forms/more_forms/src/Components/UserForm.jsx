import React, { useState } from 'react';
import '../App.css';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstNameError] = useState("");

    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [comfirm_password, setComfirmPassword] = useState("");
    const [comfirm_passwordError, setComfirmPasswordError] = useState("");

    const handelFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 3) {
            setFirstNameError("First Name must be at least 3 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handelLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 3) {
            setLastnameError("Last Name must be at least 3 characters");
        } else {
            setLastnameError("");
        }
    }

    const handelEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    const handelPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handelComfirmPassword = (e) => {
        setComfirmPassword(e.target.value);
        if(password == comfirm_password) {
            setComfirmPasswordError("Password and confirm password must be identical");
        } else {
            setComfirmPasswordError("");
        }
    }


    
    return (
        
        <div className="form-container">
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>First Name: </label>
                    <input type="text"  onChange={ handelFirstName } />
                    {
                        firstnameError ?
                        <p style={{color:'red'}}>{ firstnameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handelLastName } />
                    {
                        lastnameError ? 
                        <p style={{color:'red'}}>{ lastnameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ handelEmail } />
                    {
                        emailError ? 
                        <p style={{color:'red'}}>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handelPassword } />
                    {
                        passwordError ? 
                        <p style={{color:'red'}}>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Comfirm Password: </label>
                    <input type="password" onChange={ handelComfirmPassword } />
                    {
                        comfirm_passwordError ? 
                        <p style={{color:'red'}}>{ comfirm_passwordError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="ADD New User" />
            </form>
        </div>
    );
};

export default UserForm;