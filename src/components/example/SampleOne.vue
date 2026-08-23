<script setup>
import {ref} from 'vue'

let normalCount=0 // 값(Primitive)
const vueCount = ref(0) // Binding 시킴(반응형 변수)
</script>

<template>
    <div class="practice-section">
        <h3>일반 변수 클릭 : {{ normalCount }}</h3>
        <button @click="normalCount++">일반 변수 증가</button>
        <br/>
        <h3>Vue 반응성 변수 클릭 : {{ vueCount }}</h3>
        <button @click="vueCount++">Vue 변수 증가</button>
    </div>
</template>

