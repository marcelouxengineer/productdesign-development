import React, { useContext } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import { translations } from "../../translations";
import { LanguageContext } from "../../context/LanguageContext";

export const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].about;

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t.pageTitle} | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{t.heading}</h1>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title[language]}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="about-description">
              {dataabout.aboutme[language]}
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t.timeline}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row" style={{ whiteSpace: "pre-line" }}>
                        {data.jobtitle}
                      </th>
                      <td>{data.where[language]}</td>
                      <td>{data.date[language]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t.skills}</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name[language]}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t.education}</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description[language]}</p>
                </div>
              );
            })}

            {/* ✅ CV dinâmico por idioma */}
            <div className="curriculum-wrapper">
              <h3 className="curriculum-heading">
                <a
                  href={
                    language === "pt"
                      ? "https://drive.google.com/file/d/1dE3CMFcB4TYUWq415nY8JxEGkDHwGCwC/view?usp=sharing"
                      : "https://drive.google.com/file/d/1qMEvsUOTXcWrK35jZVVikYbwRgu6uhry/view?usp=sharing"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-underline"
                >
                  {t.curriculum}
                </a>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};