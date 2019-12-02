<template>
  <div class="head">
    <div class="heads">
      <img src="../../img/logo.png" style="width: 74px;height: 50px">
      <div>
        <p class="head_title">河南电力职业培训中心</p>
        <span style="font-size: 12px;">HeNan Electricity Vocational Training</span>
      </div>
    </div>
    <div class="">
      <router-link to="/" class="webIndex">网站首页</router-link>
      <router-link to="/land" :class="lands+' button'">登录</router-link>
      <router-link to="/register" :class="register+' button'">注册</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "headRegister",
        data() {
            return {
                lands: "land",
                register: "register"
            }
        },
        created() {
          let path = this.$route.path;
            this.lands = path == '/land' ? 'land' : 'register'
            this.register = path == '/land' ? 'register' : 'land'
        }
    }
</script>

<style scoped>
  .head {
    width: 1140px;
    height: 88px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .heads {
    display: flex;
    height: 80px;
    align-items: center;
    margin-left: 20px;
  }

  .head_right a {
    line-height: 80px;
    margin-left: 30px;
    color: #3899D5;
  }

  .head_title {
    font-size: 22px;
  }

  button {
    padding: 0;
    background: #ffffff;
  }

  .webIndex {
    line-height: 88px;
    color: #333;
    font-weight: bold;
    font-size: 14px;
  }

  .button {
    line-height: 30px;
    border-radius: 15px;
    margin-left: 21px;
    padding: 5px 34px;
    font-size: 14px;
    font-weight: bold;
    transition: all 1s;
  }

  .land {
    background-color: #169bd5;
    border: 1px solid #169bd5;
    color: white;
  }

  .register {
    background-color: #FFFFFF;
    border: 1px solid #e4e4e6;
    color: #333;
  }

  .button:hover {
    background-color: #169bd5;
    color: white;
  }
</style>
