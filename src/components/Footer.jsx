//project files
import Link from "./Link";
import links from "../data/links.json";

export default function Footer() {
  const Links = links.map((item) => <Link key={item.id} item={item} />);
  return (
    <footer>
      <div className=" content">
        <ul>{Links}</ul>
        <p>
          Copyright © 2021 Marcela Felix Fortis <br />
          @BusyBees
        </p>
      </div>
    </footer>
  );
}
