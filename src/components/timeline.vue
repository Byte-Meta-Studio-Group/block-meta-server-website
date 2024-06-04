<template>
  <v-timeline side="end">
    <v-timeline-item
        v-for="item in items"
        :key="item.id"
        :dot-color="item.color"
        size="small"
    >
      <v-alert
          :color="item.color"
          :icon="item.icon"
          :value="true"
      >
        {{ item.text }}
      </v-alert>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        color: 'info',
        icon: 'mdi-information',
        text: '2019.10.01 前身“百灵十里乡”服务器成立开服运营'
      },
      {
        id: 2,
        color: 'info',
        icon: 'mdi-alert-circle',
        text: '2020.10.1 服务器改组'
      },
      {
        id: 3,
        color: 'info',
        icon: 'mdi-alert-circle',
        text: '2021.1.12 萌数次元(原字节元工作室群)前身组织NRS成立'
      },
      {
        id: 4,
        color: 'info',
        icon: 'mdi-alert-circle',
        text: '2022.12.8 原字节元工作室群成立后 服务器系列更名:方块元 百灵十里乡更名"方块元日记",周目名:“方块元日记·百灵灯影”'
      },
      {
        id: 5,
        color: 'info',
        icon: 'mdi-alert-circle',
        text: '2023.8.8 小白鼠服与原百灵服合服,周目名:"方块元日记·星河"'
      },
      {
        id: 6,
        color: 'info',
        icon: 'mdi-alert-circle',
        text: '2024.5.30 字节元工作室群更名萌数次元,服务器更新全称:萌数次元方块元日记"'
      },
    ],
  }),
}
</script>