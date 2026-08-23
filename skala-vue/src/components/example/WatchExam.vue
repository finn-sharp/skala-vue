<script setup>
import {ref, watch} from 'vue'

const currentCity = ref('서울')
const logMessage = ref('아직 감시 시스템이 작동하지 않았습니다.')

watch(currentCity, (newValue, oldValue) => {
    logMessage.value = `감시자 발동! [${oldValue}]에서 [${newValue}]로 변경됨.`
    console.log(`[서버요청 완료] 기상청 서버에서 ${newValue}의 날씨 API를 다시 조회합니다....`)
})

const city = ref('서울')
const dateType = ref('오늘')
const apiStatus = ref('대기중 ...')

watch ([city, dateType], ([newCity, newDate], [oldCity, oldDate]) => {
    apiStatus.value = `[변경 감지] ${oldCity}(${oldDate} -> ${newCity}(${newDate} )`
    console.log(`[통합 API 호출] ${newCity}의 ${newDate} 날씨를 불러옵니다...`)
})

const user = ref({
    name : '홍길동',
    age : 20,
})
const logDeep = ref('아직 반응 없음')
const logTarget = ref('아직 반응 없음')

watch( user, (newVal) => {
    logDeep.value = `[deep 감지] 누군가 변경됨 ! 현재 이름 : ${newVal.name}, 나이 : ${newVal.age} `
    },
    {deep:true},
)

watch( ()=> user.value.age, (newAge, oldAge) => {
    logTarget.value = `[타겟 감지] 나이가 ${oldAge}세 -> ${newAge}세로 변경됨!`
})
</script>

<template>
    <div class="practice-section">
        <h2>감시자 watch()의 원리와 실무 활용</h2>
        <h3>지역 선택 제어판</h3>
        <p>현재 선택된 도시 : {{ currentCity }}</p>
        <button @click="currentCity = '서울'">서울 선택</button>&nbsp;
        <button @click="currentCity = '수원'">수원 선택</button>&nbsp;
        <button @click="currentCity = '부산'">부산 선택</button>
        <div class="monitor">
            <h3>파수꾼(watch) 모니터링 시스템</h3>
            <p>{{ logMessage }}</p>
            <small style="color:gray;">(버튼을 누른 후 브라우저 콘솔창 F12를 확인해보세요)</small>
        </div>

        <h2>여러 개의 변수 동시 감지(watch)</h2>
        <h3>날씨 조건 설정</h3>
        <label>도시 : </label>
        <select v-model="city">
            <option value="서울">서울</option>
            <option value="수원">수원</option>
            <option value="부산">부산</option>            
        </select>
        <label>날짜 : </label>
        <label><input type="radio" value="오늘" v-model="dateType"/>오늘</label>
        <label><input type="radio" value="내일" v-model="dateType"/>내일</label>
        <label><input type="radio" value="주간예보" v-model="dateType"/>주간예보</label>
        <div class="monitor">
            <h3>통합 모니터링 로그</h3>
            <p>현재 상태 : {{ apiStatus }}</p>
        </div>

        <h2>ref 객체/배열 감시</h2>
        <h3>회원 데이터 조작 panel</h3>
        <p>이름 : {{ user.name }} / 나이 : {{ user.age }}세</p>
        <button @click="user.name = '이순신'">이름만 변경</button>&nbsp;
        <button @click="user.age++">나이만 변경(age++)</button>

        <div class="monitor">
            <p>1) deep:true 모니터 (전체 감시)</p>
            <p>{{ logDeep }}</p>
        </div>

        <div class="moitor target">
            <p>2) 화살표 함수 모니터 (나이만 타겟 감시)</p>
            <p>{{ logTarget }}</p>
        </div>
    </div>
</template>