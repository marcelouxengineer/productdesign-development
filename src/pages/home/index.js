import React, { useContext } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { translations } from "../../translations";
import { LanguageContext } from "../../context/LanguageContext";

export const Home = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = translations[language].home;

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <div className="language-switcher">
                  <button
                    type="button"
                    onClick={() => changeLanguage("en")}
                    className={language === "en" ? "active" : ""}
                  >
                    EN
                  </button>
                  <span>/</span>
                  <button
                    type="button"
                    onClick={() => changeLanguage("pt")}
                    className={language === "pt" ? "active" : ""}
                  >
                    PT
                  </button>
                </div>

                <h2 className="mb-1x">{t.title}</h2>

                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    key={language}
                    options={{
                      strings: [
                        t.animated.first,
                        t.animated.second,
                        t.animated.third,
                        t.animated.forth,
                        t.animated.fifth,
                        t.animated.sixth,
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 30,
                      deleteSpeed: 10,
                      pauseFor: 3000,
                    }}
                  />
                </h1>

                <p className="mb-1x" style={{ whiteSpace: "pre-line" }}>
                  {t.description}
                </p>

                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      {t.portfolio}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      {t.contact}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};