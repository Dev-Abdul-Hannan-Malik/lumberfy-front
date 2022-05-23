import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

export default function DoctorForm() {
  const [patientId, setPatientId] = useState("");
  const [patients, setPatients] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:9000/patient").then((response) => {
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
            <FontAwesomeIcon icon={faArrowLeft} /> back
          </Link>
          <h1 className="heading">
            <span>add</span> MRI
          </h1>
        </div>
        <div className="row">
          <div className="image">
            <img src="../images/book-img.svg" alt="" />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="file"
              value={selectedFile}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <div className="field">
              <label for="patient">patient</label>
              <select
                onChange={(event) => {
                  setPatientId(event.target.value);
                }}
              >
                {patients.map((value, index) => {
                  return <option>{value.name}</option>;
                })}
              </select>
            </div>
            <input type="submit" value="submit" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:9000/mri/add", {
        image: selectedFile,
        patientId: patientId,
      })
      .then((response) => {
        alert(response.data.message);
        console.log(response);
      });
  }
}
