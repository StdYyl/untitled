<template>
  <div>
    <div class="head">
      <div class="heads">
        <img src="../img/logo.png" style="width: 74px;height: 50px">
        <div>
          <p class="head_title">河南电力职业培训中心</p>
          <span style="font-size: 12px;">HeNan Electricity Vocational Training</span>
        </div>
      </div>
      <div class="head_right">
        <a href="#">登陆</a>
        <a href="#">注册</a>
      </div>
    </div>
    <div class="head_nav">
      <div class="nav_mes">
        <ul>
          <li v-for="(item,indexed) in list ">
            <a href="#" :style="index==indexed?'font-size: 24px;':''" @click="choose(indexed)">
              {{item}}
              <p v-if="index==indexed"
                 style="border-bottom: 3px solid #FFFFFF;width: 48px;margin:-20px auto 0 auto"></p>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "haed",
        data() {
            return {
                list: ['首页', '英大培训', '学习在线', '考试中心', '分支机构', '教育时报', '公告公示', '高校动态'],
                index: 0
            }
        },
        methods: {
            choose(e) {
                this.index = e
            }
        }
    }
</script>

<style scoped>
  .head {
    min-width: 1200px;
    margin: 15px auto;
    justify-content: space-between;
    color: #3899D5;
    width: 1200px;
    display: flex;
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

  .head_nav {
    background-color: #3899D5;
    min-width: 1200px;
  }

  .nav_mes {
    text-align: center;
  }

  .head_nav ul {
    display: inline-block;
  }

  .head_nav ul li {
    float: left;
    line-height: 80px;
    padding: 0 24px;
  }

  .head_nav a {
    color: #ffffff;
    font-size: 20px;
  }

  .login {
    margin-left: 106px;
    line-height: 80px;
  }

  .login a {
    color: #fff;
    font-size: 17px;
  }

</style>
