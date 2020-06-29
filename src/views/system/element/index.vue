<template>
  <div class="container">
    <el-form inline :model="form" :rules="rules" ref="form">
      <el-form-item label="姓名" prop="name">
        <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="区域" prop="region">
        <el-select v-model="form.region" placeholder="选择区域">
          <el-option v-for="item in region" :key="item.value" :label="item.title" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-button @click="search"><i class="el-icon-search"></i>查询</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      rules:{
        name:[
          {required:true,trigger:'blur',message:"用户名必须输入"},
          {min:3,max:10,message:"输入字符必须在3到10个字符之间",trigger:"blur"}
        ],
        region:[
          {required:true,trigger:"change",message:"请选择区域"}
        ]
      },
      form:{
        name:"",
        region:""
      },
      region:[
        {title:"上海",value:1},
        {title:"北京",value:2},
        {title:"广州",value:3}
      ]
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('beforeRouteEnter')
    console.log(to,from)
    next()
  },
  methods:{
    search(){
      this.$refs.form.validate((isVali,err)=>{
        console.log(isVali,err)
      })
      console.log(this.form)
    }
  }
}
</script>
<style scoped lang="scss">
@import "~@/styles/my-sass/emit_on.scss"
</style>