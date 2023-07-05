import React, { useState } from 'react';
import '../App.css';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comfirm_password, setComfirmPassword] = useState("");
    
    return (
        <div className="form-container">
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Comfirm Password: </label>
                    <input type="password" onChange={(e) => setComfirmPassword(e.target.value)} />
                </div>
            </form>
            <h2>Form Data:</h2>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email : {email}</p>
            <p>Password: {password}</p>
            <p>Comfirm Password: {comfirm_password  }</p>
        </div>
    );
};

export default UserForm;