<template>
  <div>
    <public-heads></public-heads>
    <div style="width: 1200px;margin: 0 auto;padding-left: 40px">
      <p class="titles">{{newsForm.title}}</p>
      <div v-html="newsForm.message" class="mesed" style="text-indent: 32px;line-height: 30px"></div>
      <p class="news_end" style="margin-top: 20px">
        <span>来源：{{newsForm.who}}</span>
        <span style="padding-left: 20px">发布时间：{{newsForm.time}}</span>
      </p>
    </div>
    <public-end></public-end>
  </div>
</template>

<script>
    import publicHeads from "../../components/publicHeads"
    import publicEnd from "../../components/publicEnd"
    export default {
        name: "newsDetail",
        components: {
            publicHeads,
            publicEnd
        },
        data() {
            return {
                newsForm: {}
            }
        },
        // async created() {
        //     let id = this.$route.params.id;
        //     let rs = await GetNewsMesOne(id);
        //     this.newsForm = rs.data.news
        // }
    }
</script>

<style scoped>
  .titles {
    font-size: 26px;
    color: #3899D5;
    margin: 40px 0px;
  }
  .mesed p{

    line-height: 28px;
    margin-bottom: 20px;
  }
  .news_end span{
    display: inline-block;
    font-size: 20px;
    color: #3899D5;
    line-height: 28px;
    margin-bottom: 40px;
  }
</style>
