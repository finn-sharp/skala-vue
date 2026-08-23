<script setup>
import { VStack, HStack, GridRoot, GridItem, Flex, Float } from './components/designsystem/layout/index.js'
import { RouterLink, RouterView } from 'vue-router';
import UnitToggler from './components/subject/weatherStore/UnitToggler.vue';
</script>

<template>
  <div class="app-container">
    <h1>Weather Plan</h1>
    <header>
      <nav>
        <Flex flex-direction="row" gap="x2" :padding-y="30">
          <RouterLink to="/">Home.</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/detail">Subject Details.</RouterLink>
          <RouterLink to="/designsystem">Self-DesignSystem.</RouterLink>
        </Flex>
        <Float placement="middle-end">
          <UnitToggler />
        </Float>
      </nav>
    </header>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>
@import './assets/style.css';
.app-container {
  max-width: 1440px;
  min-width: 780px;
  margin-inline:auto;
}
</style>