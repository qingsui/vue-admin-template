<template>
  <div class="container">
    <div class="temp">
      <el-alert :closable="false" type="success">directive指令和extend创建组件、Vue.use创建全局插件的使用</el-alert>
      <div v-mew="isLoading" style="margin:10px">{{data}}</div>
      <el-button @click="changeLoading" type="danger">测试指令的按钮</el-button>
      <el-button @click="sendMsg">测试toast功能</el-button>
    </div>
    <install-demo :items="list"></install-demo>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isLoading:false,
      data:"",
      list:[
        {title:'时间简史'},
        {title:"红楼梦"}
      ]
    }
  },
  methods:{
    sendMsg(){
      this.$toast('触发啦！')
    },
    changeLoading(){
      this.isLoading=true
      console.log(this.isLoading)
      //在使用try...catch尝试发送请求出错的时候，可以使用this.isLoading=true来暂时拦截这错误
      setTimeout(()=>{
        this.isLoading=false
        this.data="用户数据"
      },2000)
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/styles/my-sass/emit_on.scss"
</style>