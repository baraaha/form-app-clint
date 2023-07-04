import React, { useState } from "react";
import {
  FiHome,
  FiSettings,
  FiUser,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import "./styles.css"; // Import the CSS file with RTL styles

const SidebarItem = ({ name, icon, submenu, active, setActive }) => {
  const [expanded, setExpanded] = useState(false);

  const handleItemClick = () => {
    if (submenu) {
      setExpanded(!expanded);
    } else {
      setActive(name);
    }
  };

  return (
    <li>
      <button
        className={`flex items-center w-full py-2 px-4 text-sm font-medium text-left ${
          active === name ? "bg-gray-200" : "text-gray-600 hover:bg-gray-100"
        }`}
        onClick={handleItemClick}
      >
        {icon && <span className="mr-3">{icon}</span>}
        <span>{name}</span>
        {submenu && (
          <span className="ml-auto">
            {expanded ? (
              <FiChevronUp className="transition-transform duration-300 transform rotate-180" />
            ) : (
              <FiChevronDown className="transition-transform duration-300" />
            )}
          </span>
        )}
      </button>
      {submenu && expanded && (
        <ul className="ml-8">
          {submenu.map((subitem) => (
            <SidebarItem
              key={subitem.name}
              name={subitem.name}
              icon={subitem.icon}
              submenu={subitem.submenu}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
