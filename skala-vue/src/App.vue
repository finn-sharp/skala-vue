<script setup>
import SampleEight from './components/SampleEight.vue';
import SampleFive from './components/SampleFive.vue';
import SampleFour from './components/SampleFour.vue';
import SampleOne from './components/SampleOne.vue'
import SampleSeven from './components/SampleSeven.vue';
import SampleSix from './components/SampleSix.vue';
import SampleThree from './components/SampleThree.vue';
import SampleTwo from './components/SampleTwo.vue'
import EventHandlerVon from './components/EventHandlerVon.vue'
import EventHandlerModifier from './components/EventHandlerModifier.vue';

</script>

<template>
  <div class="practice-container">
    <SampleOne/>
    <SampleTwo/>
    <SampleThree/>
    <SampleFour/>
    <SampleFive/>
    <SampleSix/>
    <SampleSeven/>
    <SampleEight/>
    <EventHandlerVon/>
    <EventHandlerModifier/>
  </div>
</template>

<style scoped>
@import '@/assets/practice.css';
</style>
