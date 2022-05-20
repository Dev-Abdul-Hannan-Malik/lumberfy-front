import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Index from "./components/index";
import AppointmentForm from "./components/AppoinmentForm";
import DoctorForm from "./components/DoctorForm";
import PatientForm from "./components/PatientForm";
import EditPatient from "./components/EditPatient";
import ViewPatient from "./components/ViewPatient";
import LoginForm from "./components/LoginForm";
// import ReportForm from "./components/ReportForm";
// import PrescriptionForm from "./components/PrescriptionForm";

function App() {
  return (
    //
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/LoginForm" element={<LoginForm />} />
        {/* <Route exact path="/ReportForm" element={<LoginForm />} />
        <Route exact path="/PrescriptionForm" element={<LoginForm />} /> */}
        <Route exact path="/AppointmentForm" element={<AppointmentForm />} />
        <Route exact path="/DoctorForm" element={<DoctorForm />} />
        <Route exact path="/PatientForm" element={<PatientForm />} />
        <Route exact path="/ViewPatient/:id" element={<ViewPatient />} />
        <Route exact path="/EditPatient/:id" element={<EditPatient />} />
      </Routes>
    </Router>
  );
}

export default App;
