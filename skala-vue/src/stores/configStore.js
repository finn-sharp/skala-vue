import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useUnitStore = defineStore('unit', ()=>{
    const unit = ref('celsius')
    const unitSymbol = computed(() => unit.value == 'celsius' ? "C" : "F")
    function toggleUnit() {
        if (unit.value=='celsius'){unit.value = 'fahrenheit'
        }else {unit.value ='celsius'}
    }
    return {unit, unitSymbol, toggleUnit}
})