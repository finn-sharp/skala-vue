<script setup>
import {ref} from 'vue'
// inline-handler
const count = ref(0)

// method-handler
function handleClick() {
    alert("버튼이 클릭되었습니다.")
}
// method-handler 2
const showAlert = () => {
    alert("함수가 성공적으로 호출되었습니다!")
}

// Event Object
const position = ref('')
const tagName = ref('')
const getOnlyEvent = (e) => {
    position.value = `좌표: X=${e.clientX}, Y=${e.clientY}`
}
const getWithParam = (name, e) => {
    tagName.value = `대상 : ${name} / 클릭된 태그 : ${e.target.tagName}`
}
</script>

<template>
    <div class="practice-section">
        <h2>v-on 이벤트 핸들링 기초</h2>
        <hr/>
        <h3>1) 인라인 연산 처리</h3>
        <p>현재 카운트 : {{ count2 }}</p>
        <button @click="count++">1씩 증가</button>
        <br/>
        
        <h3>2) 스크립트 함수 호출</h3>
        <button @click="showAlert()">알림창 띄우기(함수를 등록)</button>
        <button @click="handleClick">클릭하세요(Listener 등록)</button>
        <br/>

        <h2>v-on 이벤트 객체($event) 활용</h2>
        <hr/>
        <p>좌표 : {{ position }}</p>
        <p>태그 : {{ tagName }}</p>
        <button @click="getOnlyEvent">클릭 좌표 알아내기</button>
        <button @click="getWithParam('회원', $event)">회원 정보와 태그 확인</button>
    </div>
</template>