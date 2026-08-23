<script setup>
import { ref } from 'vue'
import HStack from '../components/designsystem/layout/HStack.vue'
import VStack from '../components/designsystem/layout/VStack.vue'
import GridRoot from '../components/designsystem/layout/GridRoot.vue'
import GridItem from '../components/designsystem/layout/GridItem.vue'
import Flex from '../components/designsystem/layout/Flex.vue'
import Float from '../components/designsystem/layout/Float.vue'
import Box from '../components/designsystem/layout/Box.vue'

const tabs = ref({
  stack: 'preview',
  flex: 'preview',
  float: 'preview',
  grid: 'preview'
})
</script>

<template>
  <!-- 좌측 정렬을 위해 margin-x를 제거하고 기본 가이드 레이아웃 적용 -->
  <Box class="doc-container" padding-y="6">
    <VStack width="full" gap="x6">
      
      <!-- 헤더 -->
      <VStack class="doc-header" gap="x2">
        <h1 class="doc-title">Layout Components</h1>
        <p class="doc-desc">우리 팀의 일관된 UI 배치를 위한 핵심 레이아웃 아키텍처 가이드입니다.</p>
      </VStack>

      <!-- 1. Stack 시스템 -->
      <VStack class="doc-section" gap="x2">
        <h2>Stack System</h2>
        <p class="section-desc">HStack과 VStack을 조합하여 수평 및 수직 방향의 레이아웃을 구성합니다.</p>
        
        <Box class="doc-card" border-radius="r2">
          <HStack class="tab-header" gap="x4">
            <button :class="{ active: tabs.stack === 'preview' }" @click="tabs.stack = 'preview'">Preview</button>
            <button :class="{ active: tabs.stack === 'code' }" @click="tabs.stack = 'code'">Code</button>
          </HStack>

          <!-- 1. Preview 패널 (preview일 때만 노출) -->
          <Box class="tab-content preview-panel" v-show="tabs.stack === 'preview'">
            <VStack bg="pastelContainer" border-color="pastelBorder" :border-width="1" border-radius="r3" gap="x3" width="full" p="x4">
              <HStack gap="x3" width="full">
                <Box bg="pastelItemBg" border-color="pastelItemBorder" :border-width="1" border-radius="r2" px="x4" py="x3" class="box-label flex-1">H-Item 1</Box>
                <Box bg="pastelItemBg" border-color="pastelItemBorder" :border-width="1" border-radius="r2" px="x4" py="x3" class="box-label flex-1">H-Item 2</Box>
              </HStack>
              <VStack gap="x2" width="full">
                <Box bg="pastelItemBg" border-color="pastelItemBorder" :border-width="1" border-radius="r2" px="x4" py="x3" class="box-label">V-Item 1</Box>
                <Box bg="pastelItemBg" border-color="pastelItemBorder" :border-width="1" border-radius="r2" px="x4" py="x3" class="box-label">V-Item 2</Box>
              </VStack>
            </VStack>
          </Box>

          <!-- 2. Code 패널 (바깥으로 분리! code일 때만 노출) -->
          <div v-show="tabs.stack === 'code'" class="code-panel">
            <pre>
              <code>
&lt;VStack bg="pastelContainer" border-radius="r3" gap="x3" p="x4"&gt;
  &lt;HStack gap="x3"&gt;
    &lt;Box bg="pastelItemBg" border-radius="r2"&gt;H-Item 1&lt;/Box&gt;
    &lt;Box bg="pastelItemBg" border-radius="r2"&gt;H-Item 2&lt;/Box&gt;
  &lt;/HStack&gt;
  &lt;VStack gap="x2"&gt;
    &lt;Box bg="pastelItemBg" border-radius="r2"&gt;V-Item 1&lt;/Box&gt;
    &lt;Box bg="pastelItemBg" border-radius="r2"&gt;V-Item 2&lt;/Box&gt;
  &lt;/VStack&gt;
&lt;/VStack&gt;</code>
            </pre>
          </div>
        </Box>
      </VStack>

      <!-- 2. Flex 시스템 -->
      <VStack class="doc-section" gap="x2">
        <h2>Flex Layout</h2>
        <p class="section-desc">정렬과 방향을 자유롭게 제어하는 유연한 플렉스 컨테이너입니다.</p>
        
        <Box class="doc-card" border-radius="r2">
          <HStack class="tab-header" gap="x4">
            <button :class="{ active: tabs.flex === 'preview' }" @click="tabs.flex = 'preview'">Preview</button>
            <button :class="{ active: tabs.flex === 'code' }" @click="tabs.flex = 'code'">Code</button>
          </HStack>

          <Box class="tab-content">
            <div v-show="tabs.flex === 'preview'" class="preview-panel">
              <Flex justify="between" align="center" bg="pastelContainer" border-color="pastelBorder" :border-width="1" :border-radius="r3" p="x4" width="full">
                <Box bg="pastelItemBg" border-color="pastelItemBorder" :border-width="1" border-radius="r2" px="x4" py="x3" class="box-label">Flex Left</Box>
                <Box bg="pastelItemBg" border-color="pastelItemBorder" :border-width="1" border-radius="r2" px="x4" py="x3" class="box-label">Flex Right</Box>
              </Flex>
            </div>
            <div v-show="tabs.flex === 'code'" class="code-panel">
              <pre>
                <code>
&lt;Flex justify="between" align="center" bg="pastelContainer" border-radius="r3" p="x4"&gt;
&lt;Box bg="pastelItemBg" border-radius="r2"&gt;Flex Left&lt;/Box&gt;
&lt;Box bg="pastelItemBg" border-radius="r2"&gt;Flex Right&lt;/Box&gt;
&lt;/Flex&gt;</code>
              </pre>
            </div>
          </Box>
        </Box>
      </VStack>

      <!-- 3. Float 포지셔닝 -->
      <VStack class="doc-section" gap="x2">
        <h2>Float Positioning</h2>
        <p class="section-desc">방위 기준에 따라 요소를 절대 좌표로 정확히 배치합니다.</p>
        
        <Box class="doc-card" border-radius="r2">
          <HStack class="tab-header" gap="x4">
            <button :class="{ active: tabs.float === 'preview' }" @click="tabs.float = 'preview'">Preview</button>
            <button :class="{ active: tabs.float === 'code' }" @click="tabs.float = 'code'">Code</button>
          </HStack>

          <Box class="tab-content">
            <div v-show="tabs.float === 'preview'" class="preview-panel">
              <Box width="100%" height="50px" bg="pastelContainer" border-color="pastelBorder" :border-width="1" border-radius="r3" class="relative p-4">
                <Float placement="top-start"><button class="doc-btn">top-start</button></Float>
                <Float placement="middle-center"><button class="doc-btn">midle-center</button></Float>
                <Float placement="bottom-end"><button class="doc-btn">bottom-end</button></Float>
              </Box>
            </div>
            <div v-show="tabs.float === 'code'" class="code-panel">
              <pre>
                <code>
&lt;Box height="200px" bg="pastelContainer" border-radius="r3" class="relative p-4"&gt;
  &lt;Float placement="top-start"&gt;&lt;button class="doc-btn"&gt;top-start&lt;/button&gt;&lt;/Float&gt;
  &lt;Float placement="middle-center"&gt;&lt;button class="doc-btn"&gt;middle-center&lt;/button&gt;&lt;/Float&gt;
  &lt;Float placement="bottom-end"&gt;&lt;button class="doc-btn primary"&gt;bottom-end&lt;/button&gt;&lt;/Float&gt;
&lt;/Box&gt;</code>
              </pre>
            </div>
          </Box>
        </Box>
      </VStack>

      <!-- 4. Grid 시스템 -->
      <VStack class="doc-section" gap="x2">
        <h2>Grid System</h2>
        <p class="section-desc">col-span과 row-span을 조합하여 대시보드나 다단 카드를 유연하게 배치합니다.</p>
        
        <Box class="doc-card" border-radius="r2">
          <HStack class="tab-header" gap="x4">
            <button :class="{ active: tabs.grid === 'preview' }" @click="tabs.grid = 'preview'">Preview</button>
            <button :class="{ active: tabs.grid === 'code' }" @click="tabs.grid = 'code'">Code</button>
          </HStack>

          <Box class="tab-content">
            <div v-show="tabs.grid === 'preview'" class="preview-panel">
              <GridRoot columns="3" gap="x3" p="x4" bg="pastelContainer" border-color="pastelBorder" :border-width="1" border-radius="r3">
                <!-- 열 2칸, 행 2칸을 차지하는 큰 아이템 -->
                <GridItem bg="pastelItemBg" border-color="pastelItemBorder" :border-width="1" border-radius="r2" p="x3" :col-span="2" :row-span="2" class="box-label flex items-center justify-center" style="min-height: 80px;">
                  Col 2 / Row 2
                </GridItem>
                <GridItem bg="pastelItemBg" border-color="pastelItemBorder" :border-width="1" border-radius="r2" p="x3" class="box-label">Item 1</GridItem>
                <GridItem bg="pastelItemBg" border-color="pastelItemBorder" :border-width="1" border-radius="r2" p="x3" class="box-label">Item 2</GridItem>
                <!-- 전체 너비를 채우는 Col Span 3 아이템 -->
                <GridItem bg="pastelItemBg" border-color="pastelItemBorder" :border-width="1" border-radius="r2" p="x3" :col-span="3" class="box-label">Col Span 3 (Full Width)</GridItem>
              </GridRoot>
            </div>
            <div v-show="tabs.grid === 'code'" class="code-panel">
              <pre><code>&lt;GridRoot columns="3" gap="x3" p="x4" bg="pastelContainer" border-radius="r3"&gt;
  &lt;GridItem bg="pastelItemBg" border-radius="r2" :col-span="2" :row-span="2"&gt;
    Col 2 / Row 2
  &lt;/GridItem&gt;
  &lt;GridItem bg="pastelItemBg" border-radius="r2"&gt;Item 1&lt;/GridItem&gt;
  &lt;GridItem bg="pastelItemBg" border-radius="r2"&gt;Item 2&lt;/GridItem&gt;
  &lt;GridItem bg="pastelItemBg" border-radius="r2" :col-span="3"&gt;
    Col Span 3 (Full Width)
  &lt;/GridItem&gt;
&lt;/GridRoot></code></pre>
            </div>
          </Box>
        </Box>
      </VStack>
    </VStack>
  </Box>
</template>

<style scoped>
/* 좌측 정렬 적용 */
.doc-container {
  text-align: left;
  padding: 40px 20px;
  display: flex;
  justify-content: flex-start;
}

.doc-header {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 20px;
}

.doc-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-heading);
}

.doc-desc, .section-desc {
  font-size: 13px;
  color: var(--color-text);
  opacity: 0.8;
}

.doc-section h2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-heading);
}

.doc-card {
  background: var(--color-layer-default);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-r2);
  overflow: hidden;
}

.tab-header {
  background-color: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  padding: 8px 16px;
}

.tab-header button {
  background: none;
  border: none;
  padding: 4px;
  font-size: 13px;
  color: var(--color-text);
  opacity: 0.6;
  cursor: pointer;
  position: relative;
}

.tab-header button.active {
  color: var(--color-heading);
  font-weight: 600;
  opacity: 1;
}

.tab-header button.active::after {
  content: '';
  position: absolute;
  bottom: -9px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-brand-solid);
}

.preview-panel {
  padding: 20px;
}

.code-panel {
  background: var(--vt-c-black, #181818);
  color: #f9fafb;
  padding: 16px;
  font-family: monospace;
  font-size: 12px;
  overflow-x: auto;
}

.box-label {
  color: var(--color-text);
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.flex-1 {
  flex: 1;
}

.doc-btn {
  padding: 4px 10px;
  background: var(--color-layer-default);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-r1);
  font-size: 12px;
  color: var(--color-text);
  cursor: pointer;
}

.doc-btn:hover {
  background: var(--color-brand-solid);
  color: white;
  border-color: var(--color-brand-solid);
}
</style>