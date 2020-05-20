import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Spinner from './Spinner'
import Sidebar from './Sidebar'


const FriendsList = props => {

    const [ friends, setFriends ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        axiosWithAuth()
            .get('api/friends')
            .then( response => {
                console.log(response.data)
                setFriends(response.data)
                setLoading(false)
            })
    }, [])

    const renderSwitch = expr => {
        switch(expr) {
            case 'Rachel Green':
                return (
                    <img className='friendAvatar' src='/rach.jpg'/>
                )
            case 'Joey Tribbiani':
                return (
                    <img className='friendAvatar' src='/joey.jpg'/>
                )
            case 'Chandler Bing':
                return (
                    <img className='friendAvatar' src='/chandler.jpg'/>
                )
            case 'Ross Geller':
                return (
                    <img className='friendAvatar' src='/ross.jpeg'/>
                )
            case 'Monica Bing':
                return (
                    <img className='friendAvatar' src='/monica.png'/>
                )
            case 'Phoebe Buffay-Hannigan':
                return (
                    <img className='friendAvatar' src='/phoebe.jpg'/>
                )
            default:
                return (
                    <img className='friendAvatar' src='/ava.jpg'/>
                )
        }
    }
    return (
        <div>
            <Sidebar friendsList={true}/>
            <FriendsContainer>
            {loading ? <Spinner /> : friends.map( friend => {
                    return (
                        <div className='friendCard' key={friend.id}>
                            {renderSwitch(friend.name)}
                            <h3>{friend.name}</h3>
                            <div className='info'>
                                <h5>{friend.email}</h5>
                                <h5>Age: {friend.age}</h5>
                            </div>
                        </div>
                    )
                })}

                
            </FriendsContainer>
        </div>
        
    )
}

export default FriendsList

const FriendsContainer = styled.div`

    margin-left: 15%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    background-color: #cbcddc;
    height: 100vh;
    
    .friendCard {
        text-align: center;
        padding: 3%;
       

        h3 {
            color: #3b3b3b;
        }
        h5 {
            color: #727274;
            font-size: .8rem;
            font-weight: 200;
            
        }
        .friendAvatar {
            width: 200px;
            height: 200px;
            border-radius: 100%;
            
        }
        
    }
`