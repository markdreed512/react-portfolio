import React from 'react'
import styled from 'styled-components'

const Menu = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100vh;
    text-align: center;
    color: #97b3c9;
    background-color: rgba(0,0,0, .8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 943px){
        display: none;
    }
`
const UL = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-top: 0
`
const LI = styled.li`
    display: inline;
    padding-right:10px;
    width: 100%;
    padding: 20px 0;
    font-size: 40px;
    &:hover{
        cursor: pointer;
        background-color: #292929;
    }
`
function MobileMenu() {
    return (
        <Menu>
            <UL>
                <LI>work</LI>
                <LI>resume</LI>
                <LI>contact</LI>
            </UL>
        </Menu>
    )
}

export default MobileMenu
