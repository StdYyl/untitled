<template>
  <div class="apply">
    <img src="../img/apply/104.jpg">
    <div class="apply_detail">
      <img :src="imgTitle">
      <div style="margin-left: 27px;" class="apply_text">
        <p class="apply_title">{{title}}</p>
        <p class="apply_mes">{{mes}}</p>
        <!-- 添加报名的工种类型  -->
        <button type="button" class="sub" @click="$router.push('/apply/fillInMes/a')">我要报名</button>
      </div>
    </div>
    <div class="apply_nav">
      <div style="width: 2560px;margin-top: 28px">
        <a v-for="(item,index) in applyList" :key="item.name" @click="changeMes(index)">
          <img :src="item.imgUrl" class="leftfloat" style="width: 180px;height: 165px">
          <div class="apply_pc_title_bc">
            <p class="apply_pc_title">{{item.title}}</p>
          </div>
          <div class="apply_pc_name">
            <p>{{item.name}}</p>
            <div style="margin-left: 60px">
              <p class="right_arrow rightfloat"></p>
              <p class="right_arrow right_arrow_distance"></p>
            </div>
          </div>
        </a>
      </div>
      <div class="apply_nav_bc"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "detail",
        data() {
            return {
                applyList: [
                    {
                        workId: '', title: '安检', name: '安监局特种工', imgUrl: require('../img/safeCheck.png'),
                        changeImg: require('../img/apply/detail_anjianju.png'),
                        changeMessage: '安监局特种工指的是特种作业操作证，是指电工、焊工、登高架设、制冷、' +
                            '企业内机动车驾驶及井下操作等一般性的特种作业人员操作证。'
                    },
                    {
                        workId: '', title: '质检', name: '质检局特种工', imgUrl: require('../img/checkQuality.png'),
                        changeImg: require('../img/apply/main2.png'),
                        changeMessage:'质监局特种工指的是特种设备的特种作业操作证，主要包括涉及生命安全、危险性较大的锅炉、压力容器（含气瓶）、压力管道、电梯。'
                    },
                    {
                        workId: '', title: '轻工', name: '轻工技能鉴定', imgUrl: require('../img/work.png'),
                        changeImg: require('../img/apply/main3.png'),
                        changeMessage:'该工种包含：黄酒酿造工、果露酒酿造工、食糖制造工、巧克力制造工、速冻食品制作工、饮料制作工、酒精制造工、' +
                            '酶制剂制造工、柠檬酸制造工、味精制作工、制浆备料工、食糖制造工......等其它工种。'
                    },
                    {
                        workId: '', title: '住建', name: '住建部技能工', imgUrl: require('../img/house.png'),
                        changeImg: require('../img/apply/main4.png'),
                        changeMessage:'住建部技能工塔式起重机 安拆工、塔式起重机 司机、施工升降机安拆工、施工升降机司机、物料提升机安拆工、物料提升机操作工、信号指挥工、司索工、高处作业吊篮安拆工。'
                    },
                    {
                        workId: '', title: '交通', name: '交通技能鉴定', imgUrl: require('../img/traffic.png'),
                        changeImg: require('../img/apply/main5.png'),
                        changeMessage:'主要包含技师、高级技师及二级教练员、裁判员、公路养护工、机动车驾驶教练员、公路收费及监控员、' +
                            '汽车维修检验员、工程测量员、机动车检测工'
                    },
                    {
                        workId: '', title: '工信', name: '工信技能鉴定', imgUrl: require('../img/ministry.png'),
                        changeImg: require('../img/apply/main6.png'),
                        changeMessage:'该工种包含：电子产品制版工、印制电路制作工、液晶显示器件制造工、 半导体芯片制造工、半导体分立器件和集成电路装调工、' +
                            '计算机及外部设备装配调试员、广电和通信设备电子装接工、广电和通信设备调试工、信息通信网络机务员、 信息通信网络线务员......等其它工种。'
                    },
                    {
                        workId: '', title: '卫生', name: '卫生技能鉴定', imgUrl: require('../img/health.png'),
                        changeImg: require('../img/apply/main7.png'),
                        changeMessage:'卫生技能鉴定范围：主要包含全国卫生专业技术资格（中初级）、护士执业资格考试、高级卫生专业技术资格考试' +
                            '全国医用设备资格考试'
                    },
                    {
                        workId: '', title: '农业', name: '农业技能鉴定', imgUrl: require('../img/farm.png'),
                        changeImg: require('../img/apply/main8.png'),
                        changeMessage:'主要包含农作物植保工，农业技术员， 农机营销员、饲料营销员、农业机械操作工、农机服务经纪人等'
                    },
                    {
                        workId: '', title: '教师', name: '笔试考试', imgUrl: require('../img/teacher1.png'),
                        changeImg: require('../img/apply/tec1.png'),
                        changeMessage: '通过实施中小学教师资格考试，考查申请人是否具备教师职业道德、基本素养、教育教学能力和教师专业发展潜质。严把教师入口关，择优选拔乐教、适教人员取得教师资格。' +
                            '中小学教师资格考试包括幼儿园教师资格考试、小学教师资格考试、初级中学教师资格考试、高级中学教师资格考试。' +
                            '申请认定中等职业学校文化课教师资格、中等职业学校专业课和中等职业学校实习指导教师资格者参加高级中学教师资格考试。'
                    },
                    {
                        workId: '', title: '教师', name: '招教考试', imgUrl: require('../img/teacher3.png'),
                        changeImg: require('../img/apply/tec2.png')
                    },
                    {
                        workId: '', title: '教师', name: '特岗教师', imgUrl: require('../img/teacher4.png'),
                        changeImg: require('../img/apply/tec3.png')
                    },
                    {
                        workId: '', title: '普通话', name: '考试计划', imgUrl: require('../img/mandarin1.png'),
                        changeImg: require('../img/apply/talk1.png'),
                        changeMessage: '普通话水平测试(PSC:PUTONGHUA SHUIPING CESHI)是对应试人运用普通话的规范程度的口语考试。全部测试内容均以口头方式进行。普通话水平等级分为三级六等，即一、二、三级，' +
                            '每个级别再分出甲乙两个等次;一级甲等为最高，三级乙等为最低。普通话水平测试不是口才的评定，而是对应试人掌握和运用普通话所达到的规范程度的测查和评定，是应试人的汉语标准语测试。' +
                            '应试人在运用普通话口语进行表达过程中所表现的语音、词汇、语法规范程度，是评定其所达到的水平等级的重要依据。'
                    },
                    {
                        workId: '', title: '普通话', name: '模拟试题', imgUrl: require('../img/mandarin2.png'),
                        changeImg: require('../img/apply/talk2.png'),
                        changeMessage: '普通话水平测试试卷由四个测试项构成，总分为100分。\n' +
                            '(1)读单音节字词100个，限时3分50秒，占10分。目的考查应试人普通话声母、韵母和声调的发音。\n' +
                            '(2)读双音节词语50个，限时2分50秒，占20分 。目的是考查应试人声、韵、调的发音外 ，还要考查上声变调、儿化韵和轻声的读音。\n' +
                            '(3)400字短文朗读，限时4分钟，占30分。目的是考查应试人使用普通话朗读书面材料的能力，重点考查语音、语流音变、语调等。\n' +
                            '(4)说话，时间3分钟，占40分。目的是考查应试人在无文字凭借的情况下说普通话所达到的规范程度。'
                    },
                ],
                imgTitle: require('../img/apply/detail_anjianju.png'),
                title: '安监局特种工',
                mes: '安监局特种工指的是特种作业操作证，是指电工、焊工、登高架设、制冷、企业内机动车驾驶及井下操作等一般性的特种作业人员操作证。',
            }
        },
        methods: {
            changeMes(e) {
                this.imgTitle = this.applyList[e].changeImg
                this.title = this.applyList[e].name
                this.mes = this.applyList[e].changeMessage
            }
        }

    }
</script>

<style scoped>
  .apply {
    width: 1200px;
    margin: 0 auto;
  }

  .apply_pc_title_bc {
    width: 172px;
    position: absolute;
    height: 53px;
    top: 41px;
    left: 4px;
    background-color: rgba(0, 0, 0, .2);
  }

  .apply_detail {
    display: flex;
    margin: 10px 0 20px 0;
  }

  .apply_title {
    font-size: 26px;
    color: #4A4A4A;
    margin-bottom: 20px;
  }

  .apply_mes {
    font-size: 20px;
    color: #4A4A4A;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    text-indent: 40px;
  }

  .apply_text {
    position: relative;
    width: 100%;
  }

  .sub {
    background: #3899D5;
    border-radius: 12px;
    font-size: 26px;
    position: absolute;
    bottom: 0;
    height: 81px;
    width: 312px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    text-align: center;
    color: #FFFFFF;
  }

  .apply_nav {
    background: #F0F0F0;
    height: 232px;
    overflow-x: auto;
    margin-bottom: 20px;
  }

  .apply_nav::-webkit-scrollbar {
    width: 10px;
    height: 23px;
  }


  .apply_nav::-webkit-scrollbar-thumb {
    background: #3899D5;
    border-radius: 12px;
  }

  .apply_nav::-webkit-scrollbar-track-piece {
    background: #F0F0F0;
  }

  .apply_nav a ~ a {
    margin-left: 18px;
  }

  .apply_nav a {
    position: relative;
    display: inline-block;
  }

  .apply_nav a:hover {
    cursor: pointer;
  }

  .apply_pc_title {
    position: absolute;
    top: 15%;
    left: 50%;
    color: #FFFFFF;

    font-size: 25px;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
  }

  .apply_pc_name {
    position: absolute;
    bottom: 12px;
    display: flex;
    font-size: 13px;
    color: #4A4A4A;
    left: 18px;
  }

  .right_arrow {
    width: 7px;
    height: 7px;
    border-top: 2px solid #3899D5;
    border-right: 2px solid #3899D5;
    transform: translateY(48%) rotate(45deg);
    -webkit-transform: translateY(48%) rotate(45deg);
  }

  .right_arrow_distance {
    margin-left: -7px;
  }
</style>
