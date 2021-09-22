import Hero from "./Hero";
import PackageCard from "../../components/PackageCard";
import { useState } from "react";

export default function Home({ data }) {
  const [view, setView] = useState(false);
  const Cards = data.map((item) => {
    return <PackageCard parcel={item} key={item.id} />;
  });
  return (
    <section id="home">
      <Hero onClick={() => setView(true)} />
      <ul>{Cards}</ul>
    </section>
  );
}
