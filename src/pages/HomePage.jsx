import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Section1 from "../assets/Section1_Photo.png";

import home1 from "../assets/home/home1.jpg";
import home2 from "../assets/home/home2.jpg";
import home3 from "../assets/home/home3.jpg";
import home4 from "../assets/home/home4.jpg";
import home5 from "../assets/home/home5.jpg";
import home6 from "../assets/home/home6.jpg";
import home7 from "../assets/home/home7.jpg";
import home8 from "../assets/home/home8.jpg";
import home9 from "../assets/home/home9.jpg";
import home10 from "../assets/home/home10.jpg";
import sectionA from "../assets/services/sectionA.jpg";
import sectionB from "../assets/services/sectionB.jpg";
import sectionC from "../assets/services/sectionC.jpg";
import member1 from "../assets/team/member1.png";
import member3 from "../assets/team/member3.png";
import member2 from "../assets/team/member2.png";
import member5 from "../assets/team/member5.png";
import member6 from "../assets/team/member6.png";
import member7 from "../assets/team/member7.png";
import member8 from "../assets/team/member8.png";
import member9 from "../assets/team/member9.png";
import member10 from "../assets/team/member10.png";
import member11 from "../assets/team/member11.png";
import member4 from "../assets/team/member4.png";
import member12 from "../assets/team/member12.png";
import member13 from "../assets/team/member13.png";
import Footer from "../components/Footer";
import Element1 from "../assets/Element1.png";
import Element2 from "../assets/Element2.png";
import Element3 from "../assets/Element3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.css";
import { Link, NavLink } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth,
    });
  };
  const { t } = useTranslation();

  return (
    <>
      <div className="main">
        <div className=" main-content order-2 order-lg-1">
          <h1 className="tw-text-gold">
            <b>SOULSMITH</b>
          </h1>
          <p className="tw-text-bone mt-3">{t("About SOULSMITH")}</p>

          {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id nisi, ipsam sint, debitis architecto odit odio pariatur delectus consectetur laudantium excepturi quas eligendi! Temporibus et beatae dolorem architecto sequi provident voluptatibus illum harum, nihil distinctio quo earum ad aspernatur! Debitis harum minima adipisci! Corrupti quidem dolore earum rem quasi saepe nihil ab enim autem laudantium dolores natus, hic porro vel commodi sed maxime? Aspernatur, voluptate eius nostrum quidem deleniti doloremque libero itaque, adipisci optio odio suscipit, fugit aut commodi?
            </p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cupiditate iusto vitae aperiam exercitationem, minus harum non aliquam tempora ad, eligendi ullam laborum accusamus doloremque soluta assumenda ratione unde ut corrupti dignissimos. Quisquam enim itaque perspiciatis repellat voluptatem esse molestias.</p> */}
        </div>

        <div
          id="carouselExampleFade"
          className="carousel slide carousel-home carousel-fade order-1 order-lg-2"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item home active" data-bs-interval="2500">
              <img src={home1} alt="Slide 1" className="rounded-3" />
            </div>
            <div
              className="carousel-item  home slide-2"
              data-bs-interval="2500"
            >
              <img src={home2} className="rounded-3" alt="Slide 2" />
            </div>
            <div className="carousel-item home" data-bs-interval="2500">
              <img src={home3} className="rounded-3" alt="Slide 3" />
            </div>

            <div className="carousel-item home" data-bs-interval="2500">
              <img src={home4} className="rounded-3" alt="Slide 3" />
            </div>

            <div className="carousel-item home" data-bs-interval="2500">
              <img src={home5} className="rounded-3" alt="Slide 3" />
            </div>

            <div className="carousel-item home" data-bs-interval="2500">
              <img src={home6} className="rounded-3" alt="Slide 3" />
            </div>

            <div className="carousel-item home" data-bs-interval="2500">
              <img src={home7} className="rounded-3" alt="Slide 3" />
            </div>

            <div className="carousel-item home" data-bs-interval="2500">
              <img src={home8} className="rounded-3" alt="Slide 3" />
            </div>

            <div className="carousel-item home" data-bs-interval="2500">
              <img src={home9} className="rounded-3" alt="Slide 3" />
            </div>

            <div className="carousel-item home" data-bs-interval="2500">
              <img src={home10} className="rounded-3" alt="Slide 3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* <div id="carouselExampleFade" className="carousel carousel-home slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image103} className="" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image104} className="" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image107} className="" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
      </div>

      {/* <div className="container mt-4">
        {t('pageTitle')}
        <p className="tw-bg-blue-500">{t('pageContent')}</p>
      </div> */}

      {/* services */}

      <div className="container-fluid home-services">
        <div className="row">
          <div className="col-10  mx-auto rounded-3 services">
            <h3 className="tw-text-bone text-center p-3">SERVICES</h3>

            <div
              className="row mt-2 gap-2 py-4 mx-auto"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="col-12 my-3 col-lg-4 col-md-4 col-sm-12 mx-auto service tw-bg-midnight">
                <div className="child">
                  <img src={sectionA} alt="" className=" img-fluid" />
                </div>
              </div>
              <div className="col-12 my-3 col-lg-4 col-md-4 col-sm-12 mx-auto service tw-bg-midnight">
                <div className="child">
                  <img src={sectionB} alt="" className=" img-fluid" />
                </div>
              </div>
              <div className="col-12 my-3 col-lg-4 col-md-4 col-sm-12 mx-auto service tw-bg-midnight">
                <div className="child">
                  <img src={sectionC} alt="" className=" img-fluid" />
                </div>
              </div>
            </div>

            <div className="element1 d-none d-lg-block">
              <img src={Element1} className="" alt="" />
            </div>

            <div className="element2 d-none d-lg-block">
              <img src={Element2} className="" alt="" />
            </div>
            <div className="element3 d-none d-lg-block">
              <img src={Element3} className="" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* our team */}

      <div className="home-team mt-5">
        <h3 className="text-center tw-text-bone">OUR TEAM</h3>

        <div className="container mt-4">
          <NavLink to={"/team/member8"}>
            <div
              className="col-12 col-lg-6 col-md-6 mx-auto"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              <img src={member8} alt="" />
              <div className="tw-text-bone text-center">
                <h4 className="">{t("name8")}</h4>
                <p className="p-1">({t("category8")})</p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              <NavLink to={"/team/member9"}>
                <div>
                  <img src={member9} alt="" />
                  <div className="tw-text-bone text-center">
                    <h4 className="">{t("name9")}</h4>
                    <p className="p-1">({t("category9")})</p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <NavLink to={"/team/member6"}>
                <img src={member6} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name6")}</h4>
                  <p className="p-1">({t("category6")})</p>
                </div>
              </NavLink>
            </div>
            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <NavLink to={"/team/member3"}>
                <img src={member3} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name3")}</h4>
                  <p className="p-1">({t("category3")})</p>
                </div>
              </NavLink>
            </div>

            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <NavLink to={"/team/member7"}>
                <img src={member7} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name7")}</h4>
                  <p className="p-1">({t("category7")})</p>
                </div>
              </NavLink>
            </div>

            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <NavLink to={"/team/member2"}>
                <img src={member2} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name2")}</h4>
                  <p className="p-1">({t("category2")})</p>
                </div>
              </NavLink>
            </div>

            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <NavLink to={"/team/member1"}>
                <img src={member1} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name1")}</h4>
                  <p className="p-1">({t("category1")})</p>
                </div>
              </NavLink>
            </div>

            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <NavLink to={"/team/member5"}>
                <img src={member5} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name5")}</h4>
                  <p className="p-1">({t("category5")})</p>
                </div>
              </NavLink>
            </div>

            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <NavLink to={"/team/member4"}>
                <img src={member4} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name4")}</h4>
                  <p className="p-1">({t("category4")})</p>
                </div>
              </NavLink>
            </div>

            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <NavLink to={"/team/member12"}>
                <img src={member12} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name12")}</h4>
                  <p className="p-1">({t("category12")})</p>
                </div>
              </NavLink>
            </div>

            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <NavLink to={"/team/member10"}>
                <img src={member10} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name10")}</h4>
                  <p className="p-1">({t("category10")})</p>
                </div>
              </NavLink>
            </div>

            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <NavLink to={"/team/member11"}>
                <img src={member11} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name11")}</h4>
                  <p className="p-1">({t("category11")})</p>
                </div>
              </NavLink>
            </div>

            <div
              className="col-12 col-lg-4 col-md-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <NavLink to={"/team/member13"}>
                <img src={member13} alt="" />
                <div className="tw-text-bone text-center">
                  <h4 className="">{t("name13")}</h4>
                  <p className="p-1">({t("category13")})</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="book-now">
        <a
          href="https://SOULSMITH.as.me/"
          target="_blank"
          className="book-now-button rounded-1"
        >
          Book Now
        </a>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
