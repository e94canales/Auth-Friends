import React, { useState } from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialFormValues = {
   credentials: {
        username: '',
        password: ''
   }
}

const Login = props => {

    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ loginFailed, setLoginFailed ] = useState(false)

    const inputHandler = e => {
        const name = e.target.name
        const value = e.target.value

        setFormValues({
            ...formValues,
            credentials: {...formValues.credentials, [name]: value}
        })
    }
    const loginHandler = e => {
        e.preventDefault()

        axiosWithAuth()
            .post('api/login', formValues.credentials)
            .then( res => {
                console.log(res.data.payload)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/profile')
            })
            .catch( err => {
                console.log(err)
                setLoginFailed(true)
            })
        
        setFormValues(initialFormValues)
    }

    return (
        <LoginContainer>
            <div className={loginFailed ? 'showError' : 'hide'}>
                <h6>Incorrect credentials. Please try again.</h6>
            </div>
            <form>
                <input 
                name='username'
                value={formValues.credentials.username}
                type='text'
                placeholder='Username'
                onChange={inputHandler}>
                </input>

                <input 
                name='password'
                value={formValues.credentials.password}
                type='password'
                placeholder='Password'
                onChange={inputHandler}>
                </input>

                <button onClick={loginHandler}>Login</button>
            </form>
            
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #bbc9d3;
    height: 100vh;

    .hide {
        display: none;
    }
    .showError{
        text-align: center;
        color: white;
        background-color: #db5151;
        padding: .3%;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 15%;
        
        input {
            width: 30%;
            padding: 1%;
            margin: 1%;
        }
        button {
            width: 10%;
                margin-top: 2%;
                padding: .4%;
                border-radius: 15px;
                cursor: pointer;

                &:hover {
                    background-color: #393737;
                    color: white;
                }
        }
    }

`