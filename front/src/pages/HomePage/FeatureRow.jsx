import { getAsset } from '@/assets';

export default function FeatureRow({ index, title, description, linkText }) {
  const media = getAsset('hero', `feature-${index}`);

  return (
    <div className="feature-row">
      {media ? (
        <div
          className="feature-row-media"
          style={{ backgroundImage: `url(${media})` }}
        />
      ) : null}

      <div className="feature-row-content">
        <div className="feature-row-group">
          <div className="feature-row-body">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <div className="feature-row-link">{linkText} →</div>
        </div>
      </div>
    </div>
  );
}