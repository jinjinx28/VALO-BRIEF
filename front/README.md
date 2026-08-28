# VALO-BRIEF Frontend

Vite + React 기반 프론트엔드입니다.

## 시작하기
```bash
npm install
npm run dev
```

## FastAPI 서버 연동
1. `.env.development`의 `VITE_API_BASE_URL`을 비워두면 모든 데이터가 `src/mocks/*.mock.js`에서 옵니다.
2. FastAPI 서버가 준비되면 `.env.development`에 서버 주소를 채우세요:
   ```
   VITE_API_BASE_URL=http://localhost:8000
   ```
3. `src/api/endpoints.js`에 정의된 경로에 맞춰 FastAPI 라우터를 구현하면 코드 수정 없이 바로 연동됩니다.
4. 서버 요청이 실패해도 자동으로 mock 데이터로 폴백되므로(`src/api/withFallback.js`), 백엔드를 부분적으로만 완성한 상태에서도 개발을 계속할 수 있습니다.

## 폴더 구조
- `src/api` — FastAPI 연동 레이어 (엔드포인트 정의, httpClient, mock 폴백)
- `src/mocks` — 목 데이터
- `src/components` — 공용 컴포넌트 (여러 페이지에서 재사용)
- `src/pages` — 페이지별 컴포넌트
- `src/layouts` — 페이지 그룹별 공통 레이아웃 (헤더/푸터)
- `src/styles` — 디자인 토큰 + 전역 CSS

## 참고
- 이미지 자산(팀 로고, 요원, 무기, 맵, 히트박스 등)은 전부 `EmptyImageBox` placeholder로 표시됩니다. 실제 이미지가 준비되면 `src="..."` prop만 넘기면 자동으로 `<img>`로 교체됩니다.
- 탭 상태는 URL 쿼리스트링(`?tab=...`)으로 관리해서 새로고침해도 유지됩니다.
