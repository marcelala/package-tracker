import Hero from "./Hero";
import FetchData from "../../utilities/FetchData";
import PackageCard from "./PackageCard";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState(false);
  const Cards = FetchData().map((item) => {
    return <PackageCard parcel={item} key={item.id} />;
  });
  return (
    <section id="home">
      <Hero onClick={() => setView(true)} />
      {view && <ul>{Cards}</ul>}
    </section>
  );
}
