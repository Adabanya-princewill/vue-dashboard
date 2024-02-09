<template>
  <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Direct Messages" name="first">
      <Table />
    </el-tab-pane>
    <el-tab-pane label="Groups" name="second">Groups...</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import Table from "@/components/Table.vue"

const activeTab = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>