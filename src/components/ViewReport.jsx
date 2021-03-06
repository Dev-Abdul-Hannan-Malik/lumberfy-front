import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./styles.css";

export default function ReportForm() {
  const [description, setDescription] = useState("");
  const [mriId, setMriId] = useState("");
  const [patientId, setPatientId] = useState("");

  const [patient, setPatient] = useState("");
  const [mri, setMri] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://lumbarfy-server.herokuapp.com/report/${params.id}`)
      .then((response) => {
        const temp = response.data;
        setDescription(temp.report.description);
        setMriId(temp.report.mriId);
        setPatientId(temp.report.patientId);
        setTimeout(() => {
          // console.log(temp);
        }, 100);
      });
    axios
      .get(`http://lumbarfy-server.herokuapp.com/patient/${patientId}`)
      .then((response) => {
        setPatient(response["data"]["patients"][0]["name"]);
      });
    axios
      .get(`http://lumbarfy-server.herokuapp.com/mri/${mriId}`)
      .then((response) => {
        setMri(response["data"]["mris"][0]["image"]);
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
            <span>report</span>
          </h1>
        </div>
        <div className="view">
          <h3>
            <img src={mri} alt="" />
            <br />
            <h1>MRI</h1>
          </h3>
          <h3>
            <span>Patient: </span>
            {patient}
          </h3>
          <h3>
            <strong>Description</strong>
          </h3>
          <br />
          <p>
            {description.split("\n").map((value) => {
              return <p>{value}</p>;
            })}
          </p>
        </div>
      </section>
    </div>
  );
}
