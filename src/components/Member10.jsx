import React, { useEffect } from "react";

import member10 from "../assets/team/member10.png";

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
                src={member10}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7 px-3">
              <div className="card-body mt-4">
                <h4 className="tw-text-bone name text-sm-center">
                  {t("name10")}
                </h4>
                <h5 className="mt-2 mb-3 category text-sm-center tw-text-bone">
                  ({t("category10")})
                </h5>

                <div className="text-start py-2">
                  <h5 className="tw-text-bone">
                    <b>{t("list10A")}</b>
                  </h5>

                  <ul className="mt-3 mb-5 tw-text-start tw-text-bone">
                    <li>
                      <p>{t("list10Aa")}</p>
                    </li>
                  </ul>
                </div>

                <div className="text-start">
                  <h5 className="tw-text-bone">
                    <b>{t("list10B")}</b>
                  </h5>

                  <ul className="mt-3 mb-5 tw-text-bone">
                    <li>
                      <p>{t("list10Ba")}</p>
                    </li>
                    <li className="my-2">
                      <p>{t("list10Bb")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list10Bc")}</p>
                    </li>

                    {isThaiLanguage ? (
                      <li className="my-2">
                        <p>{t("list10Bd")}</p>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
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
