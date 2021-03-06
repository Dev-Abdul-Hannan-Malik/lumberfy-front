import { faArrowLeft, faArrowUpZA } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

export default function PatientForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var auth_email = "admin";
  var auth_password = "123";

  return (
    <div className="body">
      <section className="book" id="book">
        <div className="section-head" style={{ justifyContent: "center" }}>
          <h1 className="heading">
            <span>admin</span> login
          </h1>
        </div>
        <div className="row">
          <div className="image">
            <img src="images/book-img.svg" alt="" />
          </div>
          <form action="" onSubmit={handleSubmit}>
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
            <Link to={`/Index`}>
              <button
                type="submit"
                value="submit"
                className="btn"
                onClick={() => {}}
              >
                submit
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
  function handleSubmit(event) {
    event.preventDefault();
    axios.post();
  }
}
