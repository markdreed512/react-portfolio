import React from 'react'
import styled from 'styled-components'
import './Header.css'
import HamburgerMenu from './HamburgerMenu'

const Nav = styled.nav`
    color: #97b3c9;
    display: flex;
    justify-content:space-between;
    padding: 20px;
    @media (max-width: 943px){
        display: flex;
        justify-content: right;
    }
`
const Menu = styled.div`
    position: absolute;
    width: 200px;
    right: 0;
    top: 0;
    height: 100vh;
    text-align: center;
    background-color: #111;
    @media (max-width: 943px){
        display: none;
    }
`
const Brand = styled.div`
    padding: 50px 0px;
    background-color: #000;
    font-size:50px;
    letter-spacing: -6px;
    font-weight: 600;
`
const UL = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-top: 0
`
const LI = styled.li`
    display: inline;
    padding-right:10px;
    width: 100%;
    padding: 20px 0;
    font-size: 20px;
    &:hover{
        cursor: pointer;
        background-color: #292929;
    }
`

export default function DeskNav() {
    return (
        <Nav>
            <Menu>
                <Brand>MR</Brand>
                <UL>
                    <LI>work</LI>
                    <LI>resume</LI>
                    <LI>contact</LI>
                </UL>
            </Menu>
            <HamburgerMenu />
        </Nav>
    )
}
