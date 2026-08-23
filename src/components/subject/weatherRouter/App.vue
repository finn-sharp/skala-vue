<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UnitToggler from '../weatherStore/UnitToggler.vue';
</script>

<template>
  <div class="app-container">
    <div class="dashboard-wrapper">
      <nav class="navigation-bar">
        <RouterLink to="/detail" class="nav-item">🌦️ 날씨 대시보드</RouterLink>
        <span class="divider"> | </span>
        <RouterLink to="/detail/about" class="nav-item">ℹ️ 서비스 소개</RouterLink>
        <UnitToggler />
      </nav>
      <br>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/style.css';
.app-container {
  max-width: 1440px;
  margin-inline: auto;
}
</style>