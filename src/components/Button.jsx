export default function Button({ onClick, children, theme }) {
  return (
    <button className={"btn btn-" + theme} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
