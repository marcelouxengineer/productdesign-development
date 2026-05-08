import React, { useContext } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { translations } from "../../translations";
import { LanguageContext } from "../../context/LanguageContext";
import { PortfolioSection } from "../../components/PortfolioSection";

export const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].portfolio;

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {t.title} | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{t.title}</h1>
          </Col>
        </Row>

        <PortfolioSection />
      </Container>
    </HelmetProvider>
  );
};