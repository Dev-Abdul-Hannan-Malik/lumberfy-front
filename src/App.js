import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Index from "./components/index";
import AppointmentForm from "./components/AppoinmentForm";
import DoctorForm from "./components/DoctorForm";
import PatientForm from "./components/PatientForm";

function App() {
  return (
    //
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/AppointmentForm" element={<AppointmentForm />} />
        <Route exact path="/DoctorForm" element={<DoctorForm />} />
        <Route exact path="/PatientForm" element={<PatientForm />} />
      </Routes>
    </Router>
  );
}

export default App;
