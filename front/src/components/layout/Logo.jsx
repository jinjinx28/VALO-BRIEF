export default function Logo({ size = 'md' }) {
  const dims = size === 'sm' ? { width: 20, height: 17, fontSize: 16 } : { width: 26, height: 22, fontSize: 22 };
  return (
    <div className="brand">
      <div className="v-mark" style={{ width: dims.width, height: dims.height }}>
        <svg viewBox="0 0 26 22">
          <polygon points="0,0 8,0 13,12 18,0 26,0 15,22 11,22" fill="#FF4655" />
        </svg>
      </div>
      <div className="brand-text" style={{ fontSize: dims.fontSize }}>
        VAL<span style={{ color: 'var(--text-3)' }}>-</span>
        <span className="accent-word">BRIEF</span>
      </div>
    </div>
  );
}
