import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./styles.css";

export default function AppointmentForm() {
  const [category, setCategory] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [patientId, setPatientId] = useState("");

  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");

  const [doctorId, setDoctorId] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://lumbarfy-server.herokuapp.com/appointment/${params.id}`)
      .then((response) => {
        const temp = response.data;
        setCategory(temp.appointment.category);
        setDateTime(temp.appointment.dateTime);
        setPatientId(temp.appointment.patientId);
        setDoctorId(temp.appointment.doctorId);
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
      });
  }, []);
  // useEffect(() => {
  //   axios.get(`http://lumbarfy-server.herokuapp.com/doctor/${doctorId}`).then((response) => {
  //     console.log(response);
  //   });
  // });

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
            <span>appointment</span>
          </h1>
        </div>
        <div className="view">
          <h3>
            <span>Title: </span>
            {category}
          </h3>
          <h3>
            <span>Date: </span>
            {formatDate(dateTime)}
          </h3>
          <h3>
            <span>Time: </span>
            {formatTime(dateTime)}
          </h3>
          <h3>
            <span>patient: </span>
            {patient}
          </h3>
          <h3>
            <span>doctor: </span>
            {doctor}
          </h3>
        </div>
      </section>
    </div>
  );
  function formatTime(val) {
    var date = new Date(val);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  function formatDate(val) {
    var date = new Date(val);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return (
      date.getMonth() +
      1 +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      "  "
    );
  }
}
