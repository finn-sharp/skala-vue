<script setup>
import {ref} from 'vue'
const comment = ref('')
const weatherList = ref([
    {id : 'city_01', name: '서울', temp:28, status:'맑음'},
    {id : 'city_02', name: '수원', temp:24, status:'비'},
    {id : 'city_03', name: '부산', temp:26, status:'구름'},
])
const showDetail = (cityName, status) => {
    window.alert(`${cityName}의 현재 날씨는 [${status}] 상태 입니다.`)
}

const cityName = ref('')
const stateComment = ref('')
const getCityName = (name) => {
    cityName.value = name
    stateComment.value = `{${name}}이 선택되었습니다.`
}
</script>

<template>
    <div class="dashboard-wrapper">
        <h1>과제1 : 날씨 (Mockup)</h1>
        <section class="search-box">
            <h3>도시 검색</h3>
            <!-- 양방향 바인딩 : v-model은 한글 초/중/종 조합 때문에 딜레이 있음, 아래 방법(good) -->
            <input type="text" :value="comment" @input="(e)=>{comment=e.target.value; stateComment = `{${comment}}이 선택되었습니다.`}"/>
            <p>검색 중인 도시 : {{ comment }}</p>
        </section>
        
        <section class="list-box">
            <h3>지역별 날씨 현황</h3>
            <div v-for="item in weatherList" :key="item.id" class="weather-card" @click="getCityName(item.name)">
                    <h4>{{ item.name }}({{ item.status }})</h4>
                    <p>현재 기온 : {{ item.temp }}도</p>
                    <span v-if="item.temp >= 25" style="background-color: red;" class="badge hot">더움(25도 이상)</span>
                    <span v-else style="background-color: skyblue;" class="badge cool">선선함(25도 미만)</span>
                    <button class="btn-detail" @click.stop="showDetail(item.name, item.status)">상세보기</button><br>
                <br/>
            </div>
        </section>
        <br/>
    </div>
        <div v-if="stateComment" class="status-bar">{{ stateComment }}</div>
        <div v-else class="status-bar">카드를 클릭하거나 검색해 보세요.</div>
</template>

<style scoped>
/* 1. 전체 최외곽 컨테이너 레벨 정의 */
.app-container {
  max-width: 900px;
  margin: 40px 10px 40px 10px;
  padding: 30px 40px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  font-family:
    'Pretendard',
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    sans-serif;
  color: #2c3e50;
}
/* 2. 대주제 (h1) 및 구분선 (hr) 정돈 */
.app-container h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-top: 48px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
/* 첫 번째 h1 상단 여백 제거 */
.app-container h1:first-of-type {
  margin-top: 0;
}
/* hr */
.app-container hr {
  border: none;
  border-top: 2px solid #e9ecef;
  margin-bottom: 24px;
}
/* 세션 대제목 (h1) 스타일링 */
h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a252f;
  margin-top: 40px;
  margin-bottom: 8px;
}

.navigation-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}
.nav-item {
  text-decoration: none;
  color: #7f8c8d;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.2s ease;
}
.nav-item:hover {
  color: #2c3e50;
}
.divider {
  margin: 0 15px;
  color: #dcdde1;
}

/* 🔥 Vue Router가 활성화된 링크 태그에 자동으로 부여하는 클래스 스펙 */
.navigation-bar .router-link-exact-active {
  color: #3498db;
  border-bottom: 2px solid #3498db;
  padding-bottom: 2px;
}

/* 과제페이지 스타일 - Component 분리 후 각 페이지별로 이동 */
.dashboard-wrapper {
  width: 600px;
  margin: 0 auto;
}
.search-box,
.list-box {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid #e9ecef;
}
input {
  padding: 8px;
  width: 90%;
  font-size: 14px;
}
.weather-card {
  background: #fff;
  border: 1px solid #dee2e6;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
}
.badge {
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
}
.hot {
  background-color: #ff7675;
}
.cool {
  background-color: #74b9ff;
}
.btn-detail {
  position: absolute;
  right: 12px;
  top: 15px;
  padding: 6px 10px;
  cursor: pointer;
}
.status-bar {
  background: #e8f5e9;
  padding: 10px;
  text-align: center;
  color: #2e7d32;
  font-weight: bold;
  border-radius: 6px;
}
</style>