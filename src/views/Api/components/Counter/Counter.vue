<script lang="tsx">
// import { ElButton, ElDescriptions, ElDescriptionsItem } from 'element-plus'
import { onMounted } from 'vue'
import { defineComponent } from 'vue'
import { ref } from 'vue'
// const descProps = defineProps(descriptionProps)
export default defineComponent({
  props: {
    defaultCount: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    console.log(12 + ' counter setup', props, this)
    const count2 = ref(0)
    const getList = () => {
      console.log('get list')
    }
    onMounted(() => {
      console.log(1234 + 'mounted', props.defaultCount)
      getList()
    })
    return {
      nameStr: 'counter',
      count2,
      handleClick() {
        console.log('click')
        count2.value++
      },
      getList
    }
    // return () => {
    //   return (
    //     <div>
    //       <ElButton onClick={this.handleClick}>++</ElButton>
    //     </div>
    //   )
    // }
  },
  data() {
    return {
      nameStr2: 'counter2'
    }
  }
})
</script>
<template>
  <div @click="handleClick">{{ count2 }}</div>
  <div>{{ nameStr }}</div>
  <div>{{ nameStr2 }}</div>
</template>
