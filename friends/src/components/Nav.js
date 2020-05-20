import React from 'react'
import StyledLink from './StyledLink'
import styled from 'styled-components'

const Nav = props => {

    return (
        <NavContainer>
            <StyledLink to='/'><h1>bookface</h1></StyledLink>
            <div className='links'>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/login'>Login</StyledLink>
                <StyledLink to='/profile'>Profile</StyledLink>
            </div>
        </NavContainer>
    )
}

export default Nav

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1%;
    background-color: #243c65;
    color: white;
    
    h1 {
        
    }
    .links {
        align-self: center;
        width: 15%;
        display: flex;
        justify-content: space-evenly;
        
    }
`