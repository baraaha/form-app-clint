import React, { useEffect, useState } from 'react';
import FormServices from '../../services/FormServices';
import { useParams } from 'react-router-dom';
import Alert from '../../components/Alert';

const FieldFactory = (field, index, handleChange) => {

    switch (field.element) {
        case 'input':
            return <InputField key={index} field={field} handleChange={handleChange} />;
        case 'checkbox':
            return <CheckboxField key={index} field={field} handleChange={handleChange} />;
        case 'select':
            return <SelectField key={index} field={field} handleChange={handleChange} />;
        case 'textarea':
            return <TextAreaField key={index} field={field} handleChange={handleChange} />;
        default:
            return null;
    }
}

const InputField = ({ field, handleChange }) => (
    <div className={field.ContainerClass}>
        <label htmlFor={field.name}>{field.label}</label>
        <input type={field.type} className={field.className} id={field.name} name={field.name} onChange={handleChange} />
    </div>
);

const CheckboxField = ({ field, handleChange }) => (
    <div className={field.ContainerClass}>
        <input type={field.type} className={field.className} id={field.name} name={field.name} onChange={handleChange} />
        <label htmlFor={field.name}>{field.label}</label>
    </div>
);

const SelectField = ({ field, handleChange }) => (
    <div className={field.ContainerClass}>
        <label>{field.label}</label>
        <select name={field.name} className={field.className} onChange={handleChange}>
            {field.options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
        </select>
    </div>
);

const TextAreaField = ({ field, handleChange }) => (
    <div className={field.ContainerClass}>
        <label htmlFor={field.name}>{field.label}</label>
        <textarea className={field.className} name={field.name} onChange={handleChange} />
    </div>
);

const DynamicForm = () => {

    // get id form url react router
    const { id } = useParams(); // Retrieve the id from the URL parameter



    const [formData, setFormData] = useState({});
    const [schema, setSchema] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formName, setFormName] = useState('');

    useEffect(() => {
        handleGetForm();
    }, [])

    useEffect(() => {
        const newFormData = {};

        schema.forEach((field) => {
            if (field.element === 'select') {
                const defaultValue = field.options.length > 0 ? field.options[0].value : '';
                newFormData[field.name] = defaultValue;
            } else {
                newFormData[field.name] = '';
            }
        });

        setFormData(newFormData);
    }, [schema]);



    const formServices = new FormServices();


    const handleChange = (e) => {
        if (e.target.type === "checkbox") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked,
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };


    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const data = await formServices.post({ data: formData, form_id: id }, 'submition');

            setError({ type: 'success', message: data.message })
            setFormData({});
        } catch (error) {
            setError(error);
        }
    };



    const handleGetForm = async () => {
        try {
            const { data } = await formServices.get('form/' + id);
            const parsedSchema = JSON.parse(data.elements);
            setSchema(parsedSchema);
            setFormName(data.title);
        } catch (error) {
            setError(error);
        }
    };


    return (
        <div class="container">
            <div className='m-3 rounded-lg shadow-md p-3'>
                {error && <Alert message={error.message} type={error.type} />}
                <h1 className='text-3xl my-5'>{formName}</h1>

                <form onSubmit={handleSubmitForm}>
                    {schema.map((field, index) => FieldFactory(field, index, handleChange))}
                    <button className='btn btn my-3 hover:bg-blue-600 bg-blue-500 text-white' type="submit">send</button>
                </form>
            </div>
        </div>
    );
};


export default DynamicForm