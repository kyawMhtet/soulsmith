import React, { useEffect } from "react";
import Person1 from "../assets/person1.png";
import member13 from "../assets/team/member13.png";

import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const Member6 = () => {
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
            <div className="col-md-5 ">
              <img
                src={member13}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7 px-3">
              <div className="card-body mt-4">
                <h4 className="tw-text-bone name text-sm-center">
                  {t("name13")}
                </h4>
                <h5 className="mt-2 mb-3 category text-sm-center tw-text-bone">
                  ({t("category13")})
                </h5>

                <div className="text-start py-2">
                  <h5 className="tw-text-bone">
                    <b>{t("list13A")}</b>
                  </h5>

                  <ul className="mt-3 mb-5 tw-text-start tw-text-bone">
                    <li>
                      <p>{t("list13Aa")}</p>
                    </li>
                  </ul>
                </div>

                <div className="text-start">
                  <h5 className="tw-text-bone">
                    <b>{t("list13B")}</b>
                  </h5>

                  <div className="mt-3 mb-4 tw-text-bone">
                    <p>- {t("list13Ba")}</p>

                    <ul>
                      <li>
                        <p> {t("list13Ba1")}</p>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 mb-4 tw-text-bone">
                    <p>- {t("list13Bb")}</p>

                    <ul>
                      <li>
                        <p> {t("list13Bb")}</p>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 mb-4 tw-text-bone">
                    <p>- {t("list13Bc")}</p>

                    <ul>
                      <li>
                        <p> {t("list13Bc1")}</p>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 mb-4 tw-text-bone">
                    <p>{t("list13Bd")}</p>
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
