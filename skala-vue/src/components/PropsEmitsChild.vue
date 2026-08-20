<script setup>
const props = defaultProps({
    messageFromParent : String
})
const emit = defineEmits([
    'request-send-event'
])
const sendToParent = () => {
    const payload = 'child발 메세지'
    emit('request-send-event', payload)
}
</script>

<template>
    <div>{{ messageFromParent }}</div>
    <button @click="sendToParent">부모에게 메세지 보내기</button>
</template>