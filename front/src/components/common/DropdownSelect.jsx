/**
 * 맵 선택 / 유저 선택 등에 쓰는 공용 드롭다운 껍데기.
 * 지금은 시각적 표시용이며, 실제 옵션 리스트/onChange 로직은
 * 필요한 화면에서 확장해서 쓰면 됩니다.
 */
export default function DropdownSelect({ icon, label, variant = 'map', onClick }) {
  const cls = variant === 'user' ? 'user-select' : 'map-select';
  return (
    <button className={cls} type="button" onClick={onClick}>
      {icon ? <span>{icon}</span> : null} {label} ▾
    </button>
  );
}
