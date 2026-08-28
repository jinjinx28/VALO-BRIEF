import { useEffect, useState } from 'react';
import { fetchMyTeamPlayers, fetchMyTeamPlayerDetail } from '../../../api/myTeam';
import PlayerListView from './PlayerListView';
import PlayerDetailView from './PlayerDetailView';

export default function PlayerAnalysisTab() {
  const [players, setPlayers] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetchMyTeamPlayers().then(setPlayers);
  }, []);

  useEffect(() => {
    if (!selectedId) return;
    fetchMyTeamPlayerDetail(selectedId).then(setDetail);
  }, [selectedId]);

  if (!players) return <p style={{ color: 'var(--text-2)' }}>불러오는 중...</p>;

  if (selectedId && detail) {
    return <PlayerDetailView player={detail} onBack={() => setSelectedId(null)} />;
  }

  return <PlayerListView players={players} onSelect={setSelectedId} />;
}
