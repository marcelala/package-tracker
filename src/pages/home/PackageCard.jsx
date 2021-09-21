export default function PackageCard({ parcel }) {
  const { parcel_id, sender, status } = parcel;
  return (
    <section className="package-card">
      <h2> {sender}</h2>
      <p>{parcel_id}</p>
      <span>{status}</span>
    </section>
  );
}
