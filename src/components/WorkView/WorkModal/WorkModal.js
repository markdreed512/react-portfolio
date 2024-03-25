import React from 'react'
import './WorkModal.css'
import tileData from './tileData'

function WorkModal(props) {
  const tileDataIndex = props.view[props.view.length - 1] - 1
  const modal = tileData[tileDataIndex]
  return (
    <div id="work_modal">
      <div className="content">
        <div className="button-container">
          <button className="close_btn" onClick={props.closeModal}>X</button>
        </div>
        <h3 className="modal-heading"><a href={modal.linkUrl} target="_blank">{modal.heading}</a></h3>
            <p>{modal.text}</p> 
            <img src={`/assets/${modal.imageFile}`} className="modal-img"/> 
      </div>
      
    </div>
  )
}

export default WorkModal