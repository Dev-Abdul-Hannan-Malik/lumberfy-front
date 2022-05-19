import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function AppointmentForm() {
  const location = useLocation();
  console.log("location.state.category: ", location.state.category);
  const [category, setCategory] = useState(location.state.category);
  console.log("cate: ", category);

  const categories = [
    "Free Checkup",
    "Medication",
    "Physio Therapy",
    "Total Care",
  ];

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
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label for="patient">patient</label>
              <select name="patient" id="patient">
                <option value="volvo">Ahmar</option>
                <option value="saab">Akbar</option>
                <option value="opel">Anthony</option>
              </select>
              <label for="doctor">doctor</label>
              <select name="doctor" id="doctor">
                <option value="volvo">Ember</option>
                <option value="saab">Earth</option>
                <option value="opel">Storm</option>
                <option value="audi">Void</option>
              </select>
            </div>
            <div className="field">
              <label for="category">category</label>
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
            </div>
            <input type="date" className="box" />
            <input type="submit" value="submit" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
}
