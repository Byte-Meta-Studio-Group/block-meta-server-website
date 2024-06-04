<template>
  <v-app>
    <!-- 页头 -->
    <v-app-bar
        absolute
        color="transparent"
        elevation="0"
    >
      <v-toolbar-title class="text-uppercase text-left">
        萌数次元方块元日记
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- 右侧链接 -->
      <v-btn text rounded @click="this.$router.push('/')">
        首页
      </v-btn>

      <v-btn text rounded @click="this.$router.push('/rank')">
        光荣榜
      </v-btn>
      <v-btn text rounded @click="this.$router.push('/ban')">
        封神榜
      </v-btn>
      <v-btn text rounded href="https://yang-qwq.top/block-server-wiki/" target="_blank">
        文档
      </v-btn>
    </v-app-bar>

    <!-- 内容区域 -->
    <v-main class="mt-12">
      <!-- 这里放置你的内容 -->
      <router-view></router-view>
    </v-main>

    <!-- 页脚 -->
    <v-footer
        dark
        padless
    >
      <v-card
          flat
          tile
          class="indigo lighten-1 white--text text-center"
          width="100%"
      >
<!--        <v-card-text>-->
<!--          <v-btn-->
<!--              v-for="icon in icons"-->
<!--              :key="icon"-->
<!--              class="mx-4 white&#45;&#45;text"-->
<!--              icon-->
<!--          >-->
<!--            <v-icon size="24px">-->
<!--              {{ icon }}-->
<!--            </v-icon>-->
<!--          </v-btn>-->
<!--        </v-card-text>-->

        <v-card-text class="white--text pt-0">
          萌数次元方块元日记 — 版权所有 &copy;2019-{{ new Date().getFullYear() }} Moedigital s.r.o.
          <a href="https://moedigital.com" target="_blank">萌数次元 Moedigital</a><br>
          官网前端设计:<a href="https://yuxiangwang0525.com" target="_blank">晚江右海</a> <a href="https://yang-qwq.top" target="_blank">Yang</a><br>
          梦方界®为萌数次元方块元日记的注册商标。
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  setup(){

  },
  methods:{

  }
})
</script>

<style>
/* 自定义样式 */
.v-app-bar {
  backdrop-filter: blur(10px);
}
/* 定义现代链接的样式 */
a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #66ccff; /* Vue的绿色 */
  color: lightskyblue;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease; /* 平滑过渡效果 */
}

/* 鼠标悬停时的样式变化 */
a:hover {
  background-color: #FFFFFF; /* 深一点的绿色 */
}

/* 激活时的样式变化 */
a:active {
  background-color: #ffffff; /* 更深一点的绿色 */
}

/* 聚焦时的样式变化 */
a:focus {
  outline: none; /* 移除默认聚焦边框 */
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.5); /* 自定义聚焦阴影 */
}

</style>
