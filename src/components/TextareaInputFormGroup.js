import React from 'react';

function TextareaInputFormGroup({ label, value, onChange, placeholder, error, col = 12 }) {
    return (
        <div className={`form-group col-md-` + col}>
            <label htmlFor={label}>{label}</label>
            <textarea
                onChange={onChange}
                placeholder={placeholder}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                value={value}
            ></textarea>

            {error && <small className="form-text text-danger">{error}</small>}

        </div>
    );
}

export default TextareaInputFormGroup;
