import React, { useState } from 'react'
import FormBuilder from './FormBuilder'
import DynamicForm from './DynamicForm'
import Ahmed from './Ahmed'

function FormCreate() {
    const [elements, setElements] = useState([])

    const addElement = (type) => {
        setElements([...elements, { type }])
    }

    return <FormBuilder />
    return <DynamicForm />
    return (
        <div className='row mt-4'>
            <div className='col-9'>
                {elements.map((element, index) => {
                    return (
                        <div className='row'>
                            <div className='col-12 card'>
                                <input type={element.type} />
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className='col-3'>
                <div class="list-group">
                    <button onClick={() => addElement("input")} class="list-group-item list-group-item-action ">input</button>
                    <button onClick={() => addElement("input")} class="list-group-item list-group-item-action">text areat</button>
                    <button onClick={() => addElement("input")} class="list-group-item list-group-item-action disabled">Disabled item</button>
                </div>
            </div>
        </div>
    )
}

export default FormCreate