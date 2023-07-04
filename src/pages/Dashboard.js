import React, { useState } from "react";
import {
  FiHome,
  FiSettings,
  FiUser,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import Users from "../components/Users";
// import "./styles.css"; // Import the CSS file with RTL styles

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

const Sidebar = ({ active, setActive }) => {
  const sidebarItems = [
    {
      name: "Home",
      icon: <FiHome />,
    },
    {
      name: "Users",
      icon: <FiUser />,
      submenu: [
        {
          name: "Profile",
          icon: <FiUser />,
        },
        {
          name: "Settings",
          icon: <FiSettings />,
        },
      ],
    },
    {
      name: "Settings",
      icon: <FiSettings />,
    },
  ];

  return (
    <aside className="bg-gray-100 w-64 h-screen fixed top-0 left-0 overflow-y-auto">
      {/* Add `rtl` class */}
      <ul className="py-4">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            submenu={item.submenu}
            active={active}
            setActive={setActive}
          />
        ))}
      </ul>
    </aside>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gray-400 h-16 flex items-center px-4 z-0">
      <div className="ml-auto">
        <button className="px-4 py-2 bg-gray-500 text-white rounded">
          Logout
        </button>
      </div>
    </nav>
  );
};

const Content = () => {
  return (
    <div className="ml-0 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to the amazing dashboard!</p>
      <Users />
    </div>
  );
};

const Dashboard = () => {
  const [active, setActive] = useState("Home");

  return (
    <div>
      <Navbar />
      <div className="ml-64">
        <Sidebar active={active} setActive={setActive} />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
