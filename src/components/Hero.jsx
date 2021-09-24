//npm packages
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

//project files
import HeroImg from "../assets/images/HeroImg.png";
import Button from "./Button";

export default function Hero() {
  const { t } = useTranslation("common");
  return (
    <section id="hero">
      <h1 className=" brand">Busy Bees</h1>
      <img src={HeroImg} alt=" bees carrying cardboard boxes" />
      <div className=" container">
        <h2>{t(`home.title`)}</h2>
        <p>{t(`home.description`)}</p>
      </div>
      <Link to="/home">
        <Button theme={"primary"}>{t(`home.track`)}</Button>
      </Link>
    </section>
  );
}
