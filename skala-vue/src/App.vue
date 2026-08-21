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
// import WeatherParent from './components/weather_hands_on/WeatherParent.vue';

// component mount/unmpount
// import LifeCycleHook from './components/LifeCycleHook.vue';
// import {ref} from 'vue'
// const isActive = ref(true)

import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="practice-container">
    <nav>
      <RouterLink to="/">날씨 대시보드</RouterLink>
      <RouterLink to="/about">서비스 소개</RouterLink>
    </nav>

    <RouterView/>    
  </div>
</template>

<style scoped>
@import '@/assets/practice.css';
</style>
