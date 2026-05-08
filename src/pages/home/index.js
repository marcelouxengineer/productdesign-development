import React, { useContext } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { LanguageContext } from "../../context/LanguageContext";
import { PortfolioSection } from "../../components/PortfolioSection";

export const Home = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <HelmetProvider>
      <>
        <section id="home" className="home">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>

          {/* 👇 REMOVIDO align-items-center */}
          <div className="intro_sec d-block d-lg-flex">
            
            <div
              className="h_bg-image order-1 order-lg-2 h-100"
              style={{ backgroundImage: `url(${introdata.your_img_url})` }}
            ></div>

            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              
              <div className="align-self-center">
                
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

                  {/* EYEBROW */}
                  <h2 className="hero-eyebrow">
                    {language === "en"
                      ? "Hi, I'm Marcelo."
                      : "Oi, eu sou o Marcelo."}
                  </h2>

                  {/* HEADLINE */}
                <h1 className="hero-headline">
  Senior Product Designer & UX Engineer
</h1>

                  {/* LOCATION */}
                  <p className="hero-location">
                    {language === "en"
                      ? "Based in São Paulo, Brazil"
                      : "Atuando em São Paulo, Brasil"}
                  </p>

                  {/* DIVIDER */}
                  <div className="hero-divider" />

                  {/* DESCRIPTION */}
                  <p className="hero-description">
                    {language === "en" ? (
                      <>
                        I design, prototype, and ship digital products
                        <br />
                        — from user research to production code.
                      </>
                    ) : (
                      <>
                        Projeto, prototipo e entrego produtos digitais
                        <br />
                        — da pesquisa até código em produção.
                      </>
                    )}
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        <PortfolioSection />
      </>
    </HelmetProvider>
  );
};