export const predictionMock = {
  ourTeam: { name: 'Team Phoenix', tag: 'PHX', avgWinRate20: 58 },
  opponentTeam: { name: 'Team Ascend', tag: 'ASC', avgWinRate20: 45 },
  ourWinChance: 64,
  analysis: {
    roundInfo: {
      atkWinRate: 54, defWinRate: 61, pistolWinRate: 70, ecoWinRate: 32,
      fbWinPct: 68, fdLosePct: 74,
    },
    mapInfo: {
      selectedMap: '어센트',
      mapWinRate: 70, atkWinRate: 52, defWinRate: 65,
      preferredSites: { A: 48, B: 33, center: 19 },
      avgSpikePlantTime: 32,
      matchSample: 13,
      combos: [
        { label: '조합 A', pct: 34 },
        { label: '조합 B', pct: 21 },
      ],
      comboAce: [
        { name: 'Nova', acs: 274 },
        { name: 'Dash', acs: 235 },
      ],
      comboWeakness: [
        { name: 'Ruko', fd: 61, acs: 196 },
        { name: 'Solstice', fd: 58, acs: 180 },
      ],
    },
    engagementInfo: {
      trade1v1: 58, trade1v2: 31,
      skills: [
        { name: '연막', engageRate: 32, successRate: 51 },
        { name: '플래시', engageRate: 28, successRate: 44 },
        { name: '감시 카메라', engageRate: 19, successRate: 62 },
      ],
      duelistVsDuelist: { us: 58, them: 42 },
      sentinelCompare: 'advantage', // 'advantage' | 'disadvantage'
    },
  },
  aiReport: {
    intro: 'Team Ascend는 최근 5경기 기준 3승 2패, 승률 60%를 기록하며 프리미어 디비전 3 · 상위 24%에 위치한 팀입니다. 초반 라운드 장악력이 뛰어난 반면, 자금 열세 상황과 인원 손실 이후의 대응력에서는 뚜렷한 허점이 관찰됩니다.',
    strengths: [
      '피스톨 라운드 승률 70%로 초반 기세 장악에 강함',
      '어센트 A 사이트 선호도가 높고 스파이크 설치가 빠름 (평균 32초)',
      'FB Win % 68%로 선취점 이후 라운드 마무리 능력이 우수',
    ],
    weaknesses: [
      'Eco 라운드 승률 32%로 자금 열세 상황에 취약',
      'FD Lose % 74%로 한 명 손실 시 라운드 붕괴율이 높음',
      '1대2 트레이드 성공률 31%로 열세 교전 대응력이 낮음',
    ],
    tactic: '초반 Eco/포스바이 라운드에서 공격적인 스택 운영으로 상대의 약점을 공략하고, A 사이트 선점을 위한 얼리 로테이션 방어를 권장합니다. 한 명이 다이브를 당했을 때 상대의 FD Lose % 지표를 활용해 즉시 리테이크를 시도하는 전술이 유효할 것으로 예측됩니다.',
    phases: [
      { label: 'EARLY · 0-20초', text: '상대는 피스톨/포스바이에서 빠른 사이트 압박을 시도할 확률이 높습니다. 초반 정보 확보용 유틸을 아끼지 말고 사용하세요.' },
      { label: 'MID · 20-60초', text: 'A 사이트로의 로테이션이 잦은 경향이 있어, 중립 지역 컨트롤을 통해 사이트 스왑을 조기에 파악하는 것이 중요합니다.' },
      { label: 'LATE · 60초~', text: 'Eco/열세 상황에서 무리한 교전을 시도하는 경향이 있으므로, 안전한 포지셔닝으로 상대의 실수를 유도하세요.' },
    ],
    pickPriority: [
      { agent: '오멘', reason: '상대 감시자 조합 대비 유리한 스모크 라인업 확보 가능, 사이트 정보 차단에 효과적' },
      { agent: '소바', reason: '상대의 빠른 로테이션 패턴을 사전에 탐지해 A 사이트 스왑에 대응' },
      { agent: '킬조이', reason: 'Eco 라운드 방어 시 정보 및 지연 효과로 상대의 취약한 자금 상황을 극대화' },
    ],
  },
};
