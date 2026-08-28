/**
 * 실제 이미지 자산이 준비되기 전까지 쓰는 placeholder 박스.
 * src가 주어지면 실제 <img>를 렌더링하고, 없으면 점선 박스 + 라벨을 보여줍니다.
 * => 나중에 이미지 자산이 생기면 이 컴포넌트 하나만 신경 쓰면 됩니다.
 */
export default function EmptyImageBox({ src, alt = '', label, className = '', style }) {
  if (src) {
    return <img src={src} alt={alt} className={className} style={style} />;
  }
  return (
    <div className={`empty-image-box ${className}`.trim()} style={style}>
      {label}
    </div>
  );
}
