import Hero from "./Hero";
import PackageCard from "../../components/PackageCard";
import { useState } from "react";

export default function Home({ data }) {
  const [view, setView] = useState(false);
  const Cards = data.map((item) => {
    return <PackageCard item={item} key={item.id} />;
  });
  return (
    <section id="home">
      <Hero onClick={() => setView(true)} />
      <section id="list">
        <ul>{Cards}</ul>
      </section>
    </section>
  );
}
