import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Sidebar from "./components/Sidebar";
import MainHeader from "./components/MainHeader";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

const App = () => {

  return (
    <Router>
      <div className="wrapper">
        <MainHeader />
        <Sidebar />

        <div className="content-wrapper" style={{ minHeight: "2175.5px" }}>
          <div className="content">
            <div className="container-fluid">
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
