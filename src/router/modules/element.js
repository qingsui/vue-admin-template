import Layout from "@/layout"

let elementRouter={
  path:"/element",
  component:Layout,
  hidden:false,
  redirect:"/element/index",
  meta:{
    title:"element练习",
    icon:"form"
  },
  children:[
    {
      path:"index",
      component:()=>import('@/views/system/element/index'),
      meta:{
        title:"表单验证"
      }
    },
    {
      path:"/ebook",
      name:"Ebook",
      component:()=>import("@/views/system/epub/ebook.vue"),
      meta:{title:"epub电子书"}
    }
  ]
}
export default elementRouter