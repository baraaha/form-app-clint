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
import Submissions from "../pages/submissions/Submissions";
import ProtectedRoute from "./ProtectedRoute";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/submissions/:id" element={
        <ProtectedRoute>
          <Submissions />
        </ProtectedRoute>
      } />

      <Route path="/forms" element={
        <ProtectedRoute>
          <FormListContainer />
        </ProtectedRoute>} />

      <Route path="/form-create" element={
        <ProtectedRoute>
          <FormCreate />
        </ProtectedRoute>
      } />

      <Route path="/form/:id" element={
        <ProtectedRoute>
          <DynamicForm />
        </ProtectedRoute>
      } />
      <Route path="/registration" element={<Registration />} />


      <Route path="/otp" element={<OtpVerification />} />

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<FormListContainer />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
