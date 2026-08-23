<script setup>
import {ref} from 'vue'

const message = ref('현재 서버 상태 관리')
const userCount = ref(150)
</script>
<template>
    <div class="base-card">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot :text="message" :count="userCount">
                <p>부모에서 slot할당 안해줄 때 default 화면</p>
            </slot>
            <slot>
                <p>기본 콘텐츠 영역</p>
            </slot>
        </main>
    </div>
</template>