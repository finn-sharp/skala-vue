<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: { type: [String, Object], default: 'div' },
  colSpan: { type: [String, Number], default: '' },
  rowSpan: { type: [String, Number], default: '' },
  p: { type: [String, Number], default: '' },
  bg: { type: String, default: '' },

  borderRadius: { type: [String, Number], default: '' },
  borderWidth: { type: [String, Number], default: '' },
  borderColor: { type: String, default: '' },})

const resolveToken = (prefix, value) => {
  if (value === undefined || value === '') return undefined
  if (value === 0 || value === '0') return '0px'
  if (typeof value === 'number' || !isNaN(value)) return `${value}px`
  if (value === 'full') return '100%'
  if (['auto', 'fit-content', 'stretch'].includes(value)) return value
  const formatted = value.replace(/\./g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  return `var(--${prefix}-${formatted}, var(--${formatted}, ${value}))`
}

const computedStyle = computed(() => ({
  // 숫자가 오면 'span N'으로 변환
  gridColumn: props.colSpan ? (typeof props.colSpan === 'number' || !isNaN(Number(props.colSpan)) ? `span ${props.colSpan}` : props.colSpan) : undefined,
  gridRow: props.rowSpan ? (typeof props.rowSpan === 'number' || !isNaN(Number(props.rowSpan)) ? `span ${props.rowSpan}` : props.rowSpan) : undefined,
  backgroundColor: props.bg ? resolveToken('color', props.bg) : undefined,
  padding: resolveToken('spacing', props.p),

  borderRadius: resolveToken('radius', props.borderRadius),
  borderWidth: props.borderWidth !== '' ? `${props.borderWidth}px` : undefined,
  borderColor: resolveToken('color', props.borderColor),
  borderStyle: (props.borderWidth || props.borderColor) ? 'solid' : undefined,

}))
</script>

<template>
  <component :is="as" :style="computedStyle">
    <slot />
  </component>
</template>```