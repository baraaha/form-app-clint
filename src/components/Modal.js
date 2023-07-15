import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useEffect } from 'react';

const Modal = ({ title, children, onClose }) => {
    const modalRef = useRef();
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target === modalRef.current) {
                onClose();
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [onClose]);
    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', "background": "rgba(0, 0, 0, 0.5)" }} ref={modalRef}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
