import React, { useState } from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import Sidebar  from './Sidebar'

const initialFormValues = {
    name: '',
    age: '',
    email: '',
}

const AddFriend = props => {

    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ successMessage, setSuccessMessage ] = useState()

    const inputHandler = e => {

        const name = e.target.name
        const value = e.target.value

        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    const addFriendHandler = e => {
        e.preventDefault()

        axiosWithAuth()
            .post('api/friends', formValues)
            .then( response => {
                setSuccessMessage(`${formValues.name} has been added to your friends!`)
            })

        setFormValues(initialFormValues)
    }

    return (
        <AddFriendContainer>
            <Sidebar addFriend={true} />

            <div className='container'>
                <h4>{successMessage}</h4>
                <form>
                    <input
                    name='name'
                    value={formValues.name}
                    placeholder='Name'
                    onChange={inputHandler}
                    type='text'>
                    </input>

                    <input
                    name='email'
                    value={formValues.email}
                    placeholder='Email'
                    onChange={inputHandler}
                    type='text'>
                    </input>

                    <input
                    name='age'
                    value={formValues.age}
                    placeholder='Age'
                    onChange={inputHandler}
                    type='text'>
                    </input>

                    <button onClick={addFriendHandler}>Add</button>
                </form>
                
            </div>
        </AddFriendContainer>
    )
}

export default AddFriend

const AddFriendContainer = styled.div`
   background-color: #bbc9d3;
   height: 100vh;
   .container {
        margin-left: 15%;
        padding-top: 15%;

        h4 {
            color: green;
            text-align: center;
            font-weight: 400;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
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
   }
`