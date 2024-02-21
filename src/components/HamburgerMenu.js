import React, { useContext, useState } from 'react'
import MobileMenuContext from './MobileMenuContext'
import styled from 'styled-components'

const Menu = styled.div`
    display:none;
    padding: 10px;
    z-index: 1;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 943px){
        display: inline;
    }
`

function HamburgerMenu() {
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
    <Menu onClick={toggleMobileMenu}>
        <div className={`top stripe ${animated1}`}></div>
        <div className={`middle stripe ${animated2}`}></div>
        <div className={`bottom stripe ${animated3}`}></div>
    </Menu>
  )
}

export default HamburgerMenu