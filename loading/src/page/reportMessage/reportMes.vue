<template>
  <div>
    <div class="head">河南电力职业培训中心</div>
    <div class="center_bd">
      <div class="center_aside">
        <div class="zc">
          <div class="zc_head">填写申请报名信息</div>
          <div class="zc_segmentation">
            <div class="segmentation_lf">
              <el-form :model="applyForm" ref="applyForm" :rules="rules" label-width="120px">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="applyForm.name" placeholder="联系人姓名" style="width: 350px"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" prop="card_id">
                  <el-input v-model="applyForm.id_card_no" placeholder="联系人身份证号" style="width: 350px"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-radio v-model="applyForm.sex" :label="0">女</el-radio>
                  <el-radio v-model="applyForm.sex" :label="1">男</el-radio>
                </el-form-item>
                <el-form-item>
                  <div style="color: #333;font-weight: bold;font-size: 16px">请上身份证照片</div>
                </el-form-item>
                <el-form-item>
                  <div class="upload">
                    <el-upload class="avatar-uploader"
                               ref="frontal_view"
                               action=""
                               accept="image/png,image/gif,image/jpg,image/jpeg"
                               :show-file-list="false"
                               :on-change="handleFrontalSuccess"
                               :before-upload="()=>false">
                      <img v-if="applyForm.frontal_view" :src="applyForm.frontal_view" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-upload class="avatar-uploader"
                               ref="frontal_view"
                               action=""
                               accept="image/png,image/gif,image/jpg,image/jpeg"
                               :show-file-list="false"
                               :on-change="handleBackSuccess"
                               :before-upload="()=>false">
                      <img v-if="applyForm.back_view" :src="applyForm.back_view" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </div>
                </el-form-item>
                <el-form-item label="联系人手机号" prop="phone">
                  <el-input v-model="applyForm.phone" placeholder="联系人身份证号" style="width: 350px"></el-input>
                </el-form-item>
                <el-form-item label="获取验证码" prop="code">
                  <el-input v-model="applyForm.code" placeholder="联系人身份证号" style="width: 350px"></el-input>
                </el-form-item>
                <div class="toRegister">
                  <input type="checkbox" @click="isSure = !isSure"> 我已阅读并同意 《河南电力职业培训中心》
                  <p class="error">{{readError}}</p>
                </div>
                <div style="margin:15px 100px 0">
                  <el-button type="primary" style="margin-right: 40px">提交</el-button>
                  <el-button type="primary" @click="$router.go(-1)">取消</el-button>
                </div>
              </el-form>
            </div>
            <div class="segmentation_rh">
              <h5 style="font-size: 18px; font-weight: bold; color: #169bd5;">
                <i class="el-icon-question" style="margin-right: 10px"></i>常见问题
              </h5>
              <p style="font-size: 16px;font-weight: bold; color: #666;">手机号注册过怎么办</p>
              <p style="line-height: 25px;font-size: 13px;margin-top: 5px">您好，注册出现此情况，说明您的手机号码已经在本网站注册过个人账户，不能重复注册使用。。</p>
              <p style="font-size: 16px;font-weight: bold; color: #666;margin-top: 15px">手机收不到验证码怎么办?</p>
              <p style="line-height: 25px;font-size: 13px;margin-top: 5px">您好，出现这种情况请仔细核实手机号是否输入有误，您的手机长时间处于信号不好的地方，手机是否设置陌生人短信拦截。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottomRegister></bottomRegister>
  </div>
</template>

<script>
    import bottomRegister from "../register/bottomRegister";

    export default {
        name: "reportMes",
        components: {
            bottomRegister,
        },
        data() {
            return {
                applyForm: {
                    name: '',
                    id_card_no: '',
                    pass_word: '',
                    sex: 0,
                    phone: '',
                    frontal_view: '',
                    back_view: '',
                    code: ''
                },
                isSure: false,
                readError: '请勾选该协议，表示我已同意',
                rules: {
                    name: {required: true, message: "请输入姓名", trigger: 'blur'},
                    card_id: {required: true, message: "请输入身份证号"},
                    frontal_view: {required: true, message: "请上传身份证正面"},
                    back_view: {required: true, message: "请上传身份背面"},
                    phone: {required: true, message: "请输入身份证号", trigger: "blur"},
                }
            }
        },
        methods: {
            handleFrontalSuccess(file) {
                this.applyForm.frontal_view = URL.createObjectURL(file.raw);
            },
            handleBackSuccess(file) {
                this.applyForm.back_view = URL.createObjectURL(file.raw);
            }
        }
    }
</script>

<style scoped>
  .head {
    line-height: 80px;
    font-size: 26px;
    color: #3899D5;
    text-align: center;
  }

  .center_bd {
    background: #169bd5;
    min-width: 1140px;
    padding: 58px 0 107px;
    border-bottom: 4px solid #087bae;
  }

  .center_aside {
    width: 1140px;
    margin: 0 auto;
  }

  .zc {
    background: #fff;
    border: 8px solid #8bcdea;
    border-radius: 30px;
    overflow: hidden;
    padding-bottom: 50px;
  }

  .zc_head {
    border-bottom: 1px solid #ececec;
    font-size: 22px;
    font-weight: bold;
    color: #169bd5;
    padding: 0 30px 20px;
    margin-top: 30px;
  }

  .zc_segmentation {
    padding: 35px 30px 0 30px;
    display: flex;

  }

  .segmentation_lf {
    padding-right: 40px;
    width: 674px;
    border-right: 1px dotted #e1e1e1
  }

  .segmentation_rh {
    width: 310px;
    margin-right: 20px;
    padding: 90px 0 0 40px;
    margin-top: 35px;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 248px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 248px;
    height: 178px;
    display: block;
  }

  .segmentation_lf /deep/ .el-upload {
    border: 1px dashed #8c939d;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .segmentation_lf /deep/ .el-upload:hover {
    border-color: #409EFF;
  }

  .upload {
    display: flex;
    justify-content: space-around;
  }

  .toRegister {
    padding: 0 0 0 40px;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
  }

  .toRegister span:hover {
    cursor: pointer;
  }

  .error {
    color: red;
    margin-left: 20px;
    font-size: 13px;
    line-height: 20px;
    height: 25px;
  }
</style>
