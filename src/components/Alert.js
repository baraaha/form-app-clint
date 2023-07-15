import React from "react";

function Alert({ type, message }) {
    let alertClass;

    switch (type) {
        case "success":
            alertClass = "alert-success";
            break;
        case "error":
            alertClass = "alert-danger";
            break;
        case "warning":
            alertClass = "alert-warning";
            break;
        default:
            alertClass = "alert-info";
            break;
    }

    return (
        <div className={`alert mt-2 ${alertClass}`} role="alert">
            <span>{message}</span>
        </div>
    );
}

export default Alert;
