import React from 'react'

const StatusBadge = ({ status }) => {
    const className =
        status != 'inactive' ? 'badge bg-success' : 'badge bg-danger';
    const label = status != 'inactive' ? 'مفعل' : 'غير مفعل';

    return <span className={className}>{label}</span>;
};


export default StatusBadge