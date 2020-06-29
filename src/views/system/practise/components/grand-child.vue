<template>
  <div class="container">
    <el-button size="mini" @click="$listeners.dealClick">使用$listeners触发祖组件事件</el-button>
    <el-button @click="output">provide输出传递过来的数据</el-button>
    <el-button @click="doInject">触发inject拿到的方法</el-button>
    <el-card class="box-card">
      <div v-for="(item,i) in $attrs.list" :key="i" class="text item">
        {{item.title}}
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  inject:['elTest'],
  methods:{
    output(){
      console.log(this.elTest)
    },
    doInject(){
      this.elTest.doInject()
    }
  }
}
</script>
<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
  .item:hover{
    background:red;
    color:white;
    cursor: pointer;
  }
  .box-card {
    width: 200px;
  }
</style>