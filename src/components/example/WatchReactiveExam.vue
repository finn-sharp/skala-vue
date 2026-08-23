<script setup>
import {reacitve, ref, watch, watchEffect} from 'vue'

const state = reacitve({
    productName:'노트북',
    price:1000,
})
const logAutoDeep = ref('대기중 ...')
const logTarget = ref('대기중 ...')

watch(state, (newVal, oldVal) => {
    logAutoDeep.value = `[자동 deep] 가격 변동! 이전가격인척하는 : ${oldVal.price}원 -> 현재가격 : ${newVal.price}원`
})
watch( () => state.price, (newPrice, oldPrice) => {
    logTarget.value = `[타겟 조준] 가격이 진짜 올랐음! 옛날값 : ${oldPrice}원 -> 바뀐값 : ${newPrice}원`
})

const username = ref('홍길동')
const age = ref(20)
const logMessage = ref('대기중 ...')
watchEffect(()=> {
    logMessage.value = `[자동 감지] 이름 : ${username.value} / 나이 : ${age.value}세`
    console.log(`watchEffect가 내부 변수 변경을 감지하여 실행되었습니다.`)
})
</script>

<template>
    <div class="practice-section">
        <h2>reactive 데이터 watch 감시 규칙</h2>
        <h3>상품 정보 관리 (reactive)</h3>
        <p>상품명 : {{ state.productName }} / 가격 : {{ state.price }}원</p>
        <button @click="state.price += 500">가격 500원 인상</button>

        <div class="monitor">
            <p>1) state 변수 통째로 감시 (deep 자동화)</p>
            <p>{{ logAutoDeep }}</p>
        </div>

        <div class="monitor target">
            <p>2) () => state.price 콕 집어 감시 (과거 추적)</p>
            <p>{{ logTarget }}</p>
            <small>**성공 : 과거의 원본 가격이 칼같이 보존된다.</small>
        </div>

        <h2>자동 감시자 watchEffect()</h2>
        <p>이름 : {{ username }} / 나이 : {{ age }}세</p>
        <button @click="username = '이순신'">이름을 '이순신'으로 변경</button>
        <button @click="age++">나이 한살 추가 (age++)</button>

        <div class="monitor">
            <h3>watchEffect 자동 모니터링 시스템</h3>
            <p>{{ logMessage }}</p>
            <small style="color:gray">**새로고침하자마자 버튼을 안눌러도 로그가 이미 찍혀있는 특징을 주목하세요 !</small>
        </div>
    </div>
</template>