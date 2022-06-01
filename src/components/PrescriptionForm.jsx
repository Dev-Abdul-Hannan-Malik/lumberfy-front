import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

export default function PatientForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("http://lumbarfy-server.herokuapp.com/doctor")
      .then((response) => {
        const temp = response.data.doctors;
        setDoctors(temp);
        setTimeout(() => {
          console.log(doctors);
        }, 100);
      });
    axios
      .get("http://lumbarfy-server.herokuapp.com/patient")
      .then((response) => {
        const temp = response.data.patients;
        setPatients(temp);
        setTimeout(() => {
          console.log(patients);
        }, 100);
      });
  }, []);

  return (
    <div className="body">
      <section className="book" id="book">
        <div className="section-head" style={{ justifyContent: "center" }}>
          <Link
            to="/Index"
            className="fa fa-arrow-left"
            style={{ marginRight: "10rem" }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            back
          </Link>
          <h1 className="heading">
            <span>add</span> prescription
          </h1>
        </div>
        <div className="row">
          <div className="image">
            <img src="images/book-img.svg" alt="" />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <input
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              type="text"
              placeholder="TITLE"
              className="box"
              required
            />
            <div className="field">
              <label for="patient">patient</label>
              <select
                onChange={(event) => {
                  setPatientId(event.target.value);
                }}
              >
                {doctors.map((value, index) => {
                  return <option>{value.name}</option>;
                })}
              </select>
            </div>
            <div className="field">
              <label for="doctor">Doctor</label>
              <select
                onChange={(event) => {
                  setDoctorId(event.target.value);
                }}
              >
                {patients.map((value, index) => {
                  return <option>{value.name}</option>;
                })}
              </select>
            </div>
            <textarea
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              placeholder="DESCRIPTION"
              className="box"
            />
            <button type="submit" value="submit" className="btn">
              submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://lumbarfy-server.herokuapp.com/prescription/add", {
        title,
        description,
        doctorId,
        patientId,
      })
      .then((response) => {
        alert(response.data.message);
        window.location.replace("/Index");
        console.log(response);
      });
  }
}
