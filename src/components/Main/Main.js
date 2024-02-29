import React from 'react'
import WorkView from '../WorkView/WorkView'
import ResumeView from '../ResumeView/ResumeView'
import './Main.css'



function Landing() {
  return (
    <main>
        <h1>Mark Reed</h1>
        <h2>web developer</h2>
        <div className="description">
            <span>full-stack</span> <span>|</span> 
            <span>client-centered</span> <span>|</span> 
            <span>pixel-perfect</span> <span>|</span> 
            <span>hyphen-enthusiast</span>
        </div>
        <WorkView />
        <ResumeView />
    </main>
  )
}

export default Landing