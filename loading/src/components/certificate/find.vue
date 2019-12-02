<template>
  <div style="background-color: rgb(250,250,250);padding-bottom: 192px">
    <div class="find">
      <a @click="$router.go(-1)" class="headReturn">
        <img src="@/img/return.png">
        <span style="color: #3899D5;font-size: 24px;margin-left: 10px">{{headTitle}}</span>
      </a>
      <div class="findSearch">
        <div> 身份证号：<input></div>
        <div> 证书编号：<input></div>
        <div>
          <span style="width: 100px;display: inline-block;text-align: left">验证码:</span>
          <input style="width: 165px">
          <span class="vCode"></span>
        </div>
        <button class="subBtn">查询</button>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        name: "find",
        data() {
            return {
                headTitle: ''
            }
        },
        created() {
            let rs = this.$route.params.which;
            console.log(rs == 'professional')
            if (rs == 'professional') {
                this.headTitle = '职业资格证书查询'
            }
            if (rs == 'teacher') {
                this.headTitle = '教师资格证书查询'
            }
            if (rs == 'talk') {
                this.headTitle = '普通话资格证书查询'
            }
        }
    }
</script>

<style scoped>
  .find {
    width: 1200px;
    margin: 0 auto;
  }

  .headReturn {
    margin: 10px 50px;
    display: flex;
    align-items: center;
  }

  .findSearch {
    margin: 20px auto 0;
    width: 800px;
    padding: 60px 0 47px 0;
    background-color: #FFFFFF;
    font-size: 20px;
    box-shadow: 0 0 4px 1px;
    border-radius: 6px;
    color: #4A4A4A;
    text-align: center;
  }

  .findSearch input {
    border: none;
    border-bottom: 1px solid #4A4A4A;
    width: 350px;
    outline: none;
    text-indent: 10px;
    font-size: 26px;
    margin-bottom: 30px;
  }

  .vCode{
    display: inline-block;
    margin:0 0 -10px 32px;
    width: 141px;
    height: 43px;
    background: #D8D8D8;
  }
  .subBtn{
    width: 312px;
    line-height: 81px;
    background: #3899D5;
    border-radius: 12px;
    color: #FFFFFF;
    font-size: 26px;
    text-align: center;
    margin-bottom: 47px;
  }

</style>
