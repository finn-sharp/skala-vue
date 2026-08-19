<script setup>
import {ref} from 'vue'
const comment = ref('')
const weatherList = ref([
    {id : 'city_01', name: '서울', temp:28, status:'맑음'},
    {id : 'city_02', name: '수원', temp:24, status:'비'},
    {id : 'city_03', name: '부산', temp:26, status:'구름'},
])
const showDetail = (cityName, status) => {
    window.alert(`${cityName}의 현재 날씨는 [${status}] 상태 입니다.`)
}

const cityName = ref('')
const stateComment = ref('')
const getCityName = (name) => {
    cityName.value = name
    stateComment.value = `{${name}}이 선택되었습니다.`
}
</script>

<template>
    <div class="practice-section">
        <h2>과제1 : 날씨 (Mockup)</h2>
        <hr/>

    </div>

    <div class="practice-subsection">
        <h3>도시 검색</h3>
        <!-- 양방향 바인딩 : v-model은 한글 초/중/종 조합 때문에 딜레이 있음, 아래 방법(good) -->
        <input type="text" :value="comment" @input="(e)=>{comment=e.target.value; stateComment = `{${comment}}이 선택되었습니다.`}"/>
        <p>검색 중인 도시 : {{ comment }}</p>
    </div>
    <br/>

    <div class="practice-subsection">
        <h3>지역별 날씨 현황</h3>
        <ul v-for="item in weatherList" :key="item.id">
            <li @click="getCityName(item.name)" class="practice-card" style="list-style-type: none;">
                {{ item.name }}({{ item.status }})<br>현재 기온 : {{ item.temp }}도
                <button @click.stop="showDetail(item.name, item.status)">상세보기</button><br>
                <label v-if="item.temp >= 25" style="background-color: red;">더움(25도 이상)</label>
                <label v-else style="background-color: skyblue;">선선함(25도 미만)</label>
            </li>
            <br/>
        </ul>
    </div>
    <br/>
    <div v-if="stateComment" style="color:green; background-color: greenyellow; text-align: center;">{{ stateComment }}</div>
    <div v-else style="color:green; background-color: greenyellow; text-align: center;">카드를 클릭하거나 검색해 보세요.</div>
</template>

<style scoped>
.practice-subsection {
    background-color: #eee;
    border-radius:.5%;
}
.practice-card {
    background-color: white;
}
</style>