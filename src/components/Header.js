import React from 'react'
import styled from 'styled-components'

const MyHeader = styled.header`
    background: #000;
    color: teal;
    display: flex;
    justify-content:space-between;
    padding: 20px 10px;
`
const Links = styled.ul`
    list-style-type: none;
    display: inline;
`
const LI = styled.li`
    display: inline;
    padding-right:10px;
`
const HamburgerMenu = styled.div`
    display:none;
`
export default function Header() {
    return (
        <MyHeader>
            <span className="brand">MR</span>
            <nav>
                <Links>
                    <LI>work</LI>
                    <LI>resume</LI>
                    <LI>contact</LI>
                </Links>
                <HamburgerMenu>|||</HamburgerMenu>
            </nav>
        </MyHeader>
    )
}
