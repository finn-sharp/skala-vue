<script setup>
import {reactive, ref} from 'vue'

const count = ref(0)
const name = ref('홍길동')
const isActivate = ref(true)
const items = ref(['사과', '배'])
const user = ref({name : '이순신', age:30})
const increaseRef = () => {
    count.value++
}
const changeUserName = () => {
    user.value.name = '장보고'
}

const userReactive = reactive({name :'이순신', age : 30})
const celebrateReactive = () => {userReactive.age++}

const items2 = reactive(['사과', '바나나'])
const addItem = () => {items2.push(`과일 ${items2.length + 1}`)}
const removeItem = (index) => {items2.splice(index, 1)}
</script>

<template>
    <div class="practice-section">
        <h2>반응형 상태 ref() 기초</h2>
        <p>Ref 카운트 : <strong>{{ count }}</strong></p>
        <p>이름 : <input v-model="name"/>{{ name }}</p>
        <p>활성 상태 : {{ isActivate ? '활성':"비활성" }}</p>
        <p>과일 목록 : {{ items.join(', ') }}</p>
        <p>사용자 정보 : 이름 - {{ user.name }}, 나이 - {{ user.age }}</p>
        <button @click="increaseRef">Ref 변수 증가</button>
        <button @click="isActivate = !isActivate">토글</button>
        <button @click="items.push('귤')">과일 추가</button>
        <button @click="changeUserName">사용자 이름 변경</button>

        <h2>반응형 상태 Reactive() 특징 및 주의점</h2>
        <h3>1) 객체(Object) reactive</h3>
        <p>이름 : {{ userReactive.name }} / 나이 : {{ userReactive.age }}세</p>
        <button @click="celebrateReactive">reactive 나이 한 살 추가</button>
        
        <h3>2) 배열(Array) reactive</h3>
        <ul>
            <li v-for="(item, index) in items2" :key="index">
                {{ item }}
                <button @click="removeItem(index)" style="margin-left:8px; padding:2px 6px">삭제</button>
            </li>
        </ul>
        <button @click="addItem">과일 항목 추가</button>
    </div>
</template>