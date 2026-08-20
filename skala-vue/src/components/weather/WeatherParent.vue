<script setup>
import {ref, computed, watch, watchEffect} from 'vue'
import BaseDashboardCard from './BaseDashboardCard.vue';
import SearchBar from './SearchBar.vue';
import WeatherCard from './WeatherCard.vue';

const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')

const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
])

const filteredWeatherList = computed(() => {
  const query = searchQuery.value.trim()
  if (!query) return weatherList.value
  return weatherList.value.filter((item) => item.name.includes(query))
})

const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}


watch(selectedCityInfo, (newInfo) => {
  console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${newInfo}"`)
})

watchEffect(() => {
  console.log(`🤖 [watchEffect 자동 호출] 현재 검색어 '${searchQuery.value}'에 매칭되는 API 데이터를 필터링합니다.`)
})

</script>

<template>
    <div class="app-container">
        <BaseDashboardCard>
            <SearchBar :current-query="searchQuery" @update-query="(val) => (searchQuery = val)" />
        </BaseDashboardCard>

        <BaseDashboardCard>
            <!-- prop : 부모에게서 받을 값에 대한 tag 생성, 이 값은 별도로 할당이 필요없음, 부모는 전달값에 대한 데이터 정의-->
             
            <!-- emit : event tag 생성 및 payload(value : param; optional)을 부모에게 전달, 부모에서는 데이터 처리 함수 정의 -->
            <WeatherCard v-for="item in filteredWeatherList" :key="item.id" :city-item="item" @select-card="(msg) => (selectedCityInfo = msg)" @click-detail="showDetail" />
            <p v-if="filteredWeatherList.length === 0" style="text-align: center; color: #e74c3c; padding: 10px 0">😭 검색 결과와 일치하는 도시가 없습니다.</p>
        </BaseDashboardCard>
        
        <div class="status-bar">
            {{ selectedCityInfo }}
        </div>
    </div>
</template>


<style scoped>
.dashboard-wrapper {
  width: 600px;
  margin: 0 auto;
}
</style>