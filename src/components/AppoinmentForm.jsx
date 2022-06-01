import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function AppointmentForm() {
  const location = useLocation();
  const [category, setCategory] = useState(location.state.category);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://lumbarfy-server.herokuapp.com/doctor").then((response) => {
      const temp = response.data.doctors;
      setDoctors(temp);
      setTimeout(() => {}, 100);
    });
    axios.get("http://lumbarfy-server.herokuapp.com/patient").then((response) => {
      const temp = response.data.patients;
      setPatients(temp);
      setTimeout(() => {}, 100);
    });
  }, []);

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const categories = [
    "Free Checkup",
    "Medication",
    "Physio Therapy",
    "Total Care",
  ];

  const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

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
            <span>add</span> appointment
          </h1>
        </div>
        <div
          className="section-head"
          style={{ justifyContent: "center" }}
        ></div>
        <div className="row">
          <div className="image">
            <img src="images/book-img.svg" alt="" />
          </div>
          <label for=""></label>
          <form action="" onSubmit={handleSubmit}>
            <div className="field">
              <label for="category">Category</label>
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <div className="field">
                <label for="date">Date</label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="box"
                  min={disablePastDate()}
                />
              </div>
              <div className="field">
                <label for="time">Time</label>
                <select
                  name="time"
                  id="time"
                  value={time}
                  onChange={(p) => setTime(p.target.value)}
                >
                  {times.map((item, i) => {
                    return (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
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
            <button type="submit" value="submit" className="btn">
              submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
  function handleSubmit(event) {
    setDateTime(new Date(date + " " + time));
    event.preventDefault();
    axios
      .post("http://lumbarfy-server.herokuapp.com/appointment/add", {
        category,
        dateTime,
        patientId,
        doctorId,
      })
      .then((response) => {
        alert(response.data.message);
        console.log(response);
        window.location.replace("/Index");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
