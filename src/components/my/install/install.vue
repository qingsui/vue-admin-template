<template>
  <div className="container">
    <h4>这里是install使用</h4>
    <ul>
      <li v-for="(item,i) in items" :key="i">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    props:{
      items:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>
<style scoped>

</style>