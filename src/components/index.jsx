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
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [mris, setMris] = useState([]);
  const [searchParam] = useState("name");

  const [reports, setReports] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://lumbarfy-server.herokuapp.com/doctor")
      .then((response) => {
        const temp = response.data.doctors;
        setDoctors(temp);
        setTimeout(() => {
          // console.log(doctors);
        }, 100);
      });
    axios
      .get("http://lumbarfy-server.herokuapp.com/patient")
      .then((response) => {
        const temp = response.data.patients;
        setPatients(temp);
        setTimeout(() => {
          // console.log(patients);
        }, 100);
      });
    axios
      .get("http://lumbarfy-server.herokuapp.com/appointment")
      .then((response) => {
        const temp = response.data.appointments;
        setAppointments(temp);
        setTimeout(() => {
          // console.log(appointments);
        }, 100);
      });
    axios.get("http://lumbarfy-server.herokuapp.com/mri").then((response) => {
      const temp = response.data.mris;
      setMris(temp);
      setTimeout(() => {
        // console.log(mris);
      }, 100);
    });

    axios
      .get("http://lumbarfy-server.herokuapp.com/report")
      .then((response) => {
        const temp = response.data.Reports;
        setReports(temp);
        setTimeout(() => {
          // console.log(reports);
        }, 100);
      });
    axios
      .get("http://lumbarfy-server.herokuapp.com/prescription")
      .then((response) => {
        const temp = response.data.prescriptions;
        setPrescriptions(temp);
        setTimeout(() => {
          // console.log(prescriptions);
        }, 100);
      });
  }, []);

  return (
    <div className="body">
      <header className="header">
        <Link to="/Index#home" className="logo">
          <i className="fas fa-heartbeat">
            <FontAwesomeIcon icon={faHeartbeat}></FontAwesomeIcon> LumbarFY
          </i>
        </Link>

        <nav className="navbar">
          <button onClick={() => window.location.replace("/Index#home")}>
            home
          </button>
          {/* <button onClick={() => window.location.replace("/Index#services")}>
            services
          </button> */}
          <button onClick={() => window.location.replace("/Index#about")}>
            about
          </button>
          <button onClick={() => window.location.replace("/Index#doctors")}>
            doctors
          </button>
          <button onClick={() => window.location.replace("/Index#patients")}>
            patients
          </button>
          <button
            onClick={() => window.location.replace("/Index#appointments")}
          >
            appointments
          </button>
          <button onClick={() => window.location.replace("/Index#reports")}>
            reports
          </button>
          <button
            onClick={() => window.location.replace("/Index#prescriptions")}
          >
            prescriptions
          </button>
          {/* <input
            type="text"
            className="form-control"
            // value={filter}
            // onChange={searchtext.bind(this)}
            placeholder="Search Here"
          ></input> */}
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
            LumbarFY is an automated diagnosis application, designed to help in
            analyzing problems that occur in the Lumbar Spine.
          </p>
        </div>
      </section>
      {/* <!-- home section ends -->

<!-- services section start --> */}
      {/*
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
      </section> */}

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
            <h3>Our Application is composed of:</h3>
            <p>
              1. An AI Model that is hosted via a Flask Web Server and uses
              TensorFlow and Keras for detection and extraction of information
              from LumbarSpine
            </p>
            <p>
              2. A MERN based back-end that is composed of an Express Server, a
              MongoDB Database and a NODEJS framework, the logic building and
              data handling of our application resides in this architecture
            </p>
            <p>
              3. A ReactJS based front-end that allows interaction by User for
              the application. The Application is completely built on CSS and
              HTML for complete Developer Control.
            </p>
            <p>
              4. A Flutter based Mobile Application for allowing portable access
              to the application, this is more catered toward the common user
              over an Administrator.
            </p>
          </div>
        </div>
      </section>
      {/*
<!-- about section end -->

<!-- doctor section starts --> */}
      <section className="records" id="doctors">
        <div className="section-head">
          <h1 className="heading">
            our <span>doctors</span>
          </h1>
          <Link to="/Doctor/DoctorForm">
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link>
        </div>

        <div className="box-container">
          {doctors.map((value, index) => {
            return (
              <div className="box" key={index}>
                <img src={value.image} alt="" />
                <h3>
                  NAME:
                  <span>{value.name}</span>
                </h3>
                <h3>
                  NIC: <span>{value.nic}</span>
                </h3>
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
          <h1 className="heading">
            our <span>patients</span>
          </h1>
          <Link to="/PatientForm" className="fa fa-eye">
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link>
        </div>

        <div className="box-container">
          {patients.map((value, index) => {
            return (
              <div className="box" key={index}>
                <img src={value.image} alt="" />
                <h3>
                  NAME:
                  <span>{value.name}</span>
                </h3>
                <h3>
                  NIC: <span>{value.nic}</span>
                </h3>
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
                <h3>
                  CATEGORY:
                  <span> {value.category}</span>
                </h3>
                <h3>
                  PATIENT:
                  <span>
                    {patients.map((data) => {
                      if (data._id === value.patientId) {
                        return data.name;
                      }
                    })}
                  </span>
                </h3>
                <h3>
                  DOCTOR:
                  <span>
                    {doctors.map((data) => {
                      if (data._id === value.doctorId) {
                        return data.name;
                      }
                    })}
                  </span>
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
          <h1 className="heading">
            some patient <span>reports</span>
          </h1>
          <Link to="/MRIForm" className="fa fa-eye">
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link>
        </div>

        <div className="box-container">
          {reports.map((value, index) => {
            return (
              <div className="box" key={index}>
                <h3>Report {index + 1}</h3>
                {mris.map((data) => {
                  if (data._id === value.mriId) {
                    return <img src={data.image} alt="" />;
                  }
                })}
                <h3>
                  PATIENT:
                  <span>
                    {patients.map((data) => {
                      if (data._id === value.patientId) {
                        return data.name;
                      }
                    })}
                  </span>
                </h3>
                <div className="share">
                  <span>
                    <Link to={`/ViewReport/${value._id}`} className="fa-link">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </span>
                  {/* <span>
                    <button
                      onClick={() => {
                        deleteReport(value._id, value.mriId);
                      }}
                      className="fa-link"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </span> */}
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
          <h1 className="heading">
            some <span>prescriptions</span>
          </h1>
          {/* <Link to="/PrescriptionForm" className="fa fa-eye">
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link> */}
        </div>
        <div className="box-container">
          {prescriptions.map((value, index) => {
            return (
              <div className="box" key={index}>
                <h3>prescription {index + 1}</h3>
                <h3>
                  TITLE: <span>{value.title}</span>
                </h3>
                <h3>
                  PATIENT:
                  <span>
                    {patients.map((data) => {
                      if (data._id === value.patientId) {
                        return data.name;
                      }
                    })}
                  </span>
                </h3>
                <h3>
                  DOCTOR:
                  <span>
                    {doctors.map((data) => {
                      if (data._id === value.doctorId) {
                        return data.name;
                      }
                    })}
                  </span>
                </h3>
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
                    <button
                      onClick={() => {
                        deletePrescription(value._id);
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

      {/* <!-- prescription section ends -->

<!-- footer sections starts --> */}

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <button onClick={() => window.location.replace("/Index#home")}>
              home
            </button>
            <button onClick={() => window.location.replace("/Index#about")}>
              about
            </button>
            <button onClick={() => window.location.replace("/Index#doctors")}>
              doctors
            </button>
            <button onClick={() => window.location.replace("/Index#patients")}>
              patients
            </button>
            <button
              onClick={() => window.location.replace("/Index#appointments")}
            >
              appointments
            </button>
            <button onClick={() => window.location.replace("/Index#reports")}>
              reports
            </button>
            <button
              onClick={() => window.location.replace("/Index#prescriptions")}
            >
              prescriptions
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
      .delete(`http://lumbarfy-server.herokuapp.com/patient/delete`, {
        data: { patientId: id },
      })
      .then(alert("Patient Successfully Deleted"))
      .catch()
      .finally(window.location.reload());
  }
  async function deleteDoctor(id) {
    const response = await axios
      .delete(`http://lumbarfy-server.herokuapp.com/doctor/delete`, {
        data: { doctorId: id },
      })
      .then(alert("Doctor Successfully Deleted"))
      .catch()
      .finally(window.location.reload());
  }
  async function deleteAppointment(id) {
    const response = await axios
      .delete(`http://lumbarfy-server.herokuapp.com/appointment/delete`, {
        data: { id: id },
      })
      .then(alert("Appointment Successfully Deleted"))
      .catch()
      .finally(window.location.reload());
  }
  async function deletePrescription(id) {
    const response = await axios
      .delete(`http://lumbarfy-server.herokuapp.com/prescription/delete`, {
        data: { prescriptionId: id },
      })
      .then(alert("Prescription Successfully Deleted"))
      .catch()
      .finally(window.location.reload());
  }
  async function deleteReport(id, mriId) {
    const response = await axios
      .delete(`http://lumbarfy-server.herokuapp.com/report/delete`, {
        data: { prescriptionId: id },
      })
      .then(
        axios
          .delete(`http://lumbarfy-server.herokuapp.com/mri/delete`, {
            data: { mId: mriId },
          })
          .then(alert("Report Successfully Deleted"))
      )
      .catch()
      .finally(window.location.reload());
  }
}
