export const ROUTES = {
  home: '/',
  login: '/login',
  signup: '/signup',
  player: (riotId = ':riotId', tag = ':tag') => `/players/${riotId}/${tag}`,
  team: (teamTag = ':teamTag') => `/teams/${teamTag}`,
  predict: (teamTag = ':teamTag') => `/predict/${teamTag}`,
  myTeam: '/my-team',
};
