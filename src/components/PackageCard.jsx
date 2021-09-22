import { Link } from "react-router-dom";

export default function PackageCard({ parcel }) {
  const { parcel_id, sender, status } = parcel;
  return (
    <Link to={`/details/${parcel_id}`}>
      <div className="package-card">
        <h2> {sender}</h2>
        <p>{parcel_id}</p>
        <span>{status}</span>
      </div>
    </Link>
  );
}
