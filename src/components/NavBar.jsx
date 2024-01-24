import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import MainLogo from '../assets/MainLogo.png';
import MainLogo from "../assets/logo/main_logo.png";
import SecLogo from "../assets/logo/sec_logo.png";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import DownArrow from "../assets/down-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";

const NavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const [isNavbar, setIsNavbar] = useState(null);

  const [ANav, setANav] = useState(false);
  const [subNav, setSubNav] = useState(false);

  useEffect(() => {
    setIsNavbar(false);
  }, [location.pathname, t]);

  const toggleNavbar = () => {
    setIsNavbar(true);
  };

  // Load the offcanvas menu state from localStorage on component mount
  useEffect(() => {
    const storedState = localStorage.getItem("offcanvasOpen");
    if (storedState) {
      setIsOffcanvasOpen(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen((isOffcanvasOpen) => !isOffcanvasOpen);

    if (!isOffcanvasOpen) {
      const backdrops = document.querySelectorAll(".offcanvas-backdrop");
      backdrops.forEach((backdrop) => {
        backdrop.remove();
      });
    }
  };

  useEffect(() => {
    setIsOffcanvasOpen(false);
  }, [location.pathname]);

  const navbarClasses = `navbar navbar-expand-lg  tw-bg-primary ${
    isNavbarFixed ? " navbar-transition" : ""
  }`;

  const toggleA = () => {
    setANav((prevANav) => !prevANav);
  };

  const toggleA1 = () => {
    setSubNav((prevSubNav) => !prevSubNav);
  };

  return (
    <>
      <div className="tw-hidden lg:tw-block tw-booking tw-bg-bone">
        <div className="row phone">
          <div className="col-7 d-flex align-items-center">
            <div className="">
              <a href="tel: +66 63 193 3642" className="d-flex text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="me-2 mt-1 bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                +66 63 193 3642
              </a>
            </div>

            <span className="email">contact@soulsmith.empathysauce.com</span>
          </div>

          <div className="col d-flex justify-content-center align-items-center">
            <div className="d-flex ">
              <a
                href="https://www.facebook.com/Soulsmith.EmpathySauce"
                target="_blank"
                className="text-dark d-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#2D3738"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>

            <div className="mx-5 d-flex">
              <a
                href="https://www.instagram.com/soulsmith_empathysauce"
                target="_blank"
                className="text-dark d-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#2D3738"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            </div>

            <div className="d-flex ">
              <a
                href="https://www.tiktok.com/@soulsmithbyempathysauce?_t=8hasriBT6pE&_r=1&fbclid=IwAR3dyTBqRdkHgC-UenuWuCw24wVF8auGYwVElGCS_1_l87cutI_3vMt9i9A"
                target="_blank"
                className="text-dark d-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-tiktok"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                </svg>
              </a>
            </div>

            <a
              href="https://SOULSMITH.as.me/"
              target="_blank"
              className=" tw-text-sm tw-px-4 tw-bg-gold py-3 ms-5 tw-text-bone"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>

      <nav className={navbarClasses}>
        <div className="container-fluid ">
          <NavLink to={"/"} className="navbar-brand ms-4">
            <img src={MainLogo} className="tw-text-bone" alt="" />
          </NavLink>
          <button
            className="navbar-toggler border-0 outline-none"
            type="button"
            //
            onClick={toggleNavbar}
          >
            {/* <span className="navbar-toggler-icon" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#E8E5D7"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <div
            className={`offcanvas offcanvas-start ${
              isOffcanvasOpen ? "show" : ""
            }`}
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: "75%" }}
          >
            {/* <style>
              {`
                .offcanvas-backdrop.show {
                  background-color: transparent;
                  box-shadow: none;
                }
              `}
            </style> */}
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label={`Close`}
              />
            </div>
            <div className="">
              <ul className="nested-dropdowns navbar-nav justify-content-end flex-grow-1 pe-3 border-0">
                <li className="nav-item mx-2">
                  <NavLink to={"/"} className="nav-link tw-text-bone">
                    {t("Home")}
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <div className="nested-dropdowns__item">
                    <NavLink to={"/services"} className="nav-link tw-text-bone">
                      {t("Services")}
                    </NavLink>
                    {/* <div class="nested-dropdowns__arrow">...</div> */}
                  </div>
                  <ul>
                    <li>
                      <div className="nested-dropdowns__item">
                        <NavLink
                          to={
                            "/services/PsychologicalSupport-Psychotherapy-Counseling"
                          }
                          className="nav-link tw-text-bone"
                        >
                          {t("SectionA")}
                        </NavLink>
                        {/* <div class="nested-dropdowns__arrow">...</div> */}
                      </div>
                      <ul>
                        <li>
                          <NavLink
                            to={
                              "/services/PsychologicalSupport-Psychotherapy-Counseling/ListeningServiceandMindfulnessPractice"
                            }
                            className="nav-link tw-text-bone"
                          >
                            {t("SectionA1")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={
                              "/services/PsychologicalSupport-Psychotherapy-Counseling/Counseling"
                            }
                            className="nav-link tw-text-bone"
                          >
                            {t("SectionA2")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={
                              "/services/PsychologicalSupport-Psychotherapy-Counseling/Psychotherapy"
                            }
                            className="nav-link tw-text-bone"
                          >
                            {t("SectionA3")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={
                              "/services/PsychologicalSupport-Psychotherapy-Counseling/ArtsPsychotherapy"
                            }
                            className="nav-link tw-text-bone"
                          >
                            {t("SectionA4")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={
                              "/services/PsychologicalSupport-Psychotherapy-Counseling/TherapeuticWorkshop"
                            }
                            className="nav-link tw-text-bone"
                          >
                            {t("SectionA5")}
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to={"/services/Healing-Therapy"}
                        className="nav-link tw-text-bone"
                      >
                        {t("SectionB")}
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to={"/services/Body-Mind-SoulMixologyService"}
                        className="nav-link tw-text-bone"
                      >
                        {t("SectionC")}
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* product */}
                <li className="nav-item mx-2">
                  <div className="nested-dropdowns__item">
                    <NavLink to={"/products"} className="nav-link tw-text-bone">
                      {t("Products")}
                    </NavLink>
                    {/* <div class="nested-dropdowns__arrow">...</div> */}
                  </div>
                  <ul className="">
                    <li>
                      <div className="nested-dropdowns__item">
                        <NavLink
                          to={"/products/Mind-Magnifying"}
                          className="nav-link tw-text-bone"
                        >
                          {t("Mind Magnifying")}
                        </NavLink>
                        {/* <div class="nested-dropdowns__arrow">...</div> */}
                      </div>
                    </li>
                    <li>
                      <NavLink
                        to={"/products/Mind-Exercise-Vol1"}
                        className="nav-link tw-text-bone"
                      >
                        {t("Mind Exercise Vol.1")}
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item mx-2">
                  <NavLink to={"/team"} className="nav-link tw-text-bone">
                    {t("Team")}
                  </NavLink>
                </li>

                <li className="nav-item mx-2">
                  <NavLink to={"/contact-us"} className="nav-link tw-text-bone">
                    {t("Contact Us")}
                  </NavLink>
                </li>

                <li className="nav-item mx-2 mt-2 tw-text-gold">|</li>

                <li className="nav-item mx-2 p-1">
                  <LanguageToggle className="nav-link" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {isNavbar && (
        <div className="drawer">
          <div
            className="drawer__overlay"
            onClick={() => setIsNavbar(false)}
          ></div>

          <div className="drawer__sidebar">
            <div className="offcanvas-header p-3">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setIsNavbar(false)}

                // data-bs-dismiss="offcanvas"
                // aria-label={`Close`}
              />
            </div>

            <div>
              <img
                src={MainLogo}
                style={{ width: "50%", margin: "auto" }}
                alt=""
              />
            </div>

            <ul className="nested-dropdowns navbar-nav justify-content-end flex-grow-1 pe-3 border-0">
              <li className="nav-item mx-2">
                <NavLink to={"/"} className="nav-link tw-text-bone">
                  {t("Home")}
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <div className="nested-dropdowns__item d-flex justify-content-between">
                  <NavLink
                    to={"/services"}
                    className="nav-link tw-text-bone justify-content-between"
                  >
                    {t("Services")}
                  </NavLink>
                  <img src={DownArrow} alt="" onClick={toggleA} />
                </div>

                {ANav && (
                  <ul className="shadow-sm">
                    <li>
                      <div className="nested-dropdowns__item d-flex justify-content-between">
                        <NavLink
                          to={
                            "/services/PsychologicalSupport-Psychotherapy-Counseling"
                          }
                          className="nav-link d-flex tw-text-bone"
                        >
                          {t("SectionA")}
                        </NavLink>

                        <img src={RightArrow} alt="" onClick={toggleA1} />
                      </div>
                      {subNav && (
                        <ul className="A1-links shadow-sm">
                          <li>
                            <NavLink
                              to={
                                "/services/PsychologicalSupport-Psychotherapy-Counseling/ListeningServiceandMindfulnessPractice"
                              }
                              className="nav-link tw-text-bone"
                            >
                              {t("SectionA1")}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={
                                "/services/PsychologicalSupport-Psychotherapy-Counseling/Counseling"
                              }
                              className="nav-link tw-text-bone"
                            >
                              {t("SectionA2")}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={
                                "/services/PsychologicalSupport-Psychotherapy-Counseling/Psychotherapy"
                              }
                              className="nav-link tw-text-bone"
                            >
                              {t("SectionA3")}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={
                                "/services/PsychologicalSupport-Psychotherapy-Counseling/ArtsPsychotherapy"
                              }
                              className="nav-link tw-text-bone"
                            >
                              {t("SectionA4")}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={
                                "/services/PsychologicalSupport-Psychotherapy-Counseling/TherapeuticWorkshop"
                              }
                              className="nav-link tw-text-bone"
                            >
                              {t("SectionA5")}
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <NavLink
                        to={"/services/Healing-Therapy"}
                        className="nav-link tw-text-bone"
                      >
                        {t("SectionB")}
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to={"/services/Body-Mind-Soul-Mixology-Service"}
                        className="nav-link tw-text-bone"
                      >
                        {t("SectionC")}
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              {/* product */}

              <li className="nav-item mx-2">
                <div className="nested-dropdowns__item d-flex justify-content-between">
                  <NavLink
                    to={"/products"}
                    className="nav-link tw-text-bone justify-content-between"
                  >
                    {t("Products")}
                  </NavLink>
                  <img src={DownArrow} alt="" onClick={toggleA} />
                </div>

                {ANav && (
                  <ul className="shadow-sm">
                    <li>
                      <NavLink
                        to={"/products/Mind-Magnifying"}
                        className="nav-link tw-text-bone"
                      >
                        {t("Mind Magnifying")}
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to={"/products/Mind-Exercise-Vol1"}
                        className="nav-link tw-text-bone"
                      >
                        {t("Mind Exercise Vol.1")}
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              {/* <li className="nav-item mx-2">
    <NavLink to={'/products'} className="nav-link tw-text-bone" >
                    {t('Products')}
                  </NavLink>
    </li> */}

              <li className="nav-item mx-2">
                <NavLink to={"/team"} className="nav-link tw-text-bone">
                  {t("Team")}
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to={"/contact-us"} className="nav-link tw-text-bone">
                  {t("Contact Us")}
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <LanguageToggle className="nav-link" />
              </li>
            </ul>

            <div className="text-center" style={{ marginTop: "40px" }}>
              <a
                href="https://SOULSMITH.as.me/"
                className="tw-text-bone tw-bg-gold px-3 py-2 w-75"
              >
                BOOK NOW
              </a>
            </div>

            {/* links */}

            <div className="d-flex justify-content-center align-items-center mt-4">
              <a
                href="https://www.facebook.com/Soulsmith.EmpathySauce"
                className="tw-text-bone d-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>

                <span className="ms-2">SoulSmith</span>
              </a>
            </div>

            <div className="d-flex justify-content-center align-items-center my-3">
              <a
                href="https://www.instagram.com/soulsmith_empathysauce"
                className="tw-text-bone d-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>

                <span className="ms-2">SoulSmith</span>
              </a>
            </div>

            <div className="d-flex justify-content-center align-items-center my-3">
              <a
                href="https://www.tiktok.com/@soulsmithbyempathysauce?_t=8hasriBT6pE&_r=1&fbclid=IwAR3dyTBqRdkHgC-UenuWuCw24wVF8auGYwVElGCS_1_l87cutI_3vMt9i9A"
                target="_blank"
                className="tw-text-bone d-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-tiktok"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                </svg>

                <span className="ms-2">SoulSmith</span>
              </a>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <a href="tel: +66 63 193 3642" className="tw-text-bone d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className=" mt-1 bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>

                <span className="ms-2">+66 63 193 3642</span>
              </a>

              {/* <span style={{ marginLeft: 100 }}>contact@soulsmith.empathysauce.com</span> */}
            </div>

            {/* <p className=' bg-danger text-wrap' style={{ width: '10rem' }}>
    contact@soulsmith.empathysauce.com

     </p> */}

            {/* <div class="badge bg-primary text-wrap" style={{ width: '15rem' }}>
contact@soulsmith.empathysauce.com
</div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
