<template>
  <div>
    <publicHeads :id="id"></publicHeads>
    <indexMain></indexMain>
    <publicEnd></publicEnd>
  </div>
</template>

<script>
  import { requested } from '@/api/demo'
  import publicEnd from '../components/publicEnd'
  import publicHeads from '../components/publicHeads'
  import indexMain from '../components/indexMain'
    export default {
        name: "home",
        components:{
            publicEnd,
            publicHeads,
            indexMain
        },
        data(){
          return{
              id:-1,
          }
        },
        async created() {
            this.id = this.$route.meta.index
        }
    }
</script>

<style scoped>

</style>
