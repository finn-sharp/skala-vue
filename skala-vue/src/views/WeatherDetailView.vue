<script setup>
import { useRouter, useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter()
const weatherDetail = route.query.weatherDetail
    ? JSON.parse(route.query.weatherDetail) 
    : null
const handleGoWeatherHome = () => {
    router.push('/')
}

</script>
<template>
    <h2>지역별 상제 기상 관측 정보</h2>
    <div>
        <p>{{ weatherDetail}}</p>
    </div>
    <button @click="handleGoWeatherHome">메인 대시보드로 돌아가기</button>
</template>