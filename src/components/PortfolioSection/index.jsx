import React, { useContext } from "react";
import { dataportfolio } from "../../content_option";
import { translations } from "../../translations";
import { LanguageContext } from "../../context/LanguageContext";

export const PortfolioSection = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].portfolio;

  const handleProtectedOpen = (link) => {
    const enteredPassword = prompt(
      language === "en"
        ? "Enter password to access this case study"
        : "Digite a senha para acessar este estudo de caso"
    );

    // 👇 cancel pressed
    if (enteredPassword === null) {
      return;
    }

    // 👇 correct password
    if (enteredPassword.trim() === "Marcelo_LP") {
      window.open(link, "_blank");
    } else {
      // 👇 wrong password
      alert(
        language === "en"
          ? "Incorrect password"
          : "Senha incorreta"
      );
    }
  };

  return (
    <section className="portfolio-section">

      <div className="portfolio-title-wrapper">

        <div className="portfolio-title-content">

          <h2 className="portfolio-title">
            {t.title}
          </h2>

        </div>

      </div>

      <div className="po_items_ho">

        {dataportfolio.map((data, i) => {

          const descriptionValue =
            data.description?.en?.toLowerCase() || "";

          const isPublic =
            descriptionValue.includes("nintendo") ||
            descriptionValue.includes("icamp");

          return (
            <div key={i} className="po_item">

              <img
                className="portfolio-img"
                src={data.img}
                alt="Project"
              />

              <div className="content">

                <p>{data.description[language]}</p>

                <a
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();

                    if (isPublic) {
                      window.open(data.link[language], "_blank");
                    } else {
                      handleProtectedOpen(data.link[language]);
                    }
                  }}
                >
                  {t.viewProject}
                </a>

                {/* 👇 PASSWORD DISCLAIMER */}
                {!isPublic && (
                  <span className="portfolio_disclaimer">
                    {language === "en"
                      ? "This case study is password protected due to confidentiality agreements. Please contact marceloaf.ux@gmail.com to request access."
                      : "Estudo de caso é protegido devido a confidencialidade. Contate marceloaf.ux@gmail.com para solicitar acesso."}
                  </span>
                )}

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};