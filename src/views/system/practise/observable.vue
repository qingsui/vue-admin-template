<template>
  <div class="container">
    <div>observable是用来做页面组件内部状态管理的，相当于vuex</div>
    <el-button @click="change">改变message</el-button>
    <div>{{message}}</div>
  </div>
</template>
<script>
import Vue from "vue"
const state=Vue.observable({message:"Vue 2.6"})
const mutation={
  setMsg(val){
    state.message=val
  }
}
export default {
  computed:{
    message(){
      return state.message
    }
  },
  methods:{
    change(){
      mutation.setMsg("Vue 3.0")
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/styles/my-sass/emit_on.scss"
</style>