<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const handleGoWeatherHome = () => {
    router.push('/')
}
</script>
<template>
    <div></div>
        <h2>페이지를 찾을 수 없습니다</h2>
        <p>요청하신 주소가 존재하지 않거나, 앚기 개발되지 않았습니다.</p>
        <button @click="handleGoWeatherHome">날씨 메인으로 이동</button>
</template>