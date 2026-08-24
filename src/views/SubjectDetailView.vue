<script setup>
import {VStack, GridRoot, GridItem, Box} from '../components/designsystem/layout/index.js'

// 1번 과제
import WeatherMockup from '../components/subject/WeatherMockup.vue'

// 2번 과제
import WeatherComposition from '../components/subject/WeatherComposition.vue'

// 3번 과제
import {
    WeatherCard, 
    WeatherParent, 
    BaseDashboardCard, 
    SearchBar
} from '../components/subject/weatherComponent/index.js'
const MockupData = [
  { id: 'city_01', name: '테스트[1]', temp: 28, status: '맑음' },
  { id: 'city_02', name: '테스트[2]', temp: 24, status: '비' },
  { id: 'city_03', name: '테스트[3]', temp: 26, status: '구름' },
  { id: 'city_04', name: '테스트[4]', temp: 23, status: '천둥번개' },
]

// 4번 과제
import { RouterView } from 'vue-router'

// 5번 과제

</script>
<template>
    <VStack>
        <!-- 1번 과제 -->
        <GridRoot columns="3" gap="x4" p="x4">
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>1. Weather Mockup</h2>
                <hr>
                <h3>1.1. 기본 요구사항</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글 입력 처리(:value, @input)</li>
                    <li>이벤트 및 수식어 활용</li>
                    <li>날씨 데이터 배열을 활용한 도시별 날씨 카드 구현</li>
                    <li><strong>본인만의 데이터를 추가하여 Mockup 구현</strong></li>
                </ul>

                <h3>1.2. Trouble Shooting</h3>
                <ul>
                    <li>v-for 렌더링 시 :key를 활용한 고유 식별자 지정</li>
                    <li>검색어 입력 시 한글 조합 과정에서 발생하는 입력 처리 문제 해결</li>
                    <li>v-if를 활용한 날씨 상태별 조건부 렌더링</li>
                    <li>이벤트 버블링 방지를 위한 이벤트 수식어 활용</li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="2" border-radius="r2"><WeatherMockup/></GridItem>
        </GridRoot>
        
        <!-- 2번 과제 -->
        <GridRoot columns="3" gap="x4" p="x4">
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>2. Weather Composition</h2>
                <hr>
                <h3>2.1. 기본 요구사항</h3>
                <ul>
                    <li>ref를 활용한 반응형 상태 관리</li>
                    <li>computed를 활용한 도시 검색 및 필터링</li>
                    <li>watch를 활용한 선택된 도시 상태 변화 감지</li>
                    <li>watchEffect를 활용한 검색어 변화 감지</li>
                    <li>검색 결과에 따른 조건부 렌더링</li>
                    <li>본인만의 반응형 상태 변수, Computed, Watcher 추가</li>
                </ul>

                <h3>2.2. Trouble Shooting</h3>
                <ul>
                    <li>ref 객체의 값을 변경할 때 .value 사용</li>
                    <li>computed를 활용하여 원본 배열을 변경하지 않고 검색 결과 생성</li>
                    <li>watch와 watchEffect의 실행 시점 및 동작 차이 해결</li>
                    <li>검색어와 API 데이터의 도시명을 비교하여 검색 결과 처리</li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="2" border-radius="r2"><WeatherComposition/></GridItem>
        </GridRoot>

        <!-- 3번 과제 -->
        <GridRoot columns="3" gap="x4" p="x4">
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>3. Weather Components</h2>
                <hr>
                <h3>3.1. 기본 요구사항</h3>
                <ul>
                    <li>기능 변경 없이 화면을 4개의 Component로 분리</li>
                    <li>WeatherParent.vue에서 전체 반응형 데이터 관리</li>
                    <li>BaseDashboardCard.vue를 활용한 공통 레이아웃 구성</li>
                    <li>SearchBar.vue를 활용한 도시 검색 기능 구현</li>
                    <li>WeatherCard.vue를 활용한 도시별 날씨 카드 구현</li>
                    <li>Props를 활용한 부모 → 자식 데이터 전달</li>
                    <li>Emits를 활용한 자식 → 부모 이벤트 전달</li>
                    <li>&lt;slot&gt;을 활용한 컴포넌트 콘텐츠 주입</li>
                    <li><strong>본인의 Mockup에 추가 Component를 구성</strong></li>
                </ul>

                <h3>3.2. Trouble Shooting</h3>
                <ul>
                    <li>부모와 자식 컴포넌트 간 Props 및 Emits 데이터 흐름 문제 해결</li>
                    <li>컴포넌트 분리 후 반응형 상태가 정상적으로 유지되도록 처리</li>
                    <li>slot을 활용한 공통 레이아웃과 콘텐츠 분리</li>
                    <li>이벤트 이름과 Props 이름을 일관되게 관리</li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="2" border-radius="r2">
                <GridRoot columns="2" rows="4" gap="x4" p="x4">
                    <GridItem bg="white" p="x2" :col-span="1" :row-span="3" border-radius="r2">
                        <h4>1. WeatherParent.vue</h4>
                        <hr/>
                        <WeatherParent/>
                    </GridItem>
                    <GridItem bg="white" p="x2" :col-span="1" :row-span="3" border-radius="r2">
                        <h4>2. WeatherCard.vue</h4>
                        <hr/>
                        <BaseDashboardCard>
                            <WeatherCard v-for="item in MockupData" :key="item.id" :city-item="item" @select-card="(msg) => (selectedCityInfo = msg)" @click-detail="showDetail" />
                        </BaseDashboardCard>
                    </GridItem>
                    <GridItem bg="white" p="x2" :col-span="1" :row-span="1" border-radius="r2">
                        <h4>3. SearchBar.vue</h4>
                        <hr/>
                        <BaseDashboardCard>
                            <SearchBar :current-query="테스트" @update-query="(val) => (searchQuery = val)" />
                        </BaseDashboardCard>                            
                    </GridItem>
                    <GridItem bg="white" p="x2" :col-span="1" :row-span="1" border-radius="r2">
                        <h4>4. BaseDashboardCard.vue</h4>
                        <hr/>
                        <BaseDashboardCard>
                            <p><br>Section 분할을 위해 만든 디자인 컴포넌트</p><br>
                        </BaseDashboardCard>
                    </GridItem>
                </GridRoot>
            </GridItem>
        </GridRoot>

        <!-- 4번 과제 -->
        <GridRoot columns="3" gap="x4" p="x4">
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>4. Weather Router & Store</h2>
                <hr>
                <h3>4.1. 기본 요구사항(Router)</h3>
                <ul>
                    <li>Vue Router 설정 및 라우터 인스턴스 등록</li>
                    <li>Lazy Loading을 적용한 라우팅 구성</li>
                    <li>RouterLink를 활용한 Navigation Bar 구현</li>
                    <li>RouterView를 활용한 페이지 콘텐츠 영역 구성</li>
                    <li>동적 라우팅을 활용한 도시별 상세 페이지 구현</li>
                    <li>Programmatic Navigation을 활용한 페이지 이동</li>
                    <li>Catch-all Route를 활용한 404 페이지 구현</li>
                    <li>본인만의 View를 추가하고 Routing 구성</li>
                </ul>
                <h3>4.2. 기본 요구사항(Store)</h3>
                <ul>
                    <li>Pinia를 활용한 전역 상태 관리</li>
                    <li>configStore.js에 날씨 단위 상태 관리 구현</li>
                    <li>state를 활용한 현재 온도 단위 관리</li>
                    <li>getter를 활용한 단위 기호 관리</li>
                    <li>action을 활용한 섭씨/화씨 단위 전환</li>
                    <li>UnitToggler.vue를 활용한 단위 변경 UI 구현</li>
                    <li>메인 및 상세 날씨 화면에 전역 단위 설정 적용</li>
                    <li><strong>본인만의 Store를 추가하거나 configStore의 state, getter, action 확장</strong></li>
                </ul>
                <h3>4.3. Trouble Shooting</h3>
                <ul>
                    <li>동적 라우트의 :cityId 파라미터 처리</li>
                    <li>router.push()를 활용한 프로그래밍 방식 페이지 이동</li>
                    <li>새로고침 시 동적 라우트에 맞는 데이터 선택 문제 해결</li>
                    <li>정의되지 않은 경로를 Catch-all Route로 처리</li>
                    <li>GitHub Pages 배포 환경에서 Router 경로 문제 해결</li>
                    <li>컴포넌트 간 동일한 상태를 공유하기 위한 Pinia Store 구성</li>
                    <li>Store의 state, getter, action 접근 방식 문제 해결</li>
                    <li>섭씨와 화씨 간 온도 변환 로직 처리</li>
                    <li>페이지 이동 후에도 전역 단위 상태가 유지되도록 처리</li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="2" border-radius="r2"><RouterView/></GridItem>
        </GridRoot>
        
        <!-- 5번 과제 -->
        <GridRoot columns="3" gap="x4" p="x4">
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>5. Weather Axios</h2>
                <hr>
                <h3>5.1. 기본 요구사항</h3>
                <ul>
                    <li>Axios 라이브러리 설치 및 사용</li>
                    <li>OpenWeatherMap API 가입 및 API Key 발급</li>
                    <li>OpenWeatherMap API를 활용한 실시간 날씨 데이터 조회</li>
                    <li>API 응답 데이터를 기존 WeatherCard 데이터 구조에 맞게 변환</li>
                    <li>Promise.all을 활용한 여러 도시의 날씨 데이터 동시 요청</li>
                    <li>검색 기능과 실제 API 데이터를 연동</li>
                    <li>OpenWeatherMap에서 제공하는 추가 API를 활용한 기능 확장</li>
                    <li><strong>기타 외부 API를 추가하여 Application 기능 확장</strong></li>
                </ul>

                <h3>5.2. Trouble Shooting</h3>
                <ul>
                    <li>환경변수를 활용하여 OpenWeatherMap API Key 관리</li>
                    <li>API Key를 소스 코드에 직접 작성하지 않도록 처리</li>
                    <li>Axios 요청 및 응답 데이터 구조 처리</li>
                    <li>API 호출 실패 및 네트워크 오류 처리</li>
                    <li>API 데이터와 기존 Mock 데이터의 구조 차이 해결</li>
                    <li>비동기 API 요청 중 Loading 상태 처리</li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>6. Weather UI Library</h2>
                <hr>
                <h3>6.1. 기본 요구사항</h3>
                <ul>
                    <li>외부 UI Library 선정</li>
                    <li>선정한 UI Library를 기존 날씨 Application에 적용</li>
                    <li>기존 Component와 UI Library Component의 조합</li>
                    <li>날씨 데이터 및 검색 기능과 UI Library 연동</li>
                    <li><strong>본인만의 UI Component를 추가하여 Application 확장</strong></li>
                </ul>
                <h3>6.2. Trouble Shooting</h3>
                <ul>
                    <li>외부 UI Library 설치 및 프로젝트 설정 문제 해결</li>
                    <li>기존 CSS와 UI Library 스타일 충돌 해결</li>
                    <li>Vue Component와 UI Library Component 간 데이터 전달 처리</li>
                    <li>기존 기능을 유지하면서 UI Library 적용</li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>7. Weather Deployment</h2>
                <hr>
                <h3>8.1. 기본 요구사항</h3>
                <ul>
                    <li>ESLint를 활용한 Source Code 품질 관리</li>
                    <li>API Key를 환경 변수로 관리</li>
                    <li>환경 변수 및 민감한 정보를 Git에 업로드하지 않도록 처리</li>
                    <li>Vite를 활용한 Production Build</li>
                    <li>Build 결과물 생성 및 배포</li>
                    <li>GitHub Actions를 활용한 자동 Build 및 Deployment</li>
                    <li>GitHub Pages를 활용한 정적 웹 애플리케이션 배포</li>
                </ul>

                <h3>8.2. Trouble Shooting</h3>
                <ul>
                    <li>GitHub Push Protection에 의해 API Key가 포함된 커밋이 차단되는 문제 해결</li>
                    <li>.env 파일을 Git에서 제외하고 GitHub Secrets를 활용한 환경 변수 관리</li>
                    <li>GitHub Actions에서 VITE 환경 변수를 Build 단계에 주입</li>
                    <li>Vite Build 시 환경 변수의 적용 범위 문제 해결</li>
                    <li>GitHub Pages의 프로젝트 경로에 맞게 Vite base 설정</li>
                    <li>GitHub Actions에서 package-lock.json 경로 문제 해결</li>
                    <li>dist 디렉터리를 GitHub Pages Artifact로 업로드하여 배포</li>
                </ul>
            </GridItem>
        </GridRoot>
        
    </VStack>
</template>

<style scoped>
@import '@/assets/style.css';
</style>
