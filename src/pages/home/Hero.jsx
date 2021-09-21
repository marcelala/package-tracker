import HeroImg from "../../assets/images/HeroImg.png";
import Button from "../../components/Button";

export default function Hero({ onClick }) {
  return (
    <section id="hero">
      <h1 className="brand">Busy Bees</h1>
      <img src={HeroImg} alt="bees carrying cardboard boxes" />
      <h2>Track your parcels anywhere</h2>
      <p>Check the progress of all of your deliveries</p>
      <Button theme={"primary"} onClick={onClick}>
        Track now
      </Button>
    </section>
  );
}
