<template>
  <div>
    <headRegister></headRegister>
    <div class="bd">
      <div class="land">
        <img src="@/img/images/maozi.png" style="margin-top: 52px;height: 430px">
        <div class="land_bc">
          <h1 class="lan_title">用户注册</h1>
          <div :class="phone">
            <img src="@/img/images/dl_sj.jpg" class="phoneImg">
            <input placeholder="手机号用户名" v-model="land.phone" class="phoneInput"
                   @focus="phone = 'phone phoneInputA'" @blur="phone = 'phone'">
          </div>
          <p class="error">{{errPhone}}</p>
          <div :class="phones">
            <img src="@/img/images/zc_yc.jpg" class="phoneImg">
            <input placeholder="用户名密码" v-model="land.code" class="phoneInput " type="password"
                   @focus="phones='phone phoneInputA'" @blur="phones = 'phone'">
<!--            <button class="code" @click="getCode">{{isShow?code:'获取验证码'}}</button>-->
          </div>
          <p class="error">{{pwdPhone}}</p>
          <div style="display: flex">
            <button class="subLand" @click="landSub">注册</button>
            <button class="subLand" @click="landReset" style="margin-left: 15px">重置</button>
          </div>
          <div class="toRegister">
            <input type="checkbox" @click="isSure = !isSure"> 我已阅读并同意 《河南电力职业培训中心》
            <p class="error">{{readError}}</p>
          </div>
          <div class="problem">
            <img src="@/img/images/dl_wt.jpg">常见问题
          </div>
          <p style="font-weight: bold;font-size: 14px;line-height: 25px">手机收不到验证码怎么办?</p>
          <p style="font-size: 13px;line-height: 25px;color: #666">您好，感谢您对我们的关注，出现这种情况请仔细 核实手机号是否输入有误，
            您的手机长时间处于信 号不好的地方，手机是否设置陌生人短 信拦截。</p>
        </div>
      </div>
    </div>
    <bottomRegister></bottomRegister>
  </div>
</template>

<script>
    import headRegister from "./headRegister";
    import bottomRegister from "./bottomRegister";

    let interval;
    export default {
        name: "register",
        components: {
            headRegister,
            bottomRegister
        },
        data() {
            return {
                errPhone: '',
                pwdPhone: '',
                readError: '',
                phone: "phone",
                phones: "phone",
                isSure: false,
                isShow: false,
                landCode: 0,
                code: 60,
                land: {
                    phone: '',
                    code: ''
                }
            }
        },
        methods: {
            //获取验证码
            // getCode() {
            //     if (!/^1[3-9][0-9]{9}$/.test(this.land.phone)) {
            //         this.errPhone = "手机号格式有误"
            //     } else {
            //         this.errPhone = "";
            //         this.landCode = parseInt(Math.random() * 899999 + 100000);
            //         console.log(this.landCode);
            //         let that = this;
            //         if (this.isShow) {
            //             that.pwdPhone = "验证码已发送"
            //             return;
            //         }
            //         this.isShow = true;
            //         clearInterval(interval)
            //         interval = setInterval(() => {
            //             if (that.code == 0) {
            //                 clearInterval(interval)
            //                 that.isShow = false;
            //                 that.code = 60
            //             }
            //             that.code -= 1;
            //         }, 1000)
            //     }
            // },
            //登录验证
            landSub() {
                if (!/^1[3-9][0-9]{9}$/.test(this.land.phone)) {
                    this.errPhone = "手机号格式有误";
                }
                // else if (this.land.code != this.landCode || this.land.code == 0) {
                //     this.errPhone = ""
                //     this.pwdPhone = "验证码输入有误"
                //     return;
                // }
                else if (!this.isSure) {
                    this.errPhone = ""
                    this.readError = "请勾选该协议，表示我已同意"
                } else {
                    this.errPhone = ""
                    this.pwdPhone = ""
                    this.readError = ""
                }
            },
            //重置
            landReset() {
                this.land.phone = ""
                this.land.code = ""
            }
        }
    }
</script>

<style scoped>
  .bd {
    background: #169bd5;
    padding-top: 58px;
    padding-bottom: 127px;
    border-bottom: 4px solid #087bae;
  }

  .land {
    width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .land_bc {
    width: 310px;
    padding: 0 59px 50px;
    background: #fff;
    border: 8px solid #8bcdea;
    border-radius: 30px;
  }

  .lan_title {
    margin: 37px 0 30px;
    color: #169bd5;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  .phone {
    position: relative;
    border: 1px solid #e4e4e6;
    height: 40px;
    width: 258px;
    padding: 0 20px 0 35px;
  }

  .phoneImg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7px;
  }

  .phoneInput {
    width: 100%;
    border: none;
    outline: none;
    height: 40px;
    font-size: 1rem;
    color: #495057;
  }

  .phoneInputA {
    transition: all .4s;
    -webkit-transition: all .4s;
    box-shadow: 0 0 0 3px rgba(22, 155, 213, .25);
  }

  .error {
    color: red;
    margin-left: 20px;
    font-size: 13px;
    line-height: 20px;
    height: 25px;
  }

  .code {
    line-height: 39px;
    width: 100px;
    text-align: center;
    background-color: #f8f8f8;
    position: absolute;
    right: 0;
    top: 0;
  }

  .subLand {
    background-color: #169bd5 !important;
    height: 47px;
    color: #fff;
    font-size: 22px;
    width: 100%;
    border-radius: 5px;
  }

  .toRegister {
    padding: 20px 0 10px;
    border-bottom: 1px dashed #e1e1e1;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
  }

  .toRegister span:hover {
    cursor: pointer;
  }

  .problem {
    font-size: 18px;
    font-weight: bold;
    color: #169bd5;
    padding: 20px 0 15px;
    display: flex;
    align-items: center;
  }

  .problem img {
    margin-right: 7px;
  }
</style>
