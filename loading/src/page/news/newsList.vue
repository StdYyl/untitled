<template>
  <div>
    <publicHeads></publicHeads>
    <div class="newsBd" v-loading="loading">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="政务在线" name="first">
          <ul>
            <li v-for="item in newsList">
              <div class="newsLs" @click="$router.push(`/newsDetail/${item.id}`)">
                <p class="newTitle">
                  <span class="ic"></span>
                  {{item.name}}
                </p>
                <p style="font-size: 16px;color: #4A4A4A;">{{item.time}}</p>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="高校活动" name="second"></el-tab-pane>
        <el-tab-pane label="出国留学" name="third"></el-tab-pane>
      </el-tabs>
      <div style="text-align: right;margin-top: 15px">
        <el-pagination
          background
          layout="prev,pager,next"
          :total="2"
          :current-page.sync="currentPage"
          :page-size="1"
          @current-change="changePage"
        ></el-pagination>
      </div>
    </div>
    <publicEnd></publicEnd>
  </div>
</template>

<script>
    import publicHeads from "../../components/publicHeads";
    import publicEnd from "../../components/publicEnd";

    export default {
        name: "newsList",
        components: {
            publicHeads,
            publicEnd
        },
        data() {
            return {
                activeName: 'first',
                loading: false,
                currentPage:1,
                newsList: [
                    {id:1,name: '纵观【壮丽七十年】河南：从“借粮”大户到中原粮仓', time: '2019-09-20'},
                    {id:2,name: '纵观壮丽七十年河南：从借粮大户到中原粮仓从借粮大户到中原粮仓从借粮大户到中原粮仓从借粮大户到中原粮仓从借', time: '2019-10-21'}
                ]
            }
        },
        methods: {
            //更换新闻类型
            handleClick(tab, even) {
                console.log(this.activeName)
            },
            //更换页码
            changePage(e){
                console.log(this.currentPage)
            },
        },
        created() {
            this.activeName = this.$route.params.id
        }
    }
</script>

<style scoped>
  .newsBd {
    width: 1100px;
    min-width: 1100px;
    margin: 30px auto;
  }

  .newsBd /deep/ .el-tabs__item {
    font-size: 18px;
  }

  .newTitle {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 1000px;
    word-break: break-all;
  }

  .ic {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: #3899D5;
    display: inline-block;
    margin-right: 5px;
  }

  .newsLs {
    display: flex;
    justify-content: space-between;
    margin-top: 36px;
    font-size: 20px;
  }

  .newsLs p {
    line-height: 30px;
    color: #4A4A4A;
  }

  .newsLs:hover {
    cursor: pointer;
  }
</style>
