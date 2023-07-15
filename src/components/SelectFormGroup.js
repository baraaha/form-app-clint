import React from 'react';

function SelectFormGroup({ label, value, onChange, options, error, col = 6 }) {
    return (
        <div className={`form-group col-md-` + col}>
            <label htmlFor={label}>{label}</label>
            <select
                className={`form-control ${error ? 'is-invalid' : ''}`}
                id={label}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <small className="form-text text-danger">{error}</small>}
        </div>
    );


    //  SelectFormGroup({ label, value, onChange, options, placeholder, error, col = 6, onKeyPress }) {


    return (
        <div className={`form-group col-md-${col}`}>
            <label htmlFor={label}>{label}</label>
            <input
                list={`${label}-list`}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                id={label}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <datalist id={`${label}-list`}>
                {options.map((option) => (
                    <option key={option.id} value={option.name} />
                ))}
            </datalist>
            {error && <small className="form-text text-danger">{error}</small>}
        </div>
    );
}


export default SelectFormGroup;
