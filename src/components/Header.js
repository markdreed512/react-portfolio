import React, { useContext, useState } from 'react'
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
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
        setAnimated1(animated1 === "animated1"? "no-animate1" : "animated1")
        setAnimated2(animated2 === "animated2"? "no-animate2" : "animated2")
        setAnimated3(animated3 === "animated3"? "no-animate3" : "animated3")
    }
    const [ animated1, setAnimated1 ] = useState("no-animate1")
    const [ animated2, setAnimated2 ] = useState("no-animate2")
    const [ animated3, setAnimated3 ] = useState("no-animate3")
    return (
        <MyHeader>
            <span className="brand">MR</span>
            <nav>
                <Links>
                    <LI>work</LI>
                    <LI>resume</LI>
                    <LI>contact</LI>
                </Links>
                <HamburgerMenu onClick={toggleMobileMenu}>
                    <div className={`top stripe ${animated1}`}></div>
                    <div className={`middle stripe ${animated2}`}></div>
                    <div className={`bottom stripe ${animated3}`}></div>
                </HamburgerMenu>
            </nav>
        </MyHeader>
    )
}
