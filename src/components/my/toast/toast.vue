<template>
  <div class="container">
    <div class="msgBox" v-if="show">{{msg}}</div>
  </div>
</template>
<script>
export default {
  props:{
    // msg:{
      // type:String,
      // default:'hello'
    // }
  }
}
</script>
<style scoped>
.msgBox{
  position: fixed;
  top:50%;
  left:50%;
  padding:5px 20px;
  border-radius: 3px;
  background: red;
  color:white;
}
.container{
  width:100%;
  height:100%;
}
</style>