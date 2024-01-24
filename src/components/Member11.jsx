import React, { useEffect } from "react";
import Person1 from "../assets/person1.png";
import member11 from "../assets/team/member11.png";

import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const Member6 = () => {
  const { t, i18n } = useTranslation();
  const isThaiLanguage = i18n.language === "th";

  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="mb-3">
          <div className="row g-0 rounded-3 tw-bg-midnight">
            <div className="col-md-5 ">
              <img
                src={member11}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7 px-3">
              <div className="card-body mt-4">
                <h4 className="tw-text-bone name text-sm-center">
                  {t("name11")}
                </h4>
                <h5 className="mt-2 mb-3 category text-sm-center tw-text-bone">
                  ({t("category11")})
                </h5>

                <div className="text-start py-2">
                  <h5 className="tw-text-bone">
                    <b>{t("list11A")}</b>
                  </h5>

                  <ul className="mt-3 mb-5 tw-text-start tw-text-bone">
                    <li>
                      <p>{t("list11Aa")}</p>
                    </li>
                    <li>
                      <p>{t("list11Ab")}</p>
                    </li>
                  </ul>
                </div>

                <div className="text-start">
                  <h5 className="tw-text-bone">
                    <b>{t("list11B")}</b>
                  </h5>

                  <div className="mt-3 mb-4 tw-text-bone">
                    <p>- {t("list11Ba")}</p>

                    <ul>
                      <li>
                        <p> {t("list11Ba1")}</p>
                      </li>
                    </ul>
                  </div>

                  <div className=" mb-4 tw-text-bone">
                    <p>- {t("list11Bb")}</p>

                    <ul>
                      <li>
                        <p> {t("list11Bb1")}</p>
                      </li>
                    </ul>
                  </div>

                  <div className=" mb-5 tw-text-bone">
                    <p>- {t("list11Bc")}</p>
                    <ul>
                      <li>
                        <p> {t("list11Bc1")}</p>
                      </li>
                    </ul>
                  </div>
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

export default Member6;
