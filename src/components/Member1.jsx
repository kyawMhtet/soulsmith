import React, { useEffect } from "react";
import Person1 from "../assets/person1.png";
import member1 from "../assets/team/member1.png";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const Member1 = () => {
  const { t, i18n } = useTranslation();
  const isThaiLanguage = i18n.language === "th";

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container mt-4">
        <div className="mb-3">
          <div className="row g-0 rounded-3 tw-bg-midnight">
            <div className="col-md-5">
              <img
                src={member1}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7 px-3">
              <div className="card-body mt-4">
                <h4 className=" tw-text-bone text-center">{t("name1")}</h4>
                <h5 className="mt-2 category  text-center tw-text-bone">
                  ({t("category1")})
                </h5>

                <div className="text-start mt-4">
                  <h5 className="tw-text-bone">
                    <b>{t("list1A")}</b>
                  </h5>

                  <ul className="mt-3 mb-5 tw-text-start tw-text-bone">
                    <li>
                      <p>{t("list1Aa")}</p>
                    </li>
                    <li className="my-2">
                      <p>{t("list1Ab")}</p>
                    </li>
                    <li>
                      <p>{t("list1Ac")}</p>
                    </li>
                  </ul>

                  {/* <p className="legend">Legend 1</p> */}
                </div>

                <div className="text-start">
                  <h5 className="tw-text-bone">
                    <b>{t("list1B")}</b>
                  </h5>

                  <ul className="mt-3 mb-5 tw-text-bone">
                    <li>
                      <p>
                        {t("list1Ba")}{" "}
                        <a
                          href="https://www.facebook.com/cbtdeetorjai"
                          className="tw-text-bone"
                          style={{ wordWrap: "break-word" }}
                        >
                          (https://www.facebook.com/cbtdeetorjai)
                        </a>
                        .
                      </p>
                      {/* <span style={{ wordWrap:
                                    'break-word' }}>
                                </span> */}
                    </li>
                    <li className="my-2">
                      <p>{t("list1Bb")}</p>
                    </li>
                  </ul>

                  {/* <p className="legend">Legend 1</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Member1;
