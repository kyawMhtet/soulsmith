import React, { useEffect } from "react";
import "./team.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

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
import Person1 from "../assets/person1.png";
import { NavLink } from "react-router-dom";

const Team = () => {
  const { t, i18n } = useTranslation();
  const isThaiLanguage = i18n.language === "th";

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <h2 className="tw-text-gold text-center mt-4">
        <b>SOULSMITH TEAM MEMBERS</b>
      </h2>
      {/* </div> */}

      <div className="home-team">
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

      <Footer />
    </>
  );
};

export default Team;
