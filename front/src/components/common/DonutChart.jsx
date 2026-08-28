/**
 * 간단한 승률 도넛. winPct(0~100)만 넘기면 conic-gradient로 렌더링합니다.
 */
export default function DonutChart({ winPct, size = 90, className = '' }) {
  const deg = (winPct / 100) * 360;
  return (
    <div
      className={`donut-chart ${className}`.trim()}
      style={{
        width: size, height: size, borderRadius: '50%',
        background: `conic-gradient(var(--win) 0deg ${deg}deg, var(--lose) ${deg}deg 360deg)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}
    >
      <span
        style={{
          width: size - 26, height: size - 26, borderRadius: '50%', background: 'var(--bg-panel)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16,
        }}
      >
        {winPct}%
      </span>
    </div>
  );
}
