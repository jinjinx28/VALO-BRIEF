export default function FeatureRow({ index, title, description, linkText }) {
  return (
    <div className="feature-row">
      <div className="feature-row-thumb">
        {title} 이미지 삽입 영역<br />(520×280)
      </div>
      <div className="feature-row-body">
        <div className="eyebrow">FEATURE {String(index).padStart(2, '0')}</div>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="feature-row-link">{linkText} →</div>
      </div>
    </div>
  );
}
