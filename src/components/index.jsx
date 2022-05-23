import { faHospital } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faChevronRight,
  faEdit,
  faEnvelope,
  faEye,
  faHeartbeat,
  faMapMarkerAlt,
  faNotesMedical,
  faPhone,
  faPills,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Index() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [mris, setMris] = useState([]);
  const [patient, setPatient] = useState();

  const [q, setQ] = useState("");
  const [searchParam] = useState("name");

  const [reports, setReports] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/doctor").then((response) => {
      const temp = response.data.doctors;
      setDoctors(temp);
      setTimeout(() => {
        console.log(doctors);
      }, 100);
    });
    axios.get("http://localhost:9000/patient").then((response) => {
      const temp = response.data.patients;
      setPatients(temp);
      setTimeout(() => {
        console.log(patients);
      }, 100);
    });
    axios.get("http://localhost:9000/appointment").then((response) => {
      const temp = response.data.appointments;
      setAppointments(temp);
      setTimeout(() => {
        console.log(appointments);
      }, 100);
    });
    axios.get("http://localhost:9000/mri").then((response) => {
      const temp = response.data.mris;
      setMris(temp);
      setTimeout(() => {
        console.log(mris);
      }, 100);
    });

    axios.get("http://localhost:9000/report").then((response) => {
      const temp = response.data.Reports;
      setReports(temp);
      setTimeout(() => {
        console.log(reports);
      }, 100);
    });
    axios.get("http://localhost:9000/prescription").then((response) => {
      const temp = response.data.prescriptions;
      setPrescriptions(temp);
      setTimeout(() => {
        console.log(prescriptions);
      }, 100);
    });
  }, []);

  return (
    <div className="body">
      <header className="header">
        <Link to="#" className="logo">
          <i className="fas fa-heartbeat">
            <FontAwesomeIcon icon={faHeartbeat}></FontAwesomeIcon> LumbarFY
          </i>
        </Link>

        <nav className="navbar">
          <button onClick={() => window.location.replace("/#home")}>
            home
          </button>
          <button onClick={() => window.location.replace("/#services")}>
            services
          </button>
          <button onClick={() => window.location.replace("/#about")}>
            about
          </button>
          <button onClick={() => window.location.replace("/#doctors")}>
            doctors
          </button>
          <button onClick={() => window.location.replace("/#patients")}>
            patients
          </button>
          <button onClick={() => window.location.replace("/#appointments")}>
            appointments
          </button>
          <button onClick={() => window.location.replace("/#reports")}>
            reports
          </button>
          <button onClick={() => window.location.replace("/#prescriptions")}>
            prescriptions
          </button>
        </nav>

        <div id="menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
      {/* header end */}

      {/* <!-- home section starts --> */}
      <section className="home" id="home">
        <div className="image">
          <img src="images/home-img.svg" alt="" />
        </div>
        <div className="content">
          <h3>Stay safe! Stay healthy!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nostrum ut aperiam cumque. Officia, inventore, facere deserunt
            tempora, earum accusantium optio pariatur laborum assumenda
            perferendis sit quis. Nisi, quos fugiat.
          </p>
        </div>
      </section>
      {/* <!-- home section ends -->

<!-- services section start --> */}

      <section className="services" id="services">
        <h1 className="heading">
          our <span>services</span>
        </h1>
        <div className="box-container">
          <div className="box" id="checkup">
            <i>
              <FontAwesomeIcon icon={faNotesMedical} />
            </i>
            <h3>free checkup</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              tenetur!
            </p>
            <Link
              to="/AppointmentForm"
              state={{ category: "Free Checkup" }}
              className="btn"
            >
              learn more <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>

          <div className="box" id="medicine">
            <i>
              <FontAwesomeIcon icon={faPills} />
            </i>
            <h3>medicines</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              tenetur!
            </p>
            <Link
              to="/AppointmentForm"
              state={{ category: "Medication" }}
              className="btn"
            >
              learn more <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>

          <div className="box" id="therapy">
            <i>
              <FontAwesomeIcon icon={faHeartbeat} />
            </i>
            <h3>physio therapy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              tenetur!
            </p>
            <Link
              to="/AppointmentForm"
              state={{ category: "Physio Therapy" }}
              className="btn"
            >
              learn more <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>

          <div className="box" id="care">
            <i>
              <FontAwesomeIcon icon={faHospital} />
            </i>
            <h3>total care</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              tenetur!
            </p>
            <Link
              to="/AppointmentForm"
              state={{ category: "Total Care" }}
              className="btn"
            >
              learn more <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- services section end -->

<!-- about section start --> */}

      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span>us
        </h1>
        <div className="row">
          <div className="image">
            <img src="images/about-img.svg" alt="" />
          </div>
          <div className="content">
            <h3>we take care of your healthy life</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              perferendis!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </section>
      {/*
<!-- about section end -->

<!-- doctor section starts --> */}
      <section className="records" id="doctors">
        <div className="section-head">
          <Link to="/DoctorForm">
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link>

          <h1 className="heading">
            our <span>doctors</span>
          </h1>
        </div>

        <div className="box-container">
          {doctors.map((value, index) => {
            return (
              <div className="box" key={index}>
                <img src={value.img} alt="" />
                <h3>{value.name}</h3>
                <span>{value.nic}</span>
                <div className="share">
                  <span>
                    <Link to={`/ViewDoctor/${value._id}`} className="fa-link">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </span>
                  <span>
                    <Link to={`/EditDoctor/${value._id}`} className="fa-link">
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                  </span>
                  <span>
                    <button
                      onClick={() => {
                        deleteDoctor(value._id);
                      }}
                      className="fa-link"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <!-- doctor section ends -->

<!-- patient section starts --> */}
      <section className="records" id="patients">
        <div className="section-head">
          <Link to="/PatientForm" className="fa fa-eye">
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link>
          <h1 className="heading">
            our <span>patients</span>
          </h1>
        </div>

        <div className="box-container">
          {patients.map((value, index) => {
            return (
              <div className="box" key={index}>
                <img src={value.img} alt="" />
                <h3>{value.name}</h3>
                <span>{value.nic}</span>
                <div className="share">
                  <span>
                    <Link to={`/ViewPatient/${value._id}`} className="fa-link">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </span>
                  <span>
                    <Link to={`/EditPatient/${value._id}`} className="fa-link">
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                  </span>
                  <span>
                    <button
                      onClick={() => {
                        deletePatient(value._id);
                      }}
                      className="fa-link"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <!-- patient section ends -->

      <!-- appointment section starts --> */}

      <section className="records" id="appointments">
        <div className="section-head">
          <h1 className="heading">
            our <span>appointments</span>
          </h1>
        </div>

        <div className="box-container">
          {appointments.map((value, index) => {
            return (
              <div className="box text-block" key={index}>
                <h3>APPOINTMENT {index + 1}</h3>
                <h3>
                  <span>{value.category}</span>
                </h3>
                <p>{formatDate(value.dateTime)}</p>
                <div className="share">
                  <span>
                    <Link
                      to={`/ViewAppointment/${value._id}`}
                      className="fa-link"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </span>
                  <span>
                    <button
                      onClick={() => {
                        deleteAppointment(value._id);
                      }}
                      className="fa-link"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <!-- appointment section ends -->

      <!-- report section starts --> */}

      <section className="records" id="reports">
        <div className="section-head">
          <Link to="/MRIForm" className="fa fa-eye">
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link>
          <h1 className="heading">
            some patient <span>reports</span>
          </h1>
        </div>

        <div className="box-container">
          {reports.map((value, index) => {
            return (
              <div className="box" key={index}>
                <h3>Report {index + 1}</h3>
                <div className="share">
                  <span>
                    <Link to={`/ViewReport/${value._id}`} className="fa-link">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <!-- report section ends -->

      <!-- prescription section starts --> */}

      <section className="records" id="prescriptions">
        <div className="section-head">
          <Link to="/PrescriptionForm" className="fa fa-eye">
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link>
          <h1 className="heading">
            some <span>prescriptions</span>
          </h1>
        </div>
        <div className="box-container">
          {prescriptions.map((value, index) => {
            return (
              <div className="box" key={index}>
                <h3>prescription {index + 1}</h3>
                <p>{value.title}</p>
                <div className="share">
                  <span>
                    <Link
                      to={`/ViewPrescription/${value._id}`}
                      className="fa-link"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </span>
                  <span>
                    <Link
                      to={`/EditPrescription/${value._id}`}
                      className="fa-link"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                  </span>
                  <button
                    onClick={() => {
                      deletePrescription(value._id);
                    }}
                    className="fa-link"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <!-- prescription section ends -->

<!-- footer sections starts --> */}

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <button onClick={() => window.location.replace("/#home")}>
              home
            </button>
            <button onClick={() => window.location.replace("/#services")}>
              services
            </button>
            <button onClick={() => window.location.replace("/#about")}>
              about
            </button>
            <button onClick={() => window.location.replace("/#doctors")}>
              doctors
            </button>
            <button onClick={() => window.location.replace("/#patients")}>
              patients
            </button>
          </div>

          <div className="box">
            <h3>services</h3>
            <button onClick={() => window.location.replace("/#checkup")}>
              <i className="fas fa-chevron-right"></i> checkup
            </button>
            <button onClick={() => window.location.replace("/#medicine")}>
              <i className="fas fa-chevron-right"></i> medicine
            </button>
            <button onClick={() => window.location.replace("/#therapy")}>
              <i className="fas fa-chevron-right"></i> diagnosis
            </button>
            <button onClick={() => window.location.replace("/#care")}>
              <i className="fas fa-chevron-right"></i> physician course
            </button>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <Link to="#">
              <FontAwesomeIcon icon={faPhone} /> +123-456-7890{" "}
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faPhone} /> +111-222-3333{" "}
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faEnvelope} /> example@work.com{" "}
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> CUI, Islamabad{" "}
            </Link>
          </div>
        </div>

        <div className="credit">
          created by <span>lumbarfy.dev</span> | all rights reserved
        </div>
      </section>
    </div>
  );

  function formatDate(val) {
    var date = new Date(val);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return (
      date.getMonth() +
      1 +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      "  " +
      strTime
    );
  }

  async function deletePatient(id) {
    const response = await axios
      .delete(`http://localhost:9000/patient/delete`, {
        data: { patientId: id },
      })
      .then(alert("Patient Successfully Deleted"))
      .catch()
      .finally(window.location.reload());
  }
  async function deleteDoctor(id) {
    const response = await axios
      .delete(`http://localhost:9000/doctor/delete`, {
        data: { doctorId: id },
      })
      .then(alert("Doctor Successfully Deleted"))
      .catch()
      .finally(window.location.reload());
  }
  async function deleteAppointment(id) {
    const response = await axios
      .delete(`http://localhost:9000/appointment/delete`, {
        data: { id: id },
      })
      .then(alert("Appointment Successfully Deleted"))
      .catch()
      .finally(window.location.reload());
  }
  async function deletePrescription(id) {
    const response = await axios
      .delete(`http://localhost:9000/prescription/delete`, {
        data: { prescriptionId: id },
      })
      .then(alert("Prescription Successfully Deleted"))
      .catch()
      .finally(window.location.reload());
  }
}
