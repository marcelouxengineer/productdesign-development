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

        <div
          className="portfolio-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            width: "100%",
            marginBottom: "40px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >

          <h2
            className="portfolio-title"
            style={{
              margin: 0,
                                left: "-1px",

            }}
          >
            {t.title}
          </h2>

          <h2
            className="portfolio-title"
            style={{
              margin: 0,
              position: "relative",
                  left: "-8px",
              top: "0px",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(
                language === "pt"
                  ? "https://drive.google.com/file/d/1e3gsCSIzF7G8KyQpATiHM6091FZ4SB9e/view?usp=drive_link"
                  : "https://drive.google.com/file/d/111UUY-Jd-6-jvPNJZWh_X7K_oWu1lmFD/view?usp=drive_link",
                "_blank"
              )
            }
          >
            {t.curriculum}
          </h2>

        </div>

      </div>

  <div
  className="po_items_ho"
  style={{
    marginTop: "-40px",
  }}
>

        {dataportfolio.map((data, i) => {

          const descriptionValue =
            data.description?.en?.toLowerCase() || "";

          const isPublic =
            data.id === "moto-secure" ||
            data.id === "moto-hello" ||
            data.id === "networkme" ||
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

                {!isPublic && (
                  <span className="portfolio_disclaimer">
                    {language === "en"
                      ? "This case study is password protected due to confidentiality agreements. Please contact marceloaf.ux@gmail.com to request access."
                      : "Estudo de caso protegido por confidencialidade. Contate marceloaf.ux@gmail.com para solicitar acesso."}
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