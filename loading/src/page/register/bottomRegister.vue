<template>
  <div class="foot">
    <select>
      <option value="人力资源系统">人力资源系统</option>
      <option value="人力资源系统1">人力资源系统1</option>
      <option value="人力资源系统2">人力资源系统2</option>
    </select>
    <select style="margin: 25px 25px">
      <option value="河南省政府">河南省政府</option>
      <option value="河南省政府1">河南省政府1</option>
    </select>
    <select>
      <option value="友情链接">友情链接</option>
      <option value="友情链接1">友情链接1</option>
      <option value="友情链接2">友情链接2</option>
      <option value="友情链接3">友情链接3</option>
    </select>
    <div style="font-size: 14px">
      <div style="padding:0 0 15px 0">
        <a href="#">关于我们</a>
        <span style="padding: 0 10px">|</span>
        <a href="#">联系我们</a>
      </div>
      <p style="padding-bottom: 10px;color: #666">主办方：河南电力职业培训中心</p>
      <p style="color: #666;margin-bottom: 38px;">服务热线：0013131313 工作时间：8：00-17：00 备案序号：豫ICP备05024460号</p>
    </div>

  </div>
</template>

<script>
    export default {
        name: "bottomRegister"
    }
</script>

<style scoped>
  .foot {
    width: 1140px;
    margin: 0 auto;
    text-align: center;
  }

  select {
    border: 1px solid #75c6e9;
    width: 180px;
    height: 25px;
  }
</style>
