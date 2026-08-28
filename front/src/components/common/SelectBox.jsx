export default function SelectBox({ label, className = '' }) {
  return <div className={`select-box ${className}`.trim()}>{label} ▾</div>;
}
