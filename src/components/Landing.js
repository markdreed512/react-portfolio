import React from 'react'
import WorkView from './WorkView/WorkView'
import styled from 'styled-components'

const Main = styled.main`
    color: #fff;
    padding: 147px 260px;
    font-family: raleway, arial, sans-serif;
    h1{
        font-size: 179px;
        font-weight: 500;
        margin: 0;
        line-height: 95px;
        @media (max-width: 1460px){
            font-size: 140px;
            line-height: 78px;
        }
        @media (max-width: 1138px){
            font-size: 100px;
            line-height: 60px;
        }
        @media (max-width: 938px){
            font-size: 80px;
            line-height: 48px;
        }
        @media (max-width: 517px){
            font-size: 60px
        }
    }
    h2{
        font-size: 100px;
        font-weight: 400;
        margin: 0 0 0 8px;
        letter-spacing: 15px;
        color: #97b3c9;
        padding-left: 10px;
        @media (max-width: 1460px){
            font-size: 78px;
            letter-spacing: 12px;
            margin: 0 0 0 2px;
        }
        @media (max-width: 1138px){
            font-size: 53px;
            letter-spacing: 10px;
            margin: 0 0 0 0px;
        }
        @media (max-width: 938px){
            font-size: 41px;
            letter-spacing: 9px;
            margin: 0 0 0 -4px;
        }
        @media (max-width: 517px){
            font-size: 30px;
            letter-spacing: 5px;
            padding-left: 8px;
        }
    }
    @media (max-width: 1460px){
        padding: 110px 130px;
    }
    @media (max-width: 943px){
        display: flex;
        flex-direction: column;
        padding: 68px 48px 0 61px;
        align-items: center;
    }
`
const Description = styled.p`
    max-width: 650px;
    border: 1px solid #97b3c9;
    padding: 20px;
    margin: 50px 0 0 10px;
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 18px;
`

function Landing() {
  return (
    <Main>
        <h1>Mark Reed</h1>
        <h2>web developer</h2>
        <Description>
            <span>full-stack</span> <span>|</span> 
            <span>client-centered</span> <span>|</span> 
            <span>pixel-perfect</span> <span>|</span> 
            <span>hyphen-enthusiast</span>
        </Description>
        <WorkView />
    </Main>
  )
}

export default Landing