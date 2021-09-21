import Hero from "./Hero";
import FetchData from "../../utilities/FetchData";

export default function Home() {
  return (
    <section id="home">
      <Hero onClick={() => FetchData()} />
    </section>
  );
}
