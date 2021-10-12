import React, { useContext } from 'react'
import styled from 'styled-components'
import './Header.css'
import MobileMenuContext from './MobileMenuContext'
const MyHeader = styled.header`
    background: #000;
    color: teal;
    display: flex;
    justify-content:space-between;
    padding: 20px
`
const Links = styled.ul`
    display:none;
    list-style-type: none;
`
const LI = styled.li`
    display: inline;
    padding-right:10px;
`
const HamburgerMenu = styled.div`
    display:inline
`

export default function Header() {
    const [ mobileMenuOpen, setMobileMenuOpen ] = useContext(MobileMenuContext)
    const openMobileMenu = (e) => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
    return (
        <MyHeader>
            <span className="brand">MR</span>
            <nav>
                <Links>
                    <LI>work</LI>
                    <LI>resume</LI>
                    <LI>contact</LI>
                </Links>
                <HamburgerMenu onClick={openMobileMenu}>
                    <div className="top stripe"></div>
                    <div className="middle stripe"></div>
                    <div className="bottom stripe"></div>
                </HamburgerMenu>
            </nav>
        </MyHeader>
    )
}
