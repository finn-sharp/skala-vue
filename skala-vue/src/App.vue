<script setup>
import { VStack, HStack, GridRoot, GridItem, Flex, Float } from './components/designsystem/layout/index.js'
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="app-container">
    <h1>hello,world</h1>
    <header>
      <nav>
        <Flex flex-direction="row" gap="x2" :padding-y="30">
          <RouterLink to="/">Weather Home.</RouterLink>
          <RouterLink to="/about">README.md</RouterLink>
          <RouterLink to="/detail">Subject Details.</RouterLink>
          <RouterLink>Self-DesignSystem.</RouterLink>
        </Flex>
        <Float placement="middle-end"><button>날씨 변경</button></Float>
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
  max-width: 1280px;
  margin-inline:auto;
}
</style>