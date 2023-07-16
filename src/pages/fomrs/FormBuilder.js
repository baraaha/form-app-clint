import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import InputFormGroup from '../../components/InputFormGroup';
import SelectFormGroup from '../../components/SelectFormGroup';
import FormServices from '../../services/FormServices';
import NavBar from '../../components/NavBar';


const defaultInputData = {
    element: 'input',
    type: 'text',
    label: 'Input Label',
    name: `name`,
    value: 'value',
    placeholder: 'Input Placeholder',
    required: false,
    disabled: false,
    readOnly: false,
    defaultValue: '',
    className: 'form-control',
    ContainerClass: 'form-group col-md-12',
    style: {},
};

const defaultTextareaData = {
    element: 'textarea',
    label: 'the label',
    name: `name`,
    placeholder: 'Placeholder',
    required: false,
    disabled: false,
    readOnly: false,
    defaultValue: '',
    className: 'form-control',
    ContainerClass: 'form-group col-md-12',
    style: {},
};


const defaultSelectData = {
    element: 'select',
    type: 'select',
    label: 'Select Label',
    name: `name`,
    options: [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option 2', value: 'Option 2' },
        { label: 'Option 3', value: 'Option 3' },
    ],
    required: false,
    disabled: false,
    readOnly: false,
    defaultValue: 'Option 1',
    className: 'form-control',
    ContainerClass: 'form-group col-md-12',
    style: {},
};


const defaultCheckboxData = {
    element: 'checkbox',
    type: 'checkbox',
    label: 'Checkbox Label',
    name: "name",
    value: 'checkbox value',
    required: false,
    disabled: false,
    readOnly: false,
    defaultChecked: false,
    className: 'form-check-input',
    ContainerClass: 'form-check',
    style: {},
};

const generateRandomName = () => {
    const uniqueId = Date.now().toString(36); // Generate a unique identifier based on the current timestamp
    const randomString = Math.random().toString(36).substr(2, 5); // Generate a random string

    return `input_${uniqueId}_${randomString}`;
}

const FormBuilder = () => {

    const [curentElement, setCurentElement] = useState(null)
    const [curentElementIndex, setCurentElementIndex] = useState(null)
    const [formData, setFormData] = useState({
        "title": "",
        "slug": "",
        "submission_limit": null,
        "allow_notifications": false,
        "published": false,
        "published_at": null,
        "expires_at": null,
        "description": "",
    }
    );


    const [elements, setElements] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [validation, setValidation] = useState([]);


    const onDelete = (index) => {
        const newElements = [...elements];
        newElements.splice(index, 1);
        setElements(newElements);
    }



    const addElement = (type) => {
        let newData;

        switch (type) {
            case 'checkbox':
                newData = { ...defaultCheckboxData, name: `name_${Math.random()}` };
                break;
            case 'row':
                newData = { ...defaultRowData, name: `name_${Math.random()}` };
                break;
            case 'input':
                newData = { ...defaultInputData, name: `name_${Math.random()}` };
                break;
            case 'textarea':
                newData = { ...defaultTextareaData, name: `name_${Math.random()}` };
                break;
            case 'select':
                newData = { ...defaultSelectData, name: `name_${Math.random()}` };
                break;
            default:
                return;
        }

        setElements(prevElements => [...prevElements, newData]);
    };


    const formServices = new FormServices();

    const clearForm = () => setElements([]);

    const submitForm = async () => {
        setValidation([]);
        console.log(elements);


        try {
            const response = await formServices.post({ ...formData, elements: elements }, 'form/create');
            console.log(response);

        } catch (error) {
            if (error.validationData) {
                setValidation(error.validationData)
            }
        }
    }



    const edit = (index) => {
        const element = elements[index];
        console.log(element);
        setCurentElement(element);
        setCurentElementIndex(index);
        setIsEditModalOpen(true);

    }




    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setElements([...elements.slice(0, curentElementIndex), curentElement, ...elements.slice(curentElementIndex + 1)]);
        setCurentElement(null);


    };



    const inputTypes = {
        "text": "Text",
        "password": "Password",
        "number": "Number",
        "email": "Email",
        "tel": "Telephone",
        "date": "Date",
        "time": "Time",
        "datetime-local": "Datetime Local",
        "url": "URL",
        "search": "Search",
        "color": "Color",
        "file": "File",
        "range": "Range",
    };



    const handleOptionChange = (index, property, value) => {
        const newOptions = [...curentElement.options];
        newOptions[index] = { ...newOptions[index], [property]: value };
        setCurentElement({ ...curentElement, options: newOptions });
        setElements([
            ...elements.slice(0, curentElementIndex),
            { ...curentElement, options: newOptions },
            ...elements.slice(curentElementIndex + 1)
        ]);
    };

    const addOption = () => {
        setCurentElement(prevElement => ({
            ...prevElement,
            options: [...prevElement.options, { label: "label", value: "label" }]
        }));
    };

    const deleteOption = (index) => {
        setCurentElement(prevElement => ({
            ...prevElement,
            options: prevElement.options.filter((_, optionIndex) => optionIndex !== index)
        }));
    }


    return (
        <>
            {isEditModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden m-auto h-3/4">
                    <div className="overlay fixed inset-0 bg-black opacity-50" onClick={closeEditModal}></div>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-4/5 md:w-1/2 m-auto z-10 overflow-y-auto max-h-screen">
                        <div className="flex items-center justify-center">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-full">

                                <h2 className="text-2xl font-semibold mb-4">Edit Element</h2>
                                <div class="row">
                                    {['label', 'ContainerClass', 'className', 'placeholder', 'value'].map((property) => (
                                        <div class="form-group col-6">
                                            <label for={property}>{`${property} of input`}</label>
                                            <input onChange={(e) => setCurentElement({ ...curentElement, [property]: e.target.value })} type="text" class="form-control" value={curentElement[property]} />
                                        </div>
                                    ))}
                                    {curentElement.element === "input" && (

                                        <div class="form-group col-md-6 my-3">
                                            <label for="">Input Type</label>
                                            <select onChange={(e) => setCurentElement({ ...curentElement, type: e.target.value })} class="form-control">
                                                {Object.entries(inputTypes).map(([type]) => <option value={type}>{type}</option>)}
                                            </select>
                                        </div>)}
                                </div>

                                {curentElement.type === "select" && (
                                    <div class="form-group my-3">
                                        <label>Options for select</label>
                                        {curentElement.options.map((option, index) => (
                                            <div key={index} className="my-2 row align-items-center">
                                                <div className='col-5'>
                                                    <label>Label</label>
                                                    <input
                                                        onChange={(e) => handleOptionChange(index, 'label', e.target.value)}
                                                        type="text"
                                                        class="form-control"
                                                        value={option.label}
                                                    />
                                                </div>
                                                <div className='col-5'>
                                                    <label>Value</label>
                                                    <input
                                                        onChange={(e) => handleOptionChange(index, 'value', e.target.value)}
                                                        type="text"
                                                        class="form-control"
                                                        value={option.value}
                                                    />
                                                </div>
                                                <div className='col-2 text-end'>
                                                    <button onClick={() => deleteOption(index)} className="btn btn-outline-danger">
                                                        <i className="bi bi-trash-fill"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <button onClick={addOption} className="btn btn-primary">Add Option</button>
                                        </div>
                                    </div>


                                )}



                                <button onClick={closeEditModal} className="bg-blue-500 btn hover:bg-blue-700 text-white ">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>





            )}
            <>
                <NavBar />
                <div className="flex flex-wrap p-4 h-full">
                    <div className="col-3 md:col-3 p-4 flex flex-col space-y-4">
                        <div className="fixed">
                            <button onClick={() => addElement("input")} className="flex w-80 items-center justify-start my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
                                Add Input
                            </button>
                            <button onClick={() => addElement("textarea")} className="flex w-80 items-center justify-start my-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
                                Add Textarea
                            </button>
                            <button onClick={() => addElement("select")} className="flex w-80 items-center justify-start my-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
                                Add Select
                            </button>
                            <button onClick={() => addElement("checkbox")} className="flex w-80 items-center justify-start my-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
                                Add Checkbox
                            </button>

                        </div>
                    </div>
                    <div className='shadow-lg col-9 overflow-x-auto h-full'>
                        {elements.length > 0 && (
                            <div className="col-12 md:col-9  bg-white rounded-lg p-4">
                                <div className='row bg-white rounded-lg shadow-md p-4 mb-4'>
                                    <InputFormGroup
                                        label="title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        error={validation?.title?.[0]}
                                    />
                                    <InputFormGroup
                                        label="slug"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                        error={validation?.slug?.[0]}

                                    />
                                    <InputFormGroup
                                        label="submission limit"
                                        type='number'
                                        value={formData.submission_limit}
                                        onChange={(e) => setFormData({ ...formData, submission_limit: e.target.value })}
                                        error={validation?.submission_limit?.[0]}

                                    />
                                    <InputFormGroup
                                        label="published at"
                                        type='date'
                                        value={formData.published_at}
                                        onChange={(e) => setFormData({ ...formData, published_at: e.target.value })}
                                        error={validation?.published_at?.[0]}

                                    />
                                    <InputFormGroup
                                        label="expires at"
                                        type='date'
                                        value={formData.expires_at}
                                        onChange={(e) => setFormData({ ...formData, expires_at: e.target.value })}
                                        error={validation?.expires_at?.[0]}

                                    />
                                    <SelectFormGroup
                                        label="published"
                                        value={formData.published}
                                        onChange={(e) => setFormData({ ...formData, published: e.target.value })}
                                        options={[
                                            { name: 'Yes', id: 1 },
                                            { name: 'No', id: 0 },
                                        ]}
                                        error={validation?.published?.[0]}

                                    />
                                    <SelectFormGroup
                                        label="allow notifications"
                                        value={formData.allow_notifications}
                                        onChange={(e) => setFormData({ ...formData, allow_notifications: e.target.value })}
                                        options={[
                                            { name: 'Yes', id: true },
                                            { name: 'No', id: false },
                                        ]}
                                        error={validation?.allow_notifications?.[0]}

                                    />


                                </div>
                            </div>
                        )}
                        <div className="col-12 md:col-9  bg-white rounded-lg p-4">

                            {elements.length > 0 ? elements.map((element, index) => {
                                return (
                                    <div className="bg-white rounded-lg shadow-md p-4 mb-4 relative">



                                        {element.element === 'input' && <InputElement index={index} edit={edit} onDelete={onDelete} element={element} />}
                                        {element.element === 'textarea' && <TextareaElement index={index} edit={edit} onDelete={onDelete} element={element} />}
                                        {element.element === 'select' && <SelectElement index={index} edit={edit} onDelete={onDelete} element={element} />}
                                        {element.element === 'checkbox' && <CheckboxElement index={index} edit={edit} onDelete={onDelete} element={element} />}
                                        {element.element === 'row' && <RowElement data={elements} setData={setElements} index={index} edit={edit} onDelete={onDelete} element={element} />}
                                    </div>
                                )
                            }) :
                                <WelcomeSection />
                            }
                            {elements.length > 0 && (
                                <div className="col-12 p-4 flex justify-between items-center  bottom-0 left-0 right-0">
                                    <button onClick={clearForm} className="btn btn-danger rounded">Clear Form</button>
                                    <button onClick={submitForm} className="btn hover:bg-green-600 bg-green-500 text-white mx-2 rounded">Submit Form</button>
                                </div>
                            )}
                        </div>

                    </div>



                </div>
            </>
        </>
    );

};

const WelcomeSection = () => {
    return (
        <div className="text-center">
            <div className="text-center p-4 bg-gray-50">
                <h3 className="text-2xl text-blue-600 font-semibold">
                    <i className="fas fa-pencil-alt mr-2"></i>
                    Ready to Build Your First Form?
                </h3>
                <p className="text-gray-600">
                    You're just a few clicks away from designing a beautiful and responsive form. Our form builder allows you to create:
                </p>
                {/* div in center */}
                <div className="flex justify-center">
                    <ul className="text-gray-600 flex flex-col items-baseline justify-center m-4">
                        <li className="flex items-baseline mt-2">
                            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full h-12 w-12 mx-2">
                                <i className="fas fa-poll"></i>
                            </div>
                            <strong>Survey Forms:</strong> Collect valuable data and insights.
                        </li>

                        <li className="flex items-baseline mt-2">
                            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full h-12 w-12 mx-2">
                                <i className="fas fa-user-edit mr-2"></i>
                            </div>
                            <strong>Registration Forms:</strong> Manage sign-ups for your events or courses.
                        </li>

                        <li className="flex items-baseline mt-2">
                            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full h-12 w-12 mx-2">
                                <i className="fas fa-envelope mr-2"></i>
                            </div>
                            <strong>Contact Forms:</strong> Stay connected with your audience.
                        </li>

                        <li className="flex items-baseline mt-2">
                            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full h-12 w-12 mx-2">
                                <i className="fas fa-shopping-cart mr-2"></i>
                            </div>
                            <strong>Order Forms:</strong> Simplify the buying process for your customers.
                        </li>
                    </ul>

                </div>
                <p className="text-gray-600">
                    and much more... Let's get started!
                </p>
                <button className="mt-4 bg-blue-500 text-white rounded p-2 px-4 hover:bg-blue-700 transition-colors duration-300">
                    <i className="fas fa-mouse-pointer mr-2"></i>
                    Start Building
                </button>
            </div>
        </div>
    )
}



const InputElement = ({ element, onDelete, edit, index }) => {
    const {
        type,
        label,
        name,
        placeholder,
        className,
        style,
        defaultValue,
        ContainerClass,
        value,
    } = element;

    return (
        <>
            <div className={`w-full rounded bg-gray-300 p-2 ${ContainerClass}`}>
                <span
                    className="text-red-500 hover:text-red-700 mx-1 cursor-pointer"
                    onClick={() => onDelete(index)}
                >
                    <i className="fas fa-trash"></i>
                </span>
                <span
                    className="text-blue-500 hover:text-blue-700 mx-1 cursor-pointer"
                    onClick={() => edit(index)}
                >
                    <i className="fas fa-edit"></i>
                </span>
            </div>
            <div className={`form-group ${ContainerClass}`}>
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    id={name}
                    value={defaultValue}
                    className={className}
                    name={name}
                    style={style}
                    placeholder={placeholder}
                />
            </div>
        </>
    );
};

const TextareaElement = ({ element, onDelete, edit, index }) => {
    const {
        label,
        name,
        placeholder,
        className,
        ContainerClass,
        style,
    } = element;

    return (
        <>
            <div className={`w-full rounded bg-gray-300 p-2 ${ContainerClass}`}>
                <span
                    className="text-red-500 hover:text-red-700 mx-1 cursor-pointer"
                    onClick={() => onDelete(index)}
                >
                    <i className="fas fa-trash"></i>
                </span>
                <span
                    className="text-blue-500 hover:text-blue-700 mx-1 cursor-pointer"
                    onClick={() => edit(index)}
                >
                    <i className="fas fa-edit"></i>
                </span>
            </div>
            <div className={`form-group ${ContainerClass}`}>
                <label htmlFor={name}>{label}</label>
                <textarea
                    id={name}
                    className={className}
                    name={name}
                    style={style}
                    placeholder={placeholder}
                />
            </div>
        </>
    );
};


const SelectElement = ({ element, onDelete, edit, index }) => {
    const {
        label,
        name,
        options,
        className,
        ContainerClass,
        style,
    } = element;

    return (
        <>
            <div className={`w-full rounded bg-gray-300 p-2 ${ContainerClass}`}>
                <span
                    className="text-red-500 hover:text-red-700 mx-1 cursor-pointer"
                    onClick={() => onDelete(index)}
                >
                    <i className="fas fa-trash"></i>
                </span>
                <span
                    className="text-blue-500 hover:text-blue-700 mx-1 cursor-pointer"
                    onClick={() => edit(index)}
                >
                    <i className="fas fa-edit"></i>
                </span>
            </div>
            <div className={`form-group ${ContainerClass}`}>
                <label htmlFor={name}>{label}</label>
                <select
                    id={name}
                    className={className}
                    name={name}
                    style={style}
                >
                    {options.map((option, index) => (
                        <option key={option.value} value={option.label}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};


const CheckboxElement = ({ element, onDelete, edit, index }) => {
    const {
        label,
        name,
        ContainerClass,
        style,
        defaultValue,
        defaultChecked,
    } = element;

    return (
        <>
            <div className={`w-full rounded bg-gray-300 p-2 ${ContainerClass}`}>
                <span
                    className="text-red-500 hover:text-red-700 mx-1 cursor-pointer"
                    onClick={() => onDelete(index)}
                >
                    <i className="fas fa-trash"></i>
                </span>
                <span
                    className="text-blue-500 hover:text-blue-700 mx-1 cursor-pointer"
                    onClick={() => edit(index)}
                >
                    <i className="fas fa-edit"></i>
                </span>
            </div>

            <div className="form-check">
                <label className="form-check-label">
                    <input type="checkbox" class="form-check-input" style={style} name={name} id={name} value={defaultValue} checked={defaultChecked} />
                    {label}
                </label>
            </div>
        </>
    );
};




export default FormBuilder;
