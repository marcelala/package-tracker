import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import parcel from "../assets/images/package.svg";

export default function PackageCard({ item }) {
  //global state
  const { t } = useTranslation("common");
  //constants
  const { parcel_id, sender, status } = item;
  const icon = require(`../assets/icons/${item.status}.svg`);
  const iconSrc = icon.default;
  const textStatus = t(`list.item.status.${item.status}`);
  return (
    <Link to={`/details/${parcel_id}`} className="package-card">
      <div className="card-content">
        <div className="image-container">
          <img
            src={parcel}
            alt="White cardboard box sealed with yellow tape on top"
          />
        </div>
        <div className="text-box">
          <h2> {sender}</h2>
          <p># {parcel_id}</p>
        </div>
        <div className="status-icon">
          <img src={iconSrc} alt="graphic representation of the status below" />
          <span className={`icon icon-${status}`} />
          <small>{textStatus}</small>
        </div>
      </div>
    </Link>
  );
}
