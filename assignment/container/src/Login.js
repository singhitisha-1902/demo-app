// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import {CDSTextInput} from "@ciscodesignsystems/cds-react-text-input"
import {CDSButton} from "@ciscodesignsystems/cds-react-button"
import {CDSFlex} from "@ciscodesignsystems/cds-react-flex"
import {CDSContainer} from "@ciscodesignsystems/cds-react-container"
const LoginForm = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(username)) {
            setUsernameError('Please enter a valid email address');
            isValid = false;
        } else {
            setUsernameError('');
        }

        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            onLogin();
            console.log('Login successful');
            alert('Login Successful');    
            navigate('/home');
        }
    };

    return (
      
    <form onSubmit={handleSubmit}>
          
          <CDSFlex
            gap={20}
          direction="vertical"  
          align="center" 
        
        //className={""} direction={direction} gap={gap} grow={grow} justify={justify} reverse={reverse} wrap={wrap}     
        >
                {/* <div className="container"> */}
   
                    <h2>Login</h2>
                   
       <CDSFlex 
          gap={20}
          direction="vertical"
          style={{
            width: '300px'
        }}

          
         >
                    <CDSTextInput
                       placeholder="Enter email" 
                    
           
                        id="username" 
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        />
                     

                          <CDSTextInput
                         id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        placeholder="Enter your password"
                        tooltip=""
                        />
                          </CDSFlex>
                    {/* <label htmlFor="username">Username (Email)</label>
                    <input placeholder="Enter email" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} /> */}
                    <CDSFlex className="error">{usernameError}</CDSFlex>
                    {/* <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                    <CDSFlex className="error">{passwordError}</CDSFlex>
                    <CDSFlex  
                       gap={20}
                       style={{
                        width: '300px'
                    }}
                          direction="vertical">
                    <CDSButton
                       icon={null}
                     rightIcon={null}
                     type="submit"

                      >
                     Login
                      </CDSButton>
                      </CDSFlex>
                    
                    {/* <button className='loginButton'type="submit">Login</button> */}
                {/* </div> */}
                </CDSFlex>
            </form>
           
    );
};

export default LoginForm;
