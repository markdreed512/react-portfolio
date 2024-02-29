import React from 'react'
import './WorkModal.css'
import tileData from './tileData'

function WorkModal(props) {
  return (
    <div id="work_modal">
      <div className="content">
        <div className="button-container">
          <button className="close_btn" onClick={props.closeModal}>X</button>
        </div>
        <h3 className="tile-heading">{tileData.tiles[props.view].heading}</h3>
        {tileData.tiles[props.view].paragraphs.map(paragraph => {
          return (
            <p>{paragraph}</p>
          )
        })}
        <p></p>
      </div>
      
    </div>
  )
}

export default WorkModal