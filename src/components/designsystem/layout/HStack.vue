<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: { type: [String, Object], default: 'div' },
  
  // HStack 전용 축약/매핑 속성 (direction, align, justify 등)
  direction: { type: String, default: 'row' },
  flexDirection: { type: String, default: '' },
  align: { type: String, default: 'center' }, // HStack은 기본 center가 많음
  alignItems: { type: String, default: '' },
  justify: { type: String, default: 'flex-start' },
  justifyContent: { type: String, default: '' },
  wrap: { type: [String, Boolean], default: '' },
  flexWrap: { type: [String, Boolean], default: '' },
  grow: { type: [Boolean, Number], default: '' },
  flexGrow: { type: [Boolean, Number], default: '' },
  shrink: { type: [Boolean, Number], default: '' },
  flexShrink: { type: [Boolean, Number], default: '' },

  // Background & Color
  bg: { type: String, default: '' },
  background: { type: String, default: '' },
  color: { type: String, default: '' },
  
  // Border
  borderColor: { type: String, default: '' },
  borderWidth: { type: [String, Number], default: '' },
  borderTopWidth: { type: [String, Number], default: '' },
  borderRightWidth: { type: [String, Number], default: '' },
  borderBottomWidth: { type: [String, Number], default: '' },
  borderLeftWidth: { type: [String, Number], default: '' },
  
  borderRadius: { type: [String, Number], default: '' },
  borderTopLeftRadius: { type: [String, Number], default: '' },
  borderTopRightRadius: { type: [String, Number], default: '' },
  borderBottomRightRadius: { type: [String, Number], default: '' },
  borderBottomLeftRadius: { type: [String, Number], default: '' },
  
  // Size & Layout
  width: { type: [String, Number], default: '' },
  minWidth: { type: [String, Number], default: '' },
  maxWidth: { type: [String, Number], default: '' },
  height: { type: [String, Number], default: '' },
  minHeight: { type: [String, Number], default: '' },
  maxHeight: { type: [String, Number], default: '' },
  
  // Position
  position: { type: String, default: '' },
  top: { type: [String, Number], default: '' },
  right: { type: [String, Number], default: '' },
  bottom: { type: [String, Number], default: '' },
  left: { type: [String, Number], default: '' },
  zIndex: { type: [String, Number], default: '' },
  
  // Display & Gap
  display: { type: String, default: 'flex' },
  gap: { type: [String, Number], default: '' },
  
  // Padding
  padding: { type: [String, Number], default: '' },
  p: { type: [String, Number], default: '' },
  paddingX: { type: [String, Number], default: '' },
  px: { type: [String, Number], default: '' },
  paddingY: { type: [String, Number], default: '' },
  py: { type: [String, Number], default: '' },
  paddingTop: { type: [String, Number], default: '' },
  pt: { type: [String, Number], default: '' },
  paddingRight: { type: [String, Number], default: '' },
  pr: { type: [String, Number], default: '' },
  paddingBottom: { type: [String, Number], default: '' },
  pb: { type: [String, Number], default: '' },
  paddingLeft: { type: [String, Number], default: '' },
  pl: { type: [String, Number], default: '' },

  // Margin
  margin: { type: [String, Number], default: '' },
  m: { type: [String, Number], default: '' },
  marginX: { type: [String, Number], default: '' },
  mx: { type: [String, Number], default: '' },
  marginY: { type: [String, Number], default: '' },
  my: { type: [String, Number], default: '' },
  marginTop: { type: [String, Number], default: '' },
  mt: { type: [String, Number], default: '' },
  marginRight: { type: [String, Number], default: '' },
  mr: { type: [String, Number], default: '' },
  marginBottom: { type: [String, Number], default: '' },
  mb: { type: [String, Number], default: '' },
  marginLeft: { type: [String, Number], default: '' },
  ml: { type: [String, Number], default: '' },
})

/**
 * 범용 토큰 변환 헬퍼 함수
 */
const resolveToken = (prefix, value) => {
  if (value === undefined || value === '') return undefined
  if (value === 0 || value === '0') return '0px'
  if (typeof value === 'number' || !isNaN(value)) return `${value}px`
  
  // 'full'은 CSS에서 100%로 변환해야 정상 작동합니다.
  if (value === 'full') return '100%'
  if (['auto', '0', 'fit-content', 'stretch'].includes(value)) return value
  
  const formatted = value.replace(/\./g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  return `var(--${prefix}-${formatted}, var(--${formatted}, ${value}))`
}

const computedStyle = computed(() => {
  const bgVal = props.bg || props.background
  
  // Flex 속성 단축어/정식속성 병합 처리
  const dirVal = props.flexDirection || props.direction
  const alignVal = props.alignItems || props.align
  const justifyVal = props.justifyContent || props.justify
  const wrapVal = props.flexWrap !== '' ? props.flexWrap : props.wrap
  const growVal = props.flexGrow !== '' ? props.flexGrow : props.grow
  const shrinkVal = props.flexShrink !== '' ? props.flexShrink : props.shrink

  // Padding 우선순위 계산
  const pVal = props.padding || props.p
  const pxVal = props.paddingX || props.px
  const pyVal = props.paddingY || props.py
  const ptVal = props.paddingTop || props.pt
  const prVal = props.paddingRight || props.pr
  const pbVal = props.paddingBottom || props.pb
  const plVal = props.paddingLeft || props.pl

  // Margin 우선순위 계산
  const mVal = props.margin || props.m
  const mxVal = props.marginX || props.mx
  const myVal = props.marginY || props.my
  const mtVal = props.marginTop || props.mt
  const mrVal = props.marginRight || props.mr
  const mbVal = props.marginBottom || props.mb
  const mlVal = props.marginLeft || props.ml

  return {
    // Flex Layout Defaults & Overrides
    display: props.display,
    flexDirection: dirVal,
    alignItems: alignVal,
    justifyContent: justifyVal,
    flexWrap: typeof wrapVal === 'boolean' ? (wrapVal ? 'wrap' : 'nowrap') : wrapVal || undefined,
    flexGrow: growVal === true ? 1 : growVal !== '' ? growVal : undefined,
    flexShrink: shrinkVal === true ? 1 : shrinkVal !== '' ? shrinkVal : undefined,
    gap: resolveToken('spacing', props.gap),

    // Background & Color
    backgroundColor: resolveToken('color', bgVal),
    color: resolveToken('color', props.color),
    
    // Border
    borderColor: resolveToken('color', props.borderColor),
    borderWidth: props.borderWidth !== '' ? `${props.borderWidth}px` : undefined,
    borderTopWidth: props.borderTopWidth !== '' ? `${props.borderTopWidth}px` : undefined,
    borderRightWidth: props.borderRightWidth !== '' ? `${props.borderRightWidth}px` : undefined,
    borderBottomWidth: props.borderBottomWidth !== '' ? `${props.borderBottomWidth}px` : undefined,
    borderLeftWidth: props.borderLeftWidth !== '' ? `${props.borderLeftWidth}px` : undefined,
    borderStyle: (props.borderWidth || props.borderColor) ? 'solid' : undefined,

    borderRadius: resolveToken('radius', props.borderRadius),
    borderTopLeftRadius: resolveToken('radius', props.borderTopLeftRadius),
    borderTopRightRadius: resolveToken('radius', props.borderTopRightRadius),
    borderBottomRightRadius: resolveToken('radius', props.borderBottomRightRadius),
    borderBottomLeftRadius: resolveToken('radius', props.borderBottomLeftRadius),

    // Size & Layout
    width: resolveToken('spacing', props.width),
    minWidth: resolveToken('spacing', props.minWidth),
    maxWidth: resolveToken('spacing', props.maxWidth),
    height: resolveToken('spacing', props.height),
    minHeight: resolveToken('spacing', props.minHeight),
    maxHeight: resolveToken('spacing', props.maxHeight),

    // Position
    position: props.position || undefined,
    top: resolveToken('spacing', props.top),
    right: resolveToken('spacing', props.right),
    bottom: resolveToken('spacing', props.bottom),
    left: resolveToken('spacing', props.left),
    zIndex: props.zIndex || undefined,

    // Padding mappings
    padding: resolveToken('spacing', pVal),
    paddingLeft: resolveToken('spacing', plVal || pxVal),
    paddingRight: resolveToken('spacing', prVal || pxVal),
    paddingTop: resolveToken('spacing', ptVal || pyVal),
    paddingBottom: resolveToken('spacing', pbVal || pyVal),

    // Margin mappings
    margin: resolveToken('spacing', mVal),
    marginLeft: resolveToken('spacing', mlVal || mxVal),
    marginRight: resolveToken('spacing', mrVal || mxVal),
    marginTop: resolveToken('spacing', mtVal || myVal),
    marginBottom: resolveToken('spacing', mbVal || myVal),
  }
})
</script>

<template>
  <component :is="as" :style="computedStyle">
    <slot />
  </component>
</template>