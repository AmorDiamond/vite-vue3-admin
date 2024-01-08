<template lang="">
  <div> customer list2 </div>
</template>
<script setup lang="ts">
import { customerListApi } from '@/api/customer'

customerListApi({ page: 1, pageSize: 10 })
</script>
<style lang=""></style>
