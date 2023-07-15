import React, { useState } from 'react'

function Ahmed() {

    const [droppedElements, setDroppedElements] = useState([]);

    const handleDrop = (id) => {
        setDroppedElements((prev) => [...prev, id]);
    };

    return (
        <div className="App">
            <h1>Drag and Drop Demo</h1>
            <div className='row'>
                <div className='bg-slate-300 col-2 mx-1'>
                    <Draggable id="draggable1">
                        <p>I can be dragged</p>
                    </Draggable>

                    <Draggable id="draggable2">
                        <p>Drag me too</p>
                    </Draggable>
                </div>

                <div className='col'>
                    <h2>Drop zone</h2>
                    <Dropzone onDrop={handleDrop}>
                        {droppedElements.map((id) => (
                            <p key={id}>Dropped: {id}</p>
                        ))}
                    </Dropzone>
                </div>
            </div>
        </div>
    )
}

// Draggable Component
const Draggable = ({ id, children }) => {
    const drag = (event) => {
        event.dataTransfer.setData("text", event.target.id);
    };

    return (
        <div id={id} draggable="true" className='p-3 border-1' onDragStart={drag}>
            {children}
        </div>
    );
};

// Dropzone Component
const Dropzone = ({ onDrop, children }) => {
    const drop = (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        onDrop(data);
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    return (
        <div onDrop={drop} className='bg-red-300 w-full h-full' onDragOver={allowDrop}>
            {children}
        </div>
    );
};



export default Ahmed