import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import Button from "./Button";

export default function Navigation() {
  const [t, i18n] = useTranslation("common");
  // Local state
  const [language, setLanguage] = useState("English");

  // Methods
  function updateLanguage() {
    if (language === "English") {
      i18n.changeLanguage("se");
      setLanguage("Svenska");
    } else {
      i18n.changeLanguage("en");
      setLanguage("English");
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
