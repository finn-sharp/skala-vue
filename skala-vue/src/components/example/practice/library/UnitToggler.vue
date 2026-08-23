<script setup>
import {useUnitStore} from '@/stores/configStore.js'

const unitStore = useUnitStore()
</script>

<template>
    <div>
        <p>날씨단위: {{unitStore.unit=='celsius' ? "섭씨("+ unitStore.unitSymbol +")" : "화씨("+ unitStore.unitSymbol+")" }}</p>
        <button @click="unitStore.toggleUnit">단위 변경</button>
    </div>
</template>