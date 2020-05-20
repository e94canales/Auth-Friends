import React from 'react'
import styled from 'styled-components'
import StyledLink from './StyledLink'
import { useHistory } from 'react-router-dom'


const Sidebar = props => {
    const history = useHistory()

    const logoutHandler = e => {
        e.preventDefault()
        localStorage.removeItem('token')
        history.push('/login')     
    }

    return (
        <SidebarContainer>
                <StyledLink to ='/profile'>{props.profile ? <h6 className='active'>Profile</h6> : <h6>Profile</h6>}</StyledLink>
                <StyledLink to ='/friends'>{props.friendsList ? <h6 className='active'>Friends</h6> : <h6>Friends</h6>}</StyledLink>
                <StyledLink to ='/addfriend'>{props.addFriend ? <h6 className='active'>Add Friend</h6> : <h6>Add Friend</h6>}</StyledLink>
                <h6 onClick={logoutHandler}>Logout</h6>
            </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
  position: absolute;
  width: 15%;
  height: 100vh;
  z-index: 100;
  background-color: #1e3152;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  padding: 3% 0;

  h6 {
    padding: 5%;
    font-weight: 200;

    &:hover {
      background-color: #efeff0;
      cursor: pointer;
      color: black;
    }
  }
  .active {
    background-color: #2e5fb2;
  }
`;