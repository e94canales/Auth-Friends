import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'

const Profile = props => {

   

    return (
        <ProfileContainer>
            <Sidebar profile={true}/>
            <div className='container'>
                <div className='header'>
                    <h2>Welcome!</h2>
                    <h5>0 New Notifications</h5>
                </div>
                <div className='userInfo'>
                    <img className='avatar' src='/ava.jpg'alt='avatar'/>
                    <div className='extendedInfo'>
                        <h4>Erick Canales</h4>
                        <h4>Email: e94canales@gmail.com</h4>
                        <h4>Github: e94canales</h4>
                    </div>
                </div>
            </div>
        </ProfileContainer>
    )
}

export default Profile

const ProfileContainer = styled.div`

    .container {
        margin-left: 15%;
        height: 100vh;
        background-color: #bbc9d3;
        
        .header {
            background-color: #149494;
            color: white;
            text-align: center;
            padding: 7%;

            h2 {
                font-size: 3rem;
                
            }
            h5 {
                color: #d8dede;
                font-size: .9rem;
                font-weight: normal;
            }
        }
        .userInfo {
            display: flex;
            justify-content: center;
            margin: 6% 0;
            
            .avatar {
                width: 20%;
                border-radius: 100%;
            }
            .extendedInfo {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                padding: 5%;
                width: 35%;
                h4 {
                    width: 100%;
                    color: #585d5f;
                    font-weight: 500;
                }
                
            }
        }
    }

`