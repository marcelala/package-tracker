import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function PackageCard({ item }) {
  //global state
  const { t } = useTranslation("common");
  //constants
  const { parcel_id, sender, status } = item;
  const textStatus = t(`list.item.status.${item.status}`);
  return (
    <Link to={`/details/${parcel_id}`}>
      <div className="package-card">
        <h2> {sender}</h2>
        <p># {parcel_id}</p>
        <div className="status-icon">
          <span className={`icon icon-${status}`} />
          <span>{textStatus}</span>
        </div>
      </div>
    </Link>
  );
}
