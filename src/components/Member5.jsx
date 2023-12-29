import React, { useEffect } from "react";
import Person1 from "../assets/person1.png";
import member5 from "../assets/team/member5.png";

import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const Member5 = () => {
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
                src={member5}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7 px-3">
              <div className="card-body mt-4">
                <h4 className="tw-text-bone name text-sm-center">
                  {t("name5")}
                </h4>
                <h5 className="mt-2 mb-3 category text-sm-center tw-text-bone">
                  ({t("category5")})
                </h5>

                <div className="text-start py-2">
                  <h5 className="tw-text-bone">{t("list5A")}</h5>

                  <ul className="mt-3 mb-5 tw-text-start tw-text-bone">
                    <li>
                      <p>{t("list5Aa")}</p>
                    </li>
                    <li>
                      <p>{t("list5Ab")}</p>
                    </li>
                    <li>
                      <p>{t("list5Ac")}</p>
                    </li>
                  </ul>
                </div>

                <div className="text-start">
                  <h5 className="tw-text-bone">{t("list5B")}</h5>

                  <ul className="mt-3 mb-5 tw-text-bone">
                    <li>
                      <p>{t("list5Ba")} .</p>
                    </li>
                    <li className="my-2">
                      <p>{t("list5Bb")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list5Bc")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list5Bd")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list5Be")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list5Bf")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list5Bg")}</p>
                    </li>

                    <li className="my-2">
                      <p>{t("list5Bh")}</p>
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

export default Member5;
