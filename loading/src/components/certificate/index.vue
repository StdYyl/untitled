<template>
  <div class="certificate">
    <div class="mesId">
      <router-link to="certificate/find/professional"><img src="@/img/05-01.png"></router-link>
      <router-link to="certificate/find/teacher"><img src="@/img/05-02.png"></router-link>
      <router-link to="certificate/find/talk"><img src="@/img/05-03.png"></router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",

    }
</script>

<style scoped>
  .certificate {
    width: 1200px;
    margin: 0 auto;

  }
  .mesId{
    display: flex;
    justify-content: space-between;
    margin: 14px 0 143px;
  }
</style>
