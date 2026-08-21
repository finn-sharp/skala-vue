<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: { type: [String, Object], default: 'div' },
  display: { type: [String, Object], default: 'grid' },
  
  // Grid 전용 프로퍼티
  columns: { type: [String, Number], default: '' },
  rows: { type: [String, Number], default: '' },
  autoFlow: { type: String, default: '' },
  autoColumns: { type: String, default: '' },
  autoRows: { type: String, default: '' },
  justifyItems: { type: String, default: '' },
  
  // 공통 레이아웃 & 스타일 속성들
  bg: { type: String, default: '' },
  background: { type: String, default: '' },
  color: { type: String, default: '' },
  gap: { type: [String, Number], default: '' },
  
  padding: { type: [String, Number], default: '' },
  p: { type: [String, Number], default: '' },
  paddingX: { type: [String, Number], default: '' },
  px: { type: [String, Number], default: '' },
  paddingY: { type: [String, Number], default: '' },
  py: { type: [String, Number], default: '' },
  
  margin: { type: [String, Number], default: '' },
  m: { type: [String, Number], default: '' },
  
  alignItems: { type: String, default: '' },
  align: { type: String, default: '' },
  justifyContent: { type: String, default: '' },
  justify: { type: String, default: '' },
})

const resolveSpacing = (value) => {
  if (value === undefined || value === '') return undefined
  if (value === 0 || value === '0') return '0px'
  if (typeof value === 'number' || !isNaN(value)) return `${value}px`
  if (['auto', 'full'].includes(value)) return value
  const formatted = value.replace(/\./g, '-')
  return `var(--spacing-${formatted}, var(--${formatted}, ${value}))`
}

const resolveTemplate = (value) => {
  if (value === undefined || value === '') return undefined
  if (typeof value === 'number') return `repeat(${value}, minmax(0, 1fr))`
  return value
}

const computedStyle = computed(() => {
  const pVal = props.padding || props.p
  const pxVal = props.paddingX || props.px
  const pyVal = props.paddingY || props.py
  const mVal = props.margin || props.m

  return {
    display: props.display,
    gridTemplateColumns: resolveTemplate(props.columns),
    gridTemplateRows: resolveTemplate(props.rows),
    gridAutoFlow: props.autoFlow || undefined,
    gridAutoColumns: props.autoColumns || undefined,
    gridAutoRows: props.autoRows || undefined,
    justifyItems: props.justifyItems || undefined,
    
    alignItems: props.alignItems || props.align || undefined,
    justifyContent: props.justifyContent || props.justify || undefined,
    gap: resolveSpacing(props.gap),

    padding: resolveSpacing(pVal),
    paddingLeft: resolveSpacing(pxVal),
    paddingRight: resolveSpacing(pxVal),
    paddingTop: resolveSpacing(pyVal),
    paddingBottom: resolveSpacing(pyVal),
    margin: resolveSpacing(mVal),
  }
})
</script>

<template>
  <component :is="as" :style="computedStyle">
    <slot />
  </component>
</template>