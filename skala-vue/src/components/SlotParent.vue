<script setup>
import SlotChild from './SlotChild.vue';
</script>

<template>
    <div class="practice-section">
        <h2>Default Slot 레이아웃 주입 실습</h2>
        <SlotChild>
            <p>단순 텍스트 문장 주입</p>
        </SlotChild>
        <SlotChild>
            <h2 style="color:#e74c3c">경고 상태</h2>
            <button>확인</button>
        </SlotChild>
        <SlotChild>
            <template v-slot:header>
                <h3>Child 주입 제목</h3>
            </template>
            <p>"내용"</p>
        </SlotChild>
        <SlotChild v-slot="slotBag">
            <p>알림 메세지 : {{ slotBag.text }}</p>
            <p>접속자 수 : {{ slotBag.count }}명</p>
        </SlotChild> 
        <SlotChild></SlotChild> # 기본
    </div>
</template>