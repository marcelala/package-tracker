import { useTranslation } from "react-i18next";
import PackageCard from "../../components/PackageCard";
import Brand from "../../components/Brand";

export default function Home({ data }) {
  const { t } = useTranslation("common");
  const Cards = data.map((item) => {
    return <PackageCard item={item} key={item.id} />;
  });
  const user = data[1].user_name;
  return (
    <section id="home">
      <Brand />
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
