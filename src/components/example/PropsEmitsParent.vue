<script setup>
import {ref} from 'vue'
import ChildComponent from './PropsEmitsChild.vue'

const messageToChild = ref('초기 부모 메세지')
// emit(payload:message)를 받아서 자식 - 부모 간의 단방향 메세지 전달
const handleChildEvent = (message) => {
    console.log('자식에게 받은 메세지 : ', message)
    messageToChild.value = message
}
</script>

<template>
    <!-- @에서 emit, :에서 props  -->
    <ChildComponent :message-from-parent="message-to-child" @request-send-event="handleChildEvent"/>
</template>