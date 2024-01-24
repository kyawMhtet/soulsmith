import React, { useEffect } from "react";
import Person1 from "../assets/person1.png";
import member12 from "../assets/team/member12.png";

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
                src={member12}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7 px-3">
              <div className="card-body mt-4">
                <h4 className="tw-text-bone name text-sm-center">
                  {t("name12")}
                </h4>
                <h5 className="mt-2 mb-3 category text-sm-center tw-text-bone">
                  ({t("category12")})
                </h5>

                <div className="text-start py-2">
                  <h5 className="tw-text-bone">
                    <b>{t("list12A")}</b>
                  </h5>

                  <ul className="mt-3 mb-5 tw-text-start tw-text-bone">
                    <li>
                      <p>{t("list12Aa")}</p>
                    </li>
                    <li>
                      <p>{t("list12Ab")}</p>
                    </li>
                  </ul>
                </div>

                <div className="text-start">
                  <h5 className="tw-text-bone">
                    <b>{t("list12B")}</b>
                  </h5>

                  <ul className="mt-3 mb-5 tw-text-bone">
                    <li>
                      <p>{t("list12Ba")}</p>
                    </li>
                    <li className="my-2">
                      <p>{t("list12Bb")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list12Bc")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list12Bd")}</p>
                    </li>
                  </ul>
                </div>

                <div className="text-start">
                  <h5 className="tw-text-bone" style={{ width: "85%" }}>
                    <b>{t("list12C")}</b>
                  </h5>

                  <ul className="mt-3 mb-5 tw-text-bone">
                    <li className="my-2">
                      <p>{t("list12Ca")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list12Cb")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list12Cc")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list12Cd")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list12Ce")}</p>
                    </li>
                    <li className="my-2">
                      <p>{t("list12Cf")}</p>
                    </li>
                    <li className="my-2">
                      <p>{t("list12Cg")}</p>
                    </li>
                    <li className="my-2">
                      <p>{t("list12Ch")}</p>
                    </li>
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
