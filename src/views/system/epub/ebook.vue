<template>
  <div class="container">
    <img :src="imgUrl" alt="">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from "epubjs"
const epub_url=require("@/assets/epub/瓦尔登湖.epub")
export default {
  data(){
    return{
      imgUrl:require('@/assets/epub/login-ground.jpg')
    }
  },
  mounted(){
    this.showEboook()
  },
  methods:{
    showEboook(){
      this.book=new Epub(epub_url);
      console.log(this.book)
      this.rendition=this.book.renderTo('read',{
        width:window.innerWidth,
        height:window.innerHeight
      })
      this.rendition.display()
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width:100%;
  height:100%;
}
</style>