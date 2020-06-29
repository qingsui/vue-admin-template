<template>
  <div class="container">
    <div class="intr">
      <div class="item">provide和inject是在跨越多个组件间通信时用到的解决方案.祖孙组件传递数据。</div>
      <div class="item">之后推出的$attrs和$liseners可以用来传递数据和方法，但是仅限于祖传孙组件</div>
    </div>
    <div class="before">
      <child :list="list" @dealClick="dealClick"></child>
    </div>
  </div>
</template>
<script>
import child from "./components/child"
export default {
  components:{child},
  provide(){
    return{
      elTest:this
    }
  },
  data(){
    return{
      msg:"provide方法",
      list:[
        {title:"《红楼梦》"},
        {title:"《三国演义》"},
        {title:"《水浒传》"},
        {title:"《西游记》"}
      ],
      info:"inject注入参数"
    }
  },
  methods:{
    doInject(){
      console.log('inject传递的方法，参数info为：'+this.info)
    },
    dealClick(){
      this.$toast("hello 孙组件")
    }
  }
}
</script>
<style scoped>
.intr+div{
  padding:20px 40px;
}
.ontainer{
  width:100%;
  height:100%;
}
.intr{
  padding:20px 40px;
  position: relative;
  left:50%;
  margin-left:-400px;
  margin-top:10px;
  width:800px;
  text-align: center;
  margin-bottom:10px;
}
.intr:after{
  content:"";
  display:block;
  clear: both;
}
.intr:hover{
  box-shadow: 0px 1px 3px #ececec;
}
.item{
  margin-top:10px;
  font-family:"楷体"
}
</style>