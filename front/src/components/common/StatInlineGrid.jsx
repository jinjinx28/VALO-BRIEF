/**
 * items: [{ label, value, sub? }]
 * columns: 그리드 컬럼 수 (기본 6)
 */
export default function StatInlineGrid({ items, columns = 6 }) {
  return (
    <div className="stat-inline-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {items.map((item) => (
        <div className="stat-inline" key={item.label}>
          <div className="lbl">{item.label}</div>
          <div className="val">{item.value}</div>
          {item.sub ? <div className="sub">{item.sub}</div> : null}
        </div>
      ))}
    </div>
  );
}
