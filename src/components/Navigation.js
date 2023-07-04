import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>ahmd</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
