import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./styles.css";

export default function DoctorForm() {
  return (
    <div className="body">
      <section className="book" id="book">
        <div className="section-head" style={{ justifyContent: "center" }}>
          <Link
            to="/"
            className="fa fa-arrow-left"
            style={{ marginRight: "10rem" }}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> back
          </Link>
          <h1 className="heading">
            <span>add</span> doctor
          </h1>
        </div>
        <div className="row">
          <div className="image">
            <img src="../images/book-img.svg" alt="" />
          </div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="name" className="box" />
            <input type="number" placeholder="number" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="password" placeholder="password" className="box" />
            <input
              type="password"
              placeholder="repeat password"
              className="box"
            />
            <input type="submit" value="submit" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
}
