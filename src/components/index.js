import { faHospital } from "@fortawesome/free-regular-svg-icons";
import {
  faAdd,
  faBars,
  faChevronRight,
  faEdit,
  faEnvelope,
  faEye,
  faHeartbeat,
  faHospitalWide,
  faMapMarkerAlt,
  faNotesMedical,
  faPhone,
  faPills,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Index() {
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
        <Link to="/AppointmentForm" className="btn">
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
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </i>
            </div>
          </div>

          <div className="box">
            <img src="images/doc-2.jpg" alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </i>
            </div>
          </div>

          <div className="box">
            <img src="images/doc-3.jpg" alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </i>
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
          <div className="box">
            <img src="images/doc-4.jpg" alt="" />
            <h3>john deo</h3>
            <span>patient</span>
            <div className="share">
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </i>
            </div>
          </div>

          <div className="box">
            <img src="images/doc-5.jpg" alt="" />
            <h3>john deo</h3>
            <span>patient</span>
            <div className="share">
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </i>
            </div>
          </div>

          <div className="box">
            <img src="images/doc-6.jpg" alt="" />
            <h3>john deo</h3>
            <span>patient</span>
            <div className="share">
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </i>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- patient section ends -->

<!-- appointment section starts --> */}
      <section className="records" id="patients">
        <div className="section-head">
          <Link to="/PatientForm" className="fa fa-eye">
            <FontAwesomeIcon icon={faEye} />
            add+
          </Link>
          <h1 className="heading">
            our <span>appointments</span>
          </h1>
          <input type="text" placeholder="Search.." />
        </div>

        <div className="box-container">
          <div className="box">
            <h3>john deo</h3>
            <span>patient</span>
            <div className="share">
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </i>
              <i>
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </i>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- patient section ends -->

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
}
