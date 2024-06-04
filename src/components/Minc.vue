<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <v-img
            :src="backgroundUrl"
            class="fill-height"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12">
              <h1 class="text-h2 font-weight-bold white--text">方块元日记·星河周目</h1>
              <h2 class="text-h5 white--text">1.20.4生存/养老/建筑/社交公益服</h2>
              <v-btn
                  class="ma-2"
                  color="primary"
                  outlined
                  href="https://yang-qwq.top/block-server-wiki/zh/"
              >
                加入服务器
              </v-btn>
              <v-btn
                  class="ma-2"
                  color="primary"
                  outlined
                  @click="buttonClickHandler"
              >
                按钮二
              </v-btn>
            </v-col>
          </v-row>
        </v-img>
        <h3 class="text-h4 mt-10">正文标题</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WebsiteCover',
  data() {
    return {
      backgroundUrl: 'https://api.yuxiangwang0525.com/picture/index.php',
    };
  },
  methods: {
    buttonClickHandler() {
      // 处理按钮点击事件
    },
  },
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
