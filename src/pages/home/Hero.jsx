import HeroImg from "../../assets/images/HeroImg.png";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";

export default function Hero({ onClick }) {
  const { t } = useTranslation("common");

  return (
    <section id="hero">
      <h1 className="brand">Busy Bees</h1>
      <img src={HeroImg} alt="bees carrying cardboard boxes" />
      <div className="container">
        <h2>{t(`home.title`)}</h2>
        <p>{t(`home.description`)}</p>
      </div>
      <Button theme={"primary"} onClick={onClick}>
        {t(`home.track`)}
      </Button>
    </section>
  );
}
