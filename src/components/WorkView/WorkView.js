import { useState } from 'react'
import styled from 'styled-components'
import './WorkView.css'
import WorkModal from '../WorkModal/WorkModal'


const ImageGrid = styled.div`
    
`
function WorkView() {
    const [ displayModal, setDisplayModal ] = useState(false)
    const toggleModal = () => {
        setDisplayModal(!displayModal)
    }

  return (
    <section id="work_section">
        <h3>My Work</h3>
        <div id="image_grid">
            <div id="one" className="grid-item grid-col-span-2" onClick={toggleModal}>
                <h3>Susan G. Komen</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </div>
            <div id="two" className="grid-item">
                <h3>Two</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </div>
            <div id="three" className="grid-item"><h3>Three</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </div>
            <div id="four" className="grid-item grid-col-span-2"><h3>Four</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </div>
            <div id="five" className="grid-item"><h3>Five</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </div>
        </div>
        {displayModal && <WorkModal closeModal={toggleModal}/>}
    </section>
  )
}

export default WorkView