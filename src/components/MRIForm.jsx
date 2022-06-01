import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

export default function DoctorForm() {
  const options = ["Submit", "Next", "Finish"];
  const [patientId, setPatientId] = useState("");
  const [patients, setPatients] = useState([]);
  const [submitVal, setSubmitVal] = useState(options[0]);
  const [id, setId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  useEffect(() => {
    axios
      .get("http://lumbarfy-server.herokuapp.com/patient")
      .then((response) => {
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
              type={"file"}
              id="image"
              name="image"
              required
              accept="image/png, image/jpeg, image/jfif, image/JPG"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <div className="field">
              <label for="patient">patient</label>
              <select
                onChange={(event) => {
                  var temp = event.target.value.split(" ")[0].slice(1, -1);
                  setPatientId(temp);
                  var temp = event.target.value.split(" ")[1];
                  setPatientName(temp);
                  console.log(patientId);
                }}
              >
                {patients.map((value, index) => {
                  return (
                    <option>
                      <i>({value._id}) </i>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <input type="submit" value={submitVal} className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("upload_preset", "nmwq0jmk");
    data.append("cloud_name", "murakaze");
    console.log(data);
    fetch("https://api.cloudinary.com/v1_1/murakaze/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url);
        setSelectedFile(data.url.toString());
        console.log(selectedFile);
        console.log(patientId);
        axios
          .post("http://lumbarfy-server.herokuapp.com/mri/add", {
            image: selectedFile,
            patientId,
          })
          .then((response) => {
            setSubmitVal(options[1]);
            setId(response.data.result._id);
            console.log(id);
            axios
              .post("http://localhost:5000/predict", {
                name: patientName,
                imageURL: selectedFile,
              })
              .then((response) => {
                setSubmitVal(options[2]);
                var temp = response.data.description;
                setDescription(temp);
                axios
                  .post("http://lumbarfy-server.herokuapp.com/report/add", {
                    description,
                    patientId,
                    mriId: id,
                  })
                  .then((response) => {
                    alert("MRI has been Successfully Added");
                    window.location.replace("/Index");
                  });
              });
          })
          .catch((err) => {
            console.log("Error is: " + err);
          });
      })
      .catch((err) => {
        console.log("Error is: " + err);
      });
  }
}
