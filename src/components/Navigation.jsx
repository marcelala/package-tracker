import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import Button from "./Button";

export default function Navigation() {
  const { i18n } = useTranslation("common");
  // Local state
  const [language, setLanguage] = useState("Svenska");

  // Methods
  function updateLanguage() {
    if (language === "Svenska") {
      i18n.changeLanguage("se");
      setLanguage("English");
    } else {
      i18n.changeLanguage("en");
      setLanguage("Svenska");
    }
  }

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="realistic bee" />
        <h1>Busy Bees</h1>
      </Link>
      <Button theme={"language"} onClick={() => updateLanguage()}>
        {language}
      </Button>
      <hr />
    </nav>
  );
}
