<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: { type: [String, Object], default: 'div' },
  display: { type: [String, Object], default: 'grid' },
  columns: { type: [String, Number], default: '' },
  templateColumns: { type: [String, Number], default: '' },
  rows: { type: [String, Number], default: '' },
  templateRows: { type: [String, Number], default: '' },
  autoFlow: { type: String, default: '' },
  flow: { type: String, default: '' },
  gap: { type: [String, Number], default: '' },
  p: { type: [String, Number], default: '' },
  bg: { type: String, default: '' },
})

const resolveToken = (prefix, value) => {
  if (value === undefined || value === '') return undefined
  if (value === 0 || value === '0') return '0px'
  if (typeof value === 'number' || !isNaN(value)) return `${value}px`
  if (value === 'full') return '100%'
  if (['auto', 'fit-content', 'stretch'].includes(value)) return value
  const formatted = value.replace(/\./g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  return `var(--${prefix}-${formatted}, var(--${formatted}, ${value}))`
}

const computedStyle = computed(() => {
  const cols = props.columns || props.templateColumns
  const rws = props.rows || props.templateRows

  return {
    display: props.display,
    // 숫자가 오면 바로 repeat 변환, 아니면 입력값 그대로 사용
    gridTemplateColumns: typeof cols === 'number' || !isNaN(Number(cols)) ? `repeat(${cols}, minmax(0, 1fr))` : cols || undefined,
    gridTemplateRows: typeof rws === 'number' || !isNaN(Number(rws)) ? `repeat(${rws}, minmax(0, 1fr))` : rws || undefined,
    gridAutoFlow: props.autoFlow || props.flow || undefined,
    gap: resolveToken('spacing', props.gap),
    padding: resolveToken('spacing', props.p),
    backgroundColor: props.bg ? resolveToken('color', props.bg) : undefined,
  }
})
</script>

<template>
  <component :is="as" :style="computedStyle">
    <slot />
  </component>
</template>```