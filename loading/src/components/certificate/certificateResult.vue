<template>
    <div class="certificateResult">
      <div class="certificateResult_top">
        <a @click="$router.go(-1)" class="headReturn">
          <img src="@/img/return.png">
          <span style="color: #3899D5;font-size: 24px;margin-left: 10px">职业资格证书查询</span>
        </a>
        <div class="items">姓名：王小银</div>
        <div class="items">身份证号：410881199601019021</div>
        <div class="items">证书编号：410881199601019021</div>
        <div class="items">证书状态：待领取</div>

      </div>
      <div class="demos">

      </div>
    </div>
</template>

<script>
    export default {
        name: "certificateResult",
        data(){
            return{
              title:''
            }
        },
        created() {
            this.title = this.$route.params.which
        }
    }
</script>

<style scoped>
  .certificateResult{
    width: 1200px;
    margin: 0 auto;
    display:flex;
    justify-content: space-around;
  }

  .certificateResult_top{
    margin-top: 10px;
  }

  .headReturn{
    margin: 10px 50px 20px;
    display: flex;
    align-items: center;
  }

  .items{
    font-size: 20px;
    color: #4A4A4A;
    padding:0 0 10px  80px;
  }

  .demos{
    width: 597px;
    height: 767px;
    background-color: #979797;
    margin:10px 0 10px 129px;
  }
</style>
