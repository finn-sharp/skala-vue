<script setup>
import {ref} from 'vue'

const isVisible = ref(true)

const fruits = ref(['사과', '바나나','딸기'])
const user = ref({
    name : '홍길동',
    age : 25,
    role : '개발자',
})
const items = ref([
    {id : 'prod_101', name:'아이폰'},
    {id : 'prod_102', name:'갤럭시'},
])
const message = ref("안녕하세요!")
const messageSecond = ref("느린 네트워크에서도 안전하게 출력되는 메세지")
const count = ref(1)

const name = ref('홍길동')
const age = ref(20)

const handleSubmit = (e) => {
    console.log(name, age);
    e.preventDefault();
}
</script>

<template>
    <div class="practice-section">
        <h2>v-show 디렉티브 학습</h2>
        <hr/>
        <br/>
        <button @click="isVisible = !isVisible">화면 토글하기</button>
        <br />

        <div v-show="isVisible" class="box">
            <p>v-show 상자</p>
            <p>조건이 false가 되면 CSS display: none이 붙습니다.</p>
        </div>
        <br/>

        <h2>v-for 디렉티브 학습</h2>
        <hr/>
        <br/>
        <h3>1) 배열 렌더링</h3>
        <ul>
            <li v-for="(fruit, index) in fruits" :key="index">{{ index+1 }}번 과일: {{ fruit }}</li>
        </ul>
        <h3>2) 객체 렌더링</h3>
        <ul>
            <li v-for="(value, key, index) in user" :key="key">[{{ index }}] {{ key }} : {{ value }}</li>
        </ul>
        <h3>3) 배열 내 객체 렌더링</h3>
        <ul>
            <li v-for="(item, index) in items" :key="item.id">[{{ index }}] {{ item.name }}</li>
        </ul>

        <h2>v-pre 디렉티브 학습</h2>
        <hr/>
        <br/>
        <p>일반 출력 : {{ message }}</p>
        <p v-pre>v-pre 출력 : {{ message }}</p>

        <h2>v-clock 디렉티브 학습</h2>
        <hr/>
        <br/>
        <p>{{ messageSecond }}</p>

        <h2>v-once 디렉티브 학습</h2>
        <hr/>
        <br/>
        <p>일반 변수 (실시간): {{ count }}</p>
        <p v-once>v-once 변수 (최초 고정): {{ count }}</p>
        <button @click="count++">숫자 증가 버튼</button>

        <h2>v-memo 디렉토리 학습</h2>
        <hr/>
        <br/>
        <div v-memo="[name]" style="padding:20px; border:1px solid #42b883; margin-bottom:10px">
            <p>v-memo 적용 영역(기준 : name)</p>
            <p>이름 : {{ name }}</p>
            <p>나이 : {{ age }} (name이 바뀌어야 얘도 갱신됨)</p>
        </div>
        <form @submit="handleSubmit">
            <button @click="name = '이순신'">1. 이름 변경(이순신)</button>&nbsp;
            <button @click="age++">2. 나이 한 살 추가(age++)</button>&nbsp;
            <button type="submit">제출하기</button>
        </form>   
    </div>
</template>

<style scoped>
.box{
    padding : 10px;
    margin-top: 5px;
    color:white;
    border-radius: 5px;
    background-color: #3498db;
}
[v-cloak]{
    display: none !important;
}
</style>