<script setup lang="tsx">
import { BaseButton } from '@/components/Button'
import { onMounted, ref } from 'vue'
import { ElCard, ElButton } from 'element-plus'
import { Description, IColumn } from '../components/Description/Index'
import { Counter } from '../components/Counter/Index'
const count = ref(0)
onMounted(() => {
  console.log('onMounted')
})
const onClickBtn = () => {
  count.value++
}
console.log('detail')
const descColumns: IColumn[] = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  },
  {
    label: '邮编',
    prop: 'code'
  }
]
</script>

<template>
  <ElCard>
    <template #header>
      <div>
        <h3 class="el-card__title">Card 标题</h3>
        <div class="el-card__extra">
          <el-button type="primary">操作一</el-button>
          <el-button type="primary">操作二</el-button>
        </div>
      </div>
    </template>
    <div class="el-card__body">
      <p>Card body</p>
      <p>Card body</p>
      <p>{{ count }}</p>
      <BaseButton @click="onClickBtn">按钮</BaseButton>
      <ElButton type="primary" @click="count--">按钮</ElButton>
    </div>
    <Description
      :columns="descColumns"
      :data="{ name: '张三', age: 18, address: '北京市', code: 10010 }"
      :border="true"
      :column="3"
    />
    <Counter />
  </ElCard>
</template>
