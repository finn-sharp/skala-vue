<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: { type: [String, Object], default: 'div' },
  
  // Float 전용 배치 속성
  placement: { 
    type: String, 
    default: 'bottom-start',
    validator: (val) => [
      'bottom-end', 'bottom-start', 'top-end', 'top-start', 
      'bottom-center', 'top-center', 'middle-center', 'middle-end', 'middle-start'
    ].includes(val)
  },
  
  // 오프셋 (간격 조절)
  offsetX: { type: [String, Number], default: 0 },
  offsetY: { type: [String, Number], default: 0 },
  
  // 레이어 순서
  zIndex: { type: [String, Number], default: undefined },
})

// 범용 토큰 변환 헬퍼 (Box와 동일한 공통 함수 패턴)
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
  const [vertical, horizontal] = props.placement.split('-')
  
  let top = 'auto'
  let bottom = 'auto'
  let left = 'auto'
  let right = 'auto'
  const transforms = []

  // 1. 세로축(Vertical) 배치 (박스 '안쪽' 기준)
  if (vertical === 'top') {
    top = '0px' // 바깥이 아니라 안쪽 상단에 고정
    transforms.push(`translateY(${resolveToken('spacing', props.offsetY) || '0px'})`)
  } else if (vertical === 'bottom') {
    bottom = '0px' // 바깥이 아니라 안쪽 하단에 고정
    transforms.push(`translateY(-${resolveToken('spacing', props.offsetY) || '0px'})`)
  } else if (vertical === 'middle') {
    top = '50%'
    transforms.push('translateY(-50%)')
  }

  // 2. 가로축(Horizontal) 배치 (박스 '안쪽' 기준)
  if (horizontal === 'start') {
    left = '0px'
    transforms.push(`translateX(${resolveToken('spacing', props.offsetX) || '0px'})`)
  } else if (horizontal === 'end') {
    right = '0px'
    transforms.push(`translateX(-${resolveToken('spacing', props.offsetX) || '0px'})`)
  } else if (horizontal === 'center') {
    left = '50%'
    transforms.push('translateX(-50%)')
  }

  return {
    position: 'absolute',
    top,
    bottom,
    left,
    right,
    zIndex: props.zIndex,
    transform: transforms.length > 0 ? transforms.join(' ') : undefined,
  }
})
</script>

<template>
  <component :is="as" :style="computedStyle">
    <slot />
  </component>
</template>