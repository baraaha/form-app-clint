// routes/routes.js

import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "../components/NotFound";

import FormListContainer from "../containers/Forms/FormListContainer";
import FormCreate from "../pages/fomrs/FormCreate";
import DynamicForm from "../pages/fomrs/DynamicForm";
import Login from "../pages/auth/Login";
import OtpVerification from "../pages/auth/OtpVerification";
import Registration from "../pages/auth/Registration";
import Auth from "../constants/Auth";
import Submissions from "../pages/submissions/Submissions";
import { ProtectedRoute } from "./ProtectedRoute";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/submissions/:id" element={<Submissions />} />
      {/* <ProtectedRoute path="/forms" element={<FormListContainer />} /> */}
      <Route path="/forms" element={<FormListContainer />} />
      <Route path="/form-create" element={<FormCreate />} />
      <Route path="/form/:id" element={<DynamicForm />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/otp" element={<OtpVerification />} />

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<FormListContainer />} />
      {/* 
      <Route path="/" element={
        <Auth>
          <FormListContainer />
        </Auth>
      } />

      <Route path="/forms" element={<Auth>
        <FormListContainer />
      </Auth>} />
      <Route path="/form-create" element={<Auth>
        <FormCreate />
        
      </Auth>} />
      <Route path="/form/:id" element={<Auth>
        <DynamicForm />
      </Auth>} />
      <Route path="/otp" element={<Auth>
        <OtpVerification />
      </Auth>} />
      <Route path="/registration" Component={Registration} />
      <Route path="/login" element={<Auth>
        <Login />
      </Auth>} /> */}


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
