<script setup>
import {ref} from 'vue'

const rawHtmlData = '이 글자는 <span style="color : red; font-weight:bold;"> 빨간색 굵은 글자</span>이다.'
const content = '안녕하세요! <strong>Skala-Vue</strong> 강의 입니다.'

const inputValue = ref('')
const message = ref('')

function showMessage() {
    message.value = inputValue.value
}
</script>

<template>
    <div class="practice-section">
        <h2>v-html 디렉티브 학습</h2>
        <hr/>
        <br/>
        <h3>일반 보간법 {{  }} 사용 결과 : </h3>
        <p>{{ rawHtmlData }}</p>
        <br/>

        <h3>v-html 디렉티브 사용 결과:</h3>
        <p v-html="rawHtmlData"></p>
        <br/>

        <h3>v-text 디렉티브 사용 결과:</h3>
        <p v-text="content"></p>
        <br/>
        
        <h2>v-html XSS학습</h2>
        <!--
            XSS 공격 : <img src="x" onerror="window.location.href='https://google.com'"/> 입력
            게시판이나 댓글이나 입력창에 악성 Js를 심어두고, 글을 읽을 때, 브라우저에서 해커의 코드가 강제로 실행되게 만들어 쿠키, 세션 토큰, 로그인 정보를 탈취하는 기법
         -->
        <input v-model="inputValue" placeholder="내용을 입력하세요"/>
        <button @click="showMessage">확인</button>
        <div v-html="message"></div>


    </div>
</template>