export default function Data({ label, text }) {
  return (
    <div className="data">
      <small>{label}</small>
      <p>{text}</p>
    </div>
  );
}
