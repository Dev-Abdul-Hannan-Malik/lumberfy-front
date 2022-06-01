import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./styles.css";

export default function PatientForm() {
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://lumbarfy-server.herokuapp.com/patient/${params.id}`)
      .then((response) => {
        const temp = response.data;
        setName(temp.patient.name);
        setNic(temp.patient.nic);
        setEmail(temp.patient.email);
        setPassword(temp.patient.password);
        setTimeout(() => {
          console.log(temp);
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
            <span>patient</span>
          </h1>
        </div>
        <div className="view">
          <img src={selectedFile} alt="" />
          <h3>
            <span>name: </span>
            {name}
          </h3>
          <h3>
            <span>NIC: </span>
            {nic}
          </h3>
          <h3>
            <span>email: </span>
            {email}
          </h3>
          <h3>
            <span>password: </span>
            {password}
          </h3>
        </div>
      </section>
    </div>
  );
}
