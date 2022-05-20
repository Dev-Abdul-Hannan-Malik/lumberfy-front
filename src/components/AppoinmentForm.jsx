import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function AppointmentForm() {
  const location = useLocation();
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  console.log("location.state.category: ", location.state.category);
  const [category, setCategory] = useState(location.state.category);
  const [time, setTime] = useState("");
  console.log("cate: ", category);

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
          <form action="" onSubmit={handleSubmit}>
            <div className="field">
              <label for="patient">patient</label>
              <select name="patient" id="patient">
                <option>Ahmar</option>
                <option>Akbar</option>
                <option>Anthony</option>
              </select>
              <label for="doctor">doctor</label>
              <select name="doctor" id="doctor">
                <option>Ember</option>
                <option>Earth</option>
                <option>Storm</option>
                <option>Void</option>
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
            <div className="field">
              <input type="date" className="box" min={disablePastDate()} />
            </div>
            <div className="field">
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
            <button type="submit" value="submit" className="btn">submit</button>
          </form>
        </div>
      </section>
    </div>
  );
  function handleSubmit(event) {
    event.preventDefault();
    console.log("MUFFIN BEST UwU");
  }
}
