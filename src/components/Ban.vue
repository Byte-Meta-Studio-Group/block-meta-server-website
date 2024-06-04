<script setup>
import { ref, onMounted } from 'vue';
import { VDataTable } from 'vuetify/components';

const bans = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('https://api.yuxiangwang0525.com/bmss/bansapijson.php');
    bans.value = await response.json();
  } catch (error) {
    console.error('Failed to fetch bans:', error);
  }
});

const headers = [
  { title: '用户名', key: 'Username' },
  { title: '封禁原因', key: 'reason' },
  { title: '开始时间', key: 'Start' },
  { title: '结束时间', key: 'end' },
];
</script>

<template>
  <div align="center">
    <h1>封 神 榜</h1>
    <h2>这里列出了方块元日记服务器被封禁的玩家列表以及封禁原因</h2>
    <v-data-table :headers="headers" :items="bans" class="elevation-1">
      <template v-slot:item.Start="{ item }">
        {{ new Date(item.Start).toLocaleString() }}
      </template>
    </v-data-table>
    <p align="right">Powered by <a href="https://www.spigotmc.org/resources/bans-mysql-support-banning-gui-advanced-system.76083/" target="_blank">Minecraft Bans+</a><br>
      前端实现:<a href="https://yuxiangwang0525.com" target="_blank">晚江右海</a><br>
      后端:萌数次元大数据
    </p>
  </div>
</template>

<style scoped>
/* 在这里添加样式 */
</style>
