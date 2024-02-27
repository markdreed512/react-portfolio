import React from 'react'
import './WorkModal.css'
function WorkModal(props) {
  return (
    <div id="work_modal">
        <div className="content">
            <button className="close_btn" onClick={props.closeModal}>X</button>
            <h2>{props.view}</h2>
        </div>

    </div>
  )
}

export default WorkModal