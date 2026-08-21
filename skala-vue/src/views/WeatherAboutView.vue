<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const handleGoWeatherHome = () => {
    router.push('/')
}
</script>

<template>
    <h2>서비스 소개</h2>
    <div>
        <p>본 앱은 Vue3 및 Vue Router 4기반 제작된 실습용 기상 관측 대시보드 시스템입니다</p>
        <ul>
            <li>components/exercise/ 폴더 내부의 독립 부품 연동</li>
            <li>클라이언트 사이드 라우팅을 통한 새로고침없는 화면 전환</li>
            <li>URL 쿼리 스트링 매핑을 활용한 실시간 검색 상태 동기화</li>
        </ul>
        <button @click.prevent="handleGoWeatherHome">대시보드 홈으로 이동</button>
    </div>
</template>