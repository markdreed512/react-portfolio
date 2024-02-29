import { useState } from 'react'
import './WorkView.css'
import WorkModal from './WorkModal/WorkModal'



function WorkView() {
    const [ activeId, setActiveId ] = useState(null)
    const [ zoomActive, setZoomActive ] = useState(false)
    const [ shrunkenIds, setShrunkenIds ] = useState([])
    const [ displayModal, setDisplayModal ] = useState(false)
    const [ modalView, setModalView ] = useState(null)

    const openModal = (id) => {
        setDisplayModal(true)
        setModalView(id)
    }
    const closeModal = (e) => {
        e.stopPropagation()
        setDisplayModal(false)
    }
    const renderTiles = () => {
        const tiles = []
        for(let i = 0; i < 5; i++){
            const id = `item-${i + 1}`
            const isActive = activeId === id
            tiles.push( 
                <div key={i} id={id} className={`grid-item`} onClick={() => openModal(id)}>
                    <h3>{id}</h3>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                </div>
            )
        }
        return tiles
    }
  return (
    <section id="work_section">
        <h3>My Work</h3>
        <h2>{activeId}</h2>
        <div id="image_grid">
            {renderTiles()}
        </div>
        {displayModal && <WorkModal closeModal={closeModal} view={modalView}/>}
    </section>
  )
}

export default WorkView