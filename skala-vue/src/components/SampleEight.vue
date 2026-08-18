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
</script>

<template>
    <div class="practice-session">
        <h2>v-show 디렉티브 학습</h2>
        <button @click="isVisible = !isVisible">화면 토글하기</button>
        <br />

        <div v-show="isVisible" class="box">
            <p>v-show 상자</p>
            <p>조건이 false가 되면 CSS display: none이 붙습니다.</p>
        </div>

        <h2>v-for 디렉티브 학습</h2>
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
        <p>일반 출력 : {{ message }}</p>
        <p v-pre>v-pre 출력 : {{ message }}</p>
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
</style>