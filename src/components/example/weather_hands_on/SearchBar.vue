<script setup>
const props = defineProps({
    comment:{
        type:String,
        default : '',
    },
})
const emits = defineEmits([
    'searching-query',
    'searched-query',
])
</script>

<template>
    <h3>도시 검색</h3>
        <form @submit.prevent="emits('searched-query')">
            <input type="text" :value="comment" @input="emits('searching-query',$event.target.value)"/>
        </form>
        <p>검색 중인 도시 : {{ comment }}</p>
</template>