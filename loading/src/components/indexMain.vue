<template>
  <div>
    <div class="rolling" @mousemove="stop" @mouseleave="bg">
      <div class="slides_bd" :style="'left:'+lefts+'px'">
        <a href="#" v-for="item in imgList"><img :src="item"/></a>
      </div>
    </div>
    <div class="rolling_bottom">
      <div class="rolling_mes rolling_mes_left">
        <img src="../img/detail.png">
        <p><a href="#">了解详情</a></p>
      </div>
      <div class="rolling_mes">
        <img src="../img/certificate.png">
        <p><router-link to="/certificate">证书查询</router-link> </p>
      </div>
      <div class="rolling_mes rolling_mes_right">
        <img src="../img/apply.png">
        <p><a href="#applys">我要报名</a></p>
      </div>
    </div>
    <!--    热点新闻-->
    <div class="news">
      <div class="hot_news">
        <div class="news_title">
          <p>热点新闻</p>
        </div>
        <div class="news_bd">
          <div class="every_mes">
            <img src="../img/government.png" class="btm_bor">
            <div>
              <div class="every_mes_title">
                <a @click="$router.push('/newList/first')">政务在线</a>
                <p class="right_arrow"></p>
                <p class="right_arrow arrow_distance"></p>
              </div>
              <ul>
                <li><a href="#"  @click="$router.push(`/newsDetail/132`)">政务在线新闻政务在线新闻政务在线新务在政务在线新闻政务在线新闻政务在线新务在</a></li>
                <li><a href="#">政务在线新闻政务在线新闻政务在线新务在政务在线新闻政务在线新闻政务在线新务在</a></li>
                <li><a href="#">政务在线新闻政务在线新闻政务在线新务在线新闻政务在线新务在</a></li>
              </ul>
            </div>
          </div>
          <div class="every_mes">
            <img src="../img/university.png">
            <div>
              <div class="every_mes_title">
                <a @click="$router.push('/newList/second')">高校活动</a>
                <p class="right_arrow"></p>
                <p class="right_arrow arrow_distance"></p>
              </div>
              <ul>
                <li><a href="#">政务在线新闻政务在线新闻政务在线新务在政务在线新闻政务在线新闻政务在线新务在</a></li>
                <li><a href="#">政务在线新闻政务在线新闻政务在线新务在政务在线新闻政务在线新闻政务在线新务在</a></li>
                <li><a href="#">政务在线新闻政务在线新闻政务在线新务在线新闻政务在线新务在</a></li>
              </ul>
            </div>
          </div>
          <div class="every_mes">
            <img src="../img/foreign.png">
            <div>
              <div class="every_mes_title">
                <a @click="$router.push('/newList/third')">出国留学</a>
                <p class="right_arrow"></p>
                <p class="right_arrow arrow_distance"></p>
              </div>
              <ul>
                <li><a href="#">政务在线新闻政务在线新闻政务在线新务在政务在线新闻政务在线新闻政务在线新务在</a></li>
                <li><a href="#">政务在线新闻政务在线新闻政务在线新务在政务在线新闻政务在线新闻政务在线新务在</a></li>
                <li><a href="#">政务在线新闻政务在线新闻政务在线新务在线新闻政务在线新务在</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="examation">
      <div class="news_title">
        <p style="background-color: #ffffff" id="applys">资格报考</p>
      </div>
      <div class="examation_list">
        <img src="../img/major.png">
        <p>职业考核</p>
      </div>
      <div class="examation_bg">
        <a v-for="item in professionList" @click="$router.push(`/apply/a`)">
          <div class="every_examation leftfloat"
               :style="{background:'url('+item.imgUrl+')'}" @click=" ">
            <p class="every_examation_title">{{item.title}}</p>
            <div class="every_examation_name">
              <p>{{item.name}}</p>
              <div class="icons">
                <p class="right_arrow"></p>
                <p class="right_arrow arrow_distance"></p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!--教师资格-->
      <div class="examation_list">
        <img src="../img/teacherIcon.png">
        <p>教师资格</p>
      </div>
      <div class="examation_bg">
        <a v-for="item in teacherList">
          <div class="every_examation leftfloat"
               :style="{background:'url('+item.imgUrl+')'}">
            <div class="every_examation_name">
              <p>{{item.name}}</p>
              <div class="icons">
                <p class="right_arrow"></p>
                <p class="right_arrow arrow_distance"></p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!--普通话-->
      <div class="examation_list">
        <img src="../img/talkIcon.png">
        <p>普通话</p>
      </div>
      <div class="examation_bg">
        <a v-for="item in talkList">
          <div class="every_examation leftfloat"
               :style="{background:'url('+item.imgUrl+')'}">
            <div class="every_examation_name">
              <p>{{item.name}}</p>
              <div class="icons">
                <p class="right_arrow"></p>
                <p class="right_arrow arrow_distance"></p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="department">
      <div class="news_title">
        <p>相关部门</p>
      </div>
      <div class="department_title">
        <div class="every_department_title">人力资源</div>
        <div class="every_department_title">河南省政府</div>
        <div class="every_department_title">友情链接</div>
      </div>
    </div>
  </div>
</template>

<script>
    let lunbotu
    export default {
        name: "home",
        data() {
            return {
                imgList: [require('../img/101.jpg'), require('../img/102.jpg'), require('../img/103.jpg'), require('../img/102.jpg')],
                lefts: 0,
                professionList:[
                    { workId: '', title: '安检', name: '安监局特种工', imgUrl: require('../img/safeCheck.png') },
                    { workId: '', title: '质检', name: '0', imgUrl: require('../img/checkQuality.png') },
                    { workId: '', title: '住建', name: '住建部技能工', imgUrl: require('../img/house.png') },
                    { workId: '', title: '轻工', name: '轻工技能鉴定', imgUrl: require('../img/work.png') },
                    { workId: '', title: '交通', name: '交通技能鉴定', imgUrl: require('../img/traffic.png') },
                    { workId: '', title: '工信', name: '工信技能鉴定', imgUrl: require('../img/ministry.png') },
                    { workId: '', title: '卫生', name: '卫生技能鉴定', imgUrl: require('../img/health.png') },
                    { workId: '', title: '农业', name: '农业技能鉴定', imgUrl: require('../img/farm.png') },
                ],
                teacherList:[
                    { workId: '', name: '笔试考试', imgUrl: require('../img/teacher1.png') },
                    { workId: '', name: '招教考试', imgUrl: require('../img/teacher3.png') },
                    { workId: '', name: '特岗教师', imgUrl: require('../img/teacher4.png') },
                    { workId: '', name: '政策认定', imgUrl: require('../img/teacher2.png') },
                ],
                talkList:[
                    { workId: '', name: '考试计划', imgUrl: require('../img/mandarin1.png') },
                    { workId: '', name: '模拟试题', imgUrl: require('../img/mandarin2.png') },
                    { workId: '', name: '集中考培', imgUrl: require('../img/mandarin3.png') },
                ]
            }
        },
        methods: {
            //轮播图定时器
            bg() {
                let that = this
                this.timeouts = setTimeout(function () {
                    that.next(-50);
                    that.bg();
                }, 3000)
            },

            //通用图片滚动
            next(e) {
                let that = this
                clearInterval(lunbotu);
                lunbotu = setInterval(function () {
                    that.lefts += e;
                    if (that.lefts == -1200 || that.lefts == -2400 || that.lefts == -3600 || that.lefts == 0) {
                        if (e > 0) e = 10;
                        that.lefts = that.lefts == -3600 ? 0 : that.lefts
                        clearInterval(lunbotu)
                    }
                }, 5)
            },

            //轮播图触碰事件
            stop() {
                clearTimeout(this.timeouts);
            },
        },
        created() {
            this.bg()
        }
    }
</script>

<style scoped>

  .rolling {
    width: 1200px;
    background: gainsboro;
    height: 374px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }

  .slides_bd img {
    float: left;
  }

  .slides_bd {
    width: 4900px;
    position: absolute;
  }

  .rolling_bottom {
    display: flex;
    width: 1200px;
    margin: 0 auto;
  }

  .rolling_mes {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 1px solid #3899D5;
    line-height: 127px;
    margin-right: -1px;
  }

  .rolling_mes_left {
    border-radius: 0 0 0 12px;
  }

  .rolling_mes_right {
    border-radius: 0 0 12px 0;
  }

  .rolling_mes a {
    font-size: 30px;
    color: #3899D5;
    margin-left: 23px;
  }

  .news {
    background-color: #F0F0F0;
    margin-top: 50px;
    min-width: 1200px;
  }

  .hot_news {
    width: 1200px;
    margin: 0 auto;
  }

  .news_title {
    width: 680px;
    margin: 0 auto 50px;
    height: 72px;
    position: relative;
    border-bottom: 2px solid #979797;
  }

  .news_title p {
    position: absolute;
    width: 216px;
    background-color: #F0F0F0;
    font-size: 30px;
    color: #4A4A4A;
    bottom: -20px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
  }

  .news_bd {
    display: flex;
    justify-content: space-between;
  }

  .every_mes {
    margin-bottom: 48px;
    background-color: #ffffff;
    border-radius: 12px;
  }

  .every_mes_title {
    line-height: 55px;
    font-size: 20px;
    padding-left: 20px;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .every_mes_title a {
    color: #3899D5;
    margin-right: 11px;
  }

  /*右箭头*/
  .right_arrow {
    width: 10px;
    height: 10px;
    border-top: 2px solid #3899D5;
    border-right: 2px solid #3899D5;
    transform: translateY(175%) rotate(45deg);
    -webkit-transform: translateY(175%) rotate(45deg);
  }

  .arrow_distance {
    margin-left: -5px;
  }

  .every_mes ul li {
    width: 340px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
  }

  .every_mes ul li a {
    color: rgba(0, 0, 0, 0.50);
    padding-left: 20px;
    line-height: 30px;
    font-size: 16px;
  }

  /*资格报考*/
  .examation {
    width: 1200px;
    margin: 0 auto;
  }

  .examation_list {
    display: flex;
    border-radius: 12px;
    overflow: hidden;
    background-color: #3899D5;
    height: 80px;
    color: #ffffff;
    font-size: 24px;
    align-items: center;
    margin: 30px 0 10px 0;
  }

  .examation_list img {
    margin: 0 30px 0 50px;
  }

  .examation_bg {
    width: 1280px;
    overflow: hidden;
  }

  .every_examation {
    height: 270px;
    width: 290px;
    position: relative;
    border-radius: 24px;
    margin-right: 15px;
  }

  .every_examation_title {
    color: #ffffff;
    font-size: 40px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%);
  }

  .every_examation_name {
    font-size: 16px;
    color: #4A4A4A;
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    width: 90%;
    justify-content: space-between;
  }

  .icons {
    display: flex;
    transform: translate(-100%, -80%);
  }

  .department {
    background: #F0F0F0;
    margin-top: 58px;
    min-width: 1200px;
  }

  .department_title {
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    justify-content: space-around;
  }

  .every_department_title {
    color: #838383;
    font-size: 40px;
  }
</style>
