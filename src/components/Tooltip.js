import React, { useState } from 'react';

const Tooltip = ({ content, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="relative inline-block">
            <span
                className="cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </span>
            {showTooltip && (
                <div className="absolute top-full left-1/2 transform min-w-min -translate-x-1/2 bg-gray-800 text-white text-xs rounded p-2">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
