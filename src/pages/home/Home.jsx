import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero";
import PackageCard from "../../components/PackageCard";
import HeroImg from "../../assets/images/HeroImg.png";

export default function Home({ data }) {
  const { t } = useTranslation("common");
  const Cards = data.map((item) => {
    return <PackageCard item={item} key={item.id} />;
  });
  const user = data[1].user_name;
  return (
    <section id="home">
      <div className="brand">
        <h1 className=" brand">Busy Bees</h1>
        <img src={HeroImg} alt=" bees carrying cardboard boxes" />
      </div>
      <section id="list">
        <p>
          {t(`list.title`)}, {user}!
        </p>
        <h1 className="list-title">{t(`list.description`)}</h1>
        <ul>{Cards}</ul>
      </section>
    </section>
  );
}
