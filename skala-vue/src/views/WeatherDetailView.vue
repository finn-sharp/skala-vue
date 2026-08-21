<script setup>
import {computed} from 'vue'
import {useRouter, useRoute } from 'vue-router';
import {useUnitStore} from '@/stores/configStore.js'

const route = useRoute()
const router = useRouter()
const weatherDetail = route.query.weatherDetail
    ? JSON.parse(route.query.weatherDetail) 
    : null
const handleGoWeatherHome = () => {
    router.push('/')
}

const configStore = useUnitStore()
const displayTemp = computed(()=>{
  const rawTemp = weatherDetail.temp
  if (configStore.unit === 'fahrenheit'){
    return Math.round((rawTemp*9)/5+32)
  }
  return rawTemp
})
</script>
<template>
    <h2>지역별 상제 기상 관측 정보</h2>
    <div>
        <p>{{ displayTemp }}</p>
        <p>{{ weatherDetail}}</p>
    </div>
    <button @click="handleGoWeatherHome">메인 대시보드로 돌아가기</button>
</template>