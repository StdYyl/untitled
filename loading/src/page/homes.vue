<template>
  <div>
    <publicHeads></publicHeads>
    <indexMain></indexMain>
    <publicEnd></publicEnd>
  </div>
</template>

<script>
  import publicEnd from '../components/publicEnd'
  import publicHeads from '../components/publicHeads'
  import indexMain from '../components/indexMain'
    export default {
        name: "home",
        components:{
            publicEnd,
            publicHeads,
            indexMain
        }
    }
</script>

<style scoped>

</style>
