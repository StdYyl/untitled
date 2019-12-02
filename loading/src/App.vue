<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,h3,form,fieldset,input,textarea,p,blockquote,th,td { margin:0; padding:0; }
  /*通用的css*/
  ol,ul{
    list-style: none;
  }
  button{
    outline: none;
    border: none;
  }
  button:hover,a:hover{
    cursor: pointer;
  }
  /*左浮动*/
  .leftfloat{float: left;}
  /*右浮动*/
  .rightfloat{float: right;}
  /*链接字体颜色*/
  a{color: #646464;text-decoration:none;}
  /*清楚浮动*/
  .clearfix:after{content:"";display: block;clear: both;}
  .clearfix{zoom: 1;}
  .btm_bor{
    vertical-align: bottom;
  }
  .none{
    display: none;
  }
  /*input,body,img{border: none;}*/
</style>
