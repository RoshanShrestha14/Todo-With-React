import "./AllButton.css";

export default function AllButton({ label, onclick }) {
  return (
    <>
      <button onClick={onclick}>{label}</button>
    </>
  );
}
