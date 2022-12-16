import React, { useState } from 'react';

const FormComponent = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validFirst, setValidFirst] = useState("");
    const [validLast, setValidLast] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [validPassword, setValidPassword] = useState("");
    const [validConfirm, setValidConfirm] = useState("");

    const handleFirst = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length !== 0){
            setValidFirst("First name must be atleast 2 characters");
        } else {
            setValidFirst("");
        }
    }

    const handleLast = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length !== 0){
            setValidLast("Last name must be atleast 2 characters");
        } else {
            setValidLast("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length !== 0){
            setValidEmail("Email must be atleast 2 characters");
        } else {
            setValidEmail("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length !== 0){
            setValidPassword("Password must be atleast 8 characters");
        } else {
            setValidPassword("");
        }
    }

    const handleConfirm = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password && e.target.value !== 0){
            setValidConfirm("Passwords dont match");
        } else {
            setValidConfirm("");
        }
    }

    return (
        <>
            <form action="">
                <div id='formLabel'>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" onChange={ handleFirst } id="firstName"/>
                </div>
                {
                    validFirst ? 
                    <p className='text-center'>{validFirst}</p> :
                    ''
                }
                <div id='formLabel'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" onChange={ handleLast } id="lastName"/>
                </div>
                {
                    validLast ? 
                    <p className='text-center'>{validLast}</p> :
                    ''
                }
                <div id='formLabel'>
                    <label htmlFor="email">Email:</label>
                    <input type="text" onChange={ handleEmail } id="email"/>
                </div>
                {
                    validEmail ? 
                    <p className='text-center'>{validEmail}</p> :
                    ''
                }
                <div id='formLabel'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={ handlePassword } id="password"/>
                </div>
                {
                    validPassword ? 
                    <p className='text-center'>{validPassword}</p> :
                    ''
                }
                {
                    validConfirm ? 
                    <p className='text-center'>{validConfirm}</p> :
                    ''
                }
                <div id='formLabel'>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" onChange={ handleConfirm } id="Confirm Password"/>
                </div>
            </form>
            <div id='form-content'>
                <p className='text-center'>Your Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
}

export default FormComponent;