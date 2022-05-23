import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

export default function DoctorForm() {
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageselected, setimageselected] = useState("");
  const [image, setimage] = useState("");

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
            <span>add</span> doctor
          </h1>
        </div>
        <div className="row">
          <div className="image">
            <img src="images/book-img.svg" alt="" />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="file"
              onChange={(event) => {
                setimageselected(event.target.files[0]);
              }}
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
            <button type="submit" value="submit" className="btn">
              submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
  function handleSubmit(event) {
    event.preventDefault();
    console.log(imageselected);
    const formData = new FormData();
    formData.append("file", imageselected);
    formData.append("upload_preset", "dd5ururm");
    axios
      .post("https://api.cloudinary.com/v1_1/drimnkool/upload", formData)
      .then((response) => {
        console.log(response.data.secure_url);
        setimage(response.data.secure_url);
        var testImage = response.data.secure_url;
        axios
          .post("http://localhost:9000/doctor/add", {
            image: testImage,
            name,
            email,
            nic,
            password,
          })
          .then((response) => {
            alert(response.data.message);
            console.log(response);
          });
      });
  }
}
