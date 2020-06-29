<template>
  <div class="container">
    <div class="content">
      <div class="title">$emit和$on的使用</div>
      <div class="intro">
        <ul>
          <li>
            使用$emit在子组件触发父组件事件，使用$on让创建事件与事件使用得以分开
          </li>
          <li>
            使用方法如下：
            <ul>
              <li>
                在<span>父组件</span>的created里创建方法：
                <el-alert type="info" :closable="false"
                  >created(){ this.$on('方法名',引用的当前组件中的方法);
                  this.$on('father',this.handle); }
                </el-alert>
                <span>这里的father可以是一个数组</span>
                <el-alert type="warning" :closable="false">
                  <span>this.$on(['events','events1'],this.handle)</span>
                  console.log(<span>this._events</span>)
                </el-alert>
              </li>
              <li>
                当前组件中的方法+参数:
                <el-alert type="info" :closable="false"
                  >methods:{ hendle(e){
                  console.log(e,'也可以带有当前组件中的参数进入',this.msg) } }
                </el-alert>
              </li>
              <li>
                <ul>
                  <li>(1).将函数传递给子组件</li>
                  <li>
                    (2).在子组件中以$emit触发函数，传参：
                    <el-alert type="info" :closable="false">
                      this.$emit('father','handle中接收的参数值')
                    </el-alert>
                  </li>
                  <li>
                    <el-alert type="warning" :closable="false">
                      this.$on可以用以声明多个方法，在emit触发的时候会执行全部的方法;
                      先定义的方法会先触发
                    </el-alert>
                  </li>
                  <li>
                    <el-alert>
                      this.$on可以为同一个事件绑定不同的方法
                    </el-alert>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <el-button type="success" @click="boost"
      ><i class="el-icon-s-opportunity"></i>测试按钮</el-button
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello world！这里是父组件传递过去的信息！"
    };
  },
  created() {
    this.$on("father", this.handle);
    this.$on("father", this.handle1);
    this.$on("father", this.handle2);
    this.$on(["events", "events1"], this.handle);
    console.log(this._events);
  },
  methods: {
    handle(e) {
      console.log(e, this.msg);
    },
    handle1() {
      console.log("handle1");
    },
    handle2() {
      console.log("handle2");
    },
    boost() {
      this.$emit("father", "good luck!");
    }
  }
};
</script>
<style scoped lang="scss">
@import "~@/styles/my-sass/emit_on.scss";
</style>
