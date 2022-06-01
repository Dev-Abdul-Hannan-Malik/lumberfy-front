import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./styles.css";

export default function PrescriptionForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");

  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://lumbarfy-server.herokuapp.com/prescription/${params.id}`)
      .then((response) => {
        const temp = response.data;
        setTitle(temp.prescription.title);
        setDescription(temp.prescription.description);
        setDoctorId(temp.prescription.doctorId);
        setPatientId(temp.prescription.patientId);
        setTimeout(() => {
          console.log(temp);
        }, 100);
      });
    axios
      .get(`http://lumbarfy-server.herokuapp.com/patient/${patientId}`)
      .then((response) => {
        setPatient(response["data"]["patients"][0]["name"]);
      });
    axios
      .get(`http://lumbarfy-server.herokuapp.com/doctor/${doctorId}`)
      .then((response) => {
        setDoctor(response["data"]["doctors"][0]["name"]);
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
            <span>prescription</span>
          </h1>
        </div>
        <div className="view">
          <h3>
            <span>Title: </span>
            {title}
          </h3>
          <h3>
            <span>Doctor: </span>
            {doctor}
          </h3>
          <h3>
            <span>Patient: </span>
            {patient}
          </h3>
          <h3>
            <strong>Description</strong>
          </h3>
          <br />
          <p>{description}</p>
        </div>
      </section>
    </div>
  );
}
