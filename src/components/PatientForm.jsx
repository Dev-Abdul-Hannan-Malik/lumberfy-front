import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

export default function PatientForm() {
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="body">
      <section className="book" id="book">
        <div className="section-head" style={{ justifyContent: "center" }}>
          <Link
            to="/"
            className="fa fa-arrow-left"
            style={{ marginRight: "10rem" }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            back
          </Link>
          <h1 className="heading">
            <span>add</span> patient
          </h1>
        </div>
        <div className="row">
          <div className="image">
            <img src="images/book-img.svg" alt="" />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="file"
              value={selectedFile}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              type="text"
              placeholder="name"
              className="box"
              required
            />
            <input
              onChange={(event) => {
                setNic(event.target.value);
              }}
              type="text"
              placeholder="NIC (11111-1111111-1)"
              className="box"
              required
              minLength={15}
            />
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              placeholder="email"
              className="box"
              required
              pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            />
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              placeholder="password"
              className="box"
              required
              minLength="6"
            />
            <input
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              type="password"
              placeholder="repeat password"
              className="box"
            />
            <button
              disabled={passwordsMatched}
              type="submit"
              value="submit"
              className="btn"
            >
              submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
  function passwordsMatched() {
    return password === confirmPassword;
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:9000/patient/add", {
        name,
        email,
        nic,
        password,
        confirmPassword,
      })
      .then((response) => {
        alert(response.data.message);
        console.log(response);
      });
  }
}
