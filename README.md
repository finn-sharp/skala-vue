# SKALA Vue Weather Front(Vue) 개발 프로젝트

OpenWeather API를 활용해 도시별 현재 날씨를 조회하는 Vue 3 학습 프로젝트입니다. Vue의 기본 기능을 단계별로 적용하고, 직접 만든 디자인 시스템을 프로젝트 전체에 적용했습니다. 각 기능은 별도 View에서 확인할 수 있도록 구성했습니다.

## 1. 디자인 시스템 구현

### 구현 목적

날씨 화면과 실습 화면을 만들 때 반복되는 카드, 여백, 정렬, 테두리 설정을 줄이기 위해 공통 UI 컴포넌트를 만들었습니다. 화면마다 CSS를 새로 작성하는 대신, 레이아웃 컴포넌트와 속성값을 조합하는 방식으로 화면을 구성했습니다.

### 구현 내용

- `Box` 컴포넌트로 배경색, 여백, 테두리, 둥근 모서리를 적용했습니다.
- `HStack`과 `VStack`으로 요소를 가로 또는 세로 방향으로 배치했습니다.
- `Flex`로 요소의 정렬 위치와 간격을 조절했습니다.
- `GridRoot`, `GridItem`으로 카드와 대시보드 화면을 격자 형태로 구성했습니다.
- `Float`로 부모 영역의 특정 위치에 요소를 배치했습니다.
- 각 레이아웃 기능은 Preview와 Code 탭으로 나누어 실제 결과와 사용 예시를 함께 볼 수 있게 했습니다.

## 2. 날씨 목업 구현

### 구현 목적

실제 API를 연결하기 전에 날씨 데이터가 화면에서 어떻게 보일지 먼저 설계했습니다. 임시 데이터를 사용해 카드 목록, 검색, 선택 상태 등 기본 기능을 구현했습니다.

### 구현 내용

- 도시별 이름, 기온, 날씨 상태를 배열로 구성했습니다.
- `v-for`를 사용해 여러 도시의 날씨 카드를 반복 출력했습니다.
- `v-if`를 사용해 검색 결과와 상태에 따라 다른 내용을 표시했습니다.
- 입력값과 이벤트를 연결해 도시 검색 기능을 구현했습니다.
- 한글 입력 과정에서도 검색어가 자연스럽게 반영되도록 입력 이벤트를 처리했습니다.
- 카드 선택과 버튼 클릭에 따라 화면 상태가 변경되도록 구성했습니다.

## 3. Composition API 적용

### 구현 목적

날씨 데이터와 사용자 입력값을 반응형으로 관리하고, 값이 바뀌면 화면도 자동으로 변경되는 흐름을 구현했습니다.

### 구현 내용

- `ref`로 날씨 목록, 검색어, 선택한 도시 등의 상태를 관리했습니다.
- `computed`로 검색어에 맞는 도시 목록을 만들었습니다.
- 검색 결과를 만들 때 원본 날씨 배열은 수정하지 않도록 했습니다.
- `watch`로 선택한 도시와 같은 특정 값의 변화를 감지했습니다.
- `watchEffect`로 검색어 변화에 맞춰 실행되는 동작을 확인했습니다.

## 4. 컴포넌트 분리

### 구현 목적

하나의 파일에 화면과 기능이 모두 들어가는 문제를 줄이기 위해, 각 기능을 역할에 따라 컴포넌트로 분리했습니다.

### 구현 내용

- `WeatherParent.vue`에서 날씨 목록과 검색 상태를 관리했습니다.
- `WeatherCard.vue`에서 도시별 날씨 정보를 카드 형태로 표시했습니다.
- `SearchBar.vue`에서 검색어 입력과 검색 이벤트를 처리했습니다.
- `BaseDashboardCard.vue`에서 여러 화면에 사용할 카드 틀을 만들었습니다.
- 부모 컴포넌트가 `props`로 데이터를 자식에게 전달했습니다.
- 자식 컴포넌트가 `emit`으로 검색어 변경, 카드 선택 등의 이벤트를 부모에게 전달했습니다.
- `slot`을 사용해 같은 카드 틀 안에 화면별 내용을 넣을 수 있도록 했습니다.

## 5. 라우팅과 상태 관리

### 라우팅 구현

Vue Router를 사용해 기능별 화면을 주소로 나누고, 네비게이션 메뉴에서 이동할 수 있도록 구성했습니다.

- `RouterView`를 사용해 현재 주소에 맞는 화면을 표시했습니다.
- 동적 경로를 사용해 도시별 상세 화면을 구성할 수 있도록 했습니다.
- `router.push()`를 사용해 코드에서 화면을 이동할 수 있게 했습니다.
- 정의하지 않은 주소는 Catch-all Route로 처리해 404 화면으로 연결했습니다.

### Pinia 적용

여러 화면에서 함께 사용하는 값은 Pinia Store에서 관리했습니다.

- 온도 단위를 전역 상태로 관리했습니다.
- 섭씨와 화씨를 전환하는 기능을 구현했습니다.
- 화면을 이동해도 선택한 단위가 유지되도록 했습니다.
- `state`, `getter`, `action`을 나누어 상태와 동작을 관리했습니다.

## 6. OpenWeather API 연동

### 구현 목적

임시 데이터 대신 실제 날씨 데이터를 사용하기 위해 OpenWeather API를 연결했습니다.

### 구현 내용

- Axios로 OpenWeather API에 요청을 보냈습니다.
- 도시 이름을 기준으로 현재 날씨 정보를 조회했습니다.
- 기온, 습도, 날씨 설명 등의 값을 화면에 표시했습니다.
- API 응답 데이터를 기존 날씨 카드에서 사용할 수 있는 형태로 정리했습니다.
- 요청 중에는 로딩 상태를 표시했습니다.
- 요청에 실패하면 오류 메시지를 표시했습니다.
- 사용자가 버튼을 누르면 날씨 정보를 다시 조회할 수 있도록 했습니다.

## 7. 환경변수와 API 키 관리

### 구현 목적

API 키가 소스 코드와 Git 커밋에 포함되지 않도록 관리했습니다.

### 구현 내용

- API 키와 API 기본 주소를 환경변수로 분리했습니다.
- Vue 코드에서는 `import.meta.env`를 통해 필요한 값을 가져오도록 구성했습니다.
- 로컬 개발 환경에서 사용하는 `.env` 파일은 Git 추적 대상에서 제외했습니다.
- GitHub에 API 키가 포함된 코드가 올라가지 않도록 관리했습니다.

## 8. GitHub Actions 자동 배포

### 구현 목적

코드를 수정할 때마다 수동으로 빌드하고 배포하는 작업을 줄이기 위해 자동 배포 흐름을 구성했습니다.

### 구현 내용

- GitHub Actions workflow를 작성했습니다.
- `main` 브랜치에 push가 발생하면 배포 workflow가 실행되도록 설정했습니다.
- GitHub Actions의 Linux 실행 환경에서 프로젝트를 빌드하도록 구성했습니다.
- 실행 환경에서 GitHub Secrets 값을 `VITE_OPENWEATHER_API_KEY`와 같은 환경변수로 전달했습니다.
- 전달받은 환경변수를 사용해 Vite 프로덕션 빌드를 실행했습니다.
- 생성된 `dist` 폴더를 GitHub Pages에 배포했습니다.
- 배포가 끝나면 GitHub Pages에 최신 프로젝트 화면이 반영되도록 구성했습니다.

### API 키 관리 방식

API 키를 소스 코드, `.env` 파일, 커밋 기록에 직접 포함하지 않고 GitHub Secrets에 저장했습니다. 배포가 시작될 때만 GitHub Actions의 Linux 실행 환경에 키를 전달해 빌드에 사용하도록 했습니다.

이 방식으로 공개 저장소와 Git 커밋 기록에 API 키가 포함되는 위험을 줄였습니다. 또한 키를 변경해야 할 때 코드 수정 없이 GitHub Secrets 값만 변경할 수 있도록 했습니다.

다만 `VITE_`로 시작하는 값은 Vite 빌드 결과에 포함되어 브라우저에서 확인될 수 있습니다. 따라서 GitHub Secrets는 저장소와 커밋 기록에서 키가 노출되는 문제를 줄이는 방법이며, 데이터베이스 비밀번호처럼 외부에 절대 노출되면 안 되는 값은 서버에서 관리해야 합니다.

### Workflow 예시

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        env:
          VITE_OPENWEATHER_API_KEY: ${{ secrets.VITE_OPENWEATHER_API_KEY }}
          VITE_OPENWEATHER_BASE_URL: ${{ secrets.VITE_OPENWEATHER_BASE_URL }}
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 9. 코드 품질 관리

### 구현 내용

- ESLint를 적용해 Vue 코드의 문법 문제와 규칙 위반을 확인했습니다.
- Prettier를 적용해 들여쓰기, 줄바꿈, 따옴표 등 코드 형식을 통일했습니다.
- `npm run lint`로 코드 규칙을 확인했습니다.
- `npm run format`으로 코드 형식을 정리했습니다.

## 프로젝트 구조

```text
skala-vue/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── api/
│   │   └── weather.js
│   ├── components/
│   │   ├── designsystem/
│   │   │   └── layout/
│   │   └── subject/
│   │       ├── weatherComponent/
│   │       ├── WeatherMockup.vue
│   │       └── WeatherComposition.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   └── configStore.js
│   ├── views/
│   │   ├── LayoutView.vue
│   │   ├── WeatherView.vue
│   │   └── ...
│   ├── App.vue
│   └── main.js
├── .env.example
├── eslint.config.js
├── vite.config.js
└── package.json
```
