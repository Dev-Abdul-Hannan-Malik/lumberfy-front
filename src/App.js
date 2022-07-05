import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Index from "./components/index";
import LoginForm from "./components/LoginForm";

import DoctorForm from "./components/Doctor/DoctorForm";
import EditDoctor from "./components/EditDoctor";
import ViewDoctor from "./components/ViewDoctor";

import PatientForm from "./components/PatientForm";
import EditPatient from "./components/EditPatient";
import ViewPatient from "./components/ViewPatient";

import AppointmentForm from "./components/AppoinmentForm";
import EditAppointment from "./components/EditAppointment";
import ViewAppointment from "./components/ViewAppointment";

import MRIForm from "./components/MRIForm";
import ViewReport from "./components/ViewReport";

import PrescriptionForm from "./components/PrescriptionForm";
import EditPrescription from "./components/EditPrescription";
import ViewPrescription from "./components/ViewPrescription";
import Test from "./components/test";

function App() {
  return (
    //
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/Index" element={<Index />} />

        <Route exact path="/Doctor/DoctorForm" element={<DoctorForm />} />
        <Route exact path="/ViewDoctor/:id" element={<ViewDoctor />} />
        <Route exact path="/EditDoctor/:id" element={<EditDoctor />} />

        <Route exact path="/PatientForm" element={<PatientForm />} />
        <Route exact path="/ViewPatient/:id" element={<ViewPatient />} />
        <Route exact path="/EditPatient/:id" element={<EditPatient />} />

        <Route exact path="/AppointmentForm" element={<AppointmentForm />} />
        <Route
          exact
          path="/ViewAppointment/:id"
          element={<ViewAppointment />}
        />
        <Route
          exact
          path="/EditAppointment/:id"
          element={<EditAppointment />}
        />

        <Route exact path="/MRIForm" element={<MRIForm />} />
        <Route exact path="/ViewReport/:id" element={<ViewReport />} />

        <Route exact path="/PrescriptionForm" element={<PrescriptionForm />} />
        <Route
          exact
          path="/ViewPrescription/:id"
          element={<ViewPrescription />}
        />
        <Route
          exact
          path="/EditPrescription/:id"
          element={<EditPrescription />}
        />

<Route
          exact
          path="/test"
          element={<Test />}
        />
      </Routes>
    </Router>
  );
}

export default App;
