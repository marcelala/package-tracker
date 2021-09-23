import { useTranslation } from "react-i18next";
import Hero from "./Hero";
import PackageCard from "../../components/PackageCard";
import Spinner from "../../components/Spinner";
import { useState } from "react";

export default function Home({ data }) {
  const { t } = useTranslation("common");
  const [view, setView] = useState(false);
  const Cards = data.map((item) => {
    return <PackageCard item={item} key={item.id} />;
  });
  return (
    <section id="home">
      <Hero onClick={() => setView(true)} />

      <div className="spinner-container"> {!data && <Spinner />}</div>

      {view && (
        <section id="list">
          {t(`list.title`)}
          {t(`list.description`)}
          <ul>{Cards}</ul>
        </section>
      )}
    </section>
  );
}
