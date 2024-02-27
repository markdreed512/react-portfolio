import React from 'react'
import './WorkModal.css'
function WorkModal(props) {
  return (
    <div id="work_modal">
        <button onClick={props.closeModal}>Close</button>
        <h2>Work Modal</h2>
    </div>
  )
}

export default WorkModal