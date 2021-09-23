import Hero from "./Hero";
import PackageCard from "../../components/PackageCard";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home({ data }) {
  const { t } = useTranslation("common");
  const [view, setView] = useState(false);
  const Cards = data.map((item) => {
    return <PackageCard item={item} key={item.id} />;
  });
  return (
    <section id="home">
      <Hero onClick={() => setView(true)} />

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
