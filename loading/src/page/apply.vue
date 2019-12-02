<template>
  <div>
    <publicHeads></publicHeads>
    <detail></detail>
    <publicEnd></publicEnd>
  </div>
</template>

<script>
  import publicEnd from "../components/publicEnd";
  import publicHeads from "../components/publicHeads";
  import detail from "../components/apply";
    export default {
        components:{
            publicEnd,
            publicHeads,
            detail
        },
        name: "news"
    }
</script>

<style scoped>

</style>
