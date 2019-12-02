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
        <div v-if="user" class="welcomeTitle" >
          欢迎！<span style="font-size: 20px">{{user}}</span>
          <div class="lis">
              <ul>
                <router-link to=""><li>个人中心</li></router-link>
                <router-link to=""><li style="position: relative">消息通知<span class="noticeNum">1</span></li></router-link>
                <router-link to=""><li>注销账号</li></router-link>
                <el-link @click=""><li>退出</li></el-link>
              </ul>
          </div>
        </div>
        <div v-else>
          <router-link to="/land">登陆</router-link>
          <router-link to="/register">注册</router-link>
        </div>

      </div>
    </div>
    <div class="head_nav">
      <div class="nav_mes">
        <ul>
          <li v-for="(item,indexed) in list ">
            <router-link href="#" :style="id==indexed?'font-size: 24px;':''" :to="list[indexed].paths">
              {{item.title}}
            </router-link>
            <p v-if="id==indexed"
               style="border-bottom: 3px solid #FFFFFF;width: 48px;margin:-20px auto 0 auto">
            </p>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "haed",
        props: ['id'],
        data() {
            return {
                user:"",
                list: [
                    {title: '首页', paths: '/'},
                    {title: '英大培训', paths: '/detail'},
                    {title: '学习在线', paths: '/studyOnline'},
                    {title: '考试中心', paths: '/trainingTest'},
                    {title: '分支机构', paths: ''},
                    {title: '教育时报', paths: ''},
                    {title: '公告公示', paths: ''},
                    {title: '高校动态', paths: ''}
                ],
            }
        },
        created() {
            // localStorage.setItem("user", "王小银")
            // this.user = localStorage.getItem("user")
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
    width: 98px;
    padding: 0 18px;
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

  .welcomeTitle{
    line-height: 80px;
    margin-right: 30px;
    position: relative;
  }

  .welcomeTitle:hover{
    cursor: pointer;
  }

  .welcomeTitle:hover .lis{
    display: block;
  }

  .lis{
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    border-radius: 5px;
    overflow: hidden;
    padding: 5px 0;
    position: absolute;
    z-index: 999;
    width: 200px;
    top: 70px;
    left: -60px;
    background-color: white;
    display: none;
    font-size: 15px;
  }

  .lis ul a{
    line-height: 40px;
    display: block;
    padding: 0 30px;
    text-align: center;
    margin: 0;

    color: #333333;
  }
  .lis ul a:hover{
    color: #FFFFFF;
    background-color: #3899D5 ;
  }
  .lis ul a~a{
    border-top: 1px solid rgb(223, 223, 223);
  }

  .noticeNum{
    background-color: #ff4863;
    color: #FFFFFF;
    margin-left: 15px;
    padding: 0 10px;
    border-radius: 10px;
    font-size: 12px;
    position: absolute;
    height: 17px;
    transform: translateY(75%);
    line-height: 17px;
  }

</style>
