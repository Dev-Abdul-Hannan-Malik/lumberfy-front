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
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/patient").then((response) => {
      const temp = response.data.patients;
      setPatients(temp);
      setTimeout(() => {
        console.log(patients);
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
        <Link to="/LoginForm" className="btn">
          contact us! <FontAwesomeIcon icon={faChevronRight} />
        </Link>
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
          <input type="text" placeholder="Search.." />
        </div>

        <div className="box-container">
          <div className="box">
            <img src="images/doc-1.jpg" alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </span>
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </span>
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </span>
            </div>
          </div>
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
          <input type="text" placeholder="Search.." />
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
          <Link
            to="/AppointmentForm"
            state={{ category: "" }}
            className="fa fa-eye"
          >
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link>
          <h1 className="heading">
            our <span>appointments</span>
          </h1>
          <input type="text" placeholder="Search.." />
        </div>

        <div className="box-container">
          <div className="box text-block">
            <h3>APPOINTMENT 1</h3>
            <p>
              <Link to="/doctor/:id" className="link">
                doctor
              </Link>
              <Link to="/patient/:id" className="link">
                Patient
              </Link>
            </p>
            <div className="share">
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </span>
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </span>
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- appointment section ends -->

      <!-- report section starts --> */}

      <section className="records" id="reports">
        <div className="section-head">
          <Link to="/ReportForm" className="fa fa-eye">
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link>
          <h1 className="heading">
            some patient <span>reports</span>
          </h1>
          <input type="text" placeholder="Search.." />
        </div>

        <div className="box-container">
          <div className="box text-block">
            <h3>REPORT</h3>
            <p>
              <Link to="/patient/:id" className="link">
                patient
              </Link>
              <Link to="/mri/:id" className="link">
                MRI
              </Link>
            </p>
            <div className="share">
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </span>
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </span>
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </span>
            </div>
          </div>
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
          <input type="text" placeholder="Search.." />
        </div>
        <div className="box-container">
          <div className="box text-block">
            <p>
              <h3>PRESCRIPTION</h3>
              <Link to="#" className="link">
                patient
              </Link>
              <Link to="#" className="link">
                Doctor
              </Link>
            </p>
            <div className="share">
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </span>
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </span>
              <span>
                <Link to="#" className="fa-link">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </span>
            </div>
          </div>
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
  async function deletePatient(id) {
    const response = await axios.delete(
      "http://localhost:9000/patient/delete",
      {
        patientId: id,
      }
    );
    console.log(response);
  }
}
