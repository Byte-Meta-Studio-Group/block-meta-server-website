<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <v-img
            :src="backgroundUrl"
            class="fill-height"
            style="z-index:1"
        >
          <div class="overlay"></div>
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" style="z-index:6">
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
                  href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=3oV1kNlJQgmzzqULWENZEOB89cRq5HXB&authKey=zYp1zYP0E0Y75VRAvxATZhNu3ZxID%2FZB2e%2FKFUtPnXRk%2Bnx6AoijAri9uN%2BcsyIp&noverify=0&group_code=297257008"
                  target="_blank"
              >
                加入交流群
              </v-btn>
            </v-col>
          </v-row>
        </v-img>
        <h3 class="text-h4 mt-10">开放、管理优良、气氛良好的服务器</h3>
        <h2 class="text-h4 mt-10">已坚持公益服运营不跑路 {{ new Date().getFullYear()-2019 }} 年</h2>
        <br><br>
        <h1>时间线</h1>
        <timeline/>
        <h2>未来.....</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import timeline from "@/components/timeline.vue";
import Timeline from "@/components/timeline.vue";
export default {
  name: 'WebsiteCover',
  components: {Timeline},
  data() {
    return {
      backgroundUrl: 'https://picture.moedigital.com/bmss/index.php',
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
  z-index: 3;
}
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff; /* 白色背景 */
  opacity: 0.2; /* 20%的透明度，让背景变亮 */
}
</style>
