<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: { type: [String, Object], default: 'div' },
  
  // GridItem 전용 프로퍼티
  colSpan: { type: [Number, String], default: undefined },
  rowSpan: { type: [Number, String], default: undefined },
  colStart: { type: [Number, String], default: undefined },
  colEnd: { type: [Number, String], default: undefined },
  rowStart: { type: [Number, String], default: undefined },
  rowEnd: { type: [Number, String], default: undefined },

  // 스타일 및 간격 속성
  bg: { type: String, default: '' },
  background: { type: String, default: '' },
  color: { type: String, default: '' },
  padding: { type: [String, Number], default: '' },
  p: { type: [String, Number], default: '' },
  borderRadius: { type: [String, Number], default: '' },
  
  alignSelf: { type: String, default: '' },
  justifySelf: { type: String, default: '' },
})

const resolveSpacing = (value) => {
  if (value === undefined || value === '') return undefined
  if (value === 0 || value === '0') return '0px'
  if (typeof value === 'number' || !isNaN(value)) return `${value}px`
  return `var(--spacing-${value.replace(/\./g, '-')}, var(--${value}, ${value}))`
}

const resolveSpan = (span) => {
  if (span === undefined) return undefined
  if (span === 'full') return '1 / -1'
  return `span ${span} / span ${span}`
}

const computedStyle = computed(() => {
  const pVal = props.padding || props.p

  return {
    gridColumn: props.colStart 
      ? `${props.colStart} / ${props.colEnd || 'auto'}` 
      : resolveSpan(props.colSpan),
      
    gridRow: props.rowStart 
      ? `${props.rowStart} / ${props.rowEnd || 'auto'}` 
      : resolveSpan(props.rowSpan),

    alignSelf: props.alignSelf || undefined,
    justifySelf: props.justifySelf || undefined,
    padding: resolveSpacing(pVal),
  }
})
</script>

<template>
  <component :is="as" :style="computedStyle">
    <slot />
  </component>
</template>