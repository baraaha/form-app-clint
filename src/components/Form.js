import React, { useState } from 'react';

const Form = () => {
    const [formElements, setFormElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);

    const handleAddElement = (type) => {
        const newElement = {
            type: type,
            label: '',
        };
        setFormElements([...formElements, newElement]);
    };

    const handleChangeLabel = (index, event) => {
        const updatedElements = [...formElements];
        updatedElements[index].label = event.target.value;
        setFormElements(updatedElements);
    };

    const handleSelectElement = (event) => {
        setSelectedElement(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., send data to backend API
        console.log(formElements);
    };

    return (
        <div className="container">
            <div className="col-4">
                <h2>Elements</h2>
                <select onChange={handleSelectElement}>
                    <option value="">Select Element</option>
                    <option value="input">Input</option>
                    <option value="button">Button</option>
                    <option value="textarea">Textarea</option>
                    <option value="select">Select</option>
                    {/* Add more options for other elements */}
                </select>
                <button
                    type="button"
                    onClick={() => handleAddElement(selectedElement)}
                    disabled={!selectedElement}
                >
                    Add Element
                </button>
            </div>
            <div className="col-8">
                <h2>Form Elements</h2>
                <form onSubmit={handleSubmit}>
                    {formElements.map((element, index) => (
                        <div key={index}>
                            <label>
                                Type: {element.type}
                            </label>
                            <label>
                                Label:
                                <input
                                    type="text"
                                    value={element.label}
                                    onChange={(event) => handleChangeLabel(index, event)}
                                />
                            </label>
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
