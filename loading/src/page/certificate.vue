<template>
  <div>
    <publicHeads></publicHeads>
      <router-view></router-view>
    <publicEnd></publicEnd>
  </div>
</template>

<script>
    import publicHeads from "../components/publicHeads";
    import publicEnd from "../components/publicEnd";

    export default {
        name: "index",
        components: {
            publicHeads,
            publicEnd
        }
    }
</script>

<style scoped>

</style>
