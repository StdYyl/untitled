<template>
  <div>
    <publicHeads></publicHeads>
    <div class="UserBd">
      <leftList class=""></leftList>
    </div>
    <publicEnd></publicEnd>
  </div>
</template>

<script>
    import leftList from "../components/UserCenterComponents/leftList";
    import publicHeads from "../components/publicHeads";
    import publicEnd from "../components/publicEnd";

    export default {
        name: "User",
        components: {
            leftList,
            publicHeads,
            publicEnd
        }
    }
</script>

<style scoped>
  .UserBd{
    background-color: #F4F4F4;
    padding: 10px 0 22px;

  }
</style>
