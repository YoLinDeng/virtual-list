<script setup lang="ts">
import { reactive, ref, onMounted, getCurrentInstance } from 'vue'
import VList from '@/components/VList.vue'

interface listItem {
  index: number,
  num: number
}
const list: listItem[] = reactive([])
for(let i = 1; i <= 10000; i++) {
  list.push({
    index: i,
    num: i
  })
}
</script>

<template>
  <div class="container">
    <v-list :data="list"></v-list>
  </div>
</template>

<style scoped>
</style>
