<script setup>
const props = defineProps({
    weatherList:{
        type:Array,
        required:true,
    }
})
const emits = defineEmits([
    'show-detail',
    'get-name',
])
</script>
<template>
    <div v-for="item in weatherList" :key="item.id" class="weather-card" @click="$emit('get-name',item.name)">
        <h4>{{ item.name }}({{ item.status }})</h4>
        <p>현재 기온 : {{ item.temp }}도</p>
        <span v-if="item.temp >= 25" class="badge hot">더움(25도 이상)</span>
        <span v-else class="badge cool">선선함(25도 미만)</span>
        <button class="btn-detail" @click.stop="$emit('show-detail', item.name, item.status)">상세보기</button><br>
        <br/>
    </div>
</template>

<style scoped>
.weather-card {
  background: #fff;
  border: 1px solid #dee2e6;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
}
.badge {
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
}
.hot {
  background-color: #ff7675;
}
.cool {
  background-color: #74b9ff;
}
.btn-detail {
  position: absolute;
  right: 12px;
  top: 15px;
  padding: 6px 10px;
  cursor: pointer;
}
</style>