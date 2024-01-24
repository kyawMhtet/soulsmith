import React from "react";
import { useTranslation } from "react-i18next";
import "./css/section-a4.css";
// import "./css/section-a1.css";
import Footer from "../../components/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import A4a from "../../assets/services/A4/A4a.jpg";
import ten from "../../assets/services/A4/ten.jpg";
import A4b from "../../assets/services/A4/A4b.jpg";
import eleven from "../../assets/services/A4/11.jpg";
import A4c from "../../assets/services/A4/A4c.jpg";
import twelve from "../../assets/services/A4/12.jpg";
import A4d from "../../assets/services/A4/A4d.jpg";
import thirteen from "../../assets/services/A4/13.jpg";

const SectionA4 = () => {
  const { t, i18n } = useTranslation();
  const isThaiLanguage = i18n.language === "th";

  return (
    <>
      <h3 className="text-center mt-4 tw-text-bone">{t("SectionA4")}</h3>

      <div className="container my-4 main-desc">
        <p className="tw-text-bone">{t("A4Description_01")}</p>

        <p className="tw-text-bone A4D2">{t("A4Description_02")}</p>

        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={A4a} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A4a")}</h4>
              <ul className="mt-4 ms-lg-3">
                {/* <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-person-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>

                  <p className="">
                    <b className="">{t("descA3d1")}</b> {t("A3d1Value1")}
                  </p>
                </li> */}

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>

                  <p className="">
                    {" "}
                    <b>{t("A4aDuration")}</b> {t("A4aValue1")}
                  </p>
                </li>

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-terminal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                  </svg>

                  <p className="">
                    <b>{t("A4adesc1")} </b> {t("A4aValue2")}
                  </p>
                </li>
                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-translate"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.252 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                  </svg>

                  <p>
                    <b>{t("A4alanguage")}</b> {t("A4aValue3")}
                  </p>
                </li>

                <li className="tw-text-bone d-none d-md-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-cash-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                  </svg>
                  <p>
                    <b>{t("Price")}</b>
                  </p>
                </li>

                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <b>{t("A1aSession1")} </b>
                      <small className="tprice14">
                        <b> :</b>
                      </small>
                      <span className="" style={{ marginTop: "-1px" }}>
                        {t("A4aValue4")}
                      </span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b className="">{t("A2aSession1")} </b>
                      </span>
                      {/* <small className="me-5">
                        <b>:</b>
                      </small> */}
                      <span className="">{t("A4aValue4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A4a"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-1 tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li>

                <li className="price">
                  <p>
                    <span>
                      <b>
                        <b>{t("Package")} </b>
                      </b>
                    </span>
                  </p>

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&category=4.%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%9A%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%B0+-+Arts+Psychotherapy"
                      className="tw-text-bone tw-bg-gold button-1  tw-rounded-md"
                      target="_blank"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
                {/* <li className="price">
                  <p>
                    <b>{t("A3bSession3")} </b>
                    {t("A3bValue6")}
                  </p>

                  <span className="">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664809"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold px-2 py-1 tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* A4b */}

        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={ten} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A4a1")}</h4>
              <ul className="mt-4 ms-lg-3">
                {/* <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-person-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>

                  <p className="">
                    <b className="">{t("descA3d")}</b> {t("A3dValue1")}
                  </p>
                </li> */}

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>

                  <p className="">
                    {" "}
                    <b>{t("A4a1Duration")}</b> {t("A4a1Value1")}
                  </p>
                </li>

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-terminal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                  </svg>

                  <p className="">
                    <b>{t("A4a1desc1")} </b> {t("A4a1Value2")}
                  </p>
                </li>
                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-translate"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.252 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                  </svg>

                  <p>
                    <b>{t("A3b1language")}</b> {t("A3b1Value7")}
                  </p>
                </li>

                <li className="tw-text-bone d-none d-md-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-cash-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                  </svg>
                  <p>
                    <b>{t("Price")}</b>
                  </p>
                </li>

                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <b>{t("A2aSession1")} </b>
                      <small className="tprice14">
                        <b> :</b>
                      </small>
                      <span className="" style={{ marginTop: "-1px" }}>
                        {t("A4a1Value4")}
                      </span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A2aSession1")} </b>
                      </span>

                      <span>{t("A4a1Value4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A4a1"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-2  tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li>
                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <span>
                        <b>{t("A2aSession2")}</b>
                      </span>
                      <small className="tprice12">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4a1Value5")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A1aSession2")}</b>
                      </span>
                      <small className="price12">
                        <b> :</b>
                      </small>
                      <span className="">{t("A4a1Value5")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1628051"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-2 tw-rounded-md"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="tprice13">
                        <b>:</b>
                      </small>
                      <span className="">{t("A3aValue6")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="price13">
                        <b>:</b>
                      </small>
                      <span className="">{t("A3aValue6")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1628069"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-1 tw-rounded-md"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* A4c */}
        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={A4b} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A4b")}</h4>
              <ul className="mt-4 ms-lg-3">
                {/* <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-person-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>

                  <p className="">
                    <b className="">{t("descA3d1")}</b> {t("A3d1Value1")}
                  </p>
                </li> */}

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>

                  <p className="">
                    {" "}
                    <b>{t("A4aDuration")}</b> {t("A4aValue1")}
                  </p>
                </li>

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-terminal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                  </svg>

                  <p className="">
                    <b>{t("A4adesc1")} </b> {t("A4aValue2")}
                  </p>
                </li>
                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-translate"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.252 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                  </svg>

                  <p>
                    <b>{t("A4blanguage")}</b> {t("A4bValue3")}
                  </p>
                </li>

                <li className="tw-text-bone d-none d-md-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-cash-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                  </svg>
                  <p>
                    <b>{t("Price")}</b>
                  </p>
                </li>

                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <b>{t("A1aSession1")} </b>
                      <small className="tprice14">
                        <b> :</b>
                      </small>
                      <span className="" style={{ marginTop: "-1px" }}>
                        {t("A4aValue4")}
                      </span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b className="">{t("A2aSession1")} </b>
                      </span>
                      {/* <small className="me-5">
                        <b>:</b>
                      </small> */}
                      <span className="">{t("A4aValue4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A4b"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-1 tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li>

                <li className="price">
                  <p>
                    <span>
                      <b>
                        <b>{t("Package")} </b>
                      </b>
                    </span>
                  </p>

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&category=4.%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%9A%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%B0+-+Arts+Psychotherapy"
                      className="tw-text-bone tw-bg-gold button-1  tw-rounded-md"
                      target="_blank"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
                {/* <li className="price">
                  <p>
                    <b>{t("A3bSession3")} </b>
                    {t("A3bValue6")}
                  </p>

                  <span className="">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664809"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold px-2 py-1 tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* A4d */}

        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={eleven} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A4b1")}</h4>
              <ul className="mt-4 ms-lg-3">
                {/* <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-person-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>

                  <p className="">
                    <b className="">{t("descA3d")}</b> {t("A3dValue1")}
                  </p>
                </li> */}

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>

                  <p className="">
                    {" "}
                    <b>{t("A4a1Duration")}</b> {t("A4a1Value1")}
                  </p>
                </li>

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-terminal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                  </svg>

                  <p className="">
                    <b>{t("A4a1desc1")} </b> {t("A4a1Value2")}
                  </p>
                </li>
                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-translate"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.252 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                  </svg>

                  <p>
                    <b>{t("A3b1language")}</b> {t("A4b1Value3")}
                  </p>
                </li>

                <li className="tw-text-bone d-none d-md-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-cash-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                  </svg>
                  <p>
                    <b>{t("Price")}</b>
                  </p>
                </li>

                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <b>{t("A2aSession1")} </b>
                      <small className="tprice14">
                        <b> :</b>
                      </small>
                      <span className="" style={{ marginTop: "-1px" }}>
                        {t("A4a1Value4")}
                      </span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A2aSession1")} </b>
                      </span>

                      <span>{t("A4a1Value4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A4b1"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-2  tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li>
                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <span>
                        <b>{t("A2aSession2")}</b>
                      </span>
                      <small className="tprice12">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4a1Value5")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A1aSession2")}</b>
                      </span>
                      <small className="price12">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4a1Value5")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1628052"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-2 tw-rounded-md"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="tprice13">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4a1Value6")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="price13">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4a1Value6")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1628071"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-1 tw-rounded-md"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={A4c} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A4c")}</h4>
              <ul className="mt-4 ms-lg-3">
                {/* <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-person-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>

                  <p className="">
                    <b className="">{t("descA3d1")}</b> {t("A3d1Value1")}
                  </p>
                </li> */}

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>

                  <p className="">
                    {" "}
                    <b>{t("A4aDuration")}</b> {t("A4aValue1")}
                  </p>
                </li>

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-terminal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                  </svg>

                  <p className="">
                    <b>{t("A4adesc1")} </b> {t("A4aValue2")}
                  </p>
                </li>
                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-translate"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.252 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                  </svg>

                  <p>
                    <b>{t("A4blanguage")}</b> {t("A4bValue3")}
                  </p>
                </li>

                <li className="tw-text-bone d-none d-md-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-cash-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                  </svg>
                  <p>
                    <b>{t("Price")}</b>
                  </p>
                </li>

                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <b>{t("A1aSession1")} </b>
                      <small className="tprice14">
                        <b> :</b>
                      </small>
                      <span className="" style={{ marginTop: "-1px" }}>
                        {t("A4aValue4")}
                      </span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b className="">{t("A2aSession1")} </b>
                      </span>
                      {/* <small className="price13">
                        <b>:</b>
                      </small> */}
                      <span className="">{t("A4aValue4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A4c"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-1 tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li>

                <li className="price">
                  <p>
                    <span>
                      <b>
                        <b>{t("Package")} </b>
                      </b>
                    </span>
                  </p>

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&category=4.%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%9A%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%B0+-+Arts+Psychotherapy"
                      className="tw-text-bone tw-bg-gold button-1  tw-rounded-md"
                      target="_blank"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
                {/* <li className="price">
                  <p>
                    <b>{t("A3bSession3")} </b>
                    {t("A3bValue6")}
                  </p>

                  <span className="">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664809"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold px-2 py-1 tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* A4c1 */}

        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={twelve} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A4c1")}</h4>
              <ul className="mt-4 ms-lg-3">
                {/* <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-person-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>

                  <p className="">
                    <b className="">{t("descA3d")}</b> {t("A3dValue1")}
                  </p>
                </li> */}

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>

                  <p className="">
                    {" "}
                    <b>{t("A4a1Duration")}</b> {t("A4a1Value1")}
                  </p>
                </li>

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-terminal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                  </svg>

                  <p className="">
                    <b>{t("A4a1desc1")} </b> {t("A4a1Value2")}
                  </p>
                </li>
                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-translate"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.252 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                  </svg>

                  <p>
                    <b>{t("A3b1language")}</b> {t("A4b1Value3")}
                  </p>
                </li>

                <li className="tw-text-bone d-none d-md-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-cash-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                  </svg>
                  <p>
                    <b>{t("Price")}</b>
                  </p>
                </li>

                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <b>{t("A2aSession1")} </b>
                      <small className="tprice14">
                        <b> :</b>
                      </small>
                      <span className="" style={{ marginTop: "-1px" }}>
                        {t("A4a1Value4")}
                      </span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A2aSession1")} </b>
                      </span>

                      <span>{t("A4a1Value4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A4c1"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-2  tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li>
                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <span>
                        <b>{t("A2aSession2")}</b>
                      </span>
                      <small className="tprice12">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4a1Value5")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A1aSession2")}</b>
                      </span>
                      <small className="price12">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4a1Value5")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1628054"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-2 tw-rounded-md"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="tprice13">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4a1Value6")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="price13">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4a1Value6")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1628072"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-1 tw-rounded-md"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* A4d */}
        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={A4d} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A4d")}</h4>
              <ul className="mt-4 ms-lg-3">
                {/* <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-person-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>

                  <p className="">
                    <b className="">{t("descA3d1")}</b> {t("A3d1Value1")}
                  </p>
                </li> */}

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>

                  <p className="">
                    {" "}
                    <b>{t("A4dDuration")}</b> {t("A4dValue1")}
                  </p>
                </li>

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-terminal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                  </svg>

                  <p className="">
                    <b>{t("A4ddesc1")} </b> {t("A4dValue2")}
                  </p>
                </li>
                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-translate"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.252 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                  </svg>

                  <p>
                    <b>{t("A4blanguage")}</b> {t("A4dValue3")}
                  </p>
                </li>

                <li className="tw-text-bone d-none d-md-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-cash-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                  </svg>
                  <p>
                    <b>{t("Price")}</b>
                  </p>
                </li>

                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <b>{t("A1aSession1")} </b>
                      <small className="tprice14">
                        <b> :</b>
                      </small>
                      <span className="" style={{ marginTop: "-1px" }}>
                        {t("A4dValue4")}
                      </span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b className="">{t("A2aSession1")} </b>
                      </span>
                      {/* <small className="me-5">
                        <b>:</b>
                      </small> */}
                      <span className="">{t("A4dValue4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A4d"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-1 tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li>

                <li className="price">
                  <p>
                    <span>
                      <b>
                        <b>{t("Package")} </b>
                      </b>
                    </span>
                  </p>

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&category=4.%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%9A%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%B0+-+Arts+Psychotherapy"
                      className="tw-text-bone tw-bg-gold button-1  tw-rounded-md"
                      target="_blank"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
                {/* <li className="price">
                  <p>
                    <b>{t("A3bSession3")} </b>
                    {t("A3bValue6")}
                  </p>

                  <span className="">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664809"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold px-2 py-1 tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* A4d1 */}
        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={thirteen} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A4d1")}</h4>
              <ul className="mt-4 ms-lg-3">
                {/* <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-person-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>

                  <p className="">
                    <b className="">{t("descA3d")}</b> {t("A3dValue1")}
                  </p>
                </li> */}

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>

                  <p className="">
                    {" "}
                    <b>{t("A4d1Duration")}</b> {t("A4d1Value1")}
                  </p>
                </li>

                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-terminal"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                  </svg>

                  <p className="">
                    <b>{t("A4d1desc1")} </b> {t("A4d1Value2")}
                  </p>
                </li>
                <li className="tw-text-bone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="#E8E5D7"
                    className="bi bi-translate"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.252 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                  </svg>

                  <p>
                    <b>{t("A3b1language")}</b> {t("A4b1Value3")}
                  </p>
                </li>

                <li className="tw-text-bone d-none d-md-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-cash-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                  </svg>
                  <p>
                    <b>{t("Price")}</b>
                  </p>
                </li>

                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <b>{t("A2aSession1")} </b>
                      <small className="tprice14">
                        <b> :</b>
                      </small>
                      <span className="" style={{ marginTop: "-1px" }}>
                        {t("A4d1Value4")}
                      </span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A2aSession1")} </b>
                      </span>

                      <span>{t("A4d1Value4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A4d1"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-2  tw-rounded-md"
                    >
                      {t("Book Now")}
                    </a>
                  </span>
                </li>
                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <span>
                        <b>{t("A2aSession2")}</b>
                      </span>
                      <small className="tprice12">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4d1Value5")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A1aSession2")}</b>
                      </span>
                      <small className="price12">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4d1Value5")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1628055"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-2 tw-rounded-md"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
                <li className="price">
                  {isThaiLanguage ? (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="tprice13">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4d1Value6")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="price13">
                        <b>:</b>
                      </small>
                      <span className="">{t("A4d1Value6")}</span>
                    </p>
                  )}
                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1628073"
                      target="_blank"
                      className="tw-text-bone tw-bg-gold button-1  tw-rounded-md"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SectionA4;
