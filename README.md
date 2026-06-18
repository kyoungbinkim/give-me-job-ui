# give-me-job-ui

`give-me-job` 에이전트의 프로젝트 설명과 설치 방법을 소개하는 React 랜딩 페이지입니다.

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

`npm start`는 VibeNest가 주입하는 `PORT` 환경 변수를 사용합니다.

## VibeNest deploy

1. 이 저장소를 GitHub에 push합니다.
2. VibeNest 대시보드에서 GitHub 저장소 URL을 입력합니다.
3. 브랜치는 `main`, 루트 디렉터리는 저장소 루트를 선택합니다.
4. 자동 감지된 Node/Nixpacks 설정으로 배포합니다.
