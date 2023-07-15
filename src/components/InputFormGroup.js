import React from 'react';

function InputFormGroup({ label, value, onChange, placeholder, error, col = 6, type = "text", onLoad, onKeyDown }) {
    return (
        <div className={"form-group  col-md-" + col}>
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                id={label}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onLoad={onLoad}
                placeholder={placeholder}
            />
            {error && <small className="form-text text-danger">{error}</small>}

        </div>
    );
}

export default InputFormGroup;
