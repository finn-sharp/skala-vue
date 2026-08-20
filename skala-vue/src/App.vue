<script setup>
// import SampleEight from './components/SampleEight.vue';
// import SampleFive from './components/SampleFive.vue';
// import SampleFour from './components/SampleFour.vue';
// import SampleOne from './components/SampleOne.vue'
// import SampleSeven from './components/SampleSeven.vue';
// import SampleSix from './components/SampleSix.vue';
// import SampleThree from './components/SampleThree.vue';
// import SampleTwo from './components/SampleTwo.vue'
// import EventHandlerVon from './components/EventHandlerVon.vue'
// import EventHandlerModifier from './components/EventHandlerModifier.vue';
// import EventBinding from './components/EventBinding.vue';
// import ComputedExam from './components/ComputedExam.vue';
// import WatchExam from './components/WatchExam.vue';
// import WatchReactiveExam from './components/WatchReactiveExam.vue';
// import WeatherMockup from './components/WeatherMockup.vue';
// import ReactiveState from './components/ReactiveState.vue';
// import WeatherComposition from './components/WeatherComposition.vue/index.js';
import LifeCycleHook from './components/LifeCycleHook.vue';
import {ref} from 'vue'
const isActive = ref(true)
</script>

<template>
  <div class="practice-container">
    <!-- Code Challenge -->
    <!-- <SampleOne/>
    <SampleTwo/>
    <SampleThree/>
    <SampleFour/>
    <SampleFive/>
    <SampleSix/>
    <SampleSeven/>
    <SampleEight/>
    <EventHandlerVon/>
    <EventHandlerModifier/>
    <EventBinding/>
    <ReactiveState/>
    <ComputedExam/>
    <WatchExam/>
    <WatchReactiveExam/> -->
    
    <section>
        <h2>Lifecycle Hook</h2>
        <p>현재 조건 : {{ !isActive }}</p>
        <button @click.prevent="isActive = !isActive" >{{isActive ? "실습 컴포넌트 마운트하기":"실습 컴포넌트 파괴하기(v-if='false')"}}</button>
        <LifeCycleHook v-if="isActive"/>
    </section>
    
    <!-- Hands on -->
    <!-- <WeatherMockup/> -->
    <!-- <WeatherComposition/> -->
  </div>
</template>

<style scoped>
@import '@/assets/practice.css';
</style>
