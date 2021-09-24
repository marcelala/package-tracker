// NPM Packages
import { useTranslation } from "react-i18next";
//project files
import Hero from "../pages/landing/Hero";

export default function Spinner() {
  const { t } = useTranslation("common");
  return (
    <section id="loading">
      <Hero />
      <div className="spinner-container">
        <div className="spinner" />
        <h3>{t("common:loading")}</h3>
      </div>
    </section>
  );
}
