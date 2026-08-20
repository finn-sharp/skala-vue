<script setup>
const props = defineProps({
    currentQuery:{
        type:String,
        default:'',
    },
})
const emit = defineEmits([
    'update-query'
]) 

</script>

<template>
  <div class="search-inner">
    <h3>도시 검색</h3>
    <input type="text" :value="currentQuery" @input="$emit('update-query', $event.target.value)" placeholder="검색할 도시 이름 입력" />
    <p>
      검색 중인 도시: <strong>{{ currentQuery }}</strong>
    </p>
  </div>
</template>