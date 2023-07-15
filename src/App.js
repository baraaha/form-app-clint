import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "./App.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import AuthContextProvider from "./contexts/AuthContextProvider";

const App = () => {

  return (
    <Router>
      <div className=" h-full">
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
      </div>
    </Router>
  );
};

export default App;
