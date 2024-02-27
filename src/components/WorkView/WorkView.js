import { useState } from 'react'
import './WorkView.css'
// import WorkModal from '../WorkModal/WorkModal'



function WorkView() {
    const [ activeId, setActiveId ] = useState(null)
    const handleTileClick = (id) => {
        setActiveId(id)
    }
    const renderTiles = () => {
        console.log("render tiles")
        const tiles = []
        for(let i = 0; i < 5; i++){
            const id = `item-${i + 1}`
            const isActive = activeId === id
            tiles.push( 
                <div key={i} id={id} className={`grid-item ${isActive? 'grow': 'shrink'}`} onClick={() => handleTileClick(id)}>
                    <h3>{id + ": " + isActive.toString()}</h3>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                </div>
            )
        }
        console.log("tiles:", tiles)
        return tiles
    }
  return (
    <section id="work_section">
        <h3>My Work</h3>
        <div id="image_grid">
            {renderTiles()}
        </div>
    </section>
  )
}

export default WorkView