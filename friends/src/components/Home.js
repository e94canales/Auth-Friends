import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Home = props => {
    const history = useHistory()

    return (
        <HomeContainer>
            <div className='cta'>
                <h1>Get Connected Now</h1>
                <div className='loginBtn'>
                    <h5 onClick={() => {
                        history.push('/login')
                    }}>Login</h5>
                </div>
            </div>
            <div className='imgContainer'>
                <img src='/landing.jpg' alt='landingImg'/>
            </div>
            
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`

    .cta {
        background-color: #4444d5;
        padding: 5% 15%;
        color: white;
        

        .loginBtn {
            background-color: white;
            color: #2f2f31;
            width: 10%;
            padding: .6%;
            border-radius: 15px;
            margin: 1% 0 0 3%;
            text-align: center;

            &:hover {
                background-color: #13b945;
                color: white;
                cursor: pointer;
            }
            
            h5 {
                font-weight: 500;
            }
        }
    }
    .imgContainer {
        width: 100%;
        height: 75vh;
        
        img {
            width: 100%;
            height: 100%
            
        }
    }

`