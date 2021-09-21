import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="realistic bee" />
        <h1>Busy Bees</h1>
      </Link>
    </nav>
  );
}
