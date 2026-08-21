<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: { type: [String, Object], default: 'div' },
  display: { type: [String, Object], default: 'flex' },
  
  // 축약형 및 정식형 모두 양방향 허용
  flexDirection: { type: String, default: '' },
  direction: { type: String, default: '' },
  flexWrap: { type: [String, Boolean], default: '' },
  wrap: { type: [String, Boolean], default: '' },
  
  alignItems: { type: String, default: '' },
  align: { type: String, default: '' },
  justifyContent: { type: String, default: '' },
  justify: { type: String, default: '' },
  alignContent: { type: String, default: '' },
  alignSelf: { type: String, default: '' },
  justifySelf: { type: String, default: '' },
  
  flexGrow: { type: [Boolean, Number], default: '' },
  grow: { type: [Boolean, Number], default: '' },
  flexShrink: { type: [Boolean, Number], default: '' },
  shrink: { type: [Boolean, Number], default: '' },
  
  gap: { type: [String, Number], default: '' },
  width: { type: [String, Number], default: '' },
  minWidth: { type: [String, Number], default: '' },
  maxWidth: { type: [String, Number], default: '' },
  height: { type: [String, Number], default: '' },
  minHeight: { type: [String, Number], default: '' },
  maxHeight: { type: [String, Number], default: '' },

  bg: { type: String, default: '' },
  background: { type: String, default: '' },
  color: { type: String, default: '' },

  padding: { type: [String, Number], default: '' },
  p: { type: [String, Number], default: '' },
  paddingX: { type: [String, Number], default: '' },
  px: { type: [String, Number], default: '' },
  paddingY: { type: [String, Number], default: '' },
  py: { type: [String, Number], default: '' },
  
  margin: { type: [String, Number], default: '' },
  m: { type: [String, Number], default: '' },
  
  borderRadius: { type: [String, Number], default: '' },
  borderWidth: { type: [String, Number], default: '' },
  borderColor: { type: String, default: '' },
})

const resolveToken = (prefix, value) => {
  if (value === undefined || value === '') return undefined
  if (value === 0 || value === '0') return '0px'
  if (typeof value === 'number' || !isNaN(value)) return `${value}px`
  
  // 'full' -> '100%' 변환 보장
  if (value === 'full') return '100%'
  if (['auto', '0', 'fit-content', 'stretch'].includes(value)) return value
  
  const formatted = value.replace(/\./g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  return `var(--${prefix}-${formatted}, var(--${formatted}, ${value}))`
}

const computedStyle = computed(() => {
  // 축약형과 정식형 우선순위 처리
  const dirVal = props.flexDirection !== '' ? props.flexDirection : props.direction
  const wrapVal = props.flexWrap !== '' ? props.flexWrap : props.wrap
  const alignVal = props.alignItems !== '' ? props.alignItems : props.align
  const justifyVal = props.justifyContent !== '' ? props.justifyContent : props.justify
  const growVal = props.flexGrow !== '' ? props.flexGrow : props.grow
  const shrinkVal = props.flexShrink !== '' ? props.flexShrink : props.shrink

  const bgVal = props.bg || props.background
  const pVal = props.padding || props.p
  const pxVal = props.paddingX || props.px
  const pyVal = props.paddingY || props.py
  const mVal = props.margin || props.m
  
  const directionValue = props.flexDirection !== '' ? props.flexDirection : props.direction

  return {
    display: props.display || 'flex',
    flexDirection: directionValue !== '' ? directionValue : undefined,
    flexWrap: typeof wrapVal === 'boolean' ? (wrapVal ? 'wrap' : 'nowrap') : (wrapVal !== '' ? wrapVal : undefined),
    alignItems: alignVal || undefined,
    justifyContent: justifyVal || undefined,
    alignContent: props.alignContent || undefined,
    alignSelf: props.alignSelf || undefined,
    justifySelf: props.justifySelf || undefined,
    
    flexGrow: growVal === true ? 1 : (growVal !== '' ? growVal : undefined),
    flexShrink: shrinkVal === true ? 1 : (shrinkVal !== '' ? shrinkVal : undefined),
    
    gap: resolveToken('spacing', props.gap),

    width: resolveToken('spacing', props.width),
    minWidth: resolveToken('spacing', props.minWidth),
    maxWidth: resolveToken('spacing', props.maxWidth),
    height: resolveToken('spacing', props.height),
    minHeight: resolveToken('spacing', props.minHeight),
    maxHeight: resolveToken('spacing', props.maxHeight),

    backgroundColor: resolveToken('color', bgVal),
    color: resolveToken('color', props.color),

    padding: resolveToken('spacing', pVal),
    paddingLeft: resolveToken('spacing', pxVal),
    paddingRight: resolveToken('spacing', pxVal),
    paddingTop: resolveToken('spacing', pyVal),
    paddingBottom: resolveToken('spacing', pyVal),
    margin: resolveToken('spacing', mVal),

    borderRadius: resolveToken('radius', props.borderRadius),
    borderWidth: props.borderWidth !== '' ? `${props.borderWidth}px` : undefined,
    borderColor: resolveToken('color', props.borderColor),
    borderStyle: (props.borderWidth || props.borderColor) ? 'solid' : undefined,
  }
})
</script>

<template>
  <component :is="as" :style="computedStyle">
    <slot />
  </component>
</template>