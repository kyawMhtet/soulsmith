import React from "react";
import { useTranslation } from "react-i18next";
// import "./css/section-a2.css";
import "./css/section-a1.css";
import Footer from "../../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-accessible-accordion/dist/fancy-example.css";

import A2a from "../../assets/services/A2a/A2a.png";
import three from "../../assets/services/A2a/3.png";
import photo1 from "../../assets/services/A2a/photo1.jpg";
import photo2 from "../../assets/services/A2a/photo2.jpg";
import photo3 from "../../assets/services/A2a/photo3.jpg";
import photo4 from "../../assets/services/A2a/photo4.jpg";

const SectionA2 = () => {
  const { t, i18n } = useTranslation();

  const isThaiLanguage = i18n.language === "th";

  return (
    <>
      <h2 className="text-center tw-text-bone  mt-4">{t("SectionA2")}</h2>

      <div className="container mt-4 w-100">
        <p className="tw-text-bone">{t("A2Description_01")}</p>
        {/* <br /> */}
        <p className="tw-text-bone">{t("A2Description_02")}</p>

        {/* <h5 className='tw-text-gold mt-5 text-decoration-underline'>
          {t('Service')}
        </h5> */}
      </div>

      <div className="mt-5 container">
        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={A2a} alt="" />

            <div className="about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A2a")}</h4>
              <ul className="mt-4 ms-lg-3">
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
                    <b>{t("A1aDuration")}</b> {t("A1aValue2")}
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
                    <b>{t("A2adesc1")} </b> {t("A2aValue3")}
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
                    <b>{t("A2alanguage")}</b> {t("A2aValue7")}
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
                      <span className="session1">
                        <b>{t("A1aSession1")} </b>
                      </span>
                      <small className="p6">
                        <b>:</b>
                      </small>
                      <span className="p6Value">{t("A2aValue4")}</span>
                    </p>
                  ) : (
                    <p>
                      <span className="single">
                        <b className="">{t("A2aSession1")} </b>
                      </span>
                      {/* <small className="me-5">
                        <b>:</b>
                      </small> */}
                      <span className="singleUnit">{t("A2aValue4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A2a"
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
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&category=2.%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%84%E0%B8%B3%E0%B8%9B%E0%B8%A3%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%88%E0%B8%B4%E0%B8%95+-+Counselling"
                      className="tw-text-bone tw-bg-gold button-1  tw-rounded-md"
                      target="_blank"
                    >
                      {t("BUY NOW")}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={three} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A2b")}</h4>
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
                    <b className="">{t("descA2a")}</b> {t("A1aValue1")}
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
                    <b>{t("A1aDuration")}</b> {t("A1aValue2")}
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
                    <b>{t("A2adesc1")} </b> {t("A2aValue3")}
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
                    <b>{t("A2alanguage")}</b> {t("A2aValue7")}
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
                      <span>
                        <b>{t("A2aSession1")}</b>
                      </span>
                      <small className="p6">
                        <b> :</b>
                      </small>
                      <span className="p6Value">{t("A2aValue4")}</span>
                    </p>
                  ) : (
                    <p>
                      <span className="single">
                        <b>{t("A2aSession1")} </b>
                      </span>

                      <span className="singleUnit">{t("A2aValue4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A2a1"
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
                      <small className="p6">
                        <b>:</b>
                      </small>
                      <span className="p6Value">{t("A2aValue5")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A1aSession2")}</b>
                      </span>
                      <small className="unit">
                        <b>:</b>
                      </small>
                      <span className="">{t("A2aValue5")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1628044"
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
                      <small className="p7">
                        <b>:</b>
                      </small>
                      <span className="p7Value">{t("A2aValue6")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="price06">
                        <b>:</b>
                      </small>
                      <span className="price3Unit">{t("A2aValue6")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1628061"
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

        {/* 3rd */}

        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={photo1} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A2c")}</h4>
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
                    <b className="">{t("descA2a")}</b> {t("A1aValue1")}
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
                    <b>{t("A1aDuration")}</b> {t("A1aValue2")}
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
                    <b>{t("A2adesc1")} </b> {t("A2aValue3")}
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
                    <b>{t("A2alanguage")}</b> {t("A2aValue7")}
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
                      <span>
                        <b>{t("A2aSession1")} </b>
                      </span>
                      <small className="p6">
                        <b> :</b>
                      </small>
                      <span className="p6Value">{t("A2aValue4")}</span>
                    </p>
                  ) : (
                    <p>
                      <span className="single">
                        <b>{t("A2aSession1")} </b>
                      </span>

                      <span className="singleUnit">{t("A2aValue4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A2a2"
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
                      <small className="p6">
                        <b>:</b>
                      </small>
                      <span className="p6Value">{t("A2aValue5")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A1aSession2")}</b>
                      </span>
                      <small className="unit">
                        <b>:</b>
                      </small>
                      <span className="">{t("A2aValue5")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664790"
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
                      <small className="p7">
                        <b>:</b>
                      </small>
                      <span className="p7Value">{t("A2aValue6")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="price06">
                        <b>:</b>
                      </small>
                      <span className="price3Unit">{t("A2aValue6")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664791"
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

        {/* 4th */}

        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={photo3} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A2e")}</h4>
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
                    <b className="">{t("descA2a")}</b> {t("A1aValue1")}
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
                    <b>{t("A1aDuration")}</b> {t("A1aValue2")}
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
                    <b>{t("A2adesc1")} </b> {t("A2aValue3")}
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
                    <b>{t("A2alanguage")}</b> {t("A2aValue7")}
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
                      <span>
                        <b>{t("A2aSession1")} </b>
                      </span>
                      <small className="p6">
                        <b> :</b>
                      </small>
                      <span className="p6Value">{t("A2aValue4")}</span>
                    </p>
                  ) : (
                    <p>
                      <span className="single">
                        <b>{t("A2aSession1")} </b>
                      </span>

                      <span className="singleUnit">{t("A2aValue4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A2a3"
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
                      <small className="p6">
                        <b>:</b>
                      </small>
                      <span className="p6Value">{t("A2aValue5")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A1aSession2")}</b>
                      </span>
                      <small className="unit">
                        <b>:</b>
                      </small>
                      <span className="">{t("A2aValue5")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664794"
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
                      <small className="p7">
                        <b>:</b>
                      </small>
                      <span className="p7Value">{t("A2aValue6")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="price06">
                        <b>:</b>
                      </small>
                      <span className="price3Unit">{t("A2aValue6")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664795"
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

        {/* 5th */}

        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={photo2} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A2d")}</h4>
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
                    <b className="">{t("descA2a")}</b> {t("A1aValue1")}
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
                    <b>{t("A1aDuration")}</b> {t("A1aValue2")}
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
                    <b>{t("A2adesc1")} </b> {t("A2aValue3")}
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
                    <b>{t("A2alanguage")}</b> {t("A2aValue8")}
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
                      <span>
                        <b>{t("A2aSession1")} </b>
                      </span>
                      <small className="p6">
                        <b> :</b>
                      </small>
                      <span className="p6Value">{t("A2aValue4")}</span>
                    </p>
                  ) : (
                    <p>
                      <span className="single">
                        <b>{t("A2aSession1")} </b>
                      </span>

                      <span className="singleUnit">{t("A2aValue4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A2a4"
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
                      <small className="p6">
                        <b>:</b>
                      </small>
                      <span className="p6Value">{t("A2aValue5")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A1aSession2")}</b>
                      </span>
                      <small className="unit">
                        <b>:</b>
                      </small>
                      <span className="">{t("A2aValue5")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664796"
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
                      <small className="p7">
                        <b>:</b>
                      </small>
                      <span className="p7Value">{t("A2aValue6")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="price06">
                        <b>:</b>
                      </small>
                      <span className="price3Unit">{t("A2aValue6")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664797"
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

        {/* 6th */}
        <div className="tw-bg-midnight rounded-3">
          <div className="a1 w-100">
            <img src={photo4} alt="" />

            <div className=" about w-100">
              <h4 className="tw-text-bone mx-auto ms-md-4 px-2">{t("A2f")}</h4>
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
                    <b className="">{t("descA2a")}</b> {t("A1aValue1")}
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
                    <b>{t("A1aDuration")}</b> {t("A1aValue2")}
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
                    <b>{t("A2adesc1")} </b> {t("A2aValue3")}
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
                    <b>{t("A2alanguage")}</b> {t("A2aValue8")}
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
                      <span>
                        <b>{t("A2aSession1")} </b>
                      </span>
                      <small className="p6">
                        <b> :</b>
                      </small>
                      <span className="p6Value">{t("A2aValue4")}</span>
                    </p>
                  ) : (
                    <p>
                      <span className="single">
                        <b>{t("A2aSession1")} </b>
                      </span>

                      <span className="singleUnit">{t("A2aValue4")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://SOULSMITH.as.me/A2a5"
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
                      <small className="p6">
                        <b>:</b>
                      </small>
                      <span className="p6Value">{t("A2aValue5")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>{t("A1aSession2")}</b>
                      </span>
                      <small className="unit">
                        <b>:</b>
                      </small>
                      <span className="">{t("A2aValue5")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664798"
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
                      <small className="p7">
                        <b>:</b>
                      </small>
                      <span className="p7Value">{t("A2aValue6")}</span>
                    </p>
                  ) : (
                    <p>
                      <span>
                        <b>
                          <b>{t("A1aSession3")}</b>
                        </b>
                      </span>
                      <small className="price06">
                        <b>:</b>
                      </small>
                      <span className="price3Unit">{t("A2aValue6")}</span>
                    </p>
                  )}

                  <span className="button">
                    <a
                      href="https://app.acuityscheduling.com/catalog.php?owner=29978531&action=addCart&clear=1&id=1664800"
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
      </div>

      <Footer />
    </>
  );
};

export default SectionA2;
